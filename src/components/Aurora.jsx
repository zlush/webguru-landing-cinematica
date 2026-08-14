import { useEffect, useRef, useState } from 'react'

import { prefiereQuietud } from '../lib/movimiento'

/* Fondo animado del hero: una aurora de luz que se desplaza lento en los colores
   de la marca. Es lo que la escena de Spline prometía y no entregaba — aquella
   pesaba ~6 MB entre escena y runtime para renderizar una grilla de puntos casi
   negros, más un badge "Built with Spline". Esto es WebGL crudo, sin librerías.

   Reglas que se respetan para no repetir el problema de rendimiento:
   · Solo desde 1024px. En móvil no se monta: es donde el LCP está en rojo.
   · Se monta DESPUÉS del primer pintado (requestIdleCallback), así nunca compite
     con el render inicial ni entra en la medición de LCP.
   · Se apaga con prefers-reduced-motion.
   · Se apaga al salir del viewport y al ocultar la pestaña.
   · Renderiza a media resolución y a 30 fps: es un degradado difuso, nadie
     distingue la diferencia y cuesta cuatro veces menos. */

const VERT = `
attribute vec2 p;
void main() { gl_Position = vec4(p, 0.0, 1.0); }
`

const FRAG = `
precision mediump float;
uniform vec2  u_res;
uniform float u_time;

// Ruido de valor barato: hash + interpolación suave. Suficiente para una
// aurora difusa y mucho más liviano que un simplex completo.
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p *= 2.02;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  vec2 q = uv;
  q.x *= u_res.x / u_res.y;          // corregir aspecto

  float t = u_time * 0.045;

  // Dos capas desplazándose a distinta velocidad: da la sensación de cortina.
  float n1 = fbm(q * 1.7 + vec2(t, t * 0.5));
  float n2 = fbm(q * 2.6 - vec2(t * 0.7, t * 0.35) + n1 * 0.6);
  float v = n1 * 0.7 + n2 * 0.55;

  // Dos umbrales: una cortina amplia y, dentro, un núcleo más brillante. Con un
  // solo smoothstep quedaba niebla plana; el núcleo es lo que le da cuerpo.
  float curtain = smoothstep(0.18, 0.72, v);
  float core    = pow(smoothstep(0.42, 0.86, v), 2.0);

  // El titular ocupa aproximadamente uv.x 0.13–0.49, así que ese tramo se
  // mantiene oscuro. La luz entra por arriba y por la derecha.
  float side   = smoothstep(0.18, 0.92, uv.x);
  float upper  = smoothstep(0.12, 0.95, uv.y);
  float bottom = smoothstep(0.42, 0.0, uv.y) * 0.30;
  float mask   = upper * (0.30 + 0.70 * side) + bottom * side;

  // Hueco alrededor del orbe.
  //
  // Este shader se escribió cuando la derecha del hero estaba vacía, y por eso
  // manda la luz justo ahí. Desde que vive ahí la esfera de puntos, el lóbulo
  // más brillante le caía encima: los puntos perdían contraste contra el fondo
  // y la esfera se leía sucia. Se probó y se descartó quitar la aurora entera;
  // esto conserva el movimiento del fondo y le devuelve el negro al orbe.
  //
  // El centro va fijo porque la posición del orbe también lo es —la columna
  // derecha de la grilla del hero— y la aurora sólo se monta desde 1024px, que
  // es exactamente donde esa grilla existe. La corrección por aspecto hace que
  // el hueco sea un círculo en pantalla y no una elipse.
  vec2  centroOrbe = vec2(0.72, 0.50);
  vec2  haciaOrbe  = (uv - centroOrbe) * vec2(u_res.x / u_res.y, 1.0);
  float hueco      = smoothstep(0.06, 0.42, length(haciaOrbe));
  mask *= mix(0.16, 1.0, hueco);

  vec3 blue   = vec3(0.024, 0.576, 0.890);   // #0693E3
  vec3 purple = vec3(0.608, 0.318, 0.878);   // #9B51E0
  vec3 col = mix(blue, purple, smoothstep(0.15, 0.95, n2 + uv.y * 0.35));

  float glow = clamp((curtain * 0.55 + core * 0.85) * mask, 0.0, 1.0);
  gl_FragColor = vec4(col * glow, glow);      // premultiplicado, se suma al fondo
}
`

function compile(gl, type, src) {
  const s = gl.createShader(type)
  gl.shaderSource(s, src)
  gl.compileShader(s)
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    gl.deleteShader(s)
    return null
  }
  return s
}

export default function Aurora() {
  const canvasRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  // Decide si corresponde montarlo, ya pasado el primer pintado.
  useEffect(() => {
    const wide = window.matchMedia('(min-width: 1024px)').matches
    if (prefiereQuietud() || !wide) return

    const idle = window.requestIdleCallback || (cb => setTimeout(cb, 900))
    const cancel = window.cancelIdleCallback || clearTimeout
    const h = idle(() => setEnabled(true), { timeout: 2500 })
    return () => cancel(h)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl', {
      alpha: true, antialias: false, depth: false, stencil: false,
      premultipliedAlpha: true, powerPreference: 'low-power',
    })
    if (!gl) return

    const vs = compile(gl, gl.VERTEX_SHADER, VERT)
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG)
    if (!vs || !fs) return

    const prog = gl.createProgram()
    gl.attachShader(prog, vs)
    gl.attachShader(prog, fs)
    gl.linkProgram(prog)
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(prog, 'p')
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(prog, 'u_res')
    const uTime = gl.getUniformLocation(prog, 'u_time')

    // Media resolución: es un degradado difuso, no se nota y cuesta 4x menos.
    const SCALE = 0.5
    const resize = () => {
      const w = Math.max(1, Math.round(canvas.clientWidth * SCALE))
      const h = Math.max(1, Math.round(canvas.clientHeight * SCALE))
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
        gl.viewport(0, 0, w, h)
      }
      gl.uniform2f(uRes, canvas.width, canvas.height)
    }
    resize()
    window.addEventListener('resize', resize)

    let raf = 0
    let visible = true
    let last = 0
    const FRAME = 1000 / 30            // 30 fps basta para algo tan lento
    const start = performance.now()

    const loop = (now) => {
      raf = requestAnimationFrame(loop)
      if (!visible || document.hidden) return
      if (now - last < FRAME) return
      last = now
      resize()
      gl.uniform1f(uTime, (now - start) / 1000)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }
    raf = requestAnimationFrame(loop)

    // Apagar cuando el hero sale de pantalla.
    const io = new IntersectionObserver(
      ([e]) => { visible = e.isIntersecting },
      { threshold: 0 }
    )
    io.observe(canvas)

    const onLost = (e) => { e.preventDefault(); cancelAnimationFrame(raf) }
    canvas.addEventListener('webglcontextlost', onLost)

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('webglcontextlost', onLost)
      gl.deleteProgram(prog)
      gl.deleteShader(vs)
      gl.deleteShader(fs)
      gl.deleteBuffer(buf)
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}
