import { Link } from 'react-router-dom'
import {
  ChevronRight, MessageSquare, CalendarCheck, Clock, UserPlus,
  PhoneOff, CalendarX, MessageCircleOff, TrendingDown, Plug,
} from 'lucide-react'
import { Navbar, Footer, WhatsAppFab } from '../components/Chrome'
import VideoTestimonials from '../components/VideoTestimonials'
import { waHref } from '../lib/site'
import { useSeo, useJsonLd, breadcrumb, SITE_URL } from '../hooks/useSeo'

/* Página de aterrizaje para clínicas dentales y estéticas.

   Es la primera página por rubro del sitio. La home habla de "negocios de
   servicios" en general; acá el vocabulario es el de una clínica —paciente,
   agenda, sillón, no-show, primera consulta— porque quien la lee está
   comparando proveedores y necesita reconocerse en la primera pantalla.

   Los cinco testimonios del sitio son de clínicas y centros de salud, así que
   la prueba social se reutiliza tal cual: es el activo más fuerte que tenemos
   para este rubro y no hacía falta grabar nada nuevo. */

const dolores = [
  {
    icon: MessageCircleOff,
    title: 'Mensajes sin responder',
    text: 'El paciente escribe por WhatsApp un sábado y nadie contesta hasta el lunes. Para entonces ya agendó en otra clínica.',
  },
  {
    icon: CalendarX,
    title: 'No-shows que vacían la agenda',
    text: 'Una hora perdida no se recupera: el sillón queda parado, el profesional también, y el ingreso de esa franja no vuelve.',
  },
  {
    icon: PhoneOff,
    title: 'Recepción saturada',
    text: 'La misma persona atiende el mesón, el teléfono, el WhatsApp y el Instagram. Algo se cae siempre, y suele ser el seguimiento.',
  },
  {
    icon: TrendingDown,
    title: 'Pacientes que no vuelven',
    text: 'Terminan el tratamiento y nadie los contacta de nuevo. La base de datos crece pero el negocio depende siempre de leads nuevos.',
  },
]

const soluciones = [
  {
    icon: MessageSquare,
    title: 'Asistente que responde en segundos',
    text: 'Contesta consultas de precios, horarios y tratamientos las 24 horas, en WhatsApp e Instagram. Cuando la conversación amerita una persona, la deriva con todo el contexto.',
  },
  {
    icon: CalendarCheck,
    title: 'Agendamiento sin intermediarios',
    text: 'El paciente elige hora desde el mismo chat, contra la disponibilidad real de cada profesional. Sin llamadas, sin planillas, sin doble reserva.',
  },
  {
    icon: Clock,
    title: 'Recordatorios anti no-show',
    text: 'Secuencia automática de confirmación antes de la cita. Si el paciente avisa que no puede, la hora se libera y se ofrece a quien está en lista de espera.',
  },
  {
    icon: UserPlus,
    title: 'Reactivación de pacientes inactivos',
    text: 'Campañas a la base que ya tienes: controles pendientes, tratamientos incompletos, pacientes que no vuelven hace seis meses.',
  },
]

/* Los 19 logos de la home son de todos los rubros; acá van sólo los 12 de
   salud, identificados uno por uno mirando los archivos. Mostrar la lista
   completa en una página de clínicas diluiría justo lo que la hace creíble:
   que doce de nuestros clientes son del rubro de quien está leyendo.

   A diferencia de la home, acá llevan alt real. Ahí el marquee es decorativo y
   el alt vacío es correcto; en esta página los nombres son el argumento. */
const LOGOS_CLINICAS = [
  [3, 'Dentyart'],
  [4, 'Odonthos'],
  [6, 'Odontología de Gales'],
  [8, 'Apolo'],
  [11, 'Dr. Günther Rochefort'],
  [13, 'Terapré Med Clinic'],
  [14, 'Clínica Jesed Salud'],
  [15, 'Clínica Dental Zoe'],
  [16, 'Clínica Baquio'],
  [17, 'Dispensario Nacional Medcorp'],
  [18, 'CIEO Centro Integral de Especialidades Odontológicas'],
  [19, 'Clínica S&O'],
]

/* Se dice "nos integramos con" y no "somos partner oficial de", igual que en
   /partners: la integración técnica la podemos sostener, un estatus de partner
   con cada proveedor no. */
const integraciones = [
  { name: 'Dentalink', text: 'Software de gestión dental. Sincronizamos fichas, agenda y estados de tratamiento.' },
  { name: 'Medilink', text: 'Gestión clínica y médica. El paciente que agenda por WhatsApp queda cargado en tu sistema.' },
  { name: 'Reservo', text: 'Reservas online. Las horas tomadas desde el chat respetan la misma disponibilidad.' },
  { name: 'Google y Outlook Calendar', text: 'Para equipos que llevan la agenda de cada profesional por calendario.' },
]

