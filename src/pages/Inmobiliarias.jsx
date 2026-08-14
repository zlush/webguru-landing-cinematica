import { Link } from 'react-router-dom'
import {
  ChevronRight, MessageSquare, CalendarCheck, Filter, Repeat,
  Clock4, Users2, ClipboardX, TrendingDown, Plug,
} from 'lucide-react'
import { Navbar, Footer, WhatsAppFab } from '../components/Chrome'
import { StatBand, ChatDemo, Implementacion, Confianza } from '../components/RubroSections'
import { waHref } from '../lib/site'
import { useSeo, useJsonLd, breadcrumb, SITE_URL } from '../hooks/useSeo'

/* Página de aterrizaje para corredoras de propiedades e inmobiliarias.

   A diferencia de /clinicas, esta página NO monta los testimonios en video: los
   cinco que tenemos son de clínicas y centros de salud. Ponerlos acá daría a
   entender que son casos del rubro inmobiliario, que es exactamente el tipo de
   señal que un corredor detecta y castiga. Cuando haya casos del rubro, se
   suman. */

/* Las tres cifras salen del mismo estudio: la auditoría de Harvard Business
   Review sobre 2.241 empresas y su tiempo de respuesta a leads web. No es un
   estudio del rubro inmobiliario —no encontré uno público que pueda sostener—
   pero mide exactamente el fenómeno del que habla esta página, y es preferible
   una fuente real y citable que una cifra sectorial de origen difuso.

   No hay métricas nuestras acá porque todavía no tenemos clientes medidos en
   este rubro. Cuando los haya, van en un <CasoDeExito />, no en esta banda. */
const HBR_LEADS = 'https://hbr.org/2011/03/the-short-life-of-online-sales-leads'

const stats = [
  {
    n: '7×',
    text: 'Más probable calificar a un interesado si el contacto ocurre dentro de la primera hora.',
    fuente: 'Harvard Business Review, 2011',
    href: HBR_LEADS,
  },
  {
    n: '60×',
    text: 'La caída si la respuesta llega recién al día siguiente, comparada con responder en la primera hora.',
    fuente: 'Auditoría sobre 2.241 empresas',
    href: HBR_LEADS,
  },
  {
    n: '42 h',
    text: 'Tiempo promedio de respuesta entre las empresas que sí contestaron. El 23% no contestó nunca.',
    fuente: 'Harvard Business Review, 2011',
    href: HBR_LEADS,
  },
]

/* Un lead de portal que entra pasadas las diez de la noche: el escenario donde
   la corredora chica pierde contra la grande que tiene turnos. */
const chat = [
  { de: 'interesado', hora: '22:14', texto: 'Hola, vi el depto de 2D2B en Ñuñoa. ¿Sigue disponible?' },
  { de: 'bot', hora: '22:14', texto: 'Hola. Sí, sigue disponible.\n\n68 m², 2D 2B, piso 8, orientación norponiente. UF 4.290 y gastos comunes de $95.000.\n\n¿Lo estás viendo para vivir o como inversión?' },
  { de: 'interesado', hora: '22:16', texto: 'Para vivir. ¿Se puede ver este fin de semana?' },
  { de: 'bot', hora: '22:16', texto: 'Sí. Andrea tiene sábado 11:00 y sábado 16:30.\n\nPara dejarla agendada: ¿tienes el crédito preaprobado o lo estás evaluando?' },
  { de: 'interesado', hora: '22:18', texto: 'Sábado 11:00. Preaprobado hasta UF 4.500' },
  { de: 'bot', hora: '22:18', texto: 'Listo, visita agendada para el sábado a las 11:00 con Andrea. Te confirmo el viernes por acá.' },
]

const fichaChat = {
  titulo: 'Lead calificado · asignado a Andrea',
  filas: [
    ['Propiedad', 'Depto. 2D2B · Ñuñoa'],
    ['Presupuesto', 'Hasta UF 4.500 · preaprobado'],
    ['Destino', 'Vivienda propia'],
    ['Visita', 'Sábado 11:00 · por confirmar'],
    ['Origen', 'Portal · 22:14'],
  ],
}

const pasos = [
  {
    title: 'Conectamos',
    text: 'Los correos de los portales, el formulario del sitio, el WhatsApp de la oficina y el Instagram entran a una sola bandeja, cada consulta con su origen identificado.',
  },
  {
    title: 'Entrenamos',
    text: 'Cargamos la cartera con sus fichas y definimos las reglas de reparto —por comuna, por proyecto, por tipo de propiedad o por turno— y las preguntas de calificación.',
  },
  {
    title: 'Lanzamos',
    text: 'Sale a producción y la primera semana ajustamos qué preguntas filtran de verdad, sobre los leads reales que van entrando.',
  },
]

/* Señales verificables de la empresa, no logos: todavía no tenemos clientes de
   este rubro y poner los de clínicas acá sugeriría casos que no existen. */
