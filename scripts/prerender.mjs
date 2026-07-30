/**
 * Prerender: turns the SPA into real static HTML, one file per route.
 *
 * Why a real browser instead of react-dom/server: the per-route <head> tags are
 * written from useEffect (useSeo), and Spline is a lazy import. Rendering on the
 * server would produce empty heads and would need the whole tree to be
 * SSR-safe. Driving the actual app in Chromium gets the finished DOM — head and
 * body — with no changes to the app.
 *
 * BEST EFFORT BY DESIGN. If Chromium is unavailable (a build image without it,
 * for instance) this exits 0 and leaves dist/ as the normal SPA build. A failure
 * to prerender must never fail a deploy.
 */
import { createServer } from 'node:http'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, extname, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(ROOT, 'dist')
const PORT = 5199

// Must stay in sync with the <Route> list in src/main.jsx.
const ROUTES = [
  '/',
  '/sobre-nosotros',
  '/partners',
  '/terminos',
  '/privacidad',
  '/blog',
  '/blog/que-es-un-crm',
  '/blog/automatizar-whatsapp-business-agendar-citas',
  '/blog/glosario-marketing-digital',
  '/calculadora',
]

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.mp4': 'video/mp4',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
}

/* The SPA shell is read once, up front, and served from memory for every route.
   Reading it from disk each time would be a trap: the first route written is "/",
   which overwrites dist/index.html with the prerendered homepage. Every later
   route would then be built on top of that snapshot and inherit the homepage's
   baked-in JSON-LD — shipping an FAQPage on pages that have no FAQ. */
function serveDist(shell) {
  return createServer(async (req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0])
    const filePath = join(DIST, urlPath)
    if (!extname(filePath) || !existsSync(filePath)) {
      res.writeHead(200, { 'Content-Type': MIME['.html'] })
      res.end(shell)
      return
    }
    try {
      const body = await readFile(filePath)
      res.writeHead(200, { 'Content-Type': MIME[extname(filePath)] || 'application/octet-stream' })
      res.end(body)
    } catch {
      res.writeHead(404).end('not found')
    }
  })
}

async function main() {
  let chromium
  try {
    ({ chromium } = await import('playwright'))
  } catch {
    console.log('[prerender] playwright no disponible — se omite, dist/ queda como SPA')
    return
  }

  const shell = await readFile(join(DIST, 'index.html'), 'utf-8')
  const server = serveDist(shell)
  await new Promise(r => server.listen(PORT, r))

  let browser
  try {
    browser = await chromium.launch()
  } catch {
    // Fresh CI images have the package but not the browser binary. Try once to
    // fetch it; if that also fails, ship the SPA build untouched.
    try {
      console.log('[prerender] descargando Chromium…')
      execSync('npx playwright install chromium', { stdio: 'inherit', timeout: 300000 })
      browser = await chromium.launch()
    } catch (err2) {
      console.log(`[prerender] Chromium no disponible (${err2.message.split('\n')[0]}) — se omite`)
      server.close()
      return
    }
  }

  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
  let done = 0

  for (const route of ROUTES) {
    try {
      await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'load', timeout: 60000 })
      // Wait until React has actually painted something into #root.
      await page.waitForFunction(
        () => document.querySelector('#root')?.children.length > 0,
        { timeout: 30000 }
      )
      // Give the SEO effects and lazy sections a beat to settle.
      await page.waitForTimeout(2500)

      const html = await page.evaluate(() => {
        // Spline paints into a <canvas>; its pixels cannot be serialised and the
        // element only bloats the snapshot. The live app re-creates it on mount.
        document.querySelectorAll('canvas').forEach(c => c.remove())
        return '<!doctype html>\n' + document.documentElement.outerHTML
      })

      const outDir = route === '/' ? DIST : join(DIST, route)
      await mkdir(outDir, { recursive: true })
      await writeFile(join(outDir, 'index.html'), html, 'utf-8')

      const text = await page.evaluate(() => document.body.innerText.replace(/\s+/g, ' ').trim().length)
      console.log(`[prerender] ${route.padEnd(52)} ${String(text).padStart(6)} caracteres de texto`)
      done++
    } catch (err) {
      console.log(`[prerender] ${route} falló: ${err.message.split('\n')[0]}`)
    }
  }

  await browser.close()
  server.close()
  console.log(`[prerender] listo: ${done}/${ROUTES.length} rutas`)
}

main().catch(err => {
  // Never fail the build over prerendering.
  console.log(`[prerender] omitido por error: ${err.message.split('\n')[0]}`)
  process.exit(0)
})
