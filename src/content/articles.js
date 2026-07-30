/* Blog index. Metadata only — each article's body lives in its own page
   component under src/pages/articles/. Keep this array ordered newest-first;
   the Resources section on the landing page reads the first three. */

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
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    excerpt:
      'El 60% de las consultas llegan fuera del horario de atención. Automatizar WhatsApp no es poner un robot: es no perder al que escribe un domingo a las 23:00.',
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
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    excerpt:
      'Treinta términos que vas a escuchar en cualquier reunión de marketing, explicados sin jerga y con la fórmula concreta cuando corresponde.',
  },
]

export const getArticle = (slug) => ARTICLES.find(a => a.slug === slug)
