import { useEffect, useRef, useState } from 'react'

/**
 * Esfera armilar de puntos, reactiva al cursor. Ocupa la columna derecha del
 * hero, donde antes estaba el mockup del inbox.
 *
 * Portado del sitio de Cardus (cardus-site/src/components/Orbe.jsx), que a su
 * vez nació para reemplazar una escena "Reactive Orb" de Spline. Es la misma
 * decisión que ya se había tomado acá cuando se sacó Spline del hero: canvas
 * 2D a mano, sin runtime 3D y sin una sola dependencia nueva.
 *
 * QUÉ CAMBIA RESPECTO DEL ORIGINAL
 *
 * · Sin retícula ni trazas. En Cardus la cuadrícula de agrimensura es un
 *   concepto de marca —la groma trazando el eje del que viene el nombre— y acá
 *   no significa nada; además competiría con la aurora del fondo. De paso se
 *   ahorra, en cada cuadro, un barrido completo de rejilla y 28 trazas con
 *   gradiente.
 *
 * · El centro sale de su propio contenedor. El original lo derivaba del borde
 *   de la columna de texto con aritmética de paddings, y su comentario deja
 *   constancia de que eso falló dos veces por contraste. Acá el orbe vive en su
 *   propia celda de la grilla, así que no hace falta adivinar nada.
 *
 * · Se monta después del primer pintado, como Aurora.jsx. Este hero ya pagó una
 *   vez el precio de animar sobre el pliegue: la escena de Spline dejaba el LCP
 *   móvil en 4,5 s. El contenedor es `hidden md:block`, o sea que en móvil no
 *   se monta nada.
 *
 * · Los puntos proyectados se reutilizan en vez de reasignarse. El original
 *   creaba ~1.100 objetos literales por cuadro; a 60 fps son 66.000 objetos por
 *   segundo que el recolector tiene que limpiar.
 */

const PUNTOS_NUBE = 620
const LATITUDES = [-0.62, -0.32, 0, 0.32, 0.62]
const PUNTOS_POR_LATITUD = 58
const MERIDIANOS = 3
const PUNTOS_POR_MERIDIANO = 52
const PROPORCION_ACENTO = 0.07
const RADIO_CURSOR = 330

/* Empuje radial en pantalla: los puntos cercanos al cursor se apartan de él.
   Es lo que hace que el orbe se sienta tocado y no sólo iluminado. */
const EMPUJE_MAXIMO = 14

/* El realce y el empuje sólo actúan con el cursor sobre el orbe, y se apagan a
   lo largo de este margen. La inclinación sí sigue todo el hero: no aporta
   luminancia y hace que el orbe responda desde lejos. */
const MARGEN_ORBE = 110

/* Una esfera de puntos repartidos por igual es casi indistinguible de una
   estática al rotar, porque no hay ningún rasgo que seguir. Hacen falta las
   tres capas juntas: giro, balanceo y respiración. */
const GIRO = 0.0045              // ~23 s por vuelta
const BALANCEO = 0.3
const BALANCEO_VELOCIDAD = 0.00011
const RESPIRACION = 0.045
const RESPIRACION_VELOCIDAD = 0.0006

/* Todo el movimiento va referido a 60 fps y se escala por el tiempo real entre
   cuadros: en un monitor de 120 Hz, si no, el orbe gira al doble. */
const CUADRO_REFERENCIA = 1000 / 60
const DELTA_MAXIMO = 3

/* Pose para prefers-reduced-motion. Sin esto el orbe se congela en t=0, que es
   justo donde el balanceo vale cero y el ecuador proyecta una línea recta: la
   peor pose posible. Quien navega así ve SÓLO este cuadro. */
const POSE_ESTATICA = { giro: 0.85, inclinacion: 0.3 }

/* La silueta proyectada no mide `radio`: la perspectiva ensancha el contorno
   (máximo 1,083 del radio) y la respiración suma otro 5%. */
const FACTOR_SILUETA = 1.15

