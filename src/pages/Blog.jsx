import { Link } from 'react-router-dom'
import { Navbar, Footer, WhatsAppFab } from '../components/Chrome'
import { useSeo, useJsonLd, breadcrumb, SITE_URL } from '../hooks/useSeo'
import { ARTICLES } from '../content/articles'

export default function Blog() {
  useSeo({
    title: 'Blog | CRM, automatización e IA para negocios de servicios | WebGuru',
    description:
      'Guías prácticas sobre CRM, automatización de WhatsApp, marketing digital e inteligencia artificial para pymes y clínicas en Chile.',
    path: '/blog',
  })
  useJsonLd(breadcrumb([{ name: 'Blog', path: '/blog' }]), 'bc-blog')
  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog de WebGuru',
    url: `${SITE_URL}/blog`,
    inLanguage: 'es-CL',
    blogPost: ARTICLES.map(a => ({
      '@type': 'BlogPosting',
      headline: a.title,
      url: `${SITE_URL}/blog/${a.slug}`,
      datePublished: a.date,
      image: a.image,
    })),
  }, 'blog-list')

  return (
    <>
      <Navbar />

      <main className="px-6 md:px-12 pt-36 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="section-label mb-5 block">Recursos</span>
            <h1 className="font-sans font-extrabold tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.1rem, 5.5vw, 3.5rem)', lineHeight: 1.04 }}>
              Aprende a{' '}
              <span className="wg-gradient-text font-serif italic font-normal">escalar.</span>
            </h1>
            <p className="text-wg-muted text-lg leading-relaxed">
              Guías sobre CRM, automatización de WhatsApp e inteligencia artificial,
              escritas para quien administra un negocio de servicios y no tiene
              tiempo que perder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARTICLES.map(a => (
              <Link key={a.slug} to={`/blog/${a.slug}`}
                className="group block card-surface rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-wg-blue/10">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img src={a.image} alt="" loading="lazy" decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-wg-blue uppercase tracking-wider">{a.category}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-xs text-wg-muted">{a.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold leading-snug mb-2 group-hover:text-wg-blue transition-colors text-white/90">
                    {a.title}
                  </h2>
                  <p className="text-sm text-wg-muted leading-relaxed">{a.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  )
}
