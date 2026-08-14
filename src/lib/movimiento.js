/**
 * Preferencia de movimiento, con un interruptor de revisión.
 *
 * Por defecto el sitio respeta `prefers-reduced-motion: reduce` y apaga toda la
 * animación. Ese sigue siendo el comportamiento normal y no se toca.
 *
 * `?movimiento=1` fuerza la animación aunque el sistema pida quietud. Sirve
 * para revisar el diseño y para presentar el sitio en un equipo que tenga los
 * efectos desactivados, sin obligar a nadie a cambiar el ajuste del sistema.
 *
 * No es un localStorage ni una cookie a propósito: vive sólo en esa URL, así
 * que no puede quedarse activado por accidente para un visitante real —que es
 * justamente a quien la preferencia protege.
 *
 * Portado de cardus-site/src/lib/movimiento.js.
 */

export const PARAMETRO = 'movimiento'

export function movimientoForzado() {
  if (typeof window === 'undefined') return false
  return new URLSearchParams(window.location.search).get(PARAMETRO) === '1'
}

/** True cuando hay que dibujar sin animar. */
export function prefiereQuietud() {
  if (typeof window === 'undefined') return false
  if (movimientoForzado()) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Marca el <html> para que el CSS pueda saltarse su bloque de reduced-motion.
 *
 * Hace falta porque buena parte del movimiento de este sitio no está en JS sino
 * en CSS —el marquee de logos, el cursor que parpadea, las filas que entran— y
 * el `@media (prefers-reduced-motion: reduce)` de index.css las apaga con
 * `!important`. Sin esta marca, `?movimiento=1` sólo reviviría la mitad de las
 * animaciones y el interruptor mentiría.
 *
 * Se llama una vez al arrancar, en main.jsx.
 */
export function marcarDocumento() {
  if (typeof document === 'undefined') return
  if (movimientoForzado()) document.documentElement.dataset.movimiento = 'forzado'
}
