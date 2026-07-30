import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowLeft } from 'lucide-react'
import { Navbar, Footer, WhatsAppFab } from './Chrome'
import { waHref } from '../lib/site'
import { useSeo, useJsonLd, breadcrumb, SITE_URL } from '../hooks/useSeo'
import { ARTICLES } from '../content/articles'

export default function ArticleLayout({ article, children }) {
  useSeo({
    title: article.metaTitle,
    description: article.metaDescription,
    path: `/blog/${article.slug}`,
  })

  useJsonLd(breadcrumb([
    { name: 'Blog', path: '/blog' },
    { name: article.title, path: `/blog/${article.slug}` },
  ]), `bc-${article.slug}`)

  // BlogPosting is what makes an article eligible for Google's article-style
  // result (headline, date, publisher).
  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.metaDescription,
    image: article.image,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: 'es-CL',
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${article.slug}` },
    author: { '@type': 'Organization', name: 'WebGuru', url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'WebGuru',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/webguru-logo-dark.webp` },
    },
  }, `post-${article.slug}`)

  const others = ARTICLES.filter(a => a.slug !== article.slug).slice(0, 2)

  return (
    <>
      <Navbar />

      <main className="px-6 md:px-12 pt-36 pb-24">
        <article className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-wg-muted hover:text-white transition-colors mb-8">
            <ArrowLeft size={15} /> Volver al blog
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-bold text-wg-blue uppercase tracking-wider">{article.category}</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-xs text-wg-muted">{article.readTime} de lectura</span>
          </div>

          <h1 className="font-sans font-extrabold tracking-tight mb-6"
            style={{ fontSize: 'clamp(1.9rem, 4.6vw, 3rem)', lineHeight: 1.08 }}>
            {article.title}
          </h1>

          <p className="font-mono text-xs text-wg-muted/70 mb-10">
            Publicado el {article.dateLabel}
          </p>

          <div className="rounded-4xl overflow-hidden mb-12" style={{ maxHeight: 380 }}>
            <img src={article.image} alt="" loading="lazy" decoding="async"
              className="w-full h-full object-cover" style={{ maxHeight: 380 }} />
          </div>

          <div className="wg-prose">{children}</div>

          {/* CTA */}
          <div className="card-surface rounded-4xl p-8 mt-16 text-center">
            <h2 className="font-sans font-extrabold tracking-tight mb-3"
              style={{ fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', lineHeight: 1.15 }}>
              ¿Quieres ver esto funcionando en tu negocio?
            </h2>
            <p className="text-sm text-wg-muted leading-relaxed mb-7 max-w-lg mx-auto">
              Agenda 30 minutos sin costo. Mapeamos tu proceso comercial actual y te
              mostramos dónde se están escapando los clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/#contacto" className="btn btn-primary text-sm px-7 py-3 justify-center">
                Agenda tu demo gratis <ArrowUpRight size={16} />
              </Link>
              <a href={waHref('Hola, leí un artículo del blog y quiero saber más')}
                target="_blank" rel="noopener noreferrer"
                className="btn btn-outline text-sm px-7 py-3 justify-center">
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>

          {/* Related */}
          {others.length > 0 && (
            <div className="mt-16">
              <h2 className="section-label mb-6 block">Sigue leyendo</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {others.map(a => (
                  <Link key={a.slug} to={`/blog/${a.slug}`}
                    className="card-surface rounded-3xl p-6 block transition-all duration-300 hover:-translate-y-1">
                    <span className="text-xs font-bold text-wg-blue uppercase tracking-wider">{a.category}</span>
                    <h3 className="font-sans font-bold leading-snug mt-2 mb-1.5 text-white/90">{a.title}</h3>
                    <span className="text-xs text-wg-muted">{a.readTime} de lectura</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  )
}
