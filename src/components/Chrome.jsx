import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Menu, X, MapPin, Phone, Mail, Globe } from 'lucide-react'
import { CONTACT, waHref, NAV_LINKS } from '../lib/site'

/* Shared site chrome: navbar, footer and the floating WhatsApp button.
   Lives outside App.jsx so the standalone pages can reuse it without pulling
   the whole landing page in. */

/* ──────────────────────────────────────────
   NAVBAR
────────────────────────────────────────── */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  // In-page anchors only resolve on the landing page. Everywhere else they have
  // to navigate home first, so the browser can then jump to the hash.
  const anchor = id => (onHome ? `#${id}` : `/#${id}`)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80)
      if (menuOpen) setMenuOpen(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen])

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[calc(100%-2rem)] max-w-5xl rounded-full px-6 py-3
      ${scrolled || menuOpen || !onHome
        ? 'card-surface shadow-2xl shadow-black/50'
        : 'bg-black/40 backdrop-blur-md border border-white/10 shadow-lg shadow-black/30'}`}>
      <div className="flex items-center justify-between">
        <Link to="/" aria-label="WebGuru — ir al inicio">
          <img src="/webguru-logo-dark.webp" alt="WebGuru" className="h-8 w-auto" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(([l, id]) => (
            <a key={l} href={anchor(id)} className="text-sm font-medium text-white/80 hover:text-white transition-colors">{l}</a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href={anchor('precios')} className="hidden md:inline-flex btn btn-outline text-sm py-2 px-5">Ver planes</a>
          <a href={waHref('Quiero saber más de WebGuru')} target="_blank" rel="noopener noreferrer"
            className="btn btn-primary text-sm py-2 px-5">
            Agenda demo <ChevronRight size={14} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-3 -mr-1 grid place-items-center min-w-[44px] min-h-[44px]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-[400px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col gap-4 py-4 border-t border-white/10">
          {NAV_LINKS.map(([l, id]) => (
            <a key={l} href={anchor(id)} onClick={() => setMenuOpen(false)} className="text-base font-medium text-white/80 hover:text-white transition-colors py-1">{l}</a>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <a href={anchor('precios')} onClick={() => setMenuOpen(false)} className="btn btn-outline text-sm py-3 justify-center">Ver planes</a>
            <a href={waHref('Quiero saber más de WebGuru')} target="_blank" rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)} className="btn btn-primary text-sm py-3 justify-center">
              Agenda demo <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

/* ──────────────────────────────────────────
   FOOTER
────────────────────────────────────────── */
export function Footer() {
  const { pathname } = useLocation()
  const onHome = pathname === '/'
  const anchor = id => (onHome ? `#${id}` : `/#${id}`)

  // Names here now match the cards that actually exist in the Features section.
  const plataforma = [
    ['CRM Omnicanal', anchor('features')],
    ['Asistente IA 24/7', anchor('features')],
    ['Anti No-Show', anchor('features')],
    ['Sitios Web & Landings', anchor('features')],
    ['Automatizaciones', anchor('features')],
    ['Lead Generation', anchor('features')],
  ]
  const empresa = [
    ['Casos de éxito', anchor('testimonios')],
    ['Sobre nosotros', '/sobre-nosotros'],
    ['Partners', '/partners'],
    ['Precios', anchor('precios')],
    ['Términos', '/terminos'],
    ['Privacidad', '/privacidad'],
  ]

  const isRoute = href => href.startsWith('/') && !href.startsWith('/#')

  return (
    <footer className="bg-wg-darker rounded-t-5xl px-6 md:px-16 pt-16 pb-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="mb-4">
            <img src="/webguru-logo-dark.webp" alt="WebGuru" className="h-9 w-auto" />
          </div>
          <p className="text-wg-muted text-sm leading-relaxed max-w-xs mb-6">
            CRM + IA + Automatizaciones para negocios de servicios.<br />
            <span className="text-white/60 italic">Vende más con menos esfuerzo.</span>
          </p>
          <div className="flex flex-col gap-2 text-sm text-wg-muted">
            <div className="flex items-center gap-2"><MapPin size={13} /> {CONTACT.address}</div>
            <a className="flex items-center gap-2 hover:text-white transition-colors" href={`tel:+${CONTACT.whatsapp}`}>
              <Phone size={13} /> {CONTACT.phoneDisplay}
            </a>
            <a className="flex items-center gap-2 hover:text-white transition-colors" href={`mailto:${CONTACT.email}`}>
              <Mail size={13} /> {CONTACT.email}
            </a>
          </div>
        </div>

        {[['Plataforma', plataforma], ['Empresa', empresa]].map(([heading, items]) => (
          <div key={heading}>
            <h2 className="font-semibold text-sm mb-4">{heading}</h2>
            {/* py-2.5 keeps each row at a ~44px tap target without changing the
                column's visual rhythm. */}
            <ul className="-my-2 text-sm text-wg-muted">
              {items.map(([label, href]) => (
                <li key={label}>
                  {isRoute(href)
                    ? <Link to={href} className="hover:text-white transition-colors block py-2.5">{label}</Link>
                    : <a href={href} className="hover:text-white transition-colors block py-2.5">{label}</a>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-wg-muted">© {new Date().getFullYear()} WebGuru. Todos los derechos reservados.</p>
        <div className="flex items-center gap-2 font-mono text-xs text-wg-muted">
          <div className="relative w-2 h-2">
            <div className="absolute inset-0 rounded-full bg-emerald-400 ping-slow" />
            <div className="relative w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          Sistema operacional · 99.9% uptime
        </div>
        <div className="flex items-center gap-2 text-xs text-wg-muted">
          <Globe size={11} /> 35+ clientes · 9 países
        </div>
      </div>
    </footer>
  )
}

/* ──────────────────────────────────────────
   BOTÓN FLOTANTE DE WHATSAPP
────────────────────────────────────────── */
export function WhatsAppFab() {
  return (
    <a
      href={waHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid place-items-center rounded-full shadow-lg
                 transition-transform duration-300 hover:scale-105 focus-visible:outline-none
                 focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2
                 focus-visible:ring-offset-[#0A0E1A]"
      style={{
        width: 56, height: 56,                 // ≥44px tap target
        background: '#25D366',                 // official WhatsApp green
        boxShadow: '0 8px 28px rgba(37,211,102,0.35)',
      }}
    >
      {/* Official WhatsApp glyph (Simple Icons), inlined — no external request. */}
      <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff" aria-hidden="true" focusable="false">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.347-.347.52-.52.174-.174.232-.298.35-.497.116-.198.058-.371-.03-.52-.087-.148-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.375a9.861 9.861 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    </a>
  )
}

/* ──────────────────────────────────────────
   SHELL PARA PÁGINAS SUELTAS
────────────────────────────────────────── */
export function PageShell({ title, kicker, intro, updated, children }) {
  return (
    <>
      <Navbar />
      <main className="px-6 md:px-12 pt-36 pb-24">
        <article className="max-w-3xl mx-auto">
          {kicker && <span className="section-label mb-4 block">{kicker}</span>}
          <h1 className="font-sans font-extrabold tracking-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', lineHeight: 1.05 }}>
            {title}
          </h1>
          {intro && <p className="text-wg-muted text-lg leading-relaxed mb-4">{intro}</p>}
          {updated && (
            <p className="font-mono text-xs text-wg-muted/70 mb-12">Última actualización: {updated}</p>
          )}
          <div className="wg-prose">{children}</div>
        </article>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
