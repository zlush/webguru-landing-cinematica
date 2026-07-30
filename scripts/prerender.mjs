/**
 * Prerender: turns the SPA into real static HTML, one file per route.
 *
 * WHY THIS IS SPLIT IN TWO PHASES
 *
 * Vercel's build image cannot run Chromium — the binary downloads but dies on
 * launch because the image lacks its shared libraries, and `--with-deps` needs
 * root, which build steps don't have. Verified in production:
 *   launch #2 falló: Target page, context or browser has been closed
 *
 * So the snapshot is taken where a browser DOES work (a developer machine) and
 * committed as data. The build only injects it.
 *
 *   CAPTURE  (local, needs Chromium)  → writes prerendered/<route>.json
 *   APPLY    (any machine, no deps)   → dist/<route>/index.html
 *
 * The captured data is deliberately NOT full HTML: it stores only the rendered
 * #root markup plus the head tags the app adds at runtime. The base document is
 * always the freshly built dist/index.html, so the hashed asset URLs can never
 * go stale — which is exactly the trap that storing whole pages would set.
 *
 * BEST EFFORT BY DESIGN. Any failure leaves dist/ as the normal SPA build and
 * exits 0. Prerendering must never break a deploy.
 */
import { createServer } from 'node:http'
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, extname, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(ROOT, 'dist')
const SNAP = join(ROOT, 'prerendered')
const PORT = 5199

// Must stay in sync with the <Route> list in src/main.jsx.
// /calculadora is intentionally absent: it is an interactive tool, not content
// that needs to rank, and its chart library is the least snapshot-friendly part.
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
]

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp',
  '.jpg': 'image/jpeg', '.mp4': 'video/mp4', '.woff2': 'font/woff2',
  '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8',
}

const status = []
const note = (line) => { console.log(`[prerender] ${line}`); status.push(line) }

const fileFor = (route) =>
  join(SNAP, (route === '/' ? 'index' : route.replace(/^\//, '').replace(/\//g, '__')) + '.json')

async function writeStatus(outcome) {
  try {
    await writeFile(join(DIST, 'prerender-status.txt'),
      [`outcome: ${outcome}`, `platform: ${process.platform}`,
       `date: ${new Date().toISOString()}`, '', ...status].join('\n'), 'utf-8')
  } catch { /* nothing more we can do */ }
}

/* ── shared: serve dist/ with the pristine shell held in memory ──
   Reading the shell from disk per request would be a trap: "/" is written first,
   so every later route would be built on the homepage snapshot and inherit its
   JSON-LD — an FAQPage on pages with no FAQ. */
function serveDist(shell) {
  return createServer(async (req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0])
    const filePath = join(DIST, urlPath)
    if (!extname(filePath) || !existsSync(filePath)) {
      res.writeHead(200, { 'Content-Type': MIME['.html'] }).end(shell)
      return
    }
    try {
      const body = await readFile(filePath)
      res.writeHead(200, { 'Content-Type': MIME[extname(filePath)] || 'application/octet-stream' })
      res.end(body)
    } catch { res.writeHead(404).end('not found') }
  })
}

/* ── PHASE 1: capture ── */
async function capture(shell) {
  // PRERENDER_SKIP_CAPTURE=1 reproduce el entorno de Vercel en local: solo se
  // aplican los snapshots versionados, sin abrir ningún navegador.
  if (process.env.PRERENDER_SKIP_CAPTURE === '1') {
    note('PRERENDER_SKIP_CAPTURE=1 — captura omitida a propósito')
    return false
  }

  let chromium
  try { ({ chromium } = await import('playwright')) }
  catch { note('playwright no instalado — se omite la captura'); return false }

  let browser
  try { browser = await chromium.launch() }
  catch (err) { note(`sin Chromium (${err.message.split('\n')[0]}) — se omite la captura`); return false }

  const server = serveDist(shell)
  await new Promise(r => server.listen(PORT, r))
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  await mkdir(SNAP, { recursive: true })
  let ok = 0

  for (const route of ROUTES) {
    try {
      await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'load', timeout: 60000 })
      await page.waitForFunction(() => document.querySelector('#root')?.children.length > 0, { timeout: 30000 })

      // Scroll the whole page so every ScrollTrigger fires. Without this, the
      // below-the-fold sections are captured in their gsap.from() start state
      // and the static HTML ships with style="opacity: 0" on real content — text
      // a rendering crawler would treat as hidden.
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 500) {
          window.scrollTo(0, y)
          await new Promise(r => setTimeout(r, 60))
        }
        window.scrollTo(0, 0)
      })
      await page.waitForTimeout(2500)

      const snap = await page.evaluate(() => {
        // Spline paints into a <canvas>; pixels cannot be serialised and the
        // element only bloats the snapshot. The live app recreates it on mount.
        document.querySelectorAll('canvas').forEach(c => c.remove())

        // Belt and braces: clear any animation leftovers so nothing ends up
        // invisible or displaced in the static markup.
        document.querySelectorAll('#root [style]').forEach(el => {
          const o = el.style.opacity
          if (o !== '' && Number(o) < 1) el.style.opacity = ''
          if (el.style.transform) el.style.transform = ''
          if (el.style.translate) el.style.translate = ''
          if (el.style.visibility === 'hidden') el.style.visibility = ''
        })

        const head = document.head
        const pick = sel => [...head.querySelectorAll(sel)].map(e => e.outerHTML)
        return {
          title: document.title,
          // Only the tags the app writes at runtime. Everything already in
          // index.html stays untouched, so nothing gets duplicated.
          meta: pick('meta[name="description"], meta[name="robots"], meta[property^="og:"], meta[property^="twitter:"]'),
          canonical: pick('link[rel="canonical"]'),
          jsonLd: [...head.querySelectorAll('script[type="application/ld+json"][data-seo-id]')]
            .map(e => e.outerHTML),
          rootHtml: document.querySelector('#root').innerHTML,
          textLen: document.body.innerText.replace(/\s+/g, ' ').trim().length,
        }
      })

      await writeFile(fileFor(route), JSON.stringify(snap, null, 1), 'utf-8')
      note(`capturado ${route.padEnd(50)} ${String(snap.textLen).padStart(6)} caracteres`)
      ok++
    } catch (err) {
      note(`captura de ${route} falló: ${err.message.split('\n')[0]}`)
    }
  }

  await browser.close()
  server.close()
  return ok > 0
}

