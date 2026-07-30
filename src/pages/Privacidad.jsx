import { PageShell } from '../components/Chrome'
import { CONTACT } from '../lib/site'
import { useSeo, useJsonLd, breadcrumb } from '../hooks/useSeo'

const UPDATED = '29 de julio de 2026'

export default function Privacidad() {
  useSeo({
    title: 'Política de Privacidad | WebGuru',
    description:
      'Cómo WebGuru trata los datos personales que recoge en webguru.cl: qué recogemos, para qué, con quién lo compartimos y cómo ejercer tus derechos.',
    path: '/privacidad',
  })
  useJsonLd(breadcrumb([{ name: 'Política de Privacidad', path: '/privacidad' }]), 'bc-privacidad')

  return (
    <PageShell
      kicker="Legal"
      title="Política de Privacidad"
      intro="Esta política explica qué datos personales recogemos en webguru.cl, con qué finalidad, con quién los compartimos y cómo puedes ejercer tus derechos."
      updated={UPDATED}
    >
      <div className="note">
        <strong>En resumen:</strong> este sitio no usa cookies, no tiene analítica ni
        píxeles publicitarios, y no te rastrea. Los únicos datos personales que
        recogemos son los que escribes voluntariamente en el formulario de contacto.
      </div>

      <h2>1. Quién es el responsable</h2>
      <p>
        El responsable del tratamiento es <strong>WebGuru</strong>, con domicilio en {CONTACT.address},
        Chile. Para cualquier asunto relativo a tus datos personales puedes escribir a{' '}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> o llamar al {CONTACT.phoneDisplay}.
      </p>

      <h2>2. Qué datos recogemos</h2>
      <p>
        Solo recogemos los datos que introduces por tu propia iniciativa en el
        formulario de solicitud de demostración:
      </p>
      <ul>
        <li><strong>Nombre y apellido</strong> — obligatorios.</li>
        <li><strong>Correo electrónico</strong> — obligatorio.</li>
        <li><strong>Teléfono con WhatsApp</strong>, incluido el código de país — obligatorio.</li>
        <li><strong>Nombre de la empresa</strong> — opcional.</li>
        <li><strong>Sitio web</strong> — opcional.</li>
        <li><strong>Mensaje libre</strong> sobre tu proceso comercial — opcional.</li>
      </ul>
      <p>
        No pedimos ni almacenamos datos de tarjetas de crédito, RUT, direcciones
        particulares ni categorías sensibles de datos (salud, origen étnico,
        afiliación política o sindical, entre otras).
      </p>

      <h3>Si nos escribes por WhatsApp</h3>
      <p>
        El botón de WhatsApp del sitio abre una conversación en tu propia aplicación.
        En ese momento nos compartes el número de teléfono y el nombre de perfil que
        WhatsApp muestre. Ese intercambio se rige además por las condiciones de
        WhatsApp, sobre las que no tenemos control.
      </p>

      <h2>3. Para qué usamos tus datos</h2>
      <ul>
        <li>Contactarte para coordinar y realizar la demostración que solicitaste.</li>
        <li>Responder tus consultas y preparar una propuesta ajustada a tu caso.</li>
        <li>Dar seguimiento comercial sobre los servicios que consultaste.</li>
      </ul>
      <p>
        No vendemos, arrendamos ni cedemos tus datos a terceros para que te ofrezcan
        sus propios productos.
      </p>

      <h2>4. Base de tu consentimiento</h2>
      <p>
        Tratamos tus datos porque tú nos los entregas voluntariamente al enviar el
        formulario, con la finalidad expresa de ser contactado. Puedes retirar ese
        consentimiento en cualquier momento escribiéndonos a{' '}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
      </p>

      <h2>5. Cookies y tecnologías de seguimiento</h2>
      <p>
        <strong>Este sitio no instala cookies propias ni de terceros</strong>, y no
        utiliza almacenamiento local del navegador para identificarte. Tampoco hay
        Google Analytics, Meta Pixel, ni ninguna otra herramienta de analítica o
        remarketing. Por eso no verás un banner de cookies: no hay nada que
        consentir.
      </p>

      <h2>6. Con quién compartimos datos</h2>
      <p>
        Para operar el sitio y gestionar los contactos usamos los siguientes
        proveedores. Cada uno accede únicamente a lo necesario para su función:
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Proveedor</th>
              <th>Para qué</th>
              <th>Qué recibe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>LeadConnector / GoHighLevel</td>
              <td>CRM donde queda registrada tu solicitud</td>
              <td>Todos los datos del formulario</td>
            </tr>
            <tr>
              <td>Vercel</td>
              <td>Alojamiento del sitio</td>
              <td>Datos técnicos de conexión (IP, navegador)</td>
            </tr>
            <tr>
              <td>Google Fonts</td>
              <td>Tipografías del sitio</td>
              <td>Dirección IP al descargar las fuentes</td>
            </tr>
            <tr>
              <td>Spline</td>
              <td>Escena 3D de la portada</td>
              <td>Dirección IP al descargar la escena</td>
            </tr>
            <tr>
              <td>Unsplash y Google Cloud Storage</td>
              <td>Imágenes del sitio</td>
              <td>Dirección IP al descargar las imágenes</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Estos proveedores operan servidores fuera de Chile, principalmente en Estados
        Unidos. Al enviar el formulario aceptas esa transferencia internacional, que
        es necesaria para poder atender tu solicitud.
      </p>

      <h2>7. Cuánto tiempo conservamos tus datos</h2>
      <p>
        Conservamos tus datos de contacto mientras exista una relación comercial o un
        interés vigente en nuestros servicios, y luego el tiempo necesario para
        cumplir obligaciones legales o contables. Si nos pides que los eliminemos,
        los borramos salvo que una obligación legal exija conservarlos.
      </p>

      <h2>8. Tus derechos</h2>
      <p>Respecto de tus datos personales, puedes en cualquier momento:</p>
      <ul>
        <li><strong>Acceder</strong> a los datos que tenemos sobre ti.</li>
        <li><strong>Rectificar</strong> los que estén incorrectos o desactualizados.</li>
        <li><strong>Solicitar su eliminación</strong> cuando ya no sean necesarios o retires tu consentimiento.</li>
        <li><strong>Oponerte</strong> a que los usemos con fines de comunicación comercial.</li>
        <li><strong>Pedir una copia</strong> de los datos que nos entregaste.</li>
      </ul>
      <p>
        Para ejercerlos escribe a <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> indicando
        cuál es tu solicitud. Responderemos en un plazo razonable, y en todo caso
        dentro de los plazos que fije la normativa chilena de protección de datos
        personales aplicable.
      </p>

      <h2>9. Seguridad</h2>
      <p>
        El sitio se sirve íntegramente sobre HTTPS y los datos del formulario viajan
        cifrados. Aplicamos medidas razonables para protegerlos, aunque ningún
        sistema conectado a internet puede garantizar seguridad absoluta.
      </p>

      <h2>10. Menores de edad</h2>
      <p>
        Nuestros servicios están dirigidos a empresas y profesionales. No recogemos
        de forma consciente datos de menores de edad. Si crees que un menor nos
        entregó datos, escríbenos y los eliminaremos.
      </p>

      <h2>11. Cambios en esta política</h2>
      <p>
        Si modificamos esta política actualizaremos la fecha del encabezado. Los
        cambios relevantes se comunicarán en esta misma página.
      </p>

      <h2>12. Contacto</h2>
      <p>
        Dudas sobre privacidad: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> · {CONTACT.phoneDisplay} · {CONTACT.address}, Chile.
      </p>
    </PageShell>
  )
}
