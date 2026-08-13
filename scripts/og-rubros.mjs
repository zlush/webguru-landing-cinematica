/**
 * Imágenes sociales de las páginas por rubro: HTML → PNG (Playwright) → WebP (ffmpeg).
 *
 * Mismo mecanismo que scripts/covers.mjs, pero a 1200×630, que es la relación
 * que esperan Open Graph y Twitter. Las portadas del blog usan 1200×675 (16:9)
 * porque además se muestran dentro del propio sitio; estas sólo viven en el
 * unfurl de WhatsApp, LinkedIn y X.
 *
 * Sin esto, /clinicas compartía la og-image.png genérica del sitio: quien
 * recibe el enlace por WhatsApp —que es como se comparte casi todo en este
 * rubro— vería una tarjeta que no dice nada de clínicas.
 *
 *   node scripts/og-rubros.mjs           genera sólo las que faltan
 *   node scripts/og-rubros.mjs --force   regenera todas
 */
import { writeFile, mkdir, unlink } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { chromium } from 'playwright'

const run = promisify(execFile)
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = join(ROOT, 'public', 'rubros')

const W = 1200
const H = 630
const FORCE = process.argv.includes('--force')

const PAGES = [
  {
    slug: 'clinicas',
    label: 'Clínicas dentales y estéticas',
    l1: 'Tu agenda llena,',
    l2: 'sin perseguir pacientes.',
  },
]

const html = ({ label, l1, l2 }) => `<!doctype html><html lang="es"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:${W}px;height:${H}px;background:#0A0E1A;overflow:hidden;position:relative;
       font-family:"Plus Jakarta Sans",system-ui,sans-serif;-webkit-font-smoothing:antialiased}
  .halo{position:absolute;width:780px;height:780px;right:-200px;top:-170px;border-radius:50%;
        background:radial-gradient(circle,rgba(155,81,224,.30) 0%,rgba(10,14,26,0) 66%)}
  .grid{position:absolute;right:60px;bottom:52px;width:430px;height:150px;opacity:.5;
        background-image:radial-gradient(rgba(255,255,255,.16) 1.4px,transparent 1.4px);
        background-size:19px 19px;
        -webkit-mask-image:linear-gradient(105deg,transparent 22%,#000 100%)}
  .wrap{position:relative;height:100%;padding:70px 78px;display:flex;flex-direction:column}
  .cat{font-family:"JetBrains Mono",monospace;font-size:15px;font-weight:500;letter-spacing:.15em;
       text-transform:uppercase;color:#0693E3}
  .title{margin-top:40px;font-size:58px;font-weight:800;line-height:1.1;letter-spacing:-.022em;
         color:#fff;max-width:660px}
  .title .g{background:linear-gradient(96deg,#0693E3 6%,#9B51E0 92%);
            -webkit-background-clip:text;background-clip:text;color:transparent;display:block}
  .brand{margin-top:auto;font-size:20px;font-weight:700;color:rgba(255,255,255,.9)}

  /* Motivo: tres filas de agenda, la del medio confirmada. Es la promesa de la
     página en una imagen — huecos que se llenan — y no un adorno genérico. */
  .stage{position:absolute;right:78px;top:300px;width:400px;height:250px}
  .slot{position:absolute;left:0;width:400px;height:66px;border-radius:15px;
        border:1px solid rgba(255,255,255,.10);background:rgba(255,255,255,.045);
        display:flex;align-items:center;gap:16px;padding:0 20px}
  .slot .h{font-family:"JetBrains Mono",monospace;font-size:14px;color:rgba(255,255,255,.55)}
  .slot .bar{height:9px;border-radius:5px;background:rgba(255,255,255,.13)}
  .slot.on{border-color:rgba(6,147,227,.45);background:rgba(6,147,227,.12)}
  .slot.on .bar{background:linear-gradient(96deg,#0693E3,#9B51E0)}
  .dot{width:9px;height:9px;border-radius:50%;background:#22C55E;margin-left:auto}
</style></head><body>
  <div class="halo"></div><div class="grid"></div>
  <div class="stage">
    <div class="slot"    style="top:0">   <span class="h">09:00</span><span class="bar" style="width:150px"></span></div>
    <div class="slot on" style="top:82px"><span class="h">10:30</span><span class="bar" style="width:196px"></span><span class="dot"></span></div>
    <div class="slot"    style="top:164px"><span class="h">12:00</span><span class="bar" style="width:126px"></span></div>
  </div>
  <div class="wrap">
    <div class="cat">${label}</div>
    <div class="title">${l1}<span class="g">${l2}</span></div>
    <div class="brand">WebGuru</div>
  </div>
</body></html>`

const main = async () => {
  await mkdir(OUT, { recursive: true })
  const pending = PAGES.filter(p => FORCE || !existsSync(join(OUT, `${p.slug}-og.webp`)))
  if (!pending.length) {
    console.log('[og-rubros] nada que generar (usa --force para rehacerlas)')
    return
  }

  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 })

  for (const p of pending) {
    const png = join(OUT, `${p.slug}-og.png`)
    const webp = join(OUT, `${p.slug}-og.webp`)
    await page.setContent(html(p), { waitUntil: 'networkidle' })
    // Las webfonts llegan por red: sin esperarlas, la captura sale con la
    // tipografía de reemplazo y el kerning del título cambia por completo.
    await page.evaluate(() => document.fonts.ready)
    await page.screenshot({ path: png, type: 'png' })
    await run('ffmpeg', ['-y', '-i', png, '-quality', '82', webp])
    await unlink(png)
    console.log(`[og-rubros] ${p.slug}-og.webp`)
  }

  await browser.close()
}

main().catch(e => { console.error(e); process.exit(1) })