/* Paleta de WebGuru. El azul de marca (#0693E3) a punto suelto sobre el fondo
   #060910 queda apagado, así que la base va aclarada; el morado (#9B51E0) hace
   de acento, que es la misma relación que tiene el degradado de la marca. */
const COLOR_BASE = '118, 180, 238'
const COLOR_ACENTO = '168, 116, 234'

function punto(x, y, z, brillo, escala = 1) {
  return {
    x, y, z, brillo, escala,
    acento: Math.random() < PROPORCION_ACENTO,
    // Fase propia: sin ella la respiración sería un latido único y sintético.
    fase: Math.random() * Math.PI * 2,
  }
}

/**
 * Nube de fondo más anillos de latitud y meridianos.
 *
 * Los anillos no son decoración. Una nube repartida por igual es
 * estadísticamente idéntica en cualquier ángulo, así que al rotar no se percibe
 * movimiento por mucha velocidad que se le ponga: no hay ningún rasgo que
 * seguir. Los anillos dan esa estructura.
 */
function construirEsfera() {
  const puntos = []

  // Distribución de Fibonacci: sin polos ni bandas.
  const phi = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < PUNTOS_NUBE; i++) {
    const y = 1 - (i / (PUNTOS_NUBE - 1)) * 2
    const r = Math.sqrt(Math.max(0, 1 - y * y))
    const theta = phi * i
    puntos.push(punto(Math.cos(theta) * r, y, Math.sin(theta) * r, 0.3 + Math.random() * 0.25, 0.85))
  }

  for (const y of LATITUDES) {
    const r = Math.sqrt(Math.max(0, 1 - y * y))
    for (let i = 0; i < PUNTOS_POR_LATITUD; i++) {
      const a = (i / PUNTOS_POR_LATITUD) * Math.PI * 2
      puntos.push(punto(Math.cos(a) * r, y, Math.sin(a) * r, 1, 1.55))
    }
  }

  // Meridianos: círculos máximos girados en Y.
  for (let m = 0; m < MERIDIANOS; m++) {
    const giro = (m / MERIDIANOS) * Math.PI
    const sen = Math.sin(giro)
    const cos = Math.cos(giro)
    for (let i = 0; i < PUNTOS_POR_MERIDIANO; i++) {
      const a = (i / PUNTOS_POR_MERIDIANO) * Math.PI * 2
      const x = Math.cos(a)
      const y = Math.sin(a)
      puntos.push(punto(x * cos, y, x * sen, 1, 1.55))
    }
  }

  return puntos
}

