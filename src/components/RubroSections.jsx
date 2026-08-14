import { Bot, CheckCheck, Quote } from 'lucide-react'

/* Secciones compartidas por las páginas de rubro (/clinicas, /inmobiliarias,
   /automotriz).

   Las tres páginas tienen la misma columna vertebral y cambian sólo el
   contenido. Antes de esto cada una repetía el mismo JSX de tarjeta y de
   encabezado; con cinco secciones nuevas por página eso eran mil líneas
   duplicadas y tres lugares donde arreglar el mismo bug de responsive.

   El módulo exporta SÓLO componentes, nada de constantes: un módulo que mezcla
   ambas cosas rompe el límite de fast-refresh de react-refresh. Es la misma
   razón por la que existe src/lib/site.js. Los datos viven en cada página.

   Nada de esto se anima al entrar. Las páginas de rubro se prerenderizan
   (scripts/prerender.mjs) y toda animación de entrada implica capturar el
   estado inicial: texto real con opacity 0 en el HTML estático, que es lo peor
   que se le puede entregar a un crawler. Lo único con movimiento es el punto
   de "en línea", que ya está cubierto por el bloque prefers-reduced-motion de
   index.css. */

/* ─────────────────────────────────────────────
   BANDA DE CIFRAS
   Va inmediatamente después del hero, antes del bloque de dolores: la magnitud
   del problema en tres números, que es lo que convierte "se pierden consultas"
   de queja genérica en un costo que el lector puede estimar sobre su propio
   negocio.

   Cada cifra lleva `fuente` obligatoria y visible. Son datos de industria, no
   resultados nuestros, y presentarlos sin atribución sería exactamente la clase
   de número inflado que este rubro ya aprendió a descontar. Nuestros propios
   resultados van en <CasoDeExito />, que es otra cosa y se dice aparte.
───────────────────────────────────────────── */
/* Sin fondo propio: en /clinicas queda entre la franja de logos y el bloque de
   dolores, y ambos ya traen tinte o borde. Un tercer tono ahí convertía tres
   secciones seguidas en una sola mancha. */