const confianza = [
  { n: '14 años', text: 'Operando en Chile con proyectos de CRM, automatización e inteligencia artificial.' },
  { n: '2–4 sem.', text: 'Desde la puesta en marcha hasta el asistente respondiendo en producción.' },
  { n: 'Sin migrar', text: 'Trabajamos sobre los portales, el CRM y los calendarios que ya usas.' },
]

const dolores = [
  {
    icon: Clock4,
    title: 'El lead se enfría en minutos',
    text: 'Quien consulta por una propiedad está mirando otras cinco al mismo tiempo. El primero en responder se queda con la visita; el resto compite contra una decisión ya tomada.',
  },
  {
    icon: Users2,
    title: 'Consultas repartidas entre corredores',
    text: 'Portales, formulario web, WhatsApp de la oficina y el celular personal de cada corredor. Nadie sabe cuántos leads entraron realmente ni cuántos quedaron sin contestar.',
  },
  {
    icon: ClipboardX,
    title: 'Visitas que no se confirman',
    text: 'Se coordina una visita para el sábado, el interesado no llega y el corredor perdió la mañana y el traslado. Sin confirmación previa, esa hora no se recupera.',
  },
  {
    icon: TrendingDown,
    title: 'Seguimiento que se corta',
    text: 'Después de la visita el interesado necesita semanas para decidir. Si nadie retoma el contacto en ese lapso, la operación se cae sin que quede registro del porqué.',
  },
]

const soluciones = [
  {
    icon: MessageSquare,
    title: 'Respuesta inmediata a cada consulta',
    text: 'El interesado recibe respuesta en segundos con los datos de la propiedad, sin importar la hora ni el canal por el que escribió.',
  },
  {
    icon: Filter,
    title: 'Calificación antes de mover al corredor',
    text: 'Presupuesto, forma de pago, plazo y si necesita vender primero. El corredor recibe solo lo que vale su tiempo, con el contexto ya levantado.',
  },
  {
    icon: CalendarCheck,
    title: 'Visitas agendadas y confirmadas',
    text: 'El interesado elige horario contra la disponibilidad real del corredor, y una secuencia de confirmación reduce las visitas que no se concretan.',
  },
  {
    icon: Repeat,
    title: 'Seguimiento que no depende de la memoria',
    text: 'Secuencias automáticas después de la visita, con la propiedad vista y las alternativas que encajan con lo que buscaba.',
  },
]

const integraciones = [
  { name: 'Portales de propiedades', text: 'Los leads que llegan por correo desde los portales entran al CRM y reciben respuesta automática.' },
  { name: 'Formularios de tu sitio web', text: 'Cada consulta queda asignada a un corredor con su origen identificado.' },
  { name: 'WhatsApp e Instagram', text: 'Bandeja unificada: la oficina deja de depender del celular personal de cada corredor.' },
  { name: 'Calendarios y CRM propio', text: 'Sincronización de agenda vía API con el sistema que ya uses para la cartera de propiedades.' },
]

const faq = [
  {
    q: '¿Sirve para una corredora chica o solo para inmobiliarias grandes?',
    a: 'Sirve desde un corredor independiente. De hecho el impacto suele ser mayor mientras menos gente hay: si eres tú solo mostrando propiedades, cada consulta que entra mientras estás en una visita es una que no puedes contestar.',
  },
  {
    q: '¿El asistente entrega precios y datos de las propiedades?',
    a: 'Sí, con la información que tú cargas: valor, superficie, dormitorios, gastos comunes, orientación, disponibilidad. Lo que no responde son negociaciones ni condiciones especiales; eso lo deriva al corredor.',
  },
  {
    q: '¿Se puede asignar cada lead a un corredor distinto?',
    a: 'Sí. Se puede repartir por proyecto, por comuna, por tipo de propiedad o por turnos rotativos. Cada corredor ve su cartera y la administración ve el total.',
  },
  {
    q: '¿Qué pasa con los leads antiguos que ya tenemos?',
    a: 'Se cargan a la base y se pueden trabajar con campañas de reactivación. Es lo primero que hacemos en la mayoría de las implementaciones: casi siempre hay operaciones dormidas en contactos de hace seis o doce meses.',
  },
]

