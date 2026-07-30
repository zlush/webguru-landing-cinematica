/* Blog index. Metadata only — each article's body lives in its own page
   component under src/pages/articles/. Keep this array ordered newest-first;
   the Resources section on the landing page reads the first three. */

/* Las portadas son propias y viven en public/blog/. Antes eran fotos de
   Unsplash sin relación con el tema — una era el logo de Netflix, una marca
   ajena usada como decoración en un sitio comercial. */
export const ARTICLES = [
  {
    slug: 'que-es-un-crm',
    title: '¿Qué es un CRM y por qué tu negocio lo necesita urgentemente?',
    metaTitle: '¿Qué es un CRM y por qué tu negocio lo necesita? | WebGuru',
    metaDescription:
      'Qué es un CRM, cómo funciona y por qué las pymes chilenas que lo implementan dejan de perder clientes por falta de seguimiento. Guía práctica 2026.',
    keyword: 'qué es un crm',
    category: 'Educación CRM',
    readTime: '6 min',
    date: '2026-07-29',
    dateLabel: '29 de julio de 2026',
    image: '/blog/que-es-un-crm.webp',
    excerpt:
      'Un CRM no es una planilla con esteroides. Es el lugar donde deja de perderse el 100% de los contactos que hoy se te escapan entre WhatsApp, Instagram y la libreta.',
  },
  {
    slug: 'automatizar-whatsapp-business-agendar-citas',
    title: 'Cómo automatizar tu WhatsApp Business para agendar citas 24/7',
    metaTitle: 'Automatizar WhatsApp Business para agendar citas 24/7 | WebGuru',
    metaDescription:
      'Cómo automatizar WhatsApp Business para responder, calificar y agendar citas 24/7. Diferencias entre App, API y CRM, y los errores que bloquean cuentas.',
    keyword: 'automatizar whatsapp business',
    category: 'Automatización',
    readTime: '7 min',
    date: '2026-07-29',
    dateLabel: '29 de julio de 2026',
    image: '/blog/automatizar-whatsapp-business-agendar-citas.webp',
    excerpt:
      'Automatizar WhatsApp no es poner un robot: es no perder al que te escribe un domingo a las 23:00, cuando no hay nadie para contestarle.',
  },
  {
    slug: 'glosario-marketing-digital',
    title: 'Glosario de Marketing Digital: Engagement, Segmentación y más',
    metaTitle: 'Glosario de Marketing Digital: 30 términos explicados | WebGuru',
    metaDescription:
      'Glosario de marketing digital en español: engagement, segmentación, CAC, LTV, ROAS, embudo y más de 30 términos explicados con ejemplos para pymes chilenas.',
    keyword: 'glosario de marketing digital',
    category: 'Marketing',
    readTime: '9 min',
    date: '2026-07-29',
    dateLabel: '29 de julio de 2026',
    image: '/blog/glosario-marketing-digital.webp',
    excerpt:
      'Treinta términos que vas a escuchar en cualquier reunión de marketing, explicados sin jerga y con la fórmula concreta cuando corresponde.',
  },
]

export const getArticle = (slug) => ARTICLES.find(a => a.slug === slug)
