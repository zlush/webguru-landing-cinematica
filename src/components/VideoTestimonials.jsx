import { useState } from 'react'
import { Play } from 'lucide-react'
import { useJsonLd, SITE_URL } from '../hooks/useSeo'

/* Testimonios en video, con patrón "facade": hasta que el usuario hace clic no
   se carga NADA de Vimeo — ni el iframe, ni su JS, ni sus cookies. Lo único que
   pesa al entrar son cuatro miniaturas WebP de ~12 KB alojadas por nosotros.
   Incrustar los reproductores directamente habría sumado ~4 peticiones a un
   tercero y bastante JS a una página que ya venimos peleando por su LCP.

   REVISAR EN VIMEO: los videos deben permitir incrustación fuera de
   webgurulatam.com (Ajustes → Privacidad → "¿Dónde puede incrustarse?").
   No fue posible verificarlo automáticamente: Vimeo responde 403 a las
   peticiones que no vienen de un navegador real. */

const VIDEOS = [
  {
    id: '1118232415',
    name: 'Esteban Monsalve',
    company: 'Dentyart',
    thumb: '/testimonios/edixon.webp',
    duration: '2:08',
    seconds: 128,
  },
  {
    id: '1118230851',
    name: 'Juan Carlos Jiménez',
    company: 'Dentyart',
    thumb: '/testimonios/juan-jimenez.webp',
    duration: '2:05',
    seconds: 125,
  },
  {
    id: '1118229347',
    name: 'Liliana Martínez',
    company: 'Dentyart',
    thumb: '/testimonios/liliana-martinez.webp',
    duration: '1:22',
    seconds: 82,
  },
  {
    id: '1045868145',
    name: 'Gunther Subs',
    company: 'Cliente WebGuru',
    thumb: '/testimonios/gunther-subs.webp',
    duration: '0:45',
    seconds: 45,
  },
]

const iso = s => `PT${Math.floor(s / 60)}M${s % 60}S`

function VideoCard({ v }) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <div className="rounded-3xl overflow-hidden card-surface" style={{ aspectRatio: '16 / 9' }}>
        <iframe
          src={`https://player.vimeo.com/video/${v.id}?autoplay=1&title=0&byline=0&portrait=0`}
          title={`Testimonio de ${v.name}`}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          style={{ border: 0 }}
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Reproducir testimonio de ${v.name}, ${v.company}. Duración ${v.duration}`}
      className="group relative block w-full rounded-3xl overflow-hidden card-surface text-left
                 transition-transform duration-300 hover:-translate-y-1
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wg-blue"
      style={{ aspectRatio: '16 / 9' }}
    >
      <img
        src={v.thumb}
        alt=""
        loading="lazy"
        decoding="async"
        width="800" height="450"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Los videos traen subtítulos quemados justo en el tercio inferior, que es
          donde va el nombre. El degradado tiene que ser opaco abajo para taparlos;
          con 0.92 todavía se leían por debajo del rótulo. */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to top, rgba(6,9,16,0.99) 0%, rgba(6,9,16,0.96) 18%, rgba(6,9,16,0.55) 34%, rgba(6,9,16,0.12) 60%, rgba(6,9,16,0.12) 100%)',
      }} />

      {/* Botón de play */}
      <span className="absolute inset-0 grid place-items-center">
        <span className="grid place-items-center rounded-full transition-transform duration-300 group-hover:scale-110"
          style={{
            width: 62, height: 62,
            background: 'linear-gradient(135deg, #0693E3 0%, #9B51E0 100%)',
            boxShadow: '0 10px 30px rgba(6,147,227,0.45)',
          }}>
          <Play size={22} className="text-white ml-0.5" fill="currentColor" />
        </span>
      </span>

      <span className="absolute left-5 right-5 bottom-4 flex items-end justify-between gap-3">
        <span className="min-w-0">
          <span className="block font-sans font-bold text-white text-sm truncate">{v.name}</span>
          <span className="block text-xs text-white/60 truncate">{v.company}</span>
        </span>
        <span className="font-mono text-[10px] text-white/70 px-2 py-1 rounded-full flex-shrink-0"
          style={{ background: 'rgba(0,0,0,0.5)' }}>
          {v.duration}
        </span>
      </span>
    </button>
  )
}

export default function VideoTestimonials() {
  // VideoObject hace que cada testimonio pueda aparecer con miniatura de video
  // en los resultados de Google.
  useJsonLd(VIDEOS.map(v => ({
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: `Testimonio de ${v.name} — ${v.company}`,
    description: `${v.name} de ${v.company} cuenta su experiencia usando WebGuru.`,
    thumbnailUrl: `${SITE_URL}${v.thumb}`,
    duration: iso(v.seconds),
    uploadDate: '2025-09-12',
    embedUrl: `https://player.vimeo.com/video/${v.id}`,
    publisher: {
      '@type': 'Organization',
      name: 'WebGuru',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/webguru-logo-dark.webp` },
    },
  })), 'video-testimonials')

  return (
    <section id="testimonios-video" className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12">
          <span className="section-label mb-3 block">En sus palabras</span>
          <h2 className="font-sans font-extrabold text-3xl md:text-5xl tracking-tight leading-none mb-4">
            Clientes reales,{' '}
            <span className="font-serif italic font-semibold wg-gradient-text">sin guión.</span>
          </h2>
          <p className="text-wg-muted leading-relaxed">
            Grabados por ellos mismos. Cuentan qué tenían antes, qué cambió y en
            cuánto tiempo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {VIDEOS.map(v => <VideoCard key={v.id} v={v} />)}
        </div>
      </div>
    </section>
  )
}
