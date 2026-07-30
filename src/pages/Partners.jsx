import { Link } from 'react-router-dom'
import { ArrowUpRight, MessageSquare, Instagram, Facebook, Mail, Calendar, BarChart3, Share2, Bot } from 'lucide-react'
import { Navbar, Footer, WhatsAppFab } from '../components/Chrome'
import { waHref } from '../lib/site'
import { useSeo, useJsonLd, breadcrumb } from '../hooks/useSeo'

/* Deliberately phrased as "integramos con" rather than "somos partner oficial de".
   The landing page documents these integrations; official partner status with any
   of these vendors is a claim we cannot verify, so it is not made here. */

const integraciones = [
  { icon: MessageSquare, name: 'WhatsApp Business', text: 'Bandeja unificada, plantillas y automatizaciones de mensajería.' },
  { icon: Instagram, name: 'Instagram', text: 'DMs y comentarios centralizados en el mismo inbox.' },
  { icon: Facebook, name: 'Facebook', text: 'Messenger y formularios de leads conectados al CRM.' },
  { icon: Mail, name: 'Correo y email marketing', text: 'Campañas, secuencias y seguimiento automático.' },
  { icon: Calendar, name: 'Calendarios y agendamiento', text: 'Reservas, confirmaciones y recordatorios anti no-show.' },
  { icon: BarChart3, name: 'Plataformas publicitarias', text: 'Gestión de campañas y atribución de leads a su origen.' },
  { icon: Share2, name: 'ERP y sistemas de gestión', text: 'Sincronización de clientes, fichas y estados vía API.' },
  { icon: Bot, name: 'Modelos de IA conversacional', text: 'Asistentes que responden, califican y agendan 24/7.' },
]

const perfiles = [
  {
    title: 'Agencias de marketing',
    text: 'Ofrece CRM, automatizaciones y asistentes IA a tus clientes sin montar un equipo técnico. Nosotros implementamos y operamos; tú mantienes la relación comercial.',
  },
  {
    title: 'Consultores y freelancers',
    text: 'Si asesoras a clínicas o negocios de servicios y detectas procesos comerciales rotos, te derivamos la implementación y trabajamos con esquema de referidos.',
  },
  {
    title: 'Desarrolladores e integradores',
    text: 'Trabajamos con quienes ya mantienen el ERP o los sistemas internos del cliente, para conectar el CRM sin duplicar bases de datos.',
  },
]

export default function Partners() {
  useSeo({
    title: 'Partners y Programa de Referidos | WebGuru',
    description:
      'Integramos WhatsApp, Instagram, calendarios, ERP y modelos de IA. Programa de partners para agencias, consultores e integradores en Latinoamérica y España.',
    path: '/partners',
  })
  useJsonLd(breadcrumb([{ name: 'Partners', path: '/partners' }]), 'bc-partners')

  return (
    <>
      <Navbar />

      <main>
        {/* ── Encabezado ── */}
        <section className="px-6 md:px-12 pt-36 pb-16">
          <div className="max-w-4xl mx-auto">
            <span className="section-label mb-5 block">Partners</span>
            <h1 className="font-sans font-extrabold tracking-tight mb-7"
              style={{ fontSize: 'clamp(2.1rem, 5.5vw, 3.5rem)', lineHeight: 1.04 }}>
              Nos conectamos con<br />
              <span className="wg-gradient-text font-serif italic font-normal">lo que ya usas.</span>
            </h1>
            <p className="text-wg-muted text-lg leading-relaxed max-w-2xl">
              Un CRM sirve de poco si obliga a abandonar las herramientas con las que
              el negocio ya funciona. Por eso WebGuru se integra con los canales,
              calendarios y sistemas de gestión que tu equipo abre todos los días.
            </p>
          </div>
        </section>

        {/* ── Integraciones ── */}
        <section className="px-6 md:px-12 pb-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-sans font-extrabold tracking-tight mb-3"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)', lineHeight: 1.1 }}>
              Integraciones disponibles
            </h2>
            <p className="text-wg-muted leading-relaxed max-w-2xl mb-11">
              Más de 20 aplicaciones conectadas. Estas son las categorías que más nos
              piden; si usas algo que no está en la lista, lo revisamos en la
              consultoría.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {integraciones.map((it) => {
                const Icon = it.icon
                return (
                  <div key={it.name} className="card-surface rounded-4xl p-6">
                    <div className="w-10 h-10 rounded-xl grid place-items-center mb-4"
                      style={{ background: 'rgba(6,147,227,0.12)' }}>
                      <Icon size={18} className="text-wg-blue" />
                    </div>
                    <h3 className="font-sans font-bold text-sm mb-1.5">{it.name}</h3>
                    <p className="text-xs text-wg-muted leading-relaxed">{it.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Programa de partners ── */}
        <section className="px-6 md:px-12 py-20" style={{ background: 'rgba(6,9,16,0.6)' }}>
          <div className="max-w-5xl mx-auto">
            <span className="section-label mb-4 block">Programa de partners</span>
            <h2 className="font-sans font-extrabold tracking-tight mb-4"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)', lineHeight: 1.1 }}>
              Trabajemos juntos.
            </h2>
            <p className="text-wg-muted leading-relaxed max-w-2xl mb-12">
              Buscamos aliados que ya tengan la confianza de sus clientes y quieran
              sumar automatización sin construirla desde cero.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {perfiles.map(({ title, text }) => (
                <div key={title} className="card-surface rounded-4xl p-7">
                  <h3 className="font-sans font-bold text-lg mb-2.5">{title}</h3>
                  <p className="text-sm text-wg-muted leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Cómo funciona ── */}
        <section className="px-6 md:px-12 py-20">
          <div className="max-w-3xl mx-auto">
            <span className="section-label mb-4 block">Cómo funciona</span>
            <h2 className="font-sans font-extrabold tracking-tight mb-9"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)', lineHeight: 1.1 }}>
              Sin letra chica.
            </h2>
            <div className="wg-prose">
              <ol>
                <li><strong>Conversamos.</strong> Nos cuentas a qué tipo de clientes atiendes y dónde ves la oportunidad.</li>
                <li><strong>Definimos el esquema.</strong> Referidos, reventa o implementación conjunta, según cómo prefieras trabajar.</li>
                <li><strong>Te acompañamos en la primera venta.</strong> Entramos contigo a la reunión técnica si hace falta.</li>
                <li><strong>Implementamos y reportamos.</strong> Tú mantienes la relación con el cliente; nosotros ejecutamos y te damos visibilidad del avance.</li>
              </ol>
              <p>
                Las condiciones comerciales de cada esquema se acuerdan por escrito. Puedes
                revisar nuestros <Link to="/terminos">Términos y Condiciones</Link> y la{' '}
                <Link to="/privacidad">Política de Privacidad</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-6 md:px-12 py-24 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-sans font-extrabold tracking-tight mb-5"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.08 }}>
              Hablemos de una alianza.
            </h2>
            <p className="text-wg-muted leading-relaxed mb-9">
              Cuéntanos qué tipo de clientes atiendes y armamos un esquema que
              funcione para ambos.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={waHref('Hola, me interesa el programa de partners de WebGuru')}
                target="_blank" rel="noopener noreferrer"
                className="btn btn-primary text-base px-8 py-4 justify-center">
                Quiero ser partner <ArrowUpRight size={18} />
              </a>
              <Link to="/#contacto" className="btn btn-outline text-base px-8 py-4 justify-center">
                Enviar formulario
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  )
}
