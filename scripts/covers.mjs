/**
 * Portadas del blog: HTML → PNG (Playwright) → WebP (ffmpeg).
 *
 * Las tres primeras portadas se hicieron a mano y no quedó el fuente. Este
 * script reconstruye ese mismo diseño de forma reproducible, para que añadir un
 * artículo no dependa de nadie abriendo un editor gráfico.
 *
 * Playwright sólo exporta png/jpeg, de ahí el paso por ffmpeg: un WebP de
 * calidad 82 ronda los 20 KB, igual que las originales.
 *
 *   node scripts/covers.mjs           genera sólo las que faltan
 *   node scripts/covers.mjs --force   regenera todas
 */
import { writeFile, mkdir, unlink } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { ARTICLES } from '../src/content/articles.js'

const run = promisify(execFile)
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = join(ROOT, 'public', 'blog')
const FORCE = process.argv.includes('--force')

const W = 1200
const H = 675

/* El título se parte en dos líneas a mano: un corte automático deja viudas y
   rompe justo donde el degradado pierde sentido. La segunda línea es la que
   lleva el gradiente, así que tiene que ser la parte con carga semántica. */
const LINES = {
  'que-es-un-crm': ['¿Qué es un CRM', 'y por qué lo necesitas?'],
  'automatizar-whatsapp-business-agendar-citas': ['Automatiza tu WhatsApp', 'y agenda citas 24/7'],
  'glosario-marketing-digital': ['Glosario de', 'Marketing Digital'],

  'estrategias-de-marketing-digital-para-pymes': ['8 estrategias que', 'sí funcionan en 2026'],
  'tipos-de-anuncios-publicitarios': ['Tipos de anuncios', 'y cuál usar en cada etapa'],
  'que-es-el-engagement': ['¿Qué es el engagement', 'y cómo se calcula?'],
  'que-es-la-segmentacion-de-clientes': ['Segmentación', 'de clientes'],
  'que-es-un-copywriter': ['¿Qué hace', 'un copywriter?'],
  'que-es-un-webinar': ['¿Qué es un webinar', 'y cómo organizar el tuyo?'],
  'que-es-la-planeacion-estrategica': ['Planeación', 'estratégica'],
  'como-hacer-un-estudio-de-mercado': ['Cómo hacer un', 'estudio de mercado'],
  'como-hacer-una-encuesta-en-whatsapp': ['Encuestas', 'por WhatsApp'],
  'mensaje-cerrado-por-vacaciones-whatsapp-business': ['Cerrado por vacaciones', 'sin perder clientes'],
  'como-crear-un-pie-de-firma-profesional': ['Un pie de firma', 'que sí se ve profesional'],
}

/* Cuatro motivos de UI abstracta. Con uno solo, catorce portadas en una grilla
   se ven como la misma imagen repetida. */
const MOTIFS = {
  cards: `
    <div class="mock card" style="top:56px;left:96px;opacity:.5"></div>
    <div class="mock card" style="top:28px;left:48px;opacity:.75"></div>
    <div class="mock card" style="top:0;left:0">
      <div class="avatar"></div>
      <div class="lines"><span style="width:210px"></span><span style="width:148px"></span></div>
      <div class="dot-ok"></div>
    </div>`,
  bars: `
    <div class="mock panel">
      <div class="bars">
        <i style="height:38%"></i><i style="height:62%"></i><i style="height:47%"></i>
        <i style="height:88%;background:linear-gradient(180deg,#0693E3,#9B51E0)"></i>
        <i style="height:71%"></i><i style="height:54%"></i>
      </div>
    </div>`,
  funnel: `
    <div class="mock panel funnel">
      <span style="width:100%"></span>
      <span style="width:78%"></span>
      <span style="width:54%;background:linear-gradient(90deg,#0693E3,#9B51E0);opacity:.9"></span>
      <span style="width:31%"></span>
    </div>`,
  chat: `
    <div class="mock panel chat">
      <b style="width:172px"></b>
      <b style="width:124px;margin-left:auto;background:rgba(6,147,227,.28);border-color:rgba(6,147,227,.35)"></b>
      <b style="width:196px"></b>
      <div class="dot-ok" style="position:static;margin-top:6px"></div>
    </div>`,
}

