import { Link } from 'react-router-dom'
import { ArrowUpRight, Target, Zap, Users } from 'lucide-react'
import { Navbar, Footer, WhatsAppFab } from '../components/Chrome'
import { CONTACT, waHref } from '../lib/site'
import { useSeo, useJsonLd, breadcrumb, SITE_URL } from '../hooks/useSeo'

/* Every figure on this page is one the landing page already states
   (14 años, 35+ clientes, 9 países, 40% de reducción de ausencias). Nothing here
   is invented — if a number changes, change it in both places. */

const stats = [
  ['14', 'años de experiencia'],
  ['35+', 'clientes activos'],
  ['9', 'países'],
  ['40%', 'menos ausencias'],
]

const pillars = [
  {
    icon: Target,
    label: 'Alcance',
    text: 'Sitios, landing pages y campañas que atraen prospectos calificados, no visitas sueltas.',
  },
  {
    icon: Zap,
    label: 'Conversión',
    text: 'CRM omnicanal, asistente IA 24/7 y automatizaciones que responden y cierran sin intervención manual.',
  },
  {
    icon: Users,
    label: 'Retención',
    text: 'Seguimiento inteligente, recordatorios y reactivaciones para que el cliente vuelva solo.',
  },
]

const steps = [
  ['01', 'Consultoría gratuita', 'Una sesión de 30 minutos donde mapeamos tu proceso comercial actual y detectamos dónde se pierden los clientes.'],
  ['02', 'Implementación en días', 'Configuramos el CRM, las automatizaciones y el asistente. No son proyectos de meses.'],
  ['03', 'Resultados medibles', 'Dashboard con leads, citas, tasa de cierre e ingresos. Si no se puede medir, no lo contamos como resultado.'],
]