const faq = [
  {
    q: '¿Sirve para clínicas dentales y también estéticas?',
    a: 'Sí. El flujo comercial es prácticamente el mismo: consulta por precio, agendamiento de una primera evaluación, presupuesto y seguimiento hasta que el paciente decide. Cambia el vocabulario de los tratamientos, que se configura en la puesta en marcha.',
  },
  {
    q: '¿Se conecta con el software clínico que ya usamos?',
    a: 'En la mayoría de los casos sí, vía API. Lo revisamos en la consultoría inicial: si el sistema expone integración, sincronizamos fichas y agenda; si no, WebGuru opera como capa comercial por delante y el software clínico sigue siendo la ficha médica.',
  },
  {
    q: '¿El asistente da indicaciones médicas?',
    a: 'No, y es deliberado. Responde precios, horarios, ubicación, formas de pago y en qué consiste un tratamiento a nivel general. Cualquier consulta clínica la deriva a un profesional. Esa frontera se define contigo antes de salir a producción.',
  },
  {
    q: '¿Cuánto demora la implementación?',
    a: 'Entre dos y cuatro semanas según la cantidad de profesionales y la complejidad de la agenda. La primera semana es configuración y carga de información; el resto es ajuste fino sobre conversaciones reales.',
  },
]

export default function Clinicas() {
  useSeo({
    title: 'CRM y Asistente IA para Clínicas Dentales y Estéticas | WebGuru',
    description:
      'Automatiza WhatsApp, llena la agenda y reduce los no-shows de tu clínica dental o estética. Asistente IA 24/7, agendamiento automático y recordatorios. Casos reales de clínicas en Chile y Latinoamérica.',
    path: '/clinicas',
    // En este rubro el enlace se comparte sobre todo por WhatsApp, así que la
    // tarjeta del unfurl es lo primero que ve el prospecto. La genérica del
    // sitio no mencionaba clínicas; ésta la genera scripts/og-rubros.mjs.
    image: `${SITE_URL}/rubros/clinicas-og.webp`,
  })
  useJsonLd(breadcrumb([{ name: 'Clínicas', path: '/clinicas' }]), 'bc-clinicas')
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
    'faq-clinicas',
  )
  useJsonLd(
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'CRM y automatización para clínicas dentales y estéticas',
      serviceType: 'Automatización comercial para clínicas',
      provider: { '@type': 'Organization', name: 'WebGuru', url: SITE_URL },
      areaServed: ['CL', 'LATAM', 'ES'],
      description:
        'Implementación de CRM omnicanal, asistente conversacional con IA y automatizaciones de agendamiento y recordatorios para clínicas dentales y estéticas.',
    },
    'service-clinicas',
  )

  return (
    <>
      <Navbar />

      <main>
        {/* ── Encabezado ── */}
        <section className="px-6 md:px-12 pt-36 pb-16">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="section-label mb-5 block">Clínicas dentales y estéticas</span>
              <h1 className="font-sans font-extrabold tracking-tight mb-7"
                style={{ fontSize: 'clamp(2.1rem, 5.5vw, 3.5rem)', lineHeight: 1.04 }}>
                Tu agenda llena,<br />
                <span className="wg-gradient-text font-serif italic font-normal">sin perseguir pacientes.</span>
              </h1>
              <p className="text-wg-muted text-lg leading-relaxed mb-9">
                Un asistente con IA responde cada consulta en segundos, agenda contra la
                disponibilidad real de tus profesionales y confirma las citas antes de que
                se conviertan en horas perdidas. Tu recepción deja de apagar incendios.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={waHref('Hola, tengo una clínica y quiero ver una demo de WebGuru')}
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary justify-center">
                  Agenda una demo <ChevronRight size={15} />
                </a>
                <Link to="/calculadora" className="btn btn-outline justify-center">
                  Calcular mi rentabilidad
                </Link>
              </div>
            </div>

            {/* Se muestra también en móvil, que es de donde llega la mayoría del
                tráfico: esconderla ahí dejaba sin la única imagen de contexto
                clínico justo a quien más la necesita para reconocerse. El original
                pesaba 2 MB en PNG; acá van 58 KB en escritorio y 27 KB en móvil.

                Es el elemento LCP de esta página, de ahí el fetchpriority alto y
                las dimensiones explícitas, que evitan el salto de maquetación
                mientras carga. */}
            <div className="relative">
              <div className="absolute inset-0 -m-8 rounded-full opacity-30 blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(123,97,255,0.5), transparent 70%)' }}
                aria-hidden="true" />
              <img
                src="/rubros/clinicas-hero.webp"
                srcSet="/rubros/clinicas-hero-560.webp 560w, /rubros/clinicas-hero.webp 900w"
                sizes="(min-width: 1024px) 448px, 100vw"
                alt="Equipo de una clínica dental mostrando la aplicación de WebGuru en un teléfono"
                className="relative w-full max-w-md mx-auto rounded-4xl"
                width="900"
                height="900"
                loading="eager"
                fetchpriority="high"
              />
            </div>
          </div>
        </section>

        {/* ── Logos de clientes del rubro ── */}
        <section className="py-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <span className="section-label block mb-8">
              Clínicas y centros de salud que ya trabajan con WebGuru
            </span>
            {/* Grilla estática y no el marquee de la home: doce logos entran
                completos en pantalla, y acá el visitante los está leyendo para
                buscar a alguien parecido a él, no mirándolos pasar. */}
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-9 items-center">
              {LOGOS_CLINICAS.map(([n, name]) => (
                <img
                  key={n}
                  src={`/logos/${n}.webp`}
                  alt={name}
                  title={name}
                  loading="lazy"
                  decoding="async"
                  className="h-8 md:h-9 w-auto max-w-full object-contain mx-auto transition-opacity duration-300 hover:opacity-75"
                  style={{ filter: 'brightness(0) invert(1)', opacity: 0.4 }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Dolores ── */}
        <section className="px-6 md:px-12 py-20" style={{ background: 'rgba(6,9,16,0.6)' }}>
          <div className="max-w-5xl mx-auto">
            <span className="section-label mb-4 block">El problema</span>
            <h2 className="font-sans font-extrabold tracking-tight mb-4"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)', lineHeight: 1.1 }}>
              La demanda existe. Se pierde en el camino.
            </h2>
            <p className="text-wg-muted leading-relaxed max-w-2xl mb-11">
              La mayoría de las clínicas no tiene un problema de marketing: tiene un
              problema de respuesta. El paciente ya levantó la mano y nadie llegó a
              tiempo.
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
              Cuatro piezas, un solo flujo.
            </h2>
            <p className="text-wg-muted leading-relaxed max-w-2xl mb-11">
              No es un chatbot suelto ni una planilla compartida. Es el recorrido
              completo del paciente, desde el primer mensaje hasta el control de
              seguimiento.
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
          </div>
        </section>

        {/* ── Integraciones ── */}
        <section className="px-6 md:px-12 py-20" style={{ background: 'rgba(6,9,16,0.6)' }}>
          <div className="max-w-5xl mx-auto">
            <span className="section-label mb-4 block">Integraciones</span>
            <h2 className="font-sans font-extrabold tracking-tight mb-4"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)', lineHeight: 1.1 }}>
              No cambies el software de tu clínica.
            </h2>
            <p className="text-wg-muted leading-relaxed max-w-2xl mb-11">
              Nos conectamos con el sistema que tu equipo ya sabe usar. WebGuru
              opera la capa comercial —conversaciones, agendamiento y seguimiento—
              y tu software clínico sigue siendo la ficha del paciente.
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
            <p className="text-sm text-wg-muted leading-relaxed mt-8">
              ¿Usas otro sistema? La mayoría expone API y lo revisamos en la
              consultoría inicial. Si no la expone, WebGuru funciona igual por
              delante y sincronizamos lo que el sistema permita.
            </p>
          </div>
        </section>

        {/* ── Prueba social ── */}
        <VideoTestimonials />

        {/* ── Preguntas frecuentes ── */}
        <section className="px-6 md:px-12 py-20" style={{ background: 'rgba(6,9,16,0.6)' }}>
          <div className="max-w-3xl mx-auto">
            <span className="section-label mb-4 block">Preguntas frecuentes</span>
            <h2 className="font-sans font-extrabold tracking-tight mb-10"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)', lineHeight: 1.1 }}>
              Lo que nos preguntan las clínicas.
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
              Veamos tu agenda de<br />
              <span className="wg-gradient-text font-serif italic font-normal">las próximas dos semanas.</span>
            </h2>
            <p className="text-wg-muted leading-relaxed mb-9 max-w-xl mx-auto">
              En la demo revisamos tus horas libres, tu tasa de no-show y cuántas
              consultas quedan sin responder. Con eso sobre la mesa se ve rápido si
              esto tiene sentido para tu clínica.
            </p>
            <a href={waHref('Hola, tengo una clínica y quiero agendar una demo de WebGuru')}
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