const MOTIF_FOR = {
  'que-es-un-crm': 'cards',
  'automatizar-whatsapp-business-agendar-citas': 'chat',
  'glosario-marketing-digital': 'bars',
  'estrategias-de-marketing-digital-para-pymes': 'bars',
  'tipos-de-anuncios-publicitarios': 'funnel',
  'que-es-el-engagement': 'bars',
  'que-es-la-segmentacion-de-clientes': 'funnel',
  'que-es-un-copywriter': 'chat',
  'que-es-un-webinar': 'cards',
  'que-es-la-planeacion-estrategica': 'funnel',
  'como-hacer-un-estudio-de-mercado': 'bars',
  'como-hacer-una-encuesta-en-whatsapp': 'chat',
  'mensaje-cerrado-por-vacaciones-whatsapp-business': 'chat',
  'como-crear-un-pie-de-firma-profesional': 'cards',
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function html(article, i) {
  const [l1, l2] = LINES[article.slug] ?? [article.title, '']
  const motif = MOTIFS[MOTIF_FOR[article.slug] ?? 'cards']
  // El halo rota entre azul y violeta según la posición, para que dos artículos
  // seguidos en el índice nunca compartan exactamente el mismo fondo.
  const hue = [
    'rgba(155,81,224,.30)', 'rgba(6,147,227,.26)',
    'rgba(155,81,224,.22)', 'rgba(6,147,227,.32)',
  ][i % 4]

  return `<!doctype html><html lang="es"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:${W}px;height:${H}px;background:#0A0E1A;overflow:hidden;position:relative;
       font-family:"Plus Jakarta Sans",system-ui,sans-serif;-webkit-font-smoothing:antialiased}
  .halo{position:absolute;width:760px;height:760px;right:-180px;top:-140px;border-radius:50%;
        background:radial-gradient(circle,${hue} 0%,rgba(10,14,26,0) 66%)}
  .grid{position:absolute;right:64px;bottom:56px;width:420px;height:150px;opacity:.5;
        background-image:radial-gradient(rgba(255,255,255,.16) 1.4px,transparent 1.4px);
        background-size:19px 19px;
        -webkit-mask-image:linear-gradient(105deg,transparent 22%,#000 100%)}
  .wrap{position:relative;height:100%;padding:74px 80px;display:flex;flex-direction:column}
  .cat{font-family:"JetBrains Mono",monospace;font-size:15px;font-weight:500;letter-spacing:.15em;
       text-transform:uppercase;color:#0693E3}
  .title{margin-top:44px;font-size:60px;font-weight:800;line-height:1.1;letter-spacing:-.022em;
         color:#fff;max-width:700px}
  .title .g{background:linear-gradient(96deg,#0693E3 6%,#9B51E0 92%);
            -webkit-background-clip:text;background-clip:text;color:transparent;display:block}
  .brand{margin-top:auto;font-size:20px;font-weight:700;color:rgba(255,255,255,.9)}

  .stage{position:absolute;right:88px;top:322px;width:420px;height:230px}
  .mock{position:absolute;border:1px solid rgba(255,255,255,.10);border-radius:17px;
        background:rgba(255,255,255,.045);backdrop-filter:blur(2px)}
  .card{width:340px;height:104px;display:flex;align-items:center;gap:17px;padding:0 22px}
  .panel{width:340px;height:150px;padding:22px}
  .avatar{width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,.11);flex:none}
  .lines{display:flex;flex-direction:column;gap:10px}
  .lines span{height:11px;border-radius:6px;background:rgba(255,255,255,.16);display:block}
  .dot-ok{position:absolute;right:24px;width:11px;height:11px;border-radius:50%;background:#34D399}
  .bars{display:flex;align-items:flex-end;gap:13px;height:100%}
  .bars i{flex:1;border-radius:5px 5px 2px 2px;background:rgba(255,255,255,.15)}
  .funnel{display:flex;flex-direction:column;gap:13px;justify-content:center}
  .funnel span{height:19px;border-radius:6px;background:rgba(255,255,255,.14);display:block}
  .chat{display:flex;flex-direction:column;gap:11px}
  .chat b{height:23px;border-radius:9px;background:rgba(255,255,255,.10);
          border:1px solid rgba(255,255,255,.07);display:block}
</style></head><body>
  <div class="halo"></div><div class="grid"></div>
  <div class="wrap">
    <div class="cat">${esc(article.category)}</div>
    <div class="title">${esc(l1)}${l2 ? `<span class="g">${esc(l2)}</span>` : ''}</div>
    <div class="brand">webguru.cl</div>
  </div>
  <div class="stage">${motif}</div>
</body></html>`
}

async function main() {
  const pending = ARTICLES.filter(a => FORCE || !existsSync(join(OUT, `${a.slug}.webp`)))
  if (!pending.length) { console.log('[covers] nada que generar'); return }

  const { chromium } = await import('playwright')
  const browser = await chromium.launch()
  // Escala 1 a propósito: la portada se muestra como mucho a 380px de alto, así
  // que 1200px de ancho ya sobran. A escala 2 el archivo pesa un 60% más sin
  // ninguna diferencia visible, y son 14 imágenes en el índice del blog.
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 })
  await mkdir(OUT, { recursive: true })

  for (const [i, article] of pending.entries()) {
    const png = join(OUT, `${article.slug}.png`)
    const webp = join(OUT, `${article.slug}.webp`)

    await page.setContent(html(article, ARTICLES.indexOf(article)), { waitUntil: 'load' })
    // Sin esto la captura sale con la fuente de sistema: el swap de Google Fonts
    // ocurre después del evento load.
    await page.evaluate(() => document.fonts.ready)
    await page.waitForTimeout(320)
    await page.screenshot({ path: png, type: 'png' })

    await run('ffmpeg', ['-y', '-loglevel', 'error', '-i', png,
      '-c:v', 'libwebp', '-quality', '82', '-compression_level', '6', webp])
    await unlink(png)

    console.log(`[covers] ${String(i + 1).padStart(2)}/${pending.length}  ${article.slug}.webp`)
  }

  await browser.close()
}

main().catch(err => { console.error('[covers]', err.message); process.exit(1) })
