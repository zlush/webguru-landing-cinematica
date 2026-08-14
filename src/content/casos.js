/* Casos de éxito con métricas propias, por rubro.
 *
 * Van acá y no dentro del JSX de la página por la misma razón que
 * src/content/articles.js: el día que haya un segundo caso es agregar un
 * objeto, no duplicar una sección.
 *
 * ── CÓMO PUBLICAR UN CASO ──
 *
 * `publicado: false` hace que <CasoDeExito /> devuelva null y la sección
 * entera desaparezca de la página. Es el default a propósito: preferimos que
 * no haya sección antes que una con cifras estimadas. Una métrica inventada en
 * la landing es una promesa que después hay que sostener en la reunión.
 *
 * Para publicar hacen falta tres cosas, y las tres son del cliente, no
 * nuestras:
 *   1. Las cifras medidas (antes y después, con el período en que se midió).
 *   2. Autorización explícita del cliente para usar su nombre y su logo.
 *   3. Si va cita, el texto y el cargo aprobados por quien la firma.
 *
 * Con eso: se completan los campos, se pone `publicado: true` y se recapturan
 * los snapshots (`node scripts/prerender.mjs`), porque el HTML estático que
 * sirve Vercel es el versionado en prerendered/.
 */

export const CASO_CLINICAS = {
  publicado: false,

  // Titular de la sección. Sale del resultado más fuerte de las métricas.
  titular: '',

  cliente: '',
  // Ruta al logo dentro de public/. Los del rubro están en /logos/N.webp y su
  // correspondencia con cada nombre está en LOGOS_CLINICAS, en Clinicas.jsx.
  logo: null,
  // Una línea de contexto para que el lector se compare: tamaño y ciudad.
  // Ej: 'Clínica dental, 4 sillones · Santiago'
  contexto: '',

  /* Tres métricas. El orden importa: la primera es la que más pesa en la
     decisión de una clínica, y en este rubro esa es siempre el no-show, porque
     se traduce directo a sillón parado.

     Formato: { n: '−58%', text: 'Reducción de inasistencias en los primeros
     tres meses.' } — el número corto y solo, el detalle en el texto. */
  metricas: [],

  /* Relato en párrafos: problema → qué se implementó → resultado. Es el arco
     que usan los casos que funcionan, y no necesita más de tres párrafos. */
  relato: [],

  // Opcional. { texto, autor, cargo }
  cita: null,
}