export default function Orbe() {
  const canvasRef = useRef(null)
  const contenedorRef = useRef(null)
  const [montado, setMontado] = useState(false)

  /* Igual que Aurora: se decide ya pasado el primer pintado, para no competir
     con el render inicial ni entrar en la medición del LCP. */
  useEffect(() => {
    const idle = window.requestIdleCallback || (cb => setTimeout(cb, 700))
    const cancel = window.cancelIdleCallback || clearTimeout
    const h = idle(() => setMontado(true), { timeout: 2000 })
    return () => cancel(h)
  }, [])

  useEffect(() => {
    if (!montado) return
    const canvas = canvasRef.current
    const contenedor = contenedorRef.current
    if (!canvas || !contenedor) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // La zona sensible es el hero completo, no sólo la caja del orbe: mover el
    // cursor sobre el titular ya inclina la esfera.
    const zona = contenedor.closest('section') || contenedor.parentElement

    const quieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const puntos = construirEsfera()
    const total = puntos.length

    // Preasignado una sola vez y mutado en cada cuadro. Ver cabecera.
    const proyectados = Array.from({ length: total }, () => ({
      px: 0, py: 0, profundidad: 0, punto: null,
    }))

    const cursor = { x: -9999, y: -9999, fuerza: 0 }
    const destino = { x: -9999, y: -9999, fuerza: 0 }
    const giro = { y: quieto ? POSE_ESTATICA.giro : 0, x: 0, objetivoX: 0 }
    const arrastre = { y: 0, objetivoY: 0 }

    let ultimo = 0
    let cuadro = 0
    let enPantalla = true
    let ancho = 0
    let alto = 0
    let centroX = 0
    let centroY = 0
    let radio = 0

    function medir() {
      const r = contenedor.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      ancho = r.width
      alto = r.height
      if (!ancho || !alto) return
      canvas.width = Math.round(ancho * dpr)
      canvas.height = Math.round(alto * dpr)
      canvas.style.width = `${ancho}px`
      canvas.style.height = `${alto}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // El orbe tiene su propia celda: centro y radio salen de la caja, sin la
      // aritmética de paddings que el original necesitaba para esquivar el texto.
      centroX = ancho / 2
      centroY = alto / 2
      radio = (Math.min(ancho, alto) / 2) / FACTOR_SILUETA
    }

    function dibujarOrbe(t) {
      const borde = radio * FACTOR_SILUETA
      const distanciaAlCentro = Math.hypot(cursor.x - centroX, cursor.y - centroY)
      const bruto = (borde + MARGEN_ORBE - distanciaAlCentro) / MARGEN_ORBE
      const local = cursor.fuerza * Math.max(0, Math.min(1, bruto))

      // El arrastre del cursor se suma al giro continuo: mover el ratón de lado
      // adelanta o frena la rotación, en vez de sólo iluminar puntos.
      const anguloY = giro.y + arrastre.y
      const senY = Math.sin(anguloY)
      const cosY = Math.cos(anguloY)
      const inclinacion = quieto
        ? POSE_ESTATICA.inclinacion
        : giro.x + Math.sin(t * BALANCEO_VELOCIDAD) * BALANCEO
      const senX = Math.sin(inclinacion)
      const cosX = Math.cos(inclinacion)

      for (let i = 0; i < total; i++) {
        const p = puntos[i]
        // Respiración radial con fase propia: es lo que se lee como "vivo"
        // aunque el giro sea lento.
        const r = 1 + Math.sin(t * RESPIRACION_VELOCIDAD + p.fase) * RESPIRACION
        const bx = p.x * r
        const by = p.y * r
        const bz = p.z * r

        const x1 = bx * cosY - bz * senY
        const z1 = bx * senY + bz * cosY
        const y2 = by * cosX - z1 * senX
        const z2 = by * senX + z1 * cosX

        // Perspectiva: los puntos del fondo se acercan al centro y se apagan.
        const escala = 1 / (2.6 - z2)
        let px = centroX + x1 * radio * escala * 2.6
        let py = centroY + y2 * radio * escala * 2.6

        if (local > 0.01) {
          const dx = px - cursor.x
          const dy = py - cursor.y
          const dist = Math.hypot(dx, dy) || 1
          const cerca = local * Math.max(0, 1 - dist / RADIO_CURSOR)
          if (cerca > 0) {
            const empuje = EMPUJE_MAXIMO * cerca * cerca
            px += (dx / dist) * empuje
            py += (dy / dist) * empuje
          }
        }

        const d = proyectados[i]
        d.px = px
        d.py = py
        d.profundidad = (z2 + 1) / 2      // 0 detrás, 1 delante
        d.punto = p
      }

      // De atrás hacia delante, para que la esfera se lea con volumen.
      proyectados.sort((a, b) => a.profundidad - b.profundidad)

      for (let i = 0; i < total; i++) {
        const { px, py, profundidad, punto: p } = proyectados[i]
        const cerca =
          local * Math.max(0, 1 - Math.hypot(px - cursor.x, py - cursor.y) / RADIO_CURSOR)
        const suave = cerca * cerca * (3 - 2 * cerca)

        const alfa = p.brillo * (0.18 + 0.72 * profundidad) * (1 + 1.7 * suave)
        const tamano = p.escala * (0.7 + 1.7 * profundidad) * (1 + 1.5 * suave)

        ctx.fillStyle = `rgba(${p.acento ? COLOR_ACENTO : COLOR_BASE}, ${Math.min(alfa, 0.95)})`
        ctx.beginPath()
        ctx.arc(px, py, tamano, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function dibujar(t = 0) {
      if (!ancho || !alto) return
      ctx.clearRect(0, 0, ancho, alto)
      dibujarOrbe(t)
    }

    function animar(t) {
      const dt = ultimo ? Math.min((t - ultimo) / CUADRO_REFERENCIA, DELTA_MAXIMO) : 1
      ultimo = t

      giro.y += GIRO * dt
      giro.objetivoX = cursor.fuerza * ((cursor.y - centroY) / Math.max(alto, 1)) * -0.85
      arrastre.objetivoY = cursor.fuerza * ((cursor.x - centroX) / Math.max(ancho, 1)) * 1.1

      cursor.x += (destino.x - cursor.x) * 0.12 * dt
      cursor.y += (destino.y - cursor.y) * 0.12 * dt
      cursor.fuerza += (destino.fuerza - cursor.fuerza) * 0.07 * dt
      giro.x += (giro.objetivoX - giro.x) * 0.05 * dt
      arrastre.y += (arrastre.objetivoY - arrastre.y) * 0.05 * dt

      dibujar(t)
      cuadro = enPantalla ? requestAnimationFrame(animar) : 0
    }

    function arrancar() {
      if (!cuadro && enPantalla && !quieto) cuadro = requestAnimationFrame(animar)
    }

    function alMover(e) {
      if (e.pointerType !== 'mouse') return
      const r = contenedor.getBoundingClientRect()
      destino.x = e.clientX - r.left
      destino.y = e.clientY - r.top
      destino.fuerza = 1
      if (cursor.fuerza === 0) {
        cursor.x = destino.x
        cursor.y = destino.y
      }
    }

    function alSalir() {
      destino.fuerza = 0
    }

    medir()
    dibujar()

    if (quieto) return

    const observadorTamano = new ResizeObserver(() => {
      medir()
      dibujar()
    })
    observadorTamano.observe(contenedor)

    const observadorVista = new IntersectionObserver(
      ([entrada]) => {
        enPantalla = entrada.isIntersecting
        if (enPantalla) arrancar()
        else {
          cancelAnimationFrame(cuadro)
          cuadro = 0
          // Sin esto, al volver a entrar el primer delta sería todo el tiempo
          // que estuvo pausado y el orbe pegaría un salto.
          ultimo = 0
        }
      },
      { threshold: 0 },
    )
    observadorVista.observe(contenedor)

    // La pestaña oculta no dispara IntersectionObserver, y rAF sigue corriendo
    // en algunos navegadores. Aurora hace lo mismo.
    const alCambiarVisibilidad = () => {
      if (document.hidden) {
        cancelAnimationFrame(cuadro)
        cuadro = 0
        ultimo = 0
      } else arrancar()
    }
    document.addEventListener('visibilitychange', alCambiarVisibilidad)

    zona?.addEventListener('pointermove', alMover)
    zona?.addEventListener('pointerleave', alSalir)
    arrancar()

    return () => {
      cancelAnimationFrame(cuadro)
      observadorTamano.disconnect()
      observadorVista.disconnect()
      document.removeEventListener('visibilitychange', alCambiarVisibilidad)
      zona?.removeEventListener('pointermove', alMover)
      zona?.removeEventListener('pointerleave', alSalir)
    }
  }, [montado])

  /* El contenedor se reserva su cuadrado SIEMPRE, montado o no: si apareciera
     recién con el canvas, el hero daría un salto de maquetación justo después
     del primer pintado. */
  return (
    <div
      ref={contenedorRef}
      aria-hidden="true"
      className="relative w-full aspect-square max-w-[460px] mx-auto pointer-events-none"
    >
      {montado && <canvas ref={canvasRef} className="block h-full w-full" />}
    </div>
  )
}
