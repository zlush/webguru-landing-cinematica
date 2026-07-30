import { Link } from 'react-router-dom'
import ArticleLayout from '../../components/ArticleLayout'
import { getArticle } from '../../content/articles'

const article = getArticle('como-crear-un-pie-de-firma-profesional')

export default function PieDeFirma() {
  return (
    <ArticleLayout article={article}>
      <p>
        Treinta minutos una vez, y queda funcionando en cada correo que mandes
        durante años. El <strong>pie de firma</strong> es probablemente la mejor
        relación esfuerzo/retorno que hay en la comunicación de una empresa, y la
        mayoría lo tiene mal o no lo tiene.
      </p>
      <p>
        Esta guía cubre qué debe llevar, qué sobra, cómo configurarlo en Gmail y
        Outlook, y los dos errores técnicos que hacen que tus correos terminen en
        spam o se vean rotos.
      </p>

      <h2>Qué debe llevar (y en qué orden)</h2>
      <p>
        La estructura que funciona, de arriba hacia abajo:
      </p>
      <ul>
        <li>
          <strong>Nombre y apellido.</strong> Completo. Un correo firmado solo con
          el nombre de pila se lee informal en contextos comerciales.
        </li>
        <li>
          <strong>Cargo y empresa.</strong> El cargo le dice al receptor si estás
          hablando con quien decide. Es información útil, no vanidad.
        </li>
        <li>
          <strong>Teléfono directo.</strong> Idealmente el móvil con formato
          internacional: <em>+56 9 1234 5678</em>. Sin el +56, un cliente
          extranjero no puede llamarte.
        </li>
        <li>
          <strong>Sitio web.</strong> Como enlace, no como texto plano.
        </li>
        <li>
          <strong>Enlace directo a WhatsApp.</strong> El que más se usa y el que
          casi nadie pone. Un enlace `wa.me` abre la conversación con un toque,
          sin que nadie tenga que copiar tu número.
        </li>
      </ul>

      <h2>Qué sobra</h2>
      <ul>
        <li>
          <strong>Frases motivacionales.</strong> «Piensa en el medio ambiente
          antes de imprimir» y similares restan más de lo que suman.
        </li>
        <li>
          <strong>Avisos legales de veinte líneas.</strong> Salvo que tu rubro lo
          exija, ocupan más espacio que el mensaje y nadie los lee.
        </li>
        <li>
          <strong>Seis íconos de redes sociales.</strong> Pon las dos donde
          realmente estás activo. Un enlace a una cuenta abandonada de 2021 hace
          daño.
        </li>
        <li>
          <strong>La dirección postal completa</strong>, si no recibes visitas.
        </li>
        <li>
          <strong>Tu foto</strong>, en la mayoría de los casos. Suma peso, se rompe
          en varios clientes de correo y agrega poco.
        </li>
      </ul>
      <p>
        Criterio simple: si el dato no ayuda a que te contacten o a que confíen en
        ti, fuera.
      </p>

      <h2>Los dos errores técnicos que importan</h2>
      <p>
        <strong>1. El logo pesado.</strong> Una imagen de 2 MB en la firma se
        adjunta a cada correo que mandas. Con volumen, eso deteriora la
        entregabilidad y algunos filtros lo penalizan. El logo debe pesar bajo 50
        KB y medir como máximo 200 píxeles de ancho. Y súbelo a una URL pública en
        lugar de incrustarlo, así no viaja como adjunto.
      </p>
      <p>
        <strong>2. Firmas armadas con tablas complejas o HTML pesado.</strong> Se
        ven perfectas en tu pantalla y se desarman en Outlook antiguo o en móvil.
        Mantén la estructura simple: texto, un separador, y a lo más una imagen
        chica.
      </p>
      <p>
        Prueba obligatoria antes de darla por lista: mándate el correo a ti mismo
        y ábrelo en el teléfono. Ahí se ven la mitad de los problemas.
      </p>

      <h2>Cómo configurarla en Gmail</h2>
      <ul>
        <li>Abre Gmail y entra al engranaje → <strong>Ver toda la configuración</strong>.</li>
        <li>
          En la pestaña <strong>General</strong>, baja hasta{' '}
          <strong>Firma</strong> y pulsa <strong>Crear nueva</strong>.
        </li>
        <li>Escribe el contenido y dale formato con la barra inferior.</li>
        <li>
          Para insertar el enlace de WhatsApp: selecciona el texto, pulsa el ícono
          de enlace y pega{' '}
          <em>https://wa.me/56912345678</em> (sin el «+» y sin espacios).
        </li>
        <li>
          Abajo, en <strong>Valores predeterminados</strong>, elige tu firma para
          correos nuevos y para respuestas. Si dejas «Sin firma» en respuestas, la
          mitad de tus correos salen sin ella.
        </li>
        <li>Guarda los cambios al final de la página.</li>
      </ul>

      <h2>Cómo configurarla en Outlook</h2>
      <ul>
        <li>
          <strong>Archivo</strong> → <strong>Opciones</strong> →{' '}
          <strong>Correo</strong> → botón <strong>Firmas</strong>.
        </li>
        <li>Pulsa <strong>Nueva</strong>, ponle nombre y redacta el contenido.</li>
        <li>
          A la derecha, en <strong>Elegir firma predeterminada</strong>, asígnala
          a mensajes nuevos y a respuestas/reenvíos.
        </li>
        <li>
          En la versión web: engranaje → <strong>Correo</strong> →{' '}
          <strong>Redactar y responder</strong>.
        </li>
      </ul>
      <p>
        Si tienes equipo, define una plantilla común y compártela. Cinco personas
        con cinco firmas distintas comunica desorden, y es de las señales que más
        rápido nota un cliente corporativo.
      </p>

      <h2>Un ejemplo que funciona</h2>
      <p>
        <strong>Camila Rojas</strong>
        <br />
        Jefa de Operaciones · Nombre de tu Empresa
        <br />
        +56 9 1234 5678 · <em>WhatsApp</em>
        <br />
        tuempresa.cl
      </p>
      <p>
        Cuatro líneas. Todo lo necesario para contactarte por el canal que la
        persona prefiera, sin ruido. Si necesitas agregar algo, pregúntate qué vas
        a quitar.
      </p>

      <h2>El detalle que la convierte en herramienta comercial</h2>
      <p>
        Agrega un enlace a algo concreto: agendar una reunión, ver el catálogo,
        leer un caso. No como banner promocional, sino como una línea discreta
        bajo los datos.
      </p>
      <p>
        Si además ese enlace lleva parámetros de seguimiento, sabrás cuántas
        visitas y contactos llegan desde tu firma —y son más de los que esperas,
        porque los correos comerciales los reenvían dentro de las empresas. Con
        esos contactos entrando a tu{' '}
        <Link to="/blog/que-es-un-crm">CRM</Link> con origen identificado, la
        firma deja de ser decoración y pasa a ser un canal medible.
      </p>

      <h2>Preguntas frecuentes</h2>

      <h3>¿La firma debe ir en las respuestas también?</h3>
      <p>
        La completa solo en el primer correo. Para respuestas dentro de un hilo
        largo, una versión corta —nombre y teléfono— evita que la conversación se
        llene de bloques repetidos.
      </p>

      <h3>¿Conviene poner el logo?</h3>
      <p>
        Si está optimizado, sí: refuerza reconocimiento. Si pesa más de 50 KB o si
        vas a mandar volumen alto de correos, el texto plano es más seguro. En
        duda, prueba sin logo primero.
      </p>

      <h3>¿Cómo hago el enlace de WhatsApp?</h3>
      <p>
        Usa el formato <em>https://wa.me/56912345678</em>, con código de país y
        sin símbolos ni espacios. Puedes agregar un mensaje inicial con{' '}
        <em>?text=Hola,%20vengo%20desde%20tu%20correo</em>, que además te sirve
        para identificar de dónde vino el contacto.
      </p>

      <h3>¿Sirve incluir pronombres o títulos profesionales?</h3>
      <p>
        Depende del contexto y es decisión personal. En rubros donde la
        credencial importa —salud, derecho, ingeniería— el título aporta. Lo que
        conviene evitar es acumular cuatro certificaciones seguidas: se lee como
        inseguridad más que como autoridad.
      </p>

      <h2>En resumen</h2>
      <p>
        Un <strong>pie de firma</strong> profesional tiene cuatro o cinco líneas,
        un logo liviano o ninguno, el teléfono en formato internacional y un
        enlace directo a WhatsApp. Configúralo también en las respuestas, y
        pruébalo en el teléfono antes de darlo por listo.
      </p>
      <p>
        Y si le agregas un enlace medible, cada correo que manda tu equipo pasa a
        ser un punto de contacto que puedes contar.{' '}
        <Link to="/#contacto">Agenda 30 minutos sin costo</Link> y vemos cómo
        registrar esos contactos, o revisa las{' '}
        <Link to="/blog/estrategias-de-marketing-digital-para-pymes">
          estrategias de marketing digital para pymes
        </Link>{' '}
        para ubicar el correo dentro de un plan más grande.
      </p>
    </ArticleLayout>
  )
}
