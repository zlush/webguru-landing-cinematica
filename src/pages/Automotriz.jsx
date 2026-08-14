import { Link } from 'react-router-dom'
import {
  ChevronRight, MessageSquare, CalendarCheck, Wrench, BellRing,
  Clock4, ListX, CarFront, TrendingDown, Plug,
} from 'lucide-react'
import { Navbar, Footer, WhatsAppFab } from '../components/Chrome'
import { StatBand, ChatDemo, Implementacion, Confianza } from '../components/RubroSections'
import { waHref } from '../lib/site'
import { useSeo, useJsonLd, breadcrumb, SITE_URL } from '../hooks/useSeo'

/* Página de aterrizaje para automotoras, concesionarios y talleres.

   Cubre los dos negocios del rubro, que comparten CRM pero tienen ciclos muy
   distintos: la venta de un vehículo es una decisión larga y de ticket alto, y
   el servicio de taller es recurrente y calendarizado. La página los trata por
   separado en lugar de promediarlos, porque quien vende autos y quien llena la
   agenda del taller no tienen el mismo problema.

   Igual que /inmobiliarias, no monta los testimonios en video: los que tenemos
   son de clínicas y presentarlos acá sugeriría casos del rubro que no existen. */

/* Misma fuente que /inmobiliarias: la auditoría de Harvard Business Review
   sobre 2.241 empresas y su tiempo de respuesta a leads web. Hay bastante
   estadística circulando sobre concesionarios y velocidad de respuesta, pero
   toda la que revisé se rastrea a blogs de proveedores que se citan entre sí
   sin estudio detrás. Preferimos una fuente real que una cifra sectorial que
   no podríamos defender si un cliente la pregunta. */
const HBR_LEADS = 'https://hbr.org/2011/03/the-short-life-of-online-sales-leads'

const stats = [
  {
    n: '7×',
    text: 'Más probable calificar a quien cotiza si el contacto ocurre dentro de la primera hora.',
    fuente: 'Harvard Business Review, 2011',
    href: HBR_LEADS,
  },
  {
    n: '23%',
    text: 'De las empresas auditadas nunca respondió la consulta que le llegó por su sitio web.',
    fuente: 'Auditoría sobre 2.241 empresas',
    href: HBR_LEADS,
  },
  {
    n: '42 h',
    text: 'Tiempo promedio de respuesta entre las que sí contestaron. El interesado ya cotizó en otra parte.',
    fuente: 'Harvard Business Review, 2011',
    href: HBR_LEADS,
  },
]

/* Dos conversaciones y no una: es el argumento central de esta página. La
   venta la inicia el cliente de madrugada; la del taller la inicia el sistema
   por kilometraje. Mostrarlas juntas es lo que deja ver que son dos flujos
   distintos montados por separado, y no el mismo bot con otro saludo. */
const chatVenta = [
  { de: 'cliente', hora: '03:12', texto: 'Hola, ¿tienen la Tucson 2024 en stock? ¿Qué versiones les quedan?' },
  { de: 'bot', hora: '03:12', texto: 'Hola. Quedan dos versiones:\n\n· Tucson 2.0 4x2 — $21.990.000\n· Tucson 2.5 4WD — $24.990.000\n\nAmbas con entrega inmediata. ¿Te interesa alguna en particular?' },
  { de: 'cliente', hora: '03:14', texto: 'La 4WD. ¿Se puede probar el sábado?' },
  { de: 'bot', hora: '03:14', texto: 'Sí. Tengo sábado 10:00 y sábado 12:30 en el showroom de Las Condes.\n\n¿Cuál te acomoda?' },
  { de: 'cliente', hora: '03:15', texto: '10:00' },
  { de: 'bot', hora: '03:15', texto: 'Listo, test drive agendado para el sábado a las 10:00. Mañana te escribe Rodrigo, que te va a atender.' },
]