export function StatBand({ label, stats }) {
  return (
    <section
      className="px-6 md:px-12 py-16"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-5xl mx-auto">
        {label && <span className="section-label block mb-9">{label}</span>}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          {stats.map((s) => (
            <div key={s.n}>
              {/* clamp() y no una clase fija: "1 de cada 2" ocupa cuatro veces
                  más que "24%" y a 360px se partía en tres líneas. */}
              <p
                className="font-sans font-extrabold tracking-tight wg-gradient-text mb-2"
                style={{ fontSize: 'clamp(2.25rem, 6vw, 3.25rem)', lineHeight: 1 }}
              >
                {s.n}
              </p>
              <p className="text-sm text-wg-muted leading-relaxed mb-2">{s.text}</p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-wg-muted/60">
                {s.href ? (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-wg-blue transition-colors"
                  >
                    {s.fuente}
                  </a>
                ) : (
                  s.fuente
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   MOCKUP DE CONVERSACIÓN
   El argumento de toda página de rubro es "un asistente responde por ti". En
   texto eso es una promesa; acá se ve funcionando antes de que el prospecto
   pida la demo.

   Hecho con DOM y CSS, igual que HeroInbox() en App.jsx, por la razón que ese
   comentario deja escrita: peso adicional cero y además muestra lo que se
   vende. Una captura de pantalla real pesaría cientos de KB, no se podría
   traducir ni corregir, y se vería mal en pantallas densas.

   aria-hidden porque es una ilustración: el contenido informativo de la sección
   está en el encabezado y en el pie, no en las burbujas. Un lector de pantalla
   leyendo un diálogo inventado de doce turnos sólo estorba.
───────────────────────────────────────────── */
export function ChatDemo({ titulo, mensajes, ficha }) {
  return (
    <div className="card-surface rounded-4xl p-5 sm:p-6 max-w-md w-full">
      {/* Cabecera del chat */}
      <div className="flex items-center gap-3 pb-4 mb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <span
          className="grid place-items-center rounded-xl flex-shrink-0"
          style={{ width: 34, height: 34, background: 'rgba(37,211,102,0.14)' }}
        >
          <Bot size={16} style={{ color: '#25D366' }} />
        </span>
        <div className="min-w-0">
          <p className="font-sans font-bold text-sm truncate">{titulo}</p>
          <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-emerald-400">
            <span className="relative grid place-items-center w-1.5 h-1.5">
              <span className="absolute inset-0 rounded-full bg-emerald-400 ping-slow" />
              <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </span>
            En línea
          </span>
        </div>
      </div>

      {/* Burbujas */}
      <div className="flex flex-col gap-2.5" aria-hidden="true">
        {mensajes.map((m, i) => {
          const esBot = m.de === 'bot'
          return (
            <div key={i} className={`flex ${esBot ? 'justify-end' : 'justify-start'}`}>
              <div
                className="rounded-2xl px-3.5 py-2.5 max-w-[85%]"
                style={{
                  background: esBot ? 'rgba(6,147,227,0.14)' : 'rgba(30,42,58,0.75)',
                  border: `1px solid ${esBot ? 'rgba(6,147,227,0.28)' : 'rgba(255,255,255,0.07)'}`,
                }}
              >
                <p className="text-[13px] leading-snug whitespace-pre-line">{m.texto}</p>
                <span className="flex items-center justify-end gap-1 font-mono text-[10px] text-wg-muted mt-1">
                  {m.hora}
                  {esBot && <CheckCheck size={11} className="text-wg-blue" />}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Ficha derivada. Es la parte que separa esto de un chatbot suelto: la
          conversación termina en un registro con contexto, no en un aviso. */}
      {ficha && (
        <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="rounded-2xl p-4" style={{ background: 'rgba(123,97,255,0.09)', border: '1px solid rgba(123,97,255,0.25)' }}>
            <p className="section-label mb-3" style={{ fontSize: '0.6rem' }}>{ficha.titulo}</p>
            <dl className="flex flex-col gap-1.5">
              {ficha.filas.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-3">
                  <dt className="text-[11px] text-wg-muted flex-shrink-0">{k}</dt>
                  <dd className="text-[11px] font-sans font-bold text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      )}
    </div>
  )
}

/* ─────────────────────────────────────────────
   IMPLEMENTACIÓN
   El plazo estaba metido dentro de una FAQ, o sea que sólo lo leía quien ya
   había abierto el acordeón. Es una de las dos o tres objeciones que frenan la
   decisión ("esto me va a costar tres meses de mi vida"), así que sube a
   sección propia y el plazo va en el H2, no en el cuerpo.
───────────────────────────────────────────── */
export function Implementacion({ titulo, bajada, pasos }) {
  return (
    <section className="px-6 md:px-12 py-20">
      <div className="max-w-5xl mx-auto">
        <span className="section-label mb-4 block">Puesta en marcha</span>
        <h2
          className="font-sans font-extrabold tracking-tight mb-4"
          style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)', lineHeight: 1.1 }}
        >
          {titulo}
        </h2>
        <p className="text-wg-muted leading-relaxed max-w-2xl mb-11">{bajada}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pasos.map((p, i) => (
            <div key={p.title} className="card-surface rounded-4xl p-7">
              <span className="font-mono text-xs text-wg-blue block mb-4">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-sans font-bold text-base mb-2">{p.title}</h3>
              <p className="text-sm text-wg-muted leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   CASOS DE ÉXITO
   Acá sí van números propios. Sólo se renderizan los casos marcados como
   publicados, y si no hay ninguno la sección entera no existe. Es deliberado
   que el default sea no mostrar nada: publicar el nombre y las cifras de un
   cliente es una decisión suya, y una métrica que no podamos sostener en la
   reunión siguiente hace más daño que no tener sección.
───────────────────────────────────────────── */

/* El número de métricas varía por caso: hay clientes con tres cifras sólidas y
   otros con dos. Rellenar hasta tres con un número blando es lo que hace que un
   prospecto descuente también los buenos, así que la grilla se adapta. Las
   clases van completas y no interpoladas, que es lo único que Tailwind ve. */
const COLUMNAS = { 1: 'sm:grid-cols-1', 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-3' }

function Caso({ caso }) {
  return (
    <article className="card-surface rounded-4xl p-7 sm:p-10">
      <div className="flex items-center gap-4 mb-8">
        {caso.logo && (
          <img
            src={caso.logo}
            alt={caso.cliente}
            loading="lazy"
            decoding="async"
            /* Más alto que en la franja de logos de la home: acá el logo va
               solo, junto al nombre, y varios de estos archivos son marcas con
               texto que a h-9 quedan ilegibles. El max-w evita que los más
               apaisados empujen al nombre fuera de la tarjeta. */
            className="h-11 w-auto max-w-[170px] object-contain flex-shrink-0"
            style={{ filter: 'brightness(0) invert(1)', opacity: 0.75 }}
          />
        )}
        <div>
          <p className="font-sans font-bold text-base">{caso.cliente}</p>
          <p className="text-sm text-wg-muted">{caso.contexto}</p>
        </div>
      </div>

      <h3
        className="font-sans font-extrabold tracking-tight mb-8"
        style={{ fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)', lineHeight: 1.15 }}
      >
        {caso.titular}
      </h3>

      <div className={`grid grid-cols-1 ${COLUMNAS[caso.metricas.length] || 'sm:grid-cols-3'} gap-7 sm:gap-6 mb-9`}>
        {caso.metricas.map((m) => (
          <div key={m.text}>
            <p
              className="font-sans font-extrabold tracking-tight wg-gradient-text mb-1.5"
              style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', lineHeight: 1 }}
            >
              {m.n}
            </p>
            <p className="text-sm text-wg-muted leading-relaxed">{m.text}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '2rem' }}>
        {caso.relato.map((p) => (
          <p key={p} className="text-sm text-wg-muted leading-relaxed">{p}</p>
        ))}
      </div>

      {caso.cita && (
        <blockquote className="mt-8 pl-5" style={{ borderLeft: '2px solid #0693E3' }}>
          <Quote size={16} className="text-wg-blue mb-2" />
          <p className="text-base leading-relaxed mb-2">{caso.cita.texto}</p>
          <footer className="text-sm text-wg-muted">
            {caso.cita.autor}
            {caso.cita.cargo && <span> · {caso.cita.cargo}</span>}
          </footer>
        </blockquote>
      )}
    </article>
  )
}

export function CasosDeExito({ casos, titulo }) {
  const publicados = (casos || []).filter(c => c.publicado)
  if (!publicados.length) return null

  return (
    <section className="px-6 md:px-12 py-20" style={{ background: 'rgba(6,9,16,0.6)' }}>
      <div className="max-w-5xl mx-auto">
        <span className="section-label mb-4 block">
          {publicados.length > 1 ? 'Casos reales' : 'Caso real'}
        </span>
        <h2
          className="font-sans font-extrabold tracking-tight mb-11"
          style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)', lineHeight: 1.1 }}
        >
          {titulo}
        </h2>
        <div className="flex flex-col gap-6">
          {publicados.map(c => <Caso key={c.cliente} caso={c} />)}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   FILA DE CONFIANZA
   Para /inmobiliarias y /automotriz, que hoy no tienen ninguna prueba social:
   /clinicas tiene doce logos y cinco videos, y esas dos no tienen nada.

   Son señales verificables de la empresa (años, clientes, plazo), no logos de
   sectores que todavía no atendemos. Cuando haya clientes del rubro, esta fila
   la reemplaza una grilla de logos como la de /clinicas.
───────────────────────────────────────────── */
export function Confianza({ items }) {
  return (
    <section
      className="px-6 md:px-12 py-10"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.text} className="flex items-baseline gap-3">
            <span className="font-sans font-extrabold text-xl wg-gradient-text flex-shrink-0">{it.n}</span>
            <span className="text-sm text-wg-muted leading-snug">{it.text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