export default function Inmobiliarias() {
  useSeo({
    title: 'CRM y Asistente IA para Corredoras de Propiedades | WebGuru',
    description:
      'Responde cada consulta en segundos, califica interesados y agenda visitas sin perder leads de los portales. CRM omnicanal y automatización para corredoras e inmobiliarias.',
    path: '/inmobiliarias',
    image: `${SITE_URL}/rubros/inmobiliarias-og.webp`,
  })
  useJsonLd(breadcrumb([{ name: 'Inmobiliarias', path: '/inmobiliarias' }]), 'bc-inmobiliarias')
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
    'faq-inmobiliarias',
  )
  useJsonLd(
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'CRM y automatización para corredoras de propiedades',
      serviceType: 'Automatización comercial inmobiliaria',
      provider: { '@type': 'Organization', name: 'WebGuru', url: SITE_URL },
      areaServed: ['CL', 'LATAM', 'ES'],
      description:
        'Implementación de CRM omnicanal, asistente conversacional con IA y automatizaciones de calificación, agendamiento de visitas y seguimiento para corredoras e inmobiliarias.',
    },
    'service-inmobiliarias',
  )

  return (
    <>
      <Navbar />

      <main>
        {/* ── Encabezado ── */}
        <section className="px-6 md:px-12 pt-36 pb-16">
          <div className="max-w-4xl mx-auto">
            <span className="section-label mb-5 block">Corredoras e inmobiliarias</span>
            <h1 className="font-sans font-extrabold tracking-tight mb-7"
              style={{ fontSize: 'clamp(2.1rem, 5.5vw, 3.5rem)', lineHeight: 1.04 }}>
              El primero que responde<br />
              <span className="wg-gradient-text font-serif italic font-normal">se queda con la visita.</span>
            </h1>
            <p className="text-wg-muted text-lg leading-relaxed max-w-2xl mb-9">
              Cada consulta recibe respuesta en segundos, se califica sola y llega al
              corredor con el presupuesto y el plazo ya levantados. Las visitas se
              agendan y se confirman sin que nadie persiga a nadie.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={waHref('Hola, tengo una corredora de propiedades y quiero ver una demo de WebGuru')}
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
        <StatBand label="Lo que decide quién se queda con el lead" stats={stats} />

        {/* ── Dolores ── */}
        <section className="px-6 md:px-12 py-20" style={{ background: 'rgba(6,9,16,0.6)' }}>
          <div className="max-w-5xl mx-auto">
            <span className="section-label mb-4 block">El problema</span>
            <h2 className="font-sans font-extrabold tracking-tight mb-4"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)', lineHeight: 1.1 }}>
              Los leads llegan. El problema es lo que pasa después.
            </h2>
            <p className="text-wg-muted leading-relaxed max-w-2xl mb-11">
              La inversión en portales y publicidad trae consultas. Lo que define
              cuántas terminan en operación es la velocidad de respuesta y la
              constancia del seguimiento.
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
              Del portal a la visita, sin huecos.
            </h2>
            <p className="text-wg-muted leading-relaxed max-w-2xl mb-11">
              El recorrido completo del interesado, desde que hace clic en un portal
              hasta que firma —o hasta que queda claro que no era el momento.
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

            {/* La calificación es lo que un corredor no cree hasta que la ve:
                el mockup muestra que las preguntas se hacen solas y que lo que
                llega no es un "hola" sino un lead con presupuesto y plazo. */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mt-16 pt-16"
              style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              <div>
                <span className="section-label mb-4 block">Así se ve funcionando</span>
                <h3 className="font-sans font-extrabold tracking-tight mb-4"
                  style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', lineHeight: 1.15 }}>
                  Un lead de portal a las diez de la noche.
                </h3>
                <p className="text-wg-muted leading-relaxed mb-4">
                  Responde en segundos con los datos reales de la ficha, pregunta lo
                  que hay que preguntar —destino, presupuesto, si el crédito está
                  preaprobado— y deja la visita agendada contra la agenda de Andrea.
                </p>
                <p className="text-wg-muted leading-relaxed">
                  Lo que el corredor abre al día siguiente no es una consulta más:
                  es un interesado calificado, con la visita puesta y el origen del
                  lead identificado.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <ChatDemo titulo="Asistente de la corredora" mensajes={chat} ficha={fichaChat} />
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
              Conectado a donde ya llegan tus leads.
            </h2>
            <p className="text-wg-muted leading-relaxed max-w-2xl mb-11">
              No hay que cambiar de portales ni migrar la cartera. WebGuru se sienta
              por delante y ordena todo lo que entra.
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
          bajada="No hay que cambiar de portales ni migrar la cartera. La primera semana es configuración y reglas de reparto; el resto es ajuste sobre leads reales."
          pasos={pasos}
        />

        {/* ── Preguntas frecuentes ── */}
        <section className="px-6 md:px-12 py-20" style={{ background: 'rgba(6,9,16,0.6)' }}>
          <div className="max-w-3xl mx-auto">
            <span className="section-label mb-4 block">Preguntas frecuentes</span>
            <h2 className="font-sans font-extrabold tracking-tight mb-10"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)', lineHeight: 1.1 }}>
              Lo que nos preguntan las corredoras.
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
              Veamos cuántos leads<br />
              <span className="wg-gradient-text font-serif italic font-normal">quedaron sin respuesta.</span>
            </h2>
            <p className="text-wg-muted leading-relaxed mb-9 max-w-xl mx-auto">
              En la demo revisamos tus consultas del último mes, cuántas se
              contestaron el mismo día y cuántas visitas se concretaron. Con eso a la
              vista se ve rápido dónde está la fuga.
            </p>
            <a href={waHref('Hola, tengo una corredora y quiero agendar una demo de WebGuru')}
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