const fichaVenta = {
  titulo: 'Lead asignado a vendedor',
  filas: [
    ['Interés', 'Tucson 2.5 4WD'],
    ['Test drive', 'Sábado 10:00 · Las Condes'],
    ['Origen', 'WhatsApp · 03:12'],
  ],
}

const chatTaller = [
  { de: 'bot', hora: '09:00', texto: 'Hola Ignacio. Según el último registro, tu Tucson está llegando a los 20.000 km y toca mantención.\n\n¿Te reservo hora?' },
  { de: 'cliente', hora: '09:11', texto: 'Sí, ¿qué tienen disponible?' },
  { de: 'bot', hora: '09:11', texto: 'Esta semana me quedan:\n· Jueves 08:30\n· Viernes 10:00\n\nLa mantención de 20.000 km toma unas 3 horas.' },
  { de: 'cliente', hora: '09:12', texto: 'Jueves' },
  { de: 'bot', hora: '09:12', texto: 'Listo, jueves a las 08:30. Te aviso el miércoles y si no puedes, liberamos la hora.' },
]

const fichaTaller = {
  titulo: 'Hora de servicio reservada',
  filas: [
    ['Servicio', 'Mantención 20.000 km'],
    ['Hora', 'Jueves 08:30 · box 2'],
    ['Gatillo', 'Kilometraje · campaña automática'],
  ],
}

const pasos = [
  {
    title: 'Conectamos',
    text: 'El WhatsApp de ventas, el del taller y el Instagram entran a una bandeja con las conversaciones separadas por área, por delante del sistema que ya lleva el stock.',
  },
  {
    title: 'Entrenamos',
    text: 'Cargamos catálogo, versiones, precios y condiciones generales, y montamos los dos flujos por separado: el de venta y el de servicio no comparten guion.',
  },
  {
    title: 'Lanzamos',
    text: 'Sale a producción y se ajusta sobre cotizaciones reales. Los recordatorios de mantención parten con la base de clientes que ya tienes.',
  },
]

/* Señales de la empresa, no logos: todavía no tenemos clientes de este rubro
   y montar acá los de clínicas sugeriría casos que no existen. */
const confianza = [
  { n: '14 años', text: 'Operando en Chile con proyectos de CRM, automatización e inteligencia artificial.' },
  { n: '2–4 sem.', text: 'Desde la puesta en marcha hasta el asistente respondiendo en producción.' },
  { n: 'Sin migrar', text: 'Trabajamos sobre el sistema de gestión y los calendarios de taller que ya usas.' },
]

const dolores = [
  {
    icon: Clock4,
    title: 'Cotizaciones que nadie responde a tiempo',
    text: 'El interesado consulta por un modelo un domingo. Si la respuesta llega el lunes por la tarde, ya cotizó en otras tres automotoras.',
  },
  {
    icon: ListX,
    title: 'Test drives sin coordinar',
    text: 'Agendar una prueba implica cruzar disponibilidad del vehículo, del vendedor y del cliente. Cuando eso se hace por teléfono, se pierde en el intento.',
  },
  {
    icon: CarFront,
    title: 'La agenda del taller con huecos',
    text: 'Mantenciones que se postergan solas porque nadie avisó, y horas libres que nunca se ofrecieron a quien tenía el servicio pendiente.',
  },
  {
    icon: TrendingDown,
    title: 'Postventa que se pierde',
    text: 'El cliente compra, hace la primera mantención y desaparece. La base crece pero la recompra y el servicio recurrente dependen de que él se acuerde.',
  },
]

const soluciones = [
  {
    icon: MessageSquare,
    title: 'Respuesta inmediata a cotizaciones',
    text: 'Precio, versiones, disponibilidad de stock y condiciones de financiamiento, respondidas en segundos y a cualquier hora.',
  },
  {
    icon: CalendarCheck,
    title: 'Test drive agendado desde el chat',
    text: 'El interesado elige día y hora contra la disponibilidad real del vehículo y del vendedor, sin llamadas cruzadas.',
  },
  {
    icon: Wrench,
    title: 'Agenda de taller que se llena sola',
    text: 'Reserva de hora de servicio por WhatsApp, con confirmación previa y liberación automática de la hora si el cliente no puede.',
  },
  {
    icon: BellRing,
    title: 'Recordatorios de mantención y recompra',
    text: 'Avisos por kilometraje o por fecha, y campañas de recompra a quienes ya cumplieron el ciclo con su vehículo actual.',
  },
]

