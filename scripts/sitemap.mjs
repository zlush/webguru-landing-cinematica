/**
 * Genera public/sitemap.xml desde la misma fuente que usa el sitio.
 *
 * Antes el sitemap se mantenía a mano y se desincronizó: llegó a listar 3
 * artículos cuando había 12 escritos. Los otros 9 no existían para Google.
 * Generarlo en cada build elimina esa clase de error por completo.
 *
 * Se ejecuta ANTES de `vite build`, porque Vite copia public/ a dist/ tal cual.
 */
import { writeFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { ARTICLES } from '../src/content/articles.js'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SITE = 'https://webguru.cl'

// Rutas fijas. Deben coincidir con las <Route> de src/main.jsx que valga la
// pena indexar. /calculadora entra: es una herramienta pública con búsquedas
// propias, aunque el prerender la omita por su librería de gráficos.
const STATIC = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  // Página por rubro: es de intención comercial alta, por encima de las
  // institucionales y sólo por debajo de la home.
  { path: '/clinicas', changefreq: 'monthly', priority: '0.9' },
  { path: '/sobre-nosotros', changefreq: 'monthly', priority: '0.7' },
  { path: '/partners', changefreq: 'monthly', priority: '0.7' },
  { path: '/calculadora', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog', changefreq: 'weekly', priority: '0.8' },
  { path: '/terminos', changefreq: 'yearly', priority: '0.3' },
  { path: '/privacidad', changefreq: 'yearly', priority: '0.3' },
]

const today = new Date().toISOString().slice(0, 10)

const entry = ({ path, lastmod, changefreq, priority }) =>
  `  <url>
    <loc>${SITE}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`

const urls = [
  ...STATIC.map(s => entry({ ...s, lastmod: today })),
  // La fecha del artículo es su lastmod real: mentirle a Google diciendo que
  // todo se actualizó hoy no aporta nada y resta credibilidad a la señal.
  ...ARTICLES.map(a => entry({
    path: `/blog/${a.slug}`,
    lastmod: a.date,
    changefreq: 'monthly',
    priority: '0.8',
  })),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`

await writeFile(join(ROOT, 'public', 'sitemap.xml'), xml, 'utf-8')
console.log(`[sitemap] ${urls.length} URLs (${STATIC.length} fijas + ${ARTICLES.length} artículos)`)
