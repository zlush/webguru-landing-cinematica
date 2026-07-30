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