const integraciones = [
  { name: 'WhatsApp e Instagram', text: 'Bandeja unificada para ventas y para taller, con las conversaciones separadas por área.' },
  { name: 'Portales y formularios web', text: 'Cada cotización que entra queda asignada a un vendedor con su origen identificado.' },
  { name: 'Calendarios de taller y vendedores', text: 'Disponibilidad real por box, por mecánico o por vehículo de prueba.' },
  { name: 'Sistemas de gestión y DMS', text: 'Sincronización vía API con el software que ya lleva stock, órdenes de trabajo y fichas de cliente.' },
]

const faq = [
  {
    q: '¿Sirve para automotora, para taller, o para los dos?',
    a: 'Para los dos, y se configuran por separado. La venta de vehículos es un ciclo largo con seguimiento de semanas; el taller es recurrente y se apoya en recordatorios por kilometraje o fecha. Comparten el CRM pero no los flujos.',
  },
  {
    q: '¿El asistente entrega precios y condiciones de financiamiento?',
    a: 'Entrega los precios y las condiciones generales que tú cargas. Las simulaciones de crédito y la aprobación las deriva a un ejecutivo, porque dependen de la evaluación de cada cliente y no es información que convenga automatizar.',
  },
  {
    q: '¿Puede consultar el stock disponible?',
    a: 'Si tu sistema de gestión expone el stock por API, sí, y responde con la disponibilidad real. Si no la expone, trabaja con la lista que se actualiza en el CRM y deriva al vendedor cuando la consulta es sobre una unidad específica.',
  },
  {
    q: '¿Cuánto demora la implementación?',
    a: 'Entre dos y cuatro semanas según cuántas áreas se conecten. Una automotora con taller propio toma más que un taller independiente, porque son dos flujos que se montan y ajustan por separado.',
  },
]