/* ── PHASE 2: apply ── */
async function apply(shell) {
  if (!existsSync(SNAP)) { note('no hay carpeta prerendered/ — nada que aplicar'); return 0 }
  const files = (await readdir(SNAP)).filter(f => f.endsWith('.json'))
  if (!files.length) { note('prerendered/ vacío'); return 0 }

  let done = 0
  for (const route of ROUTES) {
    const f = fileFor(route)
    if (!existsSync(f)) { note(`sin snapshot para ${route}`); continue }
    try {
      const snap = JSON.parse(await readFile(f, 'utf-8'))
      let html = shell

      // Runtime head tags replace their static counterparts so the page never
      // ends up with two titles or two canonicals.
      html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${snap.title}</title>`)
      html = html.replace(/\s*<meta\s+name="description"[^>]*>/g, '')
      html = html.replace(/\s*<meta\s+name="robots"[^>]*>/g, '')
      html = html.replace(/\s*<meta\s+property="(og|twitter):[^"]*"[^>]*>/g, '')
      html = html.replace(/\s*<link\s+rel="canonical"[^>]*>/g, '')

      const injected = [...snap.meta, ...snap.canonical, ...snap.jsonLd].join('\n  ')
      html = html.replace('</head>', `  ${injected}\n</head>`)
      html = html.replace('<div id="root"></div>', `<div id="root">${snap.rootHtml}</div>`)

      const outDir = route === '/' ? DIST : join(DIST, route)
      await mkdir(outDir, { recursive: true })
      await writeFile(join(outDir, 'index.html'), html, 'utf-8')
      note(`aplicado ${route}`)
      done++
    } catch (err) {
      note(`aplicar ${route} falló: ${err.message.split('\n')[0]}`)
    }
  }
  return done
}

async function main() {
  // Read once, before anything overwrites dist/index.html.
  const shell = await readFile(join(DIST, 'index.html'), 'utf-8')

  const captured = await capture(shell)
  note(captured ? 'captura OK, se aplican los snapshots frescos'
                : 'sin captura, se aplican los snapshots versionados')

  const done = await apply(shell)
  note(`listo: ${done}/${ROUTES.length} rutas`)
  await writeStatus(done === ROUTES.length ? (captured ? 'ok-captured' : 'ok-from-committed')
                                           : `partial-${done}/${ROUTES.length}`)
}

main().catch(async err => {
  note(`abortado: ${err.message.split('\n')[0]}`)
  await writeStatus('error')
  process.exit(0)
})