export default function SobreNosotros() {
  useSeo({
    title: 'Sobre WebGuru — CRM, IA y automatizaciones para negocios de servicios',
    description:
      '14 años implementando CRM omnicanal, asistentes IA y automatizaciones para clínicas y negocios de servicios. 35+ clientes activos en 9 países.',
    path: '/sobre-nosotros',
  })
  useJsonLd(breadcrumb([{ name: 'Sobre nosotros', path: '/sobre-nosotros' }]), 'bc-sobre')
  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Sobre WebGuru',
    url: `${SITE_URL}/sobre-nosotros`,
    mainEntity: {
      '@type': 'Organization',
      name: 'WebGuru',
      url: SITE_URL,
      email: CONTACT.email,
      telephone: `+${CONTACT.whatsapp}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Av. Manquehue Sur 555',
        addressLocality: 'Las Condes',
        addressRegion: 'Región Metropolitana',
        addressCountry: 'CL',
      },
    },
  }, 'about-org')

  return (
    <>
      <Navbar />

      <main>
        {/* ── Encabezado ── */}
        <section className="px-6 md:px-12 pt-36 pb-16">
          <div className="max-w-4xl mx-auto">
            <span className="section-label mb-5 block">Sobre nosotros</span>
            <h1 className="font-sans font-extrabold tracking-tight mb-7"
              style={{ fontSize: 'clamp(2.1rem, 5.5vw, 3.5rem)', lineHeight: 1.04 }}>
              No vendemos software.<br />
              <span className="wg-gradient-text font-serif italic font-normal">Construimos sistemas que venden.</span>
            </h1>
            <p className="text-wg-muted text-lg leading-relaxed max-w-2xl">
              Llevamos 14 años trabajando con negocios de servicios y clínicas en
              Latinoamérica y España. En ese tiempo aprendimos algo incómodo: casi
              nadie pierde clientes por falta de marketing. Los pierde porque nadie
              respondió a tiempo, porque el seguimiento quedó en una planilla, o
              porque el paciente no llegó y nadie volvió a llamarlo.
            </p>
          </div>
        </section>

        {/* ── Cifras ── */}
        <section className="px-6 md:px-12 pb-20">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(([n, label]) => (
              <div key={label} className="card-surface rounded-4xl px-5 py-6 text-center">
                <div className="font-sans font-extrabold wg-gradient-text mb-1"
                  style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1 }}>{n}</div>
                <div className="text-xs text-wg-muted leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Qué hacemos ── */}
        <section className="px-6 md:px-12 py-20" style={{ background: 'rgba(6,9,16,0.6)' }}>
          <div className="max-w-5xl mx-auto">
            <span className="section-label mb-4 block">Cómo lo abordamos</span>
            <h2 className="font-sans font-extrabold tracking-tight mb-4"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)', lineHeight: 1.1 }}>
              Tres pilares, un mismo sistema.
            </h2>
            <p className="text-wg-muted leading-relaxed max-w-2xl mb-12">
              Atraer, convertir y retener no son tres proveedores distintos. Cuando
              viven en la misma plataforma, cada etapa alimenta a la siguiente.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {pillars.map((p) => {
                const Icon = p.icon
                return (
                  <div key={p.label} className="card-surface rounded-4xl p-7">
                    <div className="w-11 h-11 rounded-2xl grid place-items-center mb-5"
                      style={{ background: 'rgba(6,147,227,0.12)' }}>
                      <Icon size={20} className="text-wg-blue" />
                    </div>
                    <h3 className="font-sans font-bold text-lg mb-2">{p.label}</h3>
                    <p className="text-sm text-wg-muted leading-relaxed">{p.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Cómo trabajamos ── */}
        <section className="px-6 md:px-12 py-20">
          <div className="max-w-3xl mx-auto">
            <span className="section-label mb-4 block">Nuestra forma de trabajar</span>
            <h2 className="font-sans font-extrabold tracking-tight mb-12"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)', lineHeight: 1.1 }}>
              Semanas, no trimestres.
            </h2>
            <div className="flex flex-col gap-4">
              {steps.map(([n, title, text]) => (
                <div key={n} className="card-surface rounded-4xl p-7 flex gap-5">
                  <span className="font-mono text-sm text-wg-blue flex-shrink-0 pt-1">{n}</span>
                  <div>
                    <h3 className="font-sans font-bold text-lg mb-1.5">{title}</h3>
                    <p className="text-sm text-wg-muted leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── En qué creemos ── */}
        <section className="px-6 md:px-12 py-20" style={{ background: 'rgba(6,9,16,0.6)' }}>
          <div className="max-w-3xl mx-auto">
            <span className="section-label mb-4 block">En qué creemos</span>
            <div className="wg-prose">
              <p>
                <strong>Que una cifra sin medición es una opinión.</strong> Cada
                implementación parte definiendo qué se va a medir. Si no aparece en el
                dashboard, no lo presentamos como resultado.
              </p>
              <p>
                <strong>Que la velocidad de respuesta es la ventaja competitiva más
                barata.</strong> Un negocio que contesta en un minuto le gana a uno que
                contesta en una hora, sin importar quién invierta más en publicidad.
              </p>
              <p>
                <strong>Que la automatización no reemplaza a las personas.</strong> Se
                encarga del recordatorio, el seguimiento y la calificación, para que tu
                equipo llegue a la conversación cuando ya vale la pena tenerla.
              </p>
              <p>
                <strong>Que sin compromisos forzados se trabaja mejor.</strong> No
                pedimos permanencia. Si el sistema no está aportando, no queremos
                retenerte con una cláusula.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-6 md:px-12 py-24 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-sans font-extrabold tracking-tight mb-5"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.08 }}>
              ¿Vemos tu proceso comercial juntos?
            </h2>
            <p className="text-wg-muted leading-relaxed mb-9">
              30 minutos, sin costo y sin compromiso. Salimos con un mapa de dónde se
              te están escapando los clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/#contacto" className="btn btn-primary text-base px-8 py-4 justify-center">
                Agenda tu demo gratis <ArrowUpRight size={18} />
              </Link>
              <a href={waHref('Hola, quiero conocer más sobre WebGuru')} target="_blank" rel="noopener noreferrer"
                className="btn btn-outline text-base px-8 py-4 justify-center">
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  )
}