export default function Automotriz() {
  useSeo({
    title: 'CRM y Asistente IA para Automotoras y Talleres | WebGuru',
    description:
      'Responde cotizaciones en segundos, agenda test drives y llena la agenda de tu taller. CRM omnicanal, asistente IA 24/7 y recordatorios de mantención para el rubro automotriz.',
    path: '/automotriz',
    image: `${SITE_URL}/rubros/automotriz-og.webp`,
  })
  useJsonLd(breadcrumb([{ name: 'Automotriz', path: '/automotriz' }]), 'bc-automotriz')
  useJsonLd(
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    'faq-automotriz',
  )
  useJsonLd(
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'CRM y automatización para automotoras y talleres',
      serviceType: 'Automatización comercial automotriz',
      provider: { '@type': 'Organization', name: 'WebGuru', url: SITE_URL },
      areaServed: ['CL', 'LATAM', 'ES'],
      description:
        'Implementación de CRM omnicanal, asistente conversacional con IA y automatizaciones de cotización, test drive, agendamiento de taller y recordatorios de mantención.',
    },
    'service-automotriz',
  )

  return (
    <>
      <Navbar />

      <main>
        {/* ── Encabezado ── */}
        <section className="px-6 md:px-12 pt-36 pb-16">
          <div className="max-w-4xl mx-auto">
            <span className="section-label mb-5 block">Automotoras y talleres</span>
            <h1 className="font-sans font-extrabold tracking-tight mb-7"
              style={{ fontSize: 'clamp(2.1rem, 5.5vw, 3.5rem)', lineHeight: 1.04 }}>
              Cotiza, agenda y recuerda<br />
              <span className="wg-gradient-text font-serif italic font-normal">sin ocupar a tu equipo.</span>
            </h1>
            <p className="text-wg-muted text-lg leading-relaxed max-w-2xl mb-9">
              Las cotizaciones se responden en segundos, los test drives se agendan
              solos y la agenda del taller se llena con recordatorios de mantención.
              Tus vendedores atienden a quien ya está listo para comprar.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={waHref('Hola, tengo una automotora o taller y quiero ver una demo de WebGuru')}
                target="_blank" rel="noopener noreferrer"
                className="btn btn-primary justify-center">
                Agenda una demo <ChevronRight size={15} />
              </a>
              <Link to="/calculadora" className="btn btn-outline justify-center">
                Calcular mi rentabilidad
              </Link>
            </div>
          </div>
        </section>

        {/* ── Confianza y cifras del problema ── */}
        <Confianza items={confianza} />
        <StatBand label="Lo que cuesta responder tarde" stats={stats} />

        {/* ── Dolores ── */}
        <section className="px-6 md:px-12 py-20" style={{ background: 'rgba(6,9,16,0.6)' }}>
          <div className="max-w-5xl mx-auto">
            <span className="section-label mb-4 block">El problema</span>
            <h2 className="font-sans font-extrabold tracking-tight mb-4"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)', lineHeight: 1.1 }}>
              Dos negocios distintos, la misma fuga.
            </h2>
            <p className="text-wg-muted leading-relaxed max-w-2xl mb-11">
              Vender un vehículo es una decisión larga y de ticket alto. Llenar la
              agenda del taller es un asunto de recurrencia. Los dos se caen en el
              mismo punto: nadie responde ni hace seguimiento a tiempo.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dolores.map((d) => {
                const Icon = d.icon
                return (
                  <div key={d.title} className="card-surface rounded-4xl p-7">
                    <div className="w-10 h-10 rounded-xl grid place-items-center mb-4"
                      style={{ background: 'rgba(230,59,46,0.12)' }}>
                      <Icon size={18} style={{ color: '#E63B2E' }} />
                    </div>
                    <h3 className="font-sans font-bold text-base mb-2">{d.title}</h3>
                    <p className="text-sm text-wg-muted leading-relaxed">{d.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Solución ── */}
        <section className="px-6 md:px-12 py-20">
          <div className="max-w-5xl mx-auto">
            <span className="section-label mb-4 block">Cómo lo resolvemos</span>
            <h2 className="font-sans font-extrabold tracking-tight mb-4"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)', lineHeight: 1.1 }}>
              Ventas y taller, cada uno con su flujo.
            </h2>
            <p className="text-wg-muted leading-relaxed max-w-2xl mb-11">
              Un mismo CRM, dos recorridos configurados por separado. El vendedor y
              el jefe de taller ven lo suyo, y la administración ve el total.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {soluciones.map((s) => {
                const Icon = s.icon
                return (
                  <div key={s.title} className="card-surface rounded-4xl p-7">
                    <div className="w-10 h-10 rounded-xl grid place-items-center mb-4"
                      style={{ background: 'rgba(6,147,227,0.12)' }}>
                      <Icon size={18} className="text-wg-blue" />
                    </div>
                    <h3 className="font-sans font-bold text-base mb-2">{s.title}</h3>
                    <p className="text-sm text-wg-muted leading-relaxed">{s.text}</p>
                  </div>
                )
              })}
            </div>

            {/* Los dos flujos, uno al lado del otro. Puestos en columna se leían
                como la misma demo repetida; en paralelo se ve de inmediato que
                uno lo empieza el cliente y el otro lo empieza el sistema. */}
            <div className="mt-16 pt-16" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              <span className="section-label mb-4 block">Así se ve funcionando</span>
              <h3 className="font-sans font-extrabold tracking-tight mb-4"
                style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', lineHeight: 1.15 }}>
                Una la empieza el cliente. La otra la empieza el sistema.
              </h3>
              <p className="text-wg-muted leading-relaxed max-w-2xl mb-11">
                A la izquierda, una consulta de stock a las tres de la mañana que
                termina en test drive agendado. A la derecha, una mantención que
                nadie tuvo que recordar: la dispara el kilometraje.
              </p>
              <div className="grid lg:grid-cols-2 gap-8 justify-items-center">
                <ChatDemo titulo="Asistente de ventas" mensajes={chatVenta} ficha={fichaVenta} />
                <ChatDemo titulo="Asistente de taller" mensajes={chatTaller} ficha={fichaTaller} />
              </div>
            </div>
          </div>
        </section>

        {/* ── Integraciones ── */}
        <section className="px-6 md:px-12 py-20" style={{ background: 'rgba(6,9,16,0.6)' }}>
          <div className="max-w-5xl mx-auto">
            <span className="section-label mb-4 block">Integraciones</span>
            <h2 className="font-sans font-extrabold tracking-tight mb-4"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)', lineHeight: 1.1 }}>
              Sobre el sistema que ya usas.
            </h2>
            <p className="text-wg-muted leading-relaxed max-w-2xl mb-11">
              No hay que migrar el stock ni las órdenes de trabajo. WebGuru opera la
              capa comercial y tu sistema de gestión sigue siendo el registro.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {integraciones.map((it) => (
                <div key={it.name} className="card-surface rounded-4xl p-6">
                  <div className="flex items-center gap-2.5 mb-2">
                    <Plug size={16} className="text-wg-blue shrink-0" />
                    <h3 className="font-sans font-bold text-base">{it.name}</h3>
                  </div>
                  <p className="text-sm text-wg-muted leading-relaxed">{it.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Puesta en marcha ── */}
        <Implementacion
          titulo="En marcha en dos a cuatro semanas."
          bajada="Una automotora con taller propio toma más que un taller independiente, porque son dos flujos que se montan y ajustan por separado. Ninguno de los dos exige tocar tu sistema de gestión."
          pasos={pasos}
        />

        {/* ── Preguntas frecuentes ── */}
        <section className="px-6 md:px-12 py-20" style={{ background: 'rgba(6,9,16,0.6)' }}>
          <div className="max-w-3xl mx-auto">
            <span className="section-label mb-4 block">Preguntas frecuentes</span>
            <h2 className="font-sans font-extrabold tracking-tight mb-10"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)', lineHeight: 1.1 }}>
              Lo que nos preguntan del rubro.
            </h2>
            <div className="flex flex-col gap-4">
              {faq.map(({ q, a }) => (
                <details key={q} className="card-surface rounded-4xl p-6 group">
                  <summary className="font-sans font-bold text-base cursor-pointer list-none flex items-start justify-between gap-4">
                    {q}
                    <ChevronRight
                      size={18}
                      className="shrink-0 mt-0.5 text-wg-muted transition-transform duration-200 group-open:rotate-90"
                    />
                  </summary>
                  <p className="text-sm text-wg-muted leading-relaxed mt-4">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Cierre ── */}
        <section className="px-6 md:px-12 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-sans font-extrabold tracking-tight mb-5"
              style={{ fontSize: 'clamp(1.7rem, 4vw, 2.5rem)', lineHeight: 1.1 }}>
              Veamos tus cotizaciones<br />
              <span className="wg-gradient-text font-serif italic font-normal">del último mes.</span>
            </h2>
            <p className="text-wg-muted leading-relaxed mb-9 max-w-xl mx-auto">
              En la demo revisamos cuántas consultas entraron, cuántas se
              respondieron el mismo día y cuántas horas de taller quedaron sin
              ocupar. Los números muestran solos dónde está la pérdida.
            </p>
            <a href={waHref('Hola, tengo una automotora o taller y quiero agendar una demo de WebGuru')}
              target="_blank" rel="noopener noreferrer"
              className="btn btn-primary inline-flex">
              Agenda una demo <ChevronRight size={15} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  )
}
