import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  MessageSquare, Instagram, Facebook, Mail, Phone,
  Calendar, Bell, BarChart3, Zap, Bot,
  ChevronRight, Check, MapPin, ArrowUpRight, Globe,
  Star, Users, TrendingUp, Share2,
  Menu, X, ChevronDown, Plus, Minus,
  Target, Mic
} from 'lucide-react'
import Spline from '@splinetool/react-spline'

gsap.registerPlugin(ScrollTrigger)

/* ──────────────────────────────────────────
   NAVBAR
────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80)
      if (menuOpen) setMenuOpen(false) // Close menu on scroll
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen])

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[calc(100%-2rem)] max-w-5xl rounded-full px-6 py-3
      ${scrolled || menuOpen
        ? 'card-surface shadow-2xl shadow-black/50'
        : 'bg-black/40 backdrop-blur-md border border-white/10 shadow-lg shadow-black/30'}`}>
      <div className="flex items-center justify-between">
        <a href="#">
          <img src="/webguru-logo-dark.png" alt="WebGuru" className="h-8 w-auto" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {[['Plataforma', '#plataforma'], ['Proceso', '#proceso'], ['Precios', '#precios'], ['Contacto', '#contacto']].map(([l, h]) => (
            <a key={l} href={h} className="text-sm font-medium text-white/80 hover:text-white transition-colors hover:-translate-y-px inline-block">{l}</a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#precios" className="hidden md:inline-flex btn btn-outline text-sm py-2 px-5">Ver planes</a>
          <a href="https://api.whatsapp.com/send/?phone=56945613260&text=Quiero+saber+más+de+WebGuru"
            target="_blank" rel="noreferrer"
            className="btn btn-primary text-sm py-2 px-5">
            Agenda demo <ChevronRight size={14} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-[400px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col gap-4 py-4 border-t border-white/10">
          {[['Plataforma', '#plataforma'], ['Proceso', '#proceso'], ['Precios', '#precios'], ['Contacto', '#contacto']].map(([l, h]) => (
            <a key={l} href={h} onClick={() => setMenuOpen(false)} className="text-base font-medium text-white/80 hover:text-white transition-colors">{l}</a>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <a href="#precios" onClick={() => setMenuOpen(false)} className="btn btn-outline text-sm py-3 justify-center">Ver planes</a>
            <a href="https://api.whatsapp.com/send/?phone=56945613260&text=Quiero+saber+más+de+WebGuru"
              target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}
              className="btn btn-primary text-sm py-3 justify-center">
              Agenda demo <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

/* ──────────────────────────────────────────
   HERO
────────────────────────────────────────── */
function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-hero]', {
        y: 50, opacity: 0, duration: 1.1,
        ease: 'power3.out', stagger: 0.1, delay: 0.2,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative h-screen flex flex-col justify-end overflow-hidden">
      {/* Background with Spline 3D */}
      <div className="absolute inset-0 z-0 bg-[#060910] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Spline style={{ width: '100%', height: '100%', pointerEvents: 'auto' }} scene="https://prod.spline.design/IC8nRhZUIr6HQveG/scene.splinecode" />
        </div>

        {/* Dark overlays to ensure text legibility over the 3D model */}
        {/* Left-side dark fade */}
        <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #060910 0%, rgba(6,9,16,0.6) 20%, transparent 60%)' }} />
        {/* Bottom dark fade */}
        <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(to top, #060910 0%, rgba(6,9,16,0.85) 15%, transparent 50%)' }} />
        {/* Top edge subtle fade */}
        <div className="absolute inset-x-0 top-0 h-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(6,9,16,0.9) 0%, transparent 100%)' }} />
      </div>

      {/* Content locked to bottom-left */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 md:px-12 pb-14 md:pb-18 pointer-events-none">

        {/* The text container will ignore pointer events, but its INTERACTIVE children (buttons/links) will receive them */}
        <div data-hero className="mb-4">
          <span className="section-label">CRM · IA · Automatizaciones · 14 años de experiencia</span>
        </div>

        <h1 className="mb-5">
          <span data-hero className="block font-sans font-extrabold text-5xl md:text-6xl lg:text-[5rem] tracking-tight text-white leading-[1.02]">
            Vende más
          </span>
          <span data-hero className="block font-serif italic font-semibold text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] wg-gradient-text">
            con menos esfuerzo.
          </span>
        </h1>

        <p data-hero className="text-base md:text-lg text-wg-muted max-w-lg leading-relaxed mb-8">
          WebGuru reúne CRM, automatizaciones y asistentes IA en una sola plataforma.
          Capta, nutre y cierra más clientes — sin hojas de cálculo, sin procesos manuales.
        </p>

        <div data-hero className="flex flex-wrap gap-4 mb-8 pointer-events-auto">
          <a href="#contacto" className="btn btn-primary text-base px-8 py-4">
            Agenda tu demo gratis <ArrowUpRight size={16} />
          </a>
          <a href="#plataforma" className="btn btn-outline text-base px-8 py-4">
            Ver la plataforma
          </a>
        </div>

        {/* Inline stat chips — left side */}
        <div data-hero className="flex flex-wrap items-center gap-3">
          {[['35+', 'Clientes activos'], ['9', 'Países'], ['35%', 'Más leads calificados']].map(([stat, label]) => (
            <div key={stat} className="card-surface rounded-2xl px-4 py-2">
              <span className="font-mono text-sm font-bold wg-gradient-text mr-1.5">{stat}</span>
              <span className="text-xs text-wg-muted">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────
   VIDEO SCRUB — Los Tres Pilares
────────────────────────────────────────── */
function VideoScrub() {
  const wrapperRef = useRef(null)
  const videoRef = useRef(null)
  const [loaded, setLoaded] = useState(false)
  const [loadPct, setLoadPct] = useState(0)
  const [activePanel, setActivePanel] = useState(0)
  const seekPending = useRef(false)
  const pendingTime = useRef(null)

  const panels = [
    {
      label: '01 / Alcance',
      title: 'Más presencia,\nmás clientes.',
      sub: 'Sitios, landing pages y campañas que atraen prospectos calificados.',
    },
    {
      label: '02 / Conversión',
      title: 'IA que convierte\ncada contacto.',
      sub: 'CRM omnicanal, asistente IA 24/7 y automatizaciones que cierran ventas.',
    },
    {
      label: '03 / Retención',
      title: 'Clientes que\nvuelven solos.',
      sub: 'Seguimiento inteligente, reactivaciones y fidelización automática.',
    },
  ]

  // Track buffering progress and readiness
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onProgress = () => {
      if (video.buffered.length && video.duration) {
        setLoadPct(video.buffered.end(video.buffered.length - 1) / video.duration)
      }
    }
    const onReady = () => setLoaded(true)

    // loadeddata fires as soon as the first frame is decoded — much earlier
    // than canplaythrough, works on slow connections and strict browsers
    video.addEventListener('progress', onProgress)
    video.addEventListener('loadeddata', onReady)
    video.addEventListener('canplay', onReady)
    video.addEventListener('canplaythrough', onReady)
    if (video.readyState >= 2) setLoaded(true)

    return () => {
      video.removeEventListener('progress', onProgress)
      video.removeEventListener('loadeddata', onReady)
      video.removeEventListener('canplay', onReady)
      video.removeEventListener('canplaythrough', onReady)
    }
  }, [])

  // Wire scroll → video currentTime via rAF + seek queue (no stuck frames)
  useEffect(() => {
    const video = videoRef.current
    const wrapper = wrapperRef.current
    if (!video || !wrapper) return

    // When a seek finishes, immediately apply any queued position
    const onSeeked = () => {
      seekPending.current = false
      if (pendingTime.current !== null) {
        video.currentTime = pendingTime.current
        seekPending.current = true
        pendingTime.current = null
      }
    }
    video.addEventListener('seeked', onSeeked)

    let rafPending = false
    const update = () => {
      rafPending = false
      const totalHeight = wrapper.offsetHeight - window.innerHeight
      const scrolled = Math.max(0, -wrapper.getBoundingClientRect().top)
      const progress = Math.min(1, scrolled / totalHeight)

      // Panel swap
      const idx = progress >= 0.70 ? 2 : progress >= 0.38 ? 1 : 0
      setActivePanel(prev => prev === idx ? prev : idx)

      // Seek — queue pattern: only one seek in flight at a time.
      // Guard: don't seek if already at target (avoids seeked never firing at t=0)
      if (video.readyState >= 2 && video.duration) {
        const t = progress * video.duration
        if (!seekPending.current) {
          if (Math.abs(video.currentTime - t) > 0.001) {
            video.currentTime = t
            seekPending.current = true
          }
        } else {
          pendingTime.current = t
        }
      }
    }

    const onScroll = () => {
      if (!rafPending) {
        rafPending = true
        requestAnimationFrame(update)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      video.removeEventListener('seeked', onSeeked)
    }
  }, [])

  return (
    <section ref={wrapperRef} style={{ height: '200vh' }} className="relative">
      <div className="sticky top-0 bg-[#0A0E1A] overflow-hidden" style={{ height: '100svh' }}>

        {/* ── DESKTOP layout: cards left + video right ── */}
        <div className="hidden md:flex h-full items-center justify-center gap-12 lg:gap-24 w-full max-w-5xl mx-auto px-10">

          {/* Cards column */}
          <div className="flex flex-col gap-3 w-72 lg:w-80 flex-shrink-0">
            {panels.map((p, i) => (
              <div
                key={i}
                className="rounded-2xl px-5 py-4 transition-all duration-500"
                style={{
                  background: activePanel === i ? 'rgba(30,42,58,0.7)' : 'rgba(18,24,38,0.45)',
                  border: activePanel === i ? '1px solid rgba(123,97,255,0.4)' : '1px solid rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(16px)',
                  transform: activePanel === i ? 'scale(1.02)' : 'scale(0.98)',
                  boxShadow: activePanel === i ? '0 8px 32px rgba(123,97,255,0.12)' : 'none',
                }}
              >
                <span className="section-label mb-2 block">{p.label}</span>
                <h3
                  className="font-sans font-extrabold tracking-tight mb-1.5 transition-all duration-500"
                  style={{
                    fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: 1.1,
                    background: activePanel === i ? 'linear-gradient(135deg, #0693E3 0%, #9B51E0 100%)' : 'none',
                    WebkitBackgroundClip: activePanel === i ? 'text' : 'unset',
                    WebkitTextFillColor: activePanel === i ? 'transparent' : 'rgba(255,255,255,0.45)',
                    backgroundClip: activePanel === i ? 'text' : 'unset',
                    color: activePanel === i ? 'transparent' : 'rgba(255,255,255,0.45)',
                  }}
                >
                  {p.title.replace('\n', ' ')}
                </h3>
                <p className="text-xs leading-relaxed transition-all duration-500"
                  style={{ color: activePanel === i ? 'rgba(180,196,220,0.85)' : 'rgba(255,255,255,0.25)' }}>
                  {p.sub}
                </p>
              </div>
            ))}
            <div className="flex gap-2 pt-1 pl-1">
              {panels.map((_, i) => (
                <div key={i} className="rounded-full" style={{
                  height: '3px', width: activePanel === i ? '24px' : '8px',
                  background: activePanel === i ? '#7B61FF' : 'rgba(255,255,255,0.18)',
                  transition: 'all 0.4s ease',
                }} />
              ))}
            </div>
          </div>

          {/* Video */}
          <div className="flex-shrink-0 relative" style={{ width: 'min(52vh, 520px)', height: 'min(52vh, 520px)' }}>
            <video
              ref={videoRef}
              src="/pillars-scrub.mp4"
              preload="auto" muted playsInline disablePictureInPicture
              className={`w-full h-full object-cover transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
              style={{
                pointerEvents: 'none',
                maskImage: 'radial-gradient(ellipse 50% 54% at 50% 48%, black 10%, rgba(0,0,0,0.55) 38%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 50% 54% at 50% 48%, black 10%, rgba(0,0,0,0.55) 38%, transparent 100%)',
              }}
            />
            {!loaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-28 h-px bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.round(loadPct * 100)}%`, background: 'linear-gradient(to right, #0693E3, #9B51E0)' }} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── MOBILE layout: video top-half, active card bottom ── */}
        <div className="md:hidden flex flex-col h-full">

          {/* Video — top 55% of screen */}
          <div className="relative flex-shrink-0" style={{ height: '55svh' }}>
            <video
              ref={el => { if (el) videoRef.current = el }}
              src="/pillars-scrub.mp4"
              preload="auto" muted playsInline disablePictureInPicture
              className={`w-full h-full object-cover transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
              style={{
                pointerEvents: 'none',
                maskImage: 'radial-gradient(ellipse 70% 72% at 50% 46%, black 10%, rgba(0,0,0,0.5) 48%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 70% 72% at 50% 46%, black 10%, rgba(0,0,0,0.5) 48%, transparent 100%)',
              }}
            />
            {!loaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-px bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.round(loadPct * 100)}%`, background: 'linear-gradient(to right, #0693E3, #9B51E0)' }} />
                </div>
              </div>
            )}
          </div>

          {/* Active card — bottom 45% */}
          <div className="relative flex-1 flex flex-col justify-center px-6 pb-6">
            {panels.map((p, i) => (
              <div
                key={i}
                className="absolute inset-x-6 rounded-2xl px-5 py-5"
                style={{
                  top: '50%', transform: activePanel === i ? 'translateY(-50%)' : 'translateY(calc(-50% + 12px))',
                  opacity: activePanel === i ? 1 : 0,
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                  background: 'rgba(30,42,58,0.75)',
                  border: '1px solid rgba(123,97,255,0.35)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                <span className="section-label mb-2 block">{p.label}</span>
                <h3 className="font-sans font-extrabold tracking-tight wg-gradient-text mb-2"
                  style={{ fontSize: '1.25rem', lineHeight: 1.1 }}>
                  {p.title.replace('\n', ' ')}
                </h3>
                <p className="text-xs text-wg-muted leading-relaxed">{p.sub}</p>
              </div>
            ))}

            {/* Progress pills */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {panels.map((_, i) => (
                <div key={i} className="rounded-full" style={{
                  height: '3px', width: activePanel === i ? '24px' : '8px',
                  background: activePanel === i ? '#7B61FF' : 'rgba(255,255,255,0.18)',
                  transition: 'all 0.4s ease',
                }} />
              ))}
            </div>
          </div>
        </div>

        {/* Edge fades (both breakpoints) */}
        <div className="absolute inset-x-0 top-0 h-16 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to bottom, #0A0E1A, transparent)' }} />
        <div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to top, #0A0E1A, transparent)' }} />
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────
   CLIENT LOGOS
────────────────────────────────────────── */
function ClientLogos() {
  const logos = Array.from({ length: 19 }, (_, i) => i + 1)

  return (
    <section className="py-10 overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-6">
        <span className="section-label">Confían en WebGuru · 35+ clientes en 9 países</span>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #0A0E1A, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #0A0E1A, transparent)' }} />
        <div className="marquee-track items-center gap-10 px-4">
          {[...logos, ...logos].map((n, i) => (
            <img
              key={i}
              src={`/logos/${n}.png`}
              alt=""
              className="h-8 md:h-10 w-auto object-contain flex-shrink-0 transition-all duration-300"
              style={{ filter: 'brightness(0) invert(1)', opacity: 0.35 }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.75' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '0.35' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────
   PILLARS — Alcance · Conversión · Retención
────────────────────────────────────────── */
function Pillars() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-pillar]', {
        y: 50, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.15,
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const pillars = [
    {
      num: '01', name: 'Alcance', color: '#0693E3', Icon: Globe,
      desc: 'Atrae más clientes potenciales con presencia digital, campañas y sitios que convierten.',
      features: [
        'Sitios web & Landing pages',
        'Email Marketing',
        'Gestión de Ads (Meta / Google)',
        'SEO y presencia digital',
      ],
    },
    {
      num: '02', name: 'Conversión', color: '#9B51E0', Icon: Zap,
      desc: 'Convierte prospectos en clientes con IA, CRM omnicanal y automatizaciones inteligentes.',
      features: [
        'CRM omnicanal (WhatsApp, IG, FB, Email)',
        'Asistente IA 24/7',
        'Automatizaciones personalizadas',
        'Integraciones (ERP, calendarios, etc.)',
      ],
    },
    {
      num: '03', name: 'Retención', color: '#0693E3', Icon: Users,
      desc: 'Mantén a tus clientes activos y fieles con seguimiento automatizado y experiencias personalizadas.',
      features: [
        'Anti No-Show (reduce ausencias 40%)',
        'Recordatorios de tratamientos',
        'Reactivaciones automáticas',
        'Dashboard y reportes en tiempo real',
      ],
    },
  ]

  return (
    <section ref={ref} id="plataforma" className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div data-pillar className="mb-14 max-w-2xl">
          <span className="section-label mb-3 block">Los 3 pilares</span>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight leading-none mb-4">
            Una plataforma.<br />
            <span className="font-serif italic font-semibold wg-gradient-text">Tres pilares de crecimiento.</span>
          </h2>
          <p className="text-wg-muted text-lg leading-relaxed">
            WebGuru no es solo un CRM — es un sistema completo para atraer, convertir y retener clientes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div key={i} data-pillar className="card-surface rounded-4xl p-8 flex flex-col gap-5"
              style={{ borderColor: p.color + '30' }}>
              <div>
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: p.color + '18', border: `1px solid ${p.color}35` }}>
                  <p.Icon size={20} style={{ color: p.color }} />
                </div>
                <div className="font-mono text-xs mb-2" style={{ color: p.color }}>PILAR {p.num}</div>
                <h3 className="font-sans font-extrabold text-3xl tracking-tight mb-3" style={{ color: p.color }}>
                  {p.name}
                </h3>
                <p className="text-wg-muted text-sm leading-relaxed">{p.desc}</p>
              </div>
              <ul className="space-y-2.5 mt-auto">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check size={13} className="flex-shrink-0 mt-0.5" style={{ color: p.color }} />
                    <span className="text-white/70">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────
   FEATURE CARDS
────────────────────────────────────────── */

/* Card 1 — CRM Omnicanal (Shuffler) */
function ShufflerCard() {
  const channels = [
    { icon: MessageSquare, label: 'WhatsApp', color: '#25D366', count: '+12 mensajes nuevos' },
    { icon: Instagram, label: 'Instagram', color: '#E1306C', count: '+5 DMs sin leer' },
    { icon: Facebook, label: 'Facebook', color: '#1877F2', count: '+8 comentarios' },
    { icon: Mail, label: 'Email', color: '#0693E3', count: '+3 leads entrantes' },
  ]
  const [items, setItems] = useState(channels)

  useEffect(() => {
    const t = setInterval(() => {
      setItems(prev => { const n = [...prev]; n.unshift(n.pop()); return n })
    }, 2200)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="card-surface rounded-4xl p-6 flex-1 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg">CRM Omnicanal</h3>
        <span className="section-label">Bandeja unificada</span>
      </div>
      <p className="text-sm text-wg-muted leading-relaxed">
        WhatsApp, Instagram, Facebook y correo en un solo inbox. Nunca pierdas un lead por cambiar de app.
      </p>
      <div className="flex-1 flex flex-col gap-2 mt-1">
        {items.slice(0, 3).map((ch, i) => {
          const Icon = ch.icon
          return (
            <div key={ch.label} style={{
              transition: 'all 0.55s cubic-bezier(0.34,1.56,0.64,1)',
              opacity: 1 - i * 0.22,
              transform: `translateY(${i * 2}px) scale(${1 - i * 0.025})`,
            }} className="flex items-center gap-3 bg-wg-dark/60 rounded-2xl p-3 border border-white/5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: ch.color + '22' }}>
                <Icon size={18} style={{ color: ch.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold">{ch.label}</div>
                <div className="text-xs text-wg-muted truncate">{ch.count}</div>
              </div>
              <div className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* Card 2 — Asistente IA (WhatsApp UI) */
const WA_CONVO = [
  { from: 'lead', text: 'Hola! Quiero info sobre tratamientos de ortodoncia 😊', time: '10:31' },
  { from: 'ia', text: 'Hola! Claro que sí 😄 ¿Tienes preferencia de día para tu primera consulta?', time: '10:31' },
  { from: 'lead', text: 'Esta semana si es posible, de preferencia jueves o viernes', time: '10:32' },
  { from: 'ia', text: 'Perfecto, te agendo una consulta gratuita 📅', time: '10:32' },
  { from: 'ia', text: '✅ Cita confirmada — Jueves 10:30 AM\nTe enviaré un recordatorio mañana.', time: '10:32', confirm: true },
]

function TypewriterCard() {
  const [shown, setShown] = useState([])
  const [typing, setTyping] = useState(false)

  useEffect(() => {
    let cancelled = false
    const run = async () => {
      setShown([])
      for (let i = 0; i < WA_CONVO.length; i++) {
        if (cancelled) return
        setTyping(true)
        await new Promise(r => setTimeout(r, WA_CONVO[i].from === 'ia' ? 900 : 600))
        if (cancelled) return
        setTyping(false)
        setShown(prev => [...prev, WA_CONVO[i]])
        await new Promise(r => setTimeout(r, 400))
      }
      await new Promise(r => setTimeout(r, 3000))
      if (!cancelled) run()
    }
    run()
    return () => { cancelled = true }
  }, [])


  return (
    <div className="card-surface rounded-4xl p-6 flex-1 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg">Asistente IA 24/7</h3>
        <div className="flex items-center gap-2 section-label">
          <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot inline-block" />
          Live
        </div>
      </div>
      <p className="text-sm text-wg-muted leading-relaxed">
        Responde, califica y agenda automáticamente. Sin intervención humana, a cualquier hora.
      </p>

      {/* WhatsApp shell */}
      <div className="flex-1 flex flex-col rounded-2xl overflow-hidden min-h-0" style={{ background: '#0b141a' }}>
        {/* WA header */}
        <div className="flex items-center gap-2.5 px-3 py-2 flex-shrink-0" style={{ background: '#202c33' }}>
          <div className="w-8 h-8 rounded-full wg-gradient flex items-center justify-center flex-shrink-0">
            <Bot size={14} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-white leading-none">WebGuru IA</div>
            <div className="text-[10px] text-emerald-400 mt-0.5">
              {typing ? 'escribiendo...' : 'en línea'}
            </div>
          </div>
          <Phone size={13} className="text-wg-muted" />
        </div>

        {/* Messages */}
        <div className="flex-1 flex flex-col justify-end gap-1.5 p-3 overflow-hidden">
          {shown.map((msg, i) => (
            <div key={i} className={`flex msg-in ${msg.from === 'ia' ? 'justify-start' : 'justify-end'}`}>
              <div className="max-w-[85%] px-3 py-1.5 text-[11px] leading-relaxed"
                style={{
                  background: msg.confirm ? 'rgba(0,92,75,0.6)' : msg.from === 'ia' ? '#202c33' : '#005c4b',
                  borderRadius: msg.from === 'ia' ? '2px 12px 12px 12px' : '12px 2px 12px 12px',
                  border: msg.confirm ? '1px solid rgba(52,211,153,0.3)' : 'none',
                }}>
                <div className="text-white/90 whitespace-pre-line">{msg.text}</div>
                <div className="text-[9px] text-white/35 text-right mt-0.5 flex items-center justify-end gap-1">
                  {msg.time}
                  {msg.from === 'ia' && <span className="text-wg-blue text-[10px]">✓✓</span>}
                </div>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {typing && (
            <div className="flex justify-start msg-in">
              <div className="px-3 py-2.5 flex items-center gap-1" style={{ background: '#202c33', borderRadius: '2px 12px 12px 12px' }}>
                {[0, 150, 300].map(d => (
                  <span key={d} className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce"
                    style={{ animationDelay: `${d}ms`, animationDuration: '0.8s' }} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* Card 3 — Anti No-Show (30-day calendar) */
function delay(ms) { return new Promise(r => setTimeout(r, ms)) }

// March 2025: starts on Saturday (index 5 in L-M-X-J-V-S-D)
const CAL_DAYS = ['L', 'M', 'X', 'J', 'V', 'S', 'D']
const CAL_OFFSET = 5   // March 1 = Saturday
const CAL_TOTAL = 31
const CAL_BUSY = [3, 7, 10, 14, 18, 22, 24, 28]  // greyed-out already-booked days

function SchedulerCard() {
  const [hovered, setHovered] = useState(null)
  const [selected, setSelected] = useState(null)
  const [confirming, setConfirming] = useState(false)
  const [confirmed, setConfirmed] = useState(false)

  useEffect(() => {
    let cancelled = false
    const run = async () => {
      if (cancelled) return
      setHovered(null); setSelected(null); setConfirming(false); setConfirmed(false)
      await new Promise(r => setTimeout(r, 800))
      // Hover journey
      for (const d of [8, 12, 17, 20]) {
        if (cancelled) return
        setHovered(d); await new Promise(r => setTimeout(r, 420))
      }
      setHovered(null)
      // Select day 20
      setSelected(20); await new Promise(r => setTimeout(r, 600))
      setConfirming(true); await new Promise(r => setTimeout(r, 900))
      setConfirmed(true); await new Promise(r => setTimeout(r, 2800))
      if (!cancelled) run()
    }
    run()
    return () => { cancelled = true }
  }, [])

  const cells = []
  for (let i = 0; i < CAL_OFFSET; i++) cells.push(null)
  for (let d = 1; d <= CAL_TOTAL; d++) cells.push(d)

  return (
    <div className="card-surface rounded-4xl p-6 flex-1 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg">Anti No-Show</h3>
        <span className="section-label">Recordatorios auto</span>
      </div>
      <p className="text-sm text-wg-muted leading-relaxed">
        Reduce ausencias hasta un 40% con recordatorios inteligentes por WhatsApp, SMS y email.
      </p>

      {/* Calendar */}
      <div className="flex-1 flex flex-col gap-2">
        {/* Month header */}
        <div className="flex items-center justify-between px-0.5">
          <span className="text-[10px] font-bold text-wg-muted">‹</span>
          <span className="text-xs font-semibold text-white/75 tracking-wide">Marzo 2025</span>
          <span className="text-[10px] font-bold text-wg-muted">›</span>
        </div>

        {/* Weekday labels */}
        <div className="grid grid-cols-7 gap-0.5">
          {CAL_DAYS.map(d => (
            <div key={d} className="text-[9px] text-center font-bold text-wg-muted/60 py-0.5">{d}</div>
          ))}
        </div>

        {/* Day grid */}
        <div className="grid grid-cols-7 gap-0.5 flex-1">
          {cells.map((day, i) => {
            const isBusy = day && CAL_BUSY.includes(day)
            const isHovered = day === hovered
            const isSelected = day === selected
            const isPast = day && day < 8
            return (
              <div key={i}
                style={{
                  transition: 'all 0.28s cubic-bezier(0.34,1.56,0.64,1)',
                  transform: isSelected ? 'scale(1.18)' : isHovered ? 'scale(1.08)' : 'scale(1)',
                }}
                className={`aspect-square rounded-lg flex items-center justify-center text-[10px] font-semibold
                  ${!day ? '' :
                    isSelected ? 'wg-gradient text-white shadow-md shadow-wg-blue/40' :
                      isHovered ? 'bg-wg-blue/20 text-wg-blue ring-1 ring-wg-blue/50' :
                        isBusy ? 'bg-wg-darker/80 text-wg-muted/30 line-through' :
                          isPast ? 'text-wg-muted/25' :
                            'bg-wg-slate/20 text-wg-muted/70'
                  }`}>
                {day}
              </div>
            )
          })}
        </div>

        {/* Status bar */}
        <div className={`transition-all duration-500 rounded-xl px-3 py-2 text-xs font-medium text-center flex-shrink-0
          ${confirmed ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-400' :
            confirming ? 'bg-wg-blue/10 border border-wg-blue/30 text-wg-blue' :
              selected ? 'bg-wg-purple/10 border border-wg-purple/30 text-wg-muted' :
                'bg-wg-slate/20 border border-white/5 text-wg-muted/50'}`}>
          {confirmed
            ? '✓ Recordatorio enviado — 20 de Marzo, 10:30 AM'
            : confirming
              ? '⏳ Agendando cita...'
              : selected
                ? `Jueves 20 de Marzo seleccionado`
                : 'Selecciona una fecha'}
        </div>
      </div>
    </div>
  )
}

/* Card 4 — Sitios Web & Landings */
function WebsiteCard() {
  const steps = [
    { label: 'Añadiendo hero…', w: 100, w2: 72, w3: 55 },
    { label: 'Sección de servicios…', w: 85, w2: 60, w3: 45 },
    { label: 'Formulario de contacto…', w: 90, w2: 50, w3: 70 },
    { label: '✓ Sitio publicado en vivo', w: 100, w2: 80, w3: 65 },
  ]
  const [step, setStep] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % steps.length), 1800)
    return () => clearInterval(t)
  }, [])

  const s = steps[step]

  return (
    <div className="card-surface rounded-4xl p-6 flex-1 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg">Sitios Web & Landings</h3>
        <span className="section-label">Sin código</span>
      </div>
      <p className="text-sm text-wg-muted leading-relaxed">
        Crea sitios, landing pages y funnels de alta conversión. Sin programar, con tu marca.
      </p>
      <div className="flex-1 flex flex-col gap-3 mt-1">
        <div className="bg-wg-darker rounded-2xl overflow-hidden border border-white/5">
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5">
            <div className="w-2 h-2 rounded-full bg-red-400/40" />
            <div className="w-2 h-2 rounded-full bg-yellow-400/40" />
            <div className="w-2 h-2 rounded-full bg-emerald-400/60" />
            <div className="mx-2 flex-1 bg-wg-slate/30 rounded-full px-2 py-0.5 font-mono text-[9px] text-wg-muted truncate">
              tusitio.webguru.cl
            </div>
          </div>
          <div className="p-3 space-y-1.5">
            <div className="h-5 rounded-lg transition-all duration-700 ease-in-out" style={{ width: `${s.w}%`, background: 'rgba(6,147,227,0.25)' }} />
            <div className="h-2.5 rounded transition-all duration-700 ease-in-out" style={{ width: `${s.w2}%`, background: 'rgba(255,255,255,0.06)' }} />
            <div className="h-2.5 rounded transition-all duration-700 ease-in-out" style={{ width: `${s.w3}%`, background: 'rgba(255,255,255,0.04)' }} />
            <div className="h-2.5 rounded transition-all duration-700 ease-in-out" style={{ width: `${s.w2 * 0.9}%`, background: 'rgba(155,81,224,0.12)' }} />
          </div>
        </div>
        <div className="font-mono text-xs text-center text-wg-blue/80 h-4 transition-all duration-300">{s.label}</div>
      </div>
    </div>
  )
}

/* Card 5 — Automatizaciones personalizadas */
function AutomationCard() {
  const [active, setActive] = useState(0)
  const nodes = [
    { icon: Bell, label: 'Cita agendada', sub: 'Trigger automático', color: '#0693E3' },
    { icon: MessageSquare, label: 'Recordatorio enviado', sub: '+24 h por WhatsApp', color: '#9B51E0' },
    { icon: Calendar, label: 'Confirmación recibida', sub: 'Lead etapa 2', color: '#0693E3' },
    { icon: Star, label: 'Reseña solicitada', sub: '+7 días post-cita', color: '#9B51E0' },
  ]

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % nodes.length), 1200)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="card-surface rounded-4xl p-6 flex-1 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg">Automatizaciones</h3>
        <span className="section-label">Personalizadas</span>
      </div>
      <p className="text-sm text-wg-muted leading-relaxed">
        Mantenciones, tratamientos, reactivaciones — el sistema trabaja por ti sin olvidar nada.
      </p>
      <div className="flex-1 flex flex-col gap-2 justify-center">
        {nodes.map((n, i) => {
          const Icon = n.icon
          const isActive = i === active
          const isDone = i < active
          return (
            <div key={i}
              className="flex items-center gap-3 transition-all duration-300"
              style={{ opacity: isDone ? 0.4 : isActive ? 1 : 0.22 }}>
              <div className="relative w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                style={{
                  background: isActive ? n.color + '25' : 'rgba(255,255,255,0.04)',
                  transform: isActive ? 'scale(1.15)' : 'scale(1)',
                  boxShadow: isActive ? `0 0 12px ${n.color}50` : 'none',
                }}>
                <Icon size={13} style={{ color: isActive ? n.color : '#8899AA' }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className={`text-xs font-semibold truncate ${isActive ? 'text-white' : 'text-wg-muted'}`}>{n.label}</div>
                <div className="text-[10px] text-wg-muted/50">{n.sub}</div>
              </div>
              {isDone && <Check size={11} className="flex-shrink-0 text-emerald-400" />}
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* Card 6 — Marketing & Integraciones */
function IntegrationsCard() {
  const [activeIdx, setActiveIdx] = useState(0)
  const items = [
    { name: 'Meta Ads Manager', color: '#1877F2' },
    { name: 'Google Ads & Analytics', color: '#4285F4' },
    { name: 'Email Marketing', color: '#0693E3' },
    { name: 'WhatsApp Business', color: '#25D366' },
    { name: 'ERP / Calendario', color: '#9B51E0' },
    { name: 'Zapier / Make', color: '#FF6B35' },
  ]

  useEffect(() => {
    const t = setInterval(() => setActiveIdx(a => (a + 1) % items.length), 900)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="card-surface rounded-4xl p-6 flex-1 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg">Marketing & Integraciones</h3>
        <span className="section-label">+20 apps</span>
      </div>
      <p className="text-sm text-wg-muted leading-relaxed">
        Gestión de Ads, email marketing, ERP, calendarios y más — todo conectado a WebGuru.
      </p>
      <div className="flex-1 flex flex-col gap-1.5 justify-center">
        {items.map((item, i) => (
          <div key={i}
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all duration-300"
            style={{
              background: activeIdx === i ? item.color + '12' : 'transparent',
              transform: activeIdx === i ? 'translateX(5px)' : 'none',
            }}>
            <div className="w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300"
              style={{
                background: activeIdx === i ? item.color : 'rgba(136,153,170,0.25)',
                transform: activeIdx === i ? 'scale(1.6)' : 'scale(1)',
              }} />
            <span className="text-xs font-medium transition-colors duration-300"
              style={{ color: activeIdx === i ? '#F4F6FA' : '#8899AA' }}>
              {item.name}
            </span>
            {activeIdx === i && <Check size={10} className="ml-auto text-emerald-400 flex-shrink-0" />}
          </div>
        ))}
      </div>
    </div>
  )
}

/* Card 7 — Lead Generation */
function LeadGenCard() {
  const [scanned, setScanned] = useState(0)
  const contacts = [
    { title: 'Gerente General - ABC1', email: true, phone: true },
    { title: 'Dueño - Clínica Dental', email: true, phone: false },
    { title: 'Tomador de Decisión - B2B', email: true, phone: true },
    { title: 'Director Comercial - Tech', email: false, phone: true },
  ]

  useEffect(() => {
    const t = setInterval(() => setScanned(s => (s + 1) % (contacts.length + 1)), 1600)
    return () => clearInterval(t)
  }, [contacts.length])

  return (
    <div className="card-surface rounded-4xl p-6 flex-1 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg">Lead Generation</h3>
        <span className="section-label">B2B / Directo</span>
      </div>
      <p className="text-sm text-wg-muted leading-relaxed">
        Encontramos emails y números telefónicos de tomadores de decisiones o estrato ABC1 para campañas precisas de Email y WhatsApp.
      </p>
      <div className="flex-1 relative flex flex-col justify-center gap-2 mt-2 bg-wg-darker/50 rounded-2xl p-3 border border-white/5 overflow-hidden">
        {/* Scanner line */}
        <div className="absolute left-0 right-0 h-10 opacity-10 blur-xl pointer-events-none transition-all duration-700 ease-in-out"
          style={{ top: `${(scanned / contacts.length) * 100}%`, transform: 'translateY(-50%)', background: '#0693E3' }} />
        <div className="absolute left-0 right-0 h-[1px] bg-wg-blue/40 shadow-[0_0_8px_rgba(6,147,227,0.8)] pointer-events-none transition-all duration-700 ease-in-out z-10"
          style={{ top: `${(scanned / contacts.length) * 100}%` }} />

        {contacts.map((c, i) => {
          const isScanned = scanned > i
          return (
            <div key={i} className={`relative z-0 flex items-center justify-between p-2.5 rounded-xl border transition-all duration-500 ${isScanned ? 'bg-wg-blue/10 border-wg-blue/20' : 'bg-transparent border-white/5'}`}>
              <div className="flex items-center gap-2.5">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-500 ${isScanned ? 'bg-wg-blue/20 text-wg-blue' : 'bg-wg-slate/20 text-wg-muted/50'}`}>
                  <Target size={12} />
                </div>
                <div className={`text-[11px] font-medium transition-colors duration-500 ${isScanned ? 'text-white' : 'text-wg-muted'}`}>{c.title}</div>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={12} className={`transition-all duration-500 ${isScanned && c.email ? 'text-emerald-400 scale-100' : 'text-wg-muted/20 scale-75'}`} />
                <Phone size={12} className={`transition-all duration-500 ${isScanned && c.phone ? 'text-emerald-400 scale-100' : 'text-wg-muted/20 scale-75'}`} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* Card 8 — Gestión Reputacional */
function ReputationCard() {
  const [reviews, setReviews] = useState([])
  const [rating, setRating] = useState(4.2)
  const [count, setCount] = useState(124)

  useEffect(() => {
    let cancelled = false
    const run = async () => {
      setReviews([])
      setRating(4.2)
      setCount(124)
      await new Promise(r => setTimeout(r, 1000))

      const newReviews = [
        { name: 'María S.', plat: 'Google Maps' },
        { name: 'Juan P.', plat: 'Google Maps' },
        { name: 'Ana V.', plat: 'TripAdvisor' }
      ]

      for (let i = 0; i < newReviews.length; i++) {
        if (cancelled) return
        setReviews(prev => [newReviews[i], ...prev])
        setRating(r => Math.min(4.9, r + 0.3))
        setCount(c => c + 1)
        await new Promise(r => setTimeout(r, 1600))
      }

      await new Promise(r => setTimeout(r, 3000))
      if (!cancelled) run()
    }
    run()
    return () => { cancelled = true }
  }, [])

  return (
    <div className="card-surface rounded-4xl p-6 flex-1 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg">Gestión Reputacional</h3>
        <span className="section-label">Automático</span>
      </div>
      <p className="text-sm text-wg-muted leading-relaxed">
        Maximizamos la cantidad de reseñas de 5 estrellas en Google Maps y TripAdvisor para disparar tu prueba social.
      </p>

      <div className="flex-1 flex flex-col gap-3 mt-2">
        <div className="flex items-center justify-between bg-wg-darker/80 p-4 rounded-3xl border border-white/5">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-sans font-extrabold tracking-tighter text-white transition-all duration-500">
              {rating.toFixed(1)}
            </div>
            <div className="flex gap-0.5 mt-1">
              {[1, 2, 3, 4, 5].map(s => (
                <Star key={s} size={11} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-white transition-all duration-500">+{count}</div>
            <div className="text-[10px] uppercase tracking-wider text-wg-muted">Reseñas Totales</div>
          </div>
        </div>

        <div className="flex flex-col gap-2 relative h-[100px] overflow-hidden" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)' }}>
          {reviews.map((rev, i) => (
            <div key={i + rev.name} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-2.5 transition-all duration-300 transform scale-100 opacity-100">
              <div className="w-8 h-8 rounded-full bg-emerald-400/20 flex items-center justify-center flex-shrink-0">
                <Star size={12} className="fill-emerald-400 text-emerald-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-white/90">Nueva reseña 5 estrellas</div>
                <div className="text-[10px] text-wg-muted truncate">{rev.name} en {rev.plat}</div>
              </div>
            </div>
          ))}
          {reviews.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center text-xs text-wg-muted/40 font-medium">
              Esperando testimonios...
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* Card 9 — IA en Llamadas */
function AIMeetingCard() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    'Transcribiendo...',
    'Evaluando protocolo...',
    'Aplicando checks...',
    'Resumen generado'
  ]

  const checks = [
    { label: 'Saludo y calificación', time: 1 },
    { label: 'Manejo de objeción', time: 2 },
    { label: 'Cierre de la venta', time: 3 },
  ]

  useEffect(() => {
    let cancelled = false
    const run = async () => {
      setActiveStep(0)
      await new Promise(r => setTimeout(r, 1200))

      for (let i = 1; i <= checks.length + 1; i++) {
        if (cancelled) return
        setActiveStep(i)
        await new Promise(r => setTimeout(r, 1400))
      }

      await new Promise(r => setTimeout(r, 3000))
      if (!cancelled) run()
    }
    run()
    return () => { cancelled = true }
  }, [])

  return (
    <div className="card-surface rounded-4xl p-6 flex-1 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg">IA Auditor en Llamadas</h3>
        <div className="flex items-center gap-2 section-label">
          <Mic size={10} className="text-red-400 animate-pulse" />
          Live
        </div>
      </div>
      <p className="text-sm text-wg-muted leading-relaxed">
        Se suma a tus reuniones, transcribe, hace resumen automáticamente y audita si tu equipo sigue tus lineamientos métricos.
      </p>

      <div className="flex-1 bg-wg-dark/60 rounded-2xl border border-white/5 overflow-hidden flex flex-col mt-2">
        <div className="px-3 py-2 bg-wg-darker border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded wg-gradient flex items-center justify-center">
              <Bot size={11} className="text-white" />
            </div>
            <span className="text-[10px] font-semibold text-white/80">Reunión con Cliente</span>
          </div>
          <span className="text-[9px] font-mono text-wg-blue">{steps[Math.min(activeStep, steps.length - 1)]}</span>
        </div>

        <div className="p-3 flex flex-col gap-3 relative flex-1">
          <div className="flex items-center justify-center h-5 gap-0.5 opacity-50 overflow-hidden">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-1 bg-emerald-400 rounded-full transition-all duration-200"
                style={{
                  height: activeStep < 4 ? `${Math.max(10, Math.random() * 100)}%` : '10%',
                }}
              />
            ))}
          </div>

          <div className="flex flex-col gap-2 mt-auto">
            <div className="text-[9px] font-semibold tracking-wider text-wg-muted/60 uppercase mb-0.5 line-through">Protocolo Auditable</div>
            {checks.map((chk, i) => {
              const passed = activeStep >= chk.time
              return (
                <div key={i} className={`flex items-center gap-2 text-[10px] transition-all duration-300 ${passed ? 'text-white/90' : 'text-wg-muted/30'}`}>
                  <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-300 ${passed ? 'bg-emerald-500/20 shadow-[0_0_8px_rgba(52,211,153,0.3)] text-emerald-400' : 'bg-transparent border border-white/10 text-transparent'}`}>
                    <Check size={8} />
                  </div>
                  {chk.label}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Features section wrapper ── */
function Features() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-feat]', {
        y: 60, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="features" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      <div data-feat className="mb-12 max-w-2xl">
        <span className="section-label mb-3 block">Herramientas</span>
        <h2 className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight leading-none mb-4">
          Todo lo que necesitas<br />
          <span className="font-serif italic font-semibold wg-gradient-text">en un solo lugar.</span>
        </h2>
        <p className="text-wg-muted text-lg leading-relaxed">
          No más cambiar entre apps. WebGuru centraliza cada touchpoint de cliente en una plataforma que trabaja por ti.
        </p>
      </div>
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 items-stretch">
        <div data-feat className="min-h-[420px] flex flex-col"><ShufflerCard /></div>
        <div data-feat className="min-h-[420px] flex flex-col"><TypewriterCard /></div>
        <div data-feat className="min-h-[420px] flex flex-col"><SchedulerCard /></div>
      </div>
      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-6">
        <div data-feat className="min-h-[420px] flex flex-col"><WebsiteCard /></div>
        <div data-feat className="min-h-[420px] flex flex-col"><AutomationCard /></div>
        <div data-feat className="min-h-[420px] flex flex-col"><IntegrationsCard /></div>
      </div>
      {/* Row 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        <div data-feat className="min-h-[420px] flex flex-col"><LeadGenCard /></div>
        <div data-feat className="min-h-[420px] flex flex-col"><ReputationCard /></div>
        <div data-feat className="min-h-[420px] flex flex-col"><AIMeetingCard /></div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────
   PHILOSOPHY
────────────────────────────────────────── */
function Philosophy() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-phil]', {
        y: 40, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.2,
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
          alt="" className="w-full h-full object-cover opacity-8" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #060910 0%, #0A0E1A 50%, #060910 100%)' }} />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        <div data-phil><span className="section-label mb-6 block">Filosofía</span></div>
        <p data-phil className="text-wg-muted text-xl md:text-2xl font-medium mb-8 leading-relaxed">
          La mayoría de los negocios de servicios pierde ventas por:{' '}
          <span className="text-white">respuestas tardías, seguimiento manual y cero automatización.</span>
        </p>
        <h2 data-phil className="font-sans font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-16">
          Nosotros nos enfocamos en{' '}
          <span className="font-serif italic font-semibold wg-gradient-text">sistemas que venden por ti.</span>
        </h2>
        <div data-phil className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: TrendingUp, stat: '35%', label: 'Más leads calificados', sub: 'Caso Autofin — primer mes' },
            { icon: Zap, stat: '×10', label: 'Más rápido en responder', sub: 'De horas a minutos' },
            { icon: Users, stat: '14', label: 'Años de experiencia', sub: 'En negocios de servicios' },
          ].map(m => (
            <div key={m.stat} className="card-surface rounded-3xl p-6">
              <m.icon size={22} className="text-wg-blue mb-3" />
              <div className="font-mono text-3xl font-bold wg-gradient-text mb-1">{m.stat}</div>
              <div className="font-semibold text-sm mb-1">{m.label}</div>
              <div className="text-xs text-wg-muted">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────
   PROTOCOL — Stacking cards
────────────────────────────────────────── */
function RotatingMotif() {
  return (
    <div className="relative w-36 h-36 mx-auto flex items-center justify-center">
      <svg viewBox="0 0 160 160" className="absolute inset-0 w-full h-full spin-slow opacity-50">
        <circle cx="80" cy="80" r="70" fill="none" stroke="#0693E3" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="80" cy="80" r="52" fill="none" stroke="#9B51E0" strokeWidth="1.5" strokeDasharray="3 6" />
      </svg>
      <svg viewBox="0 0 160 160" className="absolute inset-0 w-full h-full spin-slow-rev opacity-30">
        <circle cx="80" cy="80" r="36" fill="none" stroke="#0693E3" strokeWidth="1" strokeDasharray="2 4" />
      </svg>
      <div className="w-12 h-12 rounded-2xl wg-gradient flex items-center justify-center shadow-xl shadow-wg-blue/30">
        <MessageSquare size={20} className="text-white" />
      </div>
    </div>
  )
}

function LaserGrid() {
  return (
    <div className="relative w-36 h-36 mx-auto overflow-hidden rounded-2xl bg-wg-darker border border-white/5">
      <div className="grid grid-cols-8 gap-1.5 p-3">
        {Array.from({ length: 48 }).map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-wg-blue/20" />)}
      </div>
      <div className="absolute inset-y-0 w-0.5 wg-gradient opacity-90 blur-[1px] laser-line" />
    </div>
  )
}

function EKGWave() {
  return (
    <div className="w-36 h-20 mx-auto flex items-center">
      <svg viewBox="0 0 320 80" className="w-full" preserveAspectRatio="none">
        <path className="ekg-line"
          d="M0,40 L55,40 L70,8 L82,68 L92,12 L104,58 L116,40 L170,40 L185,8 L197,68 L207,12 L219,58 L231,40 L320,40"
          fill="none" stroke="#0693E3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

const steps = [
  {
    num: '01', title: 'Consultoría gratuita', canvas: <RotatingMotif />, accent: '#0693E3',
    desc: 'Mapeamos tus procesos, identificamos dónde pierdes ventas y diseñamos el flujo automatizado ideal para tu negocio.'
  },
  {
    num: '02', title: 'Implementación en días', canvas: <LaserGrid />, accent: '#9B51E0',
    desc: 'Configuramos el CRM, conectamos tus canales, activamos el asistente IA y capacitamos a tu equipo en la plataforma.'
  },
  {
    num: '03', title: 'Resultados medibles', canvas: <EKGWave />, accent: '#9B51E0',
    desc: 'Dashboard en tiempo real con leads, citas, tasa de cierre y revenue. Sabes exactamente qué funciona y qué optimizar.'
  },
]

function Protocol() {
  const containerRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const cards = cardRefs.current
    const ctx = gsap.context(() => {
      cards.forEach((card) => {
        if (!card) return
        gsap.fromTo(card, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%' },
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="proceso" className="py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto mb-20">
        <span className="section-label mb-3 block">Proceso</span>
        <h2 className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight leading-none">
          Tres pasos hacia<br />
          <span className="font-serif italic font-semibold wg-gradient-text">el crecimiento digital.</span>
        </h2>
      </div>
      <div ref={containerRef} className="max-w-3xl mx-auto space-y-6">
        {steps.map((step, i) => (
          <div key={i} ref={el => cardRefs.current[i] = el}
            className="card-surface rounded-4xl p-8 md:p-12"
            style={{ borderColor: step.accent + '30' }}>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="font-mono text-xs mb-3" style={{ color: step.accent }}>PASO {step.num}</div>
                <h3 className="font-sans font-bold text-2xl md:text-3xl mb-4 tracking-tight">{step.title}</h3>
                <p className="text-wg-muted leading-relaxed">{step.desc}</p>
              </div>
              <div className="w-44 flex-shrink-0 flex items-center justify-center">{step.canvas}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────
   TESTIMONIALS — real data
────────────────────────────────────────── */
const testimonials = [
  {
    name: 'Gunther Rochefort',
    role: 'Clínica Rochefort — Santiago, Chile',
    text: 'Desde que comencé a usar WebGuru, he podido automatizar muchos procesos e implementar un asistente virtual con IA, lo que me da más tiempo para concentrarme en mi negocio. Lo mejor es que todo es 100% personalizable.',
    photo: 'https://storage.googleapis.com/msgsndr/LkfSBtiKQRBvcEILtZlA/media/6706e0283514909530c58807.jpeg',
    stars: 5,
  },
  {
    name: 'Edixon Monsalve',
    role: 'CIEO Dental — Santiago, Chile',
    text: 'WebGuru es el aliado perfecto para una clínica que busca crecimiento sostenible. La IA aplicada al CRM ha pensado en todo. La retroalimentación de Alfredo Grossi es invaluable. 100% recomendado.',
    photo: 'https://storage.googleapis.com/msgsndr/LkfSBtiKQRBvcEILtZlA/media/67125c839663ed45520cdd87.png',
    stars: 5,
  },
  {
    name: 'Liliana Martínez',
    role: 'Dentyart — Bogotá, Colombia',
    text: 'Este es el momento para subirse al bus de la innovación. Mis hijos quedaron asombrados con el asistente virtual: hablaron en coreano, alemán e inglés y no podían creer lo avanzado que estaba. Herramienta increíble.',
    photo: 'https://storage.googleapis.com/msgsndr/LkfSBtiKQRBvcEILtZlA/media/6706e54c42f73b1d28ebda32.jpeg',
    stars: 5,
  },
  {
    name: 'Luis Salvador Martínez',
    role: 'QRO Dental Co — Querétaro, México',
    text: 'WebGuru es fácil de usar para crear sitios web, incluso sin experiencia previa. El soporte al cliente es excelente y siempre están dispuestos a ayudar. ¡Lo recomiendo al 100%!',
    photo: 'https://storage.googleapis.com/msgsndr/LkfSBtiKQRBvcEILtZlA/media/6707e3d4f161ee6b6b16b3e0.png',
    stars: 5,
  },
]

function Testimonials() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-test]', {
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-32 px-6 md:px-12" style={{ background: 'rgba(6,9,16,0.6)' }}>
      <div className="max-w-6xl mx-auto">
        <div data-test className="mb-16 max-w-xl">
          <span className="section-label mb-3 block">Testimonios</span>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight leading-none">
            Resultados reales,<br />
            <span className="font-serif italic font-semibold wg-gradient-text">clientes reales.</span>
          </h2>
        </div>
        {/* 2x2 grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} data-test className="card-surface rounded-4xl p-7 flex flex-col gap-4">
              <div className="flex gap-1">
                {[...Array(t.stars)].map((_, j) => <Star key={j} size={13} className="fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-sm text-white/80 leading-relaxed flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3 mt-1">
                <img src={t.photo} alt={t.name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0 ring-2 ring-wg-blue/20" />
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-wg-muted">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────
   PRICING
────────────────────────────────────────── */
const plans = [
  {
    name: 'Esencial', highlight: false, cta: 'Comenzar',
    desc: 'Para negocios que quieren arrancar con automatización',
    features: ['CRM Omnicanal', 'Asistente IA básico', 'Anti No-Show', 'Hasta 500 contactos', 'Soporte vía email']
  },
  {
    name: 'Rendimiento', highlight: true, cta: 'Agenda demo',
    desc: 'El más popular — para negocios que quieren escalar',
    features: ['Todo lo de Esencial', 'Asistente IA avanzado', 'Email Marketing', 'Gestión de Ads', '5.000 contactos', 'Soporte prioritario']
  },
  {
    name: 'Enterprise', highlight: false, cta: 'Contactar',
    desc: 'Solución personalizada para equipos y franquicias',
    features: ['Todo lo de Rendimiento', 'Automatizaciones custom', 'API + integraciones', 'Contactos ilimitados', 'Onboarding dedicado', 'SLA garantizado']
  },
]

function Pricing() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-price]', {
        y: 50, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="precios" className="py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div data-price className="mb-16 text-center max-w-xl mx-auto">
          <span className="section-label mb-3 block">Precios</span>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight leading-none mb-4">
            Invierte en<br />
            <span className="font-serif italic font-semibold wg-gradient-text">crecimiento real.</span>
          </h2>
          <p className="text-wg-muted">Consultoría gratuita incluida en todos los planes. Sin permanencia.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p, i) => (
            <div key={i} data-price
              className={`rounded-4xl p-8 flex flex-col gap-6 transition-transform duration-300 hover:-translate-y-1
                ${p.highlight ? 'wg-gradient text-white ring-2 ring-wg-blue/40 shadow-2xl shadow-wg-blue/20' : 'card-surface'}`}>
              <div>
                <div className={`font-mono text-xs mb-2 ${p.highlight ? 'text-white/60' : 'text-wg-muted'}`}>
                  {p.highlight ? '⭐ MÁS POPULAR' : '—'}
                </div>
                <h3 className="font-bold text-2xl mb-1">{p.name}</h3>
                <p className={`text-sm leading-relaxed ${p.highlight ? 'text-white/75' : 'text-wg-muted'}`}>{p.desc}</p>
              </div>
              <ul className="space-y-3 flex-1">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${p.highlight ? 'bg-white/20' : 'bg-wg-blue/15'}`}>
                      <Check size={10} className={p.highlight ? 'text-white' : 'text-wg-blue'} />
                    </div>
                    <span className={p.highlight ? 'text-white/85' : 'text-white/65'}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="https://api.whatsapp.com/send/?phone=56945613260&text=Quiero+saber+más+de+WebGuru"
                target="_blank" rel="noreferrer"
                className={`btn w-full justify-center ${p.highlight ? 'bg-white !text-wg-dark hover:shadow-xl' : 'btn-primary'}`}>
                {p.cta} <ChevronRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────
   CTA
────────────────────────────────────────── */
/* ──────────────────────────────────────────
   FORMULARIO / LEADCONNECTOR
────────────────────────────────────────── */
/* ──────────────────────────────────────────
   FORMULARIO / LEADCONNECTOR
────────────────────────────────────────── */
/* ──────────────────────────────────────────
   FORMULARIO / LEADCONNECTOR (REUTILIZABLE)
────────────────────────────────────────── */
function LeadForm() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData(e.target)
    let websiteUrl = formData.get('website')?.toString().trim() || ''

    // Auto-añadir http:// si falta y el usuario escribió algo
    if (websiteUrl && !/^https?:\/\//i.test(websiteUrl)) {
      websiteUrl = 'https://' + websiteUrl
    }

    let phoneValue = formData.get('phoneNumber')?.toString().trim() || ''

    // Limpiar si el usuario pegó el número con el código de país (ej. +56 9...)
    if (phoneValue.startsWith('+')) {
      // Elimina cualquier +56, +54, etc. y espacios iniciales
      phoneValue = phoneValue.replace(/^\+\d{1,3}\s*/, '')
    }

    const payload = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: `${formData.get('countryCode')} ${phoneValue}`,
      companyName: formData.get('companyName'),
      website: websiteUrl,
      message: formData.get('message')
    }

    try {
      await fetch('https://services.leadconnectorhq.com/hooks/LkfSBtiKQRBvcEILtZlA/webhook-trigger/74e5b345-12b3-485d-aab6-60050adab8f1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      setStatus('success')
      e.target.reset()
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="card-surface p-8 rounded-3xl border border-white/10 shadow-2xl relative text-center py-12">
        <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={32} />
        </div>
        <h3 className="text-2xl font-bold mb-2">¡Solicitud enviada!</h3>
        <p className="text-wg-muted mb-6">En breve recibirás un WhatsApp al número que nos indicaste para coordinar tu demostración.</p>
        <button onClick={() => setStatus('idle')} className="mt-2 btn btn-outline w-full justify-center">Enviar otra solicitud</button>
      </div>
    )
  }

  return (
    <div className="card-surface p-8 rounded-3xl border border-white/10 shadow-2xl relative text-left">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-wg-muted mb-1 ml-1 uppercase tracking-wide">Nombre *</label>
            <input required name="firstName" type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-wg-blue/50 focus:ring-1 focus:ring-wg-blue/50 transition-all" placeholder="Juan" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-wg-muted mb-1 ml-1 uppercase tracking-wide">Apellido *</label>
            <input required name="lastName" type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-wg-blue/50 focus:ring-1 focus:ring-wg-blue/50 transition-all" placeholder="Pérez" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-wg-muted mb-1 ml-1 uppercase tracking-wide">Email *</label>
            <input required name="email" type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-wg-blue/50 focus:ring-1 focus:ring-wg-blue/50 transition-all" placeholder="juan@empresa.com" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-wg-muted mb-1 ml-1 uppercase tracking-wide">Teléfono (con WhatsApp) *</label>
            <div className="flex gap-2">
              <select
                name="countryCode"
                defaultValue="+56"
                className="flex-shrink-0 bg-black/40 border border-white/10 rounded-xl px-2 py-3 text-white focus:outline-none focus:border-wg-blue/50 focus:ring-1 focus:ring-wg-blue/50 transition-all w-[100px] text-sm"
              >
                <option value="+56">🇨🇱 +56</option>
                <option value="+54">🇦🇷 +54</option>
                <option value="+52">🇲🇽 +52</option>
                <option value="+57">🇨🇴 +57</option>
                <option value="+51">🇵🇪 +51</option>
                <option value="+34">🇪🇸 +34</option>
                <option value="+1">🇺🇸 +1</option>
              </select>
              <input required name="phoneNumber" type="tel" className="flex-1 min-w-0 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-wg-blue/50 focus:ring-1 focus:ring-wg-blue/50 transition-all" placeholder="9 1234 5678" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-wg-muted mb-1 ml-1 uppercase tracking-wide">Empresa</label>
          <input name="companyName" type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-wg-blue/50 focus:ring-1 focus:ring-wg-blue/50 transition-all" placeholder="Nombre completo de tu negocio" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-wg-muted mb-1 ml-1 uppercase tracking-wide">Sitio Web</label>
          <input
            name="website"
            type="text"
            pattern=".*\..*"
            title="Debe incluir al menos un punto (ej: empresa.com o www.empresa.com)"
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-wg-blue/50 focus:ring-1 focus:ring-wg-blue/50 transition-all"
            placeholder="www.empresa.com"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-wg-muted mb-1 ml-1 uppercase tracking-wide">¿En qué podemos ayudarte?</label>
          <textarea name="message" rows="3" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-wg-blue/50 focus:ring-1 focus:ring-wg-blue/50 transition-all" placeholder="Cuéntanos brevemente sobre tu proceso comercial actual..."></textarea>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="mt-2 btn btn-primary w-full justify-center py-4 text-base relative overflow-hidden group">
          <span className={`transition-all duration-300 ${status === 'loading' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            Solicitar Agenda <ArrowUpRight size={18} className="inline-block ml-1" />
          </span>

          {status === 'loading' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            </div>
          )}
        </button>
        <p className="text-wg-muted text-[11px] text-center mt-1">Recibirás un mensaje de confirmación por WhatsApp.</p>

        {status === 'error' && <p className="text-red-400 text-xs text-center mt-2">Hubo un error al enviar el formulario. Verifica tu conexión.</p>}
      </form>
    </div>
  )
}

/* ──────────────────────────────────────────
   SECCIÓN CONTACTO / DEMO
────────────────────────────────────────── */
function ContactFormSection() {
  return (
    <section id="contacto" className="py-24 px-6 md:px-12 relative overflow-hidden bg-wg-darker/30 border-y border-white/5">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-wg-blue/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Side: Copy */}
        <div className="flex-1 text-center lg:text-left">
          <span className="section-label mb-4 block lg:inline-block">Solicita una Demo</span>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight leading-none mb-6">
            Mapeamos y diseñamos tu <span className="font-serif italic font-semibold wg-gradient-text">sistema automatizado.</span>
          </h2>
          <p className="text-wg-muted text-lg max-w-md mx-auto lg:mx-0 leading-relaxed mb-8">
            Completa el formulario para solicitar tu demostración de 30 minutos sin costo. Un experto analizará tu caso y te mostrará cómo escalar de manera eficiente.
          </p>
          <div className="hidden lg:flex flex-col gap-4 text-sm text-wg-muted">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-wg-blue/15 flex items-center justify-center flex-shrink-0"><Check size={10} className="text-wg-blue" /></div>
              Atención personalizada 1 a 1
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-wg-blue/15 flex items-center justify-center flex-shrink-0"><Check size={10} className="text-wg-blue" /></div>
              Mapeo de arquitectura de software
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-wg-blue/15 flex items-center justify-center flex-shrink-0"><Check size={10} className="text-wg-blue" /></div>
              Sin compromisos ni permanencia
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full max-w-lg">
          <LeadForm />
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────
   CTA FINAL
────────────────────────────────────────── */
function CTAStrip() {
  return (
    <section id="demo" className="py-32 px-6 md:px-12 text-center relative overflow-hidden">
      {/* Guru cartoon — subtle background character */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 opacity-8 pointer-events-none select-none hidden md:block" style={{ width: '320px' }}>
        <img src="/guru-cartoon.png" alt="" className="w-full h-auto" style={{ filter: 'brightness(0.5) saturate(0.4)' }} />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Guru cartoon — visible mascot above the CTA */}
        <div className="flex justify-center mb-8">
          <img src="/guru-cartoon.png" alt="WebGuru" className="h-36 w-auto" style={{ filter: 'drop-shadow(0 8px 32px rgba(109,27,208,0.35))' }} />
        </div>
        <span className="section-label mb-4 block">Agenda una Demo</span>
        <h2 className="font-sans font-extrabold text-5xl md:text-6xl tracking-tight leading-none mb-6">
          Vende más<br />
          <span className="font-serif italic font-semibold wg-gradient-text">con menos esfuerzo.</span>
        </h2>
        <p className="text-wg-muted text-xl mb-12 max-w-lg mx-auto leading-relaxed">
          Estamos listos para implementar tus flujos de ventas, automatizar tus citas y multiplicar tus resultados.
        </p>
        <div className="max-w-lg mx-auto mt-12">
          <LeadForm />
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────
   RESOURCES / BLOG
────────────────────────────────────────── */
const resources = [
  {
    title: '¿Qué es un CRM y por qué tu negocio lo necesita urgentemente?',
    category: 'Educación CRM',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    link: '#'
  },
  {
    title: 'Cómo automatizar tu WhatsApp Business para agendar citas 24/7',
    category: 'Automatización',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    link: '#'
  },
  {
    title: 'Glosario de Marketing Digital: Engagement, Segmentación y más',
    category: 'Marketing',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    link: '#'
  }
]

function Resources() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('[data-res]',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="recursos" className="py-24 px-6 md:px-12 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div data-res className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="section-label mb-3 block">Recursos</span>
            <h2 className="font-sans font-extrabold text-3xl md:text-5xl tracking-tight leading-none text-white">
              Aprende a <span className="font-serif italic font-semibold wg-gradient-text">escalar.</span>
            </h2>
          </div>
          <a href="#" className="btn btn-outline text-sm px-6 py-2">Ver todos los artículos</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((res, i) => (
            <div key={i} data-res>
              <a href={res.link} className="group block card-surface rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-wg-blue/10">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img src={res.image} alt={res.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-wg-blue uppercase tracking-wider">{res.category}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-xs text-wg-muted">{res.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold leading-snug mb-2 group-hover:text-wg-blue transition-colors text-white/90">
                    {res.title}
                  </h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────
   FAQ
────────────────────────────────────────── */
const faqs = [
  {
    q: '¿Necesito saber programar para usar WebGuru?',
    a: 'En lo absoluto. Entregamos la plataforma lista para usar, configurada con los flujos de tu negocio. Si necesitas crear una landing page extra, tenemos un constructor visual sin código de arrastrar y soltar.'
  },
  {
    q: '¿Cómo funciona la Asistente de IA?',
    a: 'La IA se entrena con la información de tu negocio (servicios, precios, políticas). Responde preguntas de prospectos 24/7 por WhatsApp o Instagram, los califica y los agenda directamente en tu calendario sin intervención humana.'
  },
  {
    q: '¿Qué pasa si ya uso otro CRM o Calendario?',
    a: 'WebGuru se integra con el 99% de las herramientas del mercado a través de Make o Zapier. Podemos conectar tu Google Calendar, tu ERP o tu sistema de facturación actual.'
  },
  {
    q: '¿En cuánto tiempo veré resultados?',
    a: 'El proceso de implementación toma entre 3 y 7 días. La mayoría de nuestros clientes (clínicas, estudios, consultoras) ven un aumento en agendamientos y una caída drástica del "No-Show" en sus primeras dos semanas de uso.'
  },
]

function FAQ() {
  const [open, setOpen] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('[data-faq]',
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', stagger: 0.1,
          scrollTrigger: { trigger: ref.current, start: 'top 80%' },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <div data-faq className="text-center mb-12">
        <h2 className="font-sans font-extrabold text-3xl md:text-5xl tracking-tight mb-4">
          Preguntas <span className="font-serif italic font-semibold wg-gradient-text">Frecuentes.</span>
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map((faq, i) => {
          const isOpen = open === i
          return (
            <div key={i} data-faq>
              <div
                className={`card-surface rounded-2xl overflow-hidden transition-all duration-300 border ${isOpen ? 'border-wg-blue/30 bg-white/[0.03]' : 'border-white/5'}`}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4">
                  <span className="font-semibold text-white/90 pr-8">{faq.q}</span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-wg-blue/20 text-wg-blue' : 'bg-white/5 text-wg-muted'}`}>
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out`}
                  style={{ maxHeight: isOpen ? '200px' : '0', opacity: isOpen ? 1 : 0 }}>
                  <p className="pb-6 text-wg-muted text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────
   FOOTER
────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-wg-darker rounded-t-5xl px-6 md:px-16 pt-16 pb-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="mb-4">
            <img src="/webguru-logo-dark.png" alt="WebGuru" className="h-9 w-auto" />
          </div>
          <p className="text-wg-muted text-sm leading-relaxed max-w-xs mb-6">
            CRM + IA + Automatizaciones para negocios de servicios.<br />
            <span className="text-white/60 italic">Vende más con menos esfuerzo.</span>
          </p>
          <div className="flex flex-col gap-2 text-sm text-wg-muted">
            <div className="flex items-center gap-2"><MapPin size={13} /> Av. Manquehue Sur 555, Las Condes, Santiago</div>
            <div className="flex items-center gap-2"><Phone size={13} /> +569 4561 3260</div>
            <div className="flex items-center gap-2"><Mail size={13} /> contacto@webguru.cl</div>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-4">Plataforma</h4>
          <ul className="space-y-3 text-sm text-wg-muted">
            {['CRM Omnicanal', 'Asistente IA 24/7', 'Anti No-Show', 'Sitios Web & Landings', 'Email Marketing', 'Gestión de Ads'].map(l => (
              <li key={l}><a href="#" className="hover:text-white transition-colors hover:-translate-y-px inline-block">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-4">Empresa</h4>
          <ul className="space-y-3 text-sm text-wg-muted">
            {['Casos de éxito', 'Sobre nosotros', 'Blog', 'Partners', 'Términos', 'Privacidad'].map(l => (
              <li key={l}><a href="#" className="hover:text-white transition-colors hover:-translate-y-px inline-block">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-wg-muted">© 2025 WebGuru. Todos los derechos reservados.</p>
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
   APP
────────────────────────────────────────── */
export default function App() {
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
    const id = setTimeout(() => ScrollTrigger.refresh(), 300)
    return () => clearTimeout(id)
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <ContactFormSection />
      <ClientLogos />
      <VideoScrub />
      <Pillars />
      <Features />
      <Philosophy />
      <Protocol />
      <Testimonials />
      <Pricing />
      <Resources />
      <FAQ />
      <CTAStrip />
      <Footer />
    </>
  )
}
