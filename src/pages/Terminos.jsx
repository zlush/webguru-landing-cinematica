import { Link } from 'react-router-dom'
import { PageShell } from '../components/Chrome'
import { CONTACT } from '../lib/site'
import { useSeo, useJsonLd, breadcrumb } from '../hooks/useSeo'

const UPDATED = '29 de julio de 2026'

export default function Terminos() {
  useSeo({
    title: 'Términos y Condiciones | WebGuru',
    description:
      'Condiciones de uso del sitio webguru.cl y del servicio de CRM, automatizaciones y asistentes IA de WebGuru: alcance, planes, pagos y responsabilidades.',
    path: '/terminos',
  })
  useJsonLd(breadcrumb([{ name: 'Términos y Condiciones', path: '/terminos' }]), 'bc-terminos')

  return (
    <PageShell
      kicker="Legal"
      title="Términos y Condiciones"
      intro="Estas condiciones regulan el uso del sitio webguru.cl y la contratación de los servicios de WebGuru."
      updated={UPDATED}
    >
      <h2>1. Quiénes somos</h2>
      <p>
        <strong>WebGuru</strong> presta servicios de implementación y operación de CRM
        omnicanal, automatizaciones de marketing y ventas, asistentes conversacionales
        con inteligencia artificial y desarrollo de sitios web y landing pages.
        Domicilio: {CONTACT.address}, Chile. Contacto:{' '}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
      </p>

      <h2>2. Aceptación</h2>
      <p>
        Al navegar por este sitio o enviar el formulario de contacto aceptas estas
        condiciones y nuestra{' '}
        <Link to="/privacidad">Política de Privacidad</Link>. Si no estás de acuerdo,
        no utilices el sitio.
      </p>

      <h2>3. Uso del sitio</h2>
      <p>Al usar webguru.cl te comprometes a:</p>
      <ul>
        <li>Entregar información veraz en los formularios, en particular un correo y teléfono que te pertenezcan.</li>
        <li>No intentar acceder a áreas o sistemas no destinados al público.</li>
        <li>No usar el sitio para enviar contenido ilícito, ofensivo o publicidad no solicitada.</li>
        <li>No emplear medios automatizados que degraden el funcionamiento del sitio.</li>
      </ul>

      <h2>4. La solicitud de demostración no es un contrato</h2>
      <p>
        Enviar el formulario o escribirnos por WhatsApp inicia una conversación
        comercial, sin costo ni obligación para ninguna de las partes. La demostración
        de 30 minutos es gratuita. La prestación efectiva de servicios requiere un
        acuerdo posterior por escrito entre WebGuru y el cliente.
      </p>

      <h2>5. Planes, precios y alcance</h2>
      <p>
        Los planes descritos en el sitio (Esencial, Rendimiento y Enterprise) son
        referenciales y describen el alcance funcional de cada nivel. El precio, la
        duración, los límites de uso y las condiciones específicas se acuerdan en la
        propuesta comercial de cada cliente, que prevalece sobre lo publicado aquí.
      </p>
      <p>
        Podemos modificar el contenido de los planes o su valor. Los cambios no
        afectan retroactivamente a un servicio ya contratado durante su período
        vigente.
      </p>

      <h2>6. Obligaciones del cliente</h2>
      <p>Para que podamos prestar el servicio, el cliente debe:</p>
      <ul>
        <li>Entregar en tiempo los accesos, contenidos e información que el proyecto requiera.</li>
        <li>Designar una contraparte con capacidad para validar y aprobar entregables.</li>
        <li>Contar con los derechos sobre los textos, imágenes, logotipos y bases de datos que nos proporcione.</li>
        <li>Usar los canales de mensajería conforme a las políticas de cada plataforma.</li>
      </ul>
      <p>
        Los retrasos originados en la falta de accesos, contenidos o aprobaciones del
        cliente no son imputables a WebGuru y pueden desplazar los plazos acordados.
      </p>

      <h2>7. Servicios de terceros</h2>
      <p>
        Nuestras soluciones se integran con plataformas de terceros, entre otras
        WhatsApp, Instagram, Facebook, proveedores de correo, calendarios y sistemas
        de gestión. Esas plataformas tienen sus propias condiciones, precios y límites,
        y pueden cambiarlos o suspender cuentas por decisiones ajenas a nosotros.
        WebGuru no responde por interrupciones, cambios de API, bloqueos o
        restricciones impuestos por dichos terceros, aunque se compromete a buscar
        alternativas razonables cuando ocurran.
      </p>

      <h2>8. Sobre los asistentes con inteligencia artificial</h2>
      <p>
        Los asistentes conversacionales generan respuestas de forma automática y
        pueden equivocarse. Se configuran para un ámbito acotado y con reglas de
        derivación a una persona, pero el cliente es responsable de supervisar su
        operación y de revisar la información sensible antes de actuar sobre ella. No
        deben usarse como única fuente para decisiones médicas, legales o financieras.
      </p>

      <h2>9. Resultados y cifras del sitio</h2>
      <p>
        Las cifras que aparecen en el sitio, como la reducción de ausencias o el
        aumento de leads calificados, corresponden a resultados observados en
        implementaciones concretas. Son referencias, no una garantía: los resultados
        dependen del rubro, la demanda, la calidad de la base de contactos y la
        ejecución del propio cliente.
      </p>

      <h2>10. Propiedad intelectual</h2>
      <p>
        La marca WebGuru, el sitio, sus textos, diseño, código y elementos gráficos
        son de nuestra propiedad o los usamos con licencia, y no pueden reproducirse
        sin autorización escrita. El cliente conserva la propiedad de sus contenidos,
        su marca y sus bases de datos de contactos.
      </p>

      <h2>11. Confidencialidad</h2>
      <p>
        Ambas partes se obligan a mantener reserva sobre la información comercial y
        técnica que conozcan con motivo de la relación, y a no divulgarla a terceros
        sin autorización, salvo requerimiento de autoridad competente.
      </p>

      <h2>12. Disponibilidad</h2>
      <p>
        Procuramos la mayor continuidad posible del servicio, pero no garantizamos que
        el sitio o las integraciones estén disponibles de forma ininterrumpida. Pueden
        existir suspensiones por mantenimiento, fallas de proveedores o causas de
        fuerza mayor. Los compromisos de nivel de servicio, cuando existan, se pactan
        en el contrato del plan correspondiente.
      </p>

      <h2>13. Límite de responsabilidad</h2>
      <p>
        En la máxima medida que permita la ley, WebGuru no responde por lucro cesante,
        pérdida de oportunidades comerciales ni daños indirectos derivados del uso o
        la imposibilidad de uso del sitio o de los servicios. Nuestra responsabilidad
        total se limita al monto efectivamente pagado por el cliente en los últimos
        tres meses de servicio.
      </p>
      <p>
        Nada de lo anterior excluye la responsabilidad que la ley chilena declare
        irrenunciable.
      </p>

      <h2>14. Término del servicio</h2>
      <p>
        Cualquiera de las partes puede poner fin a la relación conforme a lo pactado
        en la propuesta comercial. Al terminar, el cliente puede solicitar la
        exportación de sus datos de contactos en un formato de uso común.
      </p>

      <h2>15. Enlaces externos</h2>
      <p>
        El sitio puede enlazar a páginas de terceros sobre cuyo contenido no tenemos
        control ni responsabilidad.
      </p>

      <h2>16. Modificaciones</h2>
      <p>
        Podemos actualizar estas condiciones. La versión vigente es la publicada en
        esta página, con su fecha de última actualización.
      </p>

      <h2>17. Ley aplicable</h2>
      <p>
        Estas condiciones se rigen por la ley chilena. Cualquier controversia se
        someterá a los tribunales ordinarios de justicia con asiento en Santiago de
        Chile.
      </p>

      <h2>18. Contacto</h2>
      <p>
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> · {CONTACT.phoneDisplay} · {CONTACT.address}, Chile.
      </p>
    </PageShell>
  )
}
