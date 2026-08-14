/* Casos de éxito con métricas propias, por rubro.
 *
 * Van acá y no dentro del JSX de la página por la misma razón que
 * src/content/articles.js: sumar un caso es agregar un objeto, no duplicar una
 * sección. Si el array está vacío, <CasosDeExito /> no renderiza nada y la
 * sección desaparece de la página.
 *
 * ── POR QUÉ ESTÁ VACÍO Y NO CON UNA BANDERA `publicado: false` ──
 *
 * Ese fue el primer intento y no sirve. La bandera impide que el caso se
 * *renderice*, pero este módulo se importa igual desde Clinicas.jsx, así que el
 * contenido viaja dentro del JavaScript que descarga cualquier visitante. Se
 * verificó leyendo dist/assets/index-*.js: el nombre de la clínica, las cifras
 * y la cita estaban todos ahí. Con la autorización del cliente pendiente, eso
 * equivale a publicarlos.
 *
 * Por eso los borradores viven en docs/casos-borrador.md, que no importa nadie
 * y por lo tanto nunca entra al bundle. Ahí están escritos y listos: hoy hay dos
 * esperando autorización.
 *
 * ── CÓMO PUBLICAR UN CASO ──
 *
 * 1. Autorización explícita del cliente para su nombre, su logo y sus cifras.
 *    Es su información, no la nuestra.
 * 2. Copiar el objeto desde docs/casos-borrador.md a este array.
 * 3. `node scripts/prerender.mjs` y commitear los snapshots: el HTML estático
 *    que sirve Vercel es el versionado en prerendered/, no se regenera en el
 *    deploy.
 */

export const CASOS_CLINICAS = []
