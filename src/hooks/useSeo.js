import { useEffect } from 'react'

export const SITE_URL = 'https://webguru.cl'
export const SITE_NAME = 'WebGuru'
const DEFAULT_OG = `${SITE_URL}/og-image.png`

/* Per-route <head> management.
   This is a client-rendered SPA, so these tags are set after hydration.
   Google renders JS and will pick them up, but crawlers that don't execute
   scripts (and most social-media unfurlers) only ever see index.html. If the
   standalone pages ever need to be shared on social or ranked hard, the fix is
   prerendering them at build time — not more tags here. */

const setMeta = (selector, attr, value, content) => {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, value)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
  return el
}

export function useSeo({ title, description, path, image = DEFAULT_OG, noindex = false }) {
  useEffect(() => {
    const prevTitle = document.title
    const url = `${SITE_URL}${path}`

    if (title) document.title = title
    if (description) {
      setMeta('meta[name="description"]', 'name', 'description', description)
      setMeta('meta[property="og:description"]', 'property', 'og:description', description)
      setMeta('meta[property="twitter:description"]', 'property', 'twitter:description', description)
    }
    if (title) {
      setMeta('meta[property="og:title"]', 'property', 'og:title', title)
      setMeta('meta[property="twitter:title"]', 'property', 'twitter:title', title)
    }
    setMeta('meta[property="og:url"]', 'property', 'og:url', url)
    setMeta('meta[property="twitter:url"]', 'property', 'twitter:url', url)
    setMeta('meta[property="og:image"]', 'property', 'og:image', image)
    setMeta('meta[property="twitter:image"]', 'property', 'twitter:image', image)

    // canonical
    let link = document.head.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', url)

    // Robots is rewritten, never removed: dropping it would also drop
    // max-image-preview:large, which is what lets Google show a full-size
    // thumbnail next to the result.
    setMeta('meta[name="robots"]', 'name', 'robots',
      noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large')

    return () => { document.title = prevTitle }
  }, [title, description, path, image, noindex])
}

/* Injects a JSON-LD block and removes it on unmount, so structured data never
   leaks from one route into the next. */
export function useJsonLd(data, id) {
  useEffect(() => {
    if (!data) return
    // El HTML prerenderizado ya trae este bloque inyectado en el <head>. Sin
    // limpiar primero, React añadía un segundo idéntico al montar y la página
    // terminaba declarando dos veces el mismo FAQPage o BlogPosting.
    document.head
      .querySelectorAll(`script[type="application/ld+json"][data-seo-id="${id}"]`)
      .forEach(n => n.remove())

    const el = document.createElement('script')
    el.type = 'application/ld+json'
    el.dataset.seoId = id
    el.textContent = JSON.stringify(data)
    document.head.appendChild(el)
    return () => el.remove()
  }, [data, id])
}

/* Breadcrumbs help Google show the site hierarchy under the result. */
export const breadcrumb = (trail) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/` },
    ...trail.map((t, i) => ({
      '@type': 'ListItem', position: i + 2, name: t.name, item: `${SITE_URL}${t.path}`,
    })),
  ],
})
