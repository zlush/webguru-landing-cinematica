/* Blog index. Metadata only — each article's body lives in its own page
   component under src/pages/articles/. Keep this array ordered newest-first;
   the Resources section on the landing page reads the first three. */

/* Las portadas son propias y viven en public/blog/. Antes eran fotos de
   Unsplash sin relación con el tema — una era el logo de Netflix, una marca
   ajena usada como decoración en un sitio comercial. */
export const ARTICLES = [
  {
    slug: 'estrategias-de-marketing-digital-para-pymes',
    title: '8 estrategias de marketing digital para pymes chilenas en 2026',
    metaTitle: '8 estrategias de marketing digital para pymes en Chile | WebGuru',
    metaDescription:
      'Ocho estrategias de marketing digital que una pyme chilena puede ejecutar con presupuesto real: SEO local, WhatsApp, remarketing y automatización. Con costos y plazos.',
    keyword: 'estrategias de marketing digital',
    category: 'Marketing',
    readTime: '8 min',
    date: '2026-07-30',
    dateLabel: '30 de julio de 2026',
    image: '/blog/estrategias-de-marketing-digital-para-pymes.webp',
    excerpt:
      'No necesitas ocho estrategias. Necesitas dos bien hechas. Este artículo ordena las ocho por lo que cuestan y lo que tardan en dar resultado, para que elijas las tuyas.',
  },
  {
    slug: 'tipos-de-anuncios-publicitarios',
    title: 'Tipos de anuncios publicitarios: cuál usar en cada etapa del embudo',
    metaTitle: 'Tipos de anuncios publicitarios y cuándo usar cada uno | WebGuru',
    metaDescription:
      'Search, display, video, remarketing y social: qué hace cada tipo de anuncio, en qué etapa del embudo funciona y qué métrica mirar. Guía para pymes chilenas.',
    keyword: 'tipos de anuncios publicitarios',
    category: 'Publicidad',
    readTime: '8 min',
    date: '2026-07-30',
    dateLabel: '30 de julio de 2026',
    image: '/blog/tipos-de-anuncios-publicitarios.webp',
    excerpt:
      'El error caro no es elegir mal la plataforma: es poner un anuncio de cierre frente a alguien que todavía no sabe que tiene el problema.',
  },
  {
    slug: 'que-es-el-engagement',
    title: '¿Qué es el engagement y cómo se calcula de verdad?',
    metaTitle: 'Qué es el engagement y cómo calcularlo bien | WebGuru',
    metaDescription:
      'Qué es el engagement, la fórmula correcta según la red social, cuánto es un buen porcentaje en Chile y por qué la métrica se puede inflar sin vender más.',
    keyword: 'qué es el engagement',
    category: 'Marketing',
    readTime: '7 min',
    date: '2026-07-30',
    dateLabel: '30 de julio de 2026',
    image: '/blog/que-es-el-engagement.webp',
    excerpt:
      'Hay cuentas con 8% de engagement que no venden nada y cuentas con 1,2% que sostienen un negocio. La métrica sirve, pero no sola.',
  },
  {
    slug: 'que-es-la-segmentacion-de-clientes',
    title: 'Segmentación de clientes: cómo dividir tu base sin complicarte',
    metaTitle: 'Segmentación de clientes: guía práctica para pymes | WebGuru',
    metaDescription:
      'Cómo segmentar clientes con los datos que ya tienes: criterios que sí mueven la aguja, el modelo RFM explicado simple y cómo automatizar los segmentos en tu CRM.',
    keyword: 'segmentación de clientes',
    category: 'Estrategia',
    readTime: '7 min',
    date: '2026-07-30',
    dateLabel: '30 de julio de 2026',
    image: '/blog/que-es-la-segmentacion-de-clientes.webp',
    excerpt:
      'Segmentar no es tener quince listas. Es poder responder una pregunta: ¿a quién le escribo esta semana y qué le digo que no le diría al resto?',
  },
  {
    slug: 'que-es-un-copywriter',
    title: '¿Qué hace un copywriter y cuándo conviene contratar uno?',
    metaTitle: 'Qué es un copywriter y cuándo contratarlo | WebGuru',
    metaDescription:
      'Qué hace un copywriter, en qué se diferencia de un redactor de contenidos, cuánto cobra en Chile y las dos fórmulas que puedes aplicar tú mismo hoy.',
    keyword: 'qué es un copywriter',
    category: 'Copywriting',
    readTime: '7 min',
    date: '2026-07-30',
    dateLabel: '30 de julio de 2026',
    image: '/blog/que-es-un-copywriter.webp',
    excerpt:
      'Un copywriter no "escribe bonito". Cambia el orden en que aparece la información para que la persona llegue a la decisión antes de aburrirse.',
  },
  {
    slug: 'que-es-un-webinar',
    title: '¿Qué es un webinar y cómo organizar el primero sin fallar?',
    metaTitle: 'Qué es un webinar y cómo organizar el tuyo paso a paso | WebGuru',
    metaDescription:
      'Qué es un webinar, qué plataforma elegir, cuánta gente asiste realmente de los que se inscriben y cómo hacer el seguimiento que convierte asistentes en clientes.',
    keyword: 'qué es un webinar',
    category: 'Marketing',
    readTime: '8 min',
    date: '2026-07-30',
    dateLabel: '30 de julio de 2026',
    image: '/blog/que-es-un-webinar.webp',
    excerpt:
      'De cada 100 inscritos llegan entre 25 y 40. El webinar no se gana el día del webinar: se gana en los siete días siguientes.',
  },
  {
    slug: 'que-es-la-planeacion-estrategica',
    title: 'Planeación estratégica para pymes: del diagnóstico al plan de 90 días',
    metaTitle: 'Planeación estratégica para pymes chilenas | WebGuru',
    metaDescription:
      'Cómo hacer planeación estratégica en una pyme sin consultoras: diagnóstico honesto, objetivos SMART, responsables y un plan de 90 días que sí se ejecuta.',
    keyword: 'planeación estratégica',
    category: 'Estrategia',
    readTime: '8 min',
    date: '2026-07-30',
    dateLabel: '30 de julio de 2026',
    image: '/blog/que-es-la-planeacion-estrategica.webp',
    excerpt:
      'El plan estratégico que se escribe en enero y se abre en diciembre no era un plan. Era un documento. La diferencia está en el ciclo de revisión.',
  },
  {
    slug: 'como-hacer-un-estudio-de-mercado',
    title: 'Cómo hacer un estudio de mercado sin presupuesto',
    metaTitle: 'Cómo hacer un estudio de mercado paso a paso | WebGuru',
    metaDescription:
      'Guía para hacer un estudio de mercado con herramientas gratuitas: define la pregunta, elige la muestra, arma la encuesta e interpreta resultados sin engañarte.',
    keyword: 'cómo hacer un estudio de mercado',
    category: 'Estrategia',
    readTime: '8 min',
    date: '2026-07-30',
    dateLabel: '30 de julio de 2026',
    image: '/blog/como-hacer-un-estudio-de-mercado.webp',
    excerpt:
      'Veinte conversaciones bien hechas te dicen más que una encuesta de doscientas respuestas mal preguntadas. Y cuestan cero.',
  },
  {
    slug: 'como-hacer-una-encuesta-en-whatsapp',
    title: 'Cómo hacer una encuesta en WhatsApp: 3 métodos que funcionan',
    metaTitle: 'Cómo hacer una encuesta en WhatsApp paso a paso | WebGuru',
    metaDescription:
      'Tres formas de encuestar por WhatsApp: la función nativa de grupos, el método de opciones numeradas para chats 1 a 1, y la automatización con CRM.',
    keyword: 'cómo hacer una encuesta en whatsapp',
    category: 'WhatsApp',
    readTime: '6 min',
    date: '2026-07-30',
    dateLabel: '30 de julio de 2026',
    image: '/blog/como-hacer-una-encuesta-en-whatsapp.webp',
    excerpt:
      'WhatsApp tiene tasas de respuesta que ningún email alcanza. El problema es que la mayoría pregunta en el momento equivocado del ciclo.',
  },
  {
    slug: 'mensaje-cerrado-por-vacaciones-whatsapp-business',
    title: 'Mensaje de cerrado por vacaciones en WhatsApp Business: 10 ejemplos',
    metaTitle: 'Mensaje de cerrado por vacaciones en WhatsApp Business | WebGuru',
    metaDescription:
      'Cómo configurar el mensaje de ausencia en WhatsApp Business paso a paso, con 10 ejemplos listos para copiar y qué hacer con los mensajes que llegan igual.',
    keyword: 'mensaje de cerrado por vacaciones',
    category: 'WhatsApp',
    readTime: '6 min',
    date: '2026-07-30',
    dateLabel: '30 de julio de 2026',
    image: '/blog/mensaje-cerrado-por-vacaciones-whatsapp-business.webp',
    excerpt:
      'El mensaje automático evita que te escriban enojados. Lo que evita perder al cliente es lo que pasa con ese mensaje cuando vuelves.',
  },
  {
    slug: 'como-crear-un-pie-de-firma-profesional',
    title: 'Cómo crear un pie de firma profesional para tu correo',
    metaTitle: 'Cómo crear un pie de firma profesional para email | WebGuru',
    metaDescription:
      'Qué debe llevar una firma de correo profesional, qué sobra, cómo configurarla en Gmail y Outlook, y por qué el logo pesado te manda a spam.',
    keyword: 'pie de firma',
    category: 'Productividad',
    readTime: '6 min',
    date: '2026-07-30',
    dateLabel: '30 de julio de 2026',
    image: '/blog/como-crear-un-pie-de-firma-profesional.webp',
    excerpt:
      'Treinta minutos una vez, y queda funcionando en cada correo que mandes durante años. Es la mejor relación esfuerzo/retorno que hay.',
  },
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
