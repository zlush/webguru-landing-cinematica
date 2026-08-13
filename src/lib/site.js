/* Site-wide constants. Kept out of the component files so react-refresh can
   still fast-refresh those (a module that exports both components and plain
   values breaks HMR boundaries). */

export const CONTACT = {
  phoneDisplay: '+569 4561 3260',
  whatsapp: '56945613260',
  email: 'contacto@webguru.cl',
  address: 'Av. Manquehue Sur 555, Las Condes, Santiago',
}

const WA_MESSAGE = 'Hola, vengo desde la web y quiero saber más sobre WebGuru.'

export const waHref = (msg = WA_MESSAGE) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`

export const NAV_LINKS = [
  ['Plataforma', 'plataforma'],
  ['Proceso', 'proceso'],
  ['Precios', 'precios'],
  ['Contacto', 'contacto'],
]

/* Rutas propias del menú (no son anclas de la home). La calculadora era una
   página huérfana: sin un solo enlace entrante, Google la rastrea mal y ningún
   visitante la encuentra. */
export const NAV_ROUTES = [
  ['Blog', '/blog'],
  ['Calculadora', '/calculadora'],
]

/* Páginas por rubro. Van en un desplegable propio y no en NAV_ROUTES porque
   son páginas de aterrizaje comerciales: cada una habla el idioma de un sector
   concreto, con su vocabulario, sus objeciones y sus números. Mezclarlas con
   Blog y Calculadora las escondería.

   La lista está pensada para crecer. Al sumar un rubro hay que tocar, además
   de este array: la ruta en main.jsx, ROUTES en scripts/prerender.mjs y STATIC
   en scripts/sitemap.mjs. Si algún día son más de cinco, conviene invertir la
   dependencia y que esos tres lean de acá. */
export const NICHE_ROUTES = [
  {
    label: 'Clínicas dentales y estéticas',
    short: 'Clínicas',
    to: '/clinicas',
    desc: 'Agenda llena, menos no-shows y respuesta inmediata en WhatsApp.',
  },
]

/* Portal de clientes (GoHighLevel con marca blanca).
   Hoy vive en app.webgurux.com, que resuelve por CNAME a app.msgsndr.com.
   Cuando app.webguru.cl esté configurado en GHL, cambiar solo esta línea: el
   login queda entonces bajo el mismo dominio que el sitio, que es lo correcto
   para una pantalla donde el usuario escribe su contraseña. */
export const APP_URL = 'https://app.webgurux.com/'
