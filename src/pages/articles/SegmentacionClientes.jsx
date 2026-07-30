import { Link } from 'react-router-dom'
import ArticleLayout from '../../components/ArticleLayout'
import { getArticle } from '../../content/articles'

const article = getArticle('que-es-la-segmentacion-de-clientes')

export default function SegmentacionClientes() {
  return (
    <ArticleLayout article={article}>
      <p>
        <strong>Segmentar</strong> no es tener quince listas. Es poder responder
        una pregunta concreta: ¿a quién le escribo esta semana, y qué le digo que
        no le diría al resto?
      </p>
      <p>
        La <strong>segmentación de clientes</strong> consiste en dividir tu base
        en grupos que se comportan parecido, para dejar de mandarle el mismo
        mensaje a alguien que te compró ayer y a alguien que no te contesta hace
        ocho meses. Este artículo va directo a los criterios que sirven en una
        pyme y a cómo automatizarlos sin volverse loco.
      </p>

      <h2>Por qué el mensaje único deja de funcionar</h2>
      <p>
        Cuando tienes cuarenta clientes, los conoces. Cuando tienes cuatrocientos,
        no. Y el correo o el WhatsApp masivo empieza a producir el efecto
        contrario al buscado: el que ya te compró recibe una oferta de
        bienvenida, el que nunca te compró recibe un mensaje de fidelización, y
        ambos aprenden a ignorarte.
      </p>
      <p>
        Segmentar bien resuelve tres cosas a la vez: sube la tasa de respuesta,
        baja la tasa de bajas, y —lo más importante— te dice dónde está la plata
        que ya tienes y no estás cobrando.
      </p>

      <h2>Los criterios que sí mueven la aguja</h2>
      <p>
        Existen decenas de formas de segmentar. En una pyme de servicios chilena,
        estas cuatro concentran casi todo el valor:
      </p>
      <ul>
        <li>
          <strong>Por etapa del ciclo.</strong> Prospecto que no ha comprado,
          cliente nuevo, cliente recurrente, cliente dormido. Es la más útil de
          todas y la más fácil de mantener, porque tu CRM ya tiene el dato.
        </li>
        <li>
          <strong>Por comportamiento.</strong> Qué compró, con qué frecuencia,
          cuánto gastó, si abrió tus últimos correos, si respondió el último
          WhatsApp. Predice mucho mejor que los datos demográficos.
        </li>
        <li>
          <strong>Por servicio contratado.</strong> Quien te contrató mantención
          necesita mensajes distintos a quien te contrató una instalación puntual.
          Además te dice a quién ofrecerle qué en la siguiente venta.
        </li>
        <li>
          <strong>Por origen.</strong> De dónde llegó: Google, Instagram,
          referido, feria. Los referidos suelen cerrar más rápido y con menos
          objeción de precio, y conviene tratarlos distinto.
        </li>
      </ul>
      <p>
        Lo que casi nunca rinde en pymes: segmentar por edad y género sin ninguna
        otra variable. Se hace porque el dato es fácil de obtener, no porque
        prediga algo.
      </p>

      <h2>RFM: el modelo que ordena una base en una tarde</h2>
      <p>
        Si tuvieras que usar un solo método, usa este. RFM clasifica a cada
        cliente por tres números:
      </p>
      <ul>
        <li>
          <strong>Recencia:</strong> cuántos días desde su última compra.
        </li>
        <li>
          <strong>Frecuencia:</strong> cuántas veces te ha comprado.
        </li>
        <li>
          <strong>Monto:</strong> cuánto ha gastado en total.
        </li>
      </ul>
      <p>
        Puntúa cada uno del 1 al 5 y cruza los resultados. Salen grupos que se
        interpretan solos:
      </p>
      <ul>
        <li>
          <strong>Recencia alta, frecuencia alta, monto alto.</strong> Tus mejores
          clientes. No les ofrezcas descuento: ofréceles acceso anticipado, trato
          preferente, un plan superior.
        </li>
        <li>
          <strong>Frecuencia y monto altos, recencia baja.</strong> Los que eran
          buenos y se están yendo. Este es el grupo más rentable de recuperar y el
          que casi nadie mira. Una llamada, no un correo masivo.
        </li>
        <li>
          <strong>Recencia alta, frecuencia baja.</strong> Clientes nuevos.
          Objetivo: que llegue la segunda compra, que es la que define si hay
          relación o no.
        </li>
        <li>
          <strong>Todo bajo.</strong> Base fría. Una campaña de reactivación al
          año y si no responden, deja de gastar ahí.
        </li>
      </ul>
      <p>
        Con una planilla exportada de tu CRM y media hora, tienes esto listo. No
        necesitas herramientas de analítica avanzada.
      </p>

      <h2>De la lista a la acción</h2>
      <p>
        Un segmento que no cambia lo que haces es una carpeta ordenada, nada más.
        Cada grupo tiene que tener asociada una acción concreta:
      </p>
      <ul>
        <li>
          <strong>Cliente dormido (sin comprar hace 6+ meses):</strong> mensaje
          personal preguntando qué pasó, sin oferta. La oferta viene después si
          responde.
        </li>
        <li>
          <strong>Cliente nuevo (primera compra hace menos de 30 días):</strong>{' '}
          seguimiento de satisfacción a los 7 días y solicitud de reseña a los 14.
        </li>
        <li>
          <strong>Prospecto que cotizó y no cerró:</strong> seguimiento a los 2,
          7 y 21 días. La mayoría de las ventas perdidas se pierden por silencio,
          no por precio.
        </li>
        <li>
          <strong>Cliente recurrente:</strong> aviso de renovación o mantención
          antes de que lo necesite, no después.
        </li>
      </ul>

      <h2>Cómo automatizarlo sin mantenerlo a mano</h2>
      <p>
        El punto donde la mayoría abandona: los segmentos hechos a mano quedan
        desactualizados en tres semanas. La solución es que sean{' '}
        <strong>dinámicos</strong>, es decir, reglas en vez de listas.
      </p>
      <p>
        En lugar de crear una lista llamada «clientes dormidos» y meter contactos,
        defines la condición —«última compra hace más de 180 días y al menos una
        compra previa»— y el sistema mueve a la gente solo. Alguien que compra hoy
        sale del segmento automáticamente esta noche.
      </p>
      <p>
        Eso es exactamente lo que hace un{' '}
        <Link to="/blog/que-es-un-crm">CRM</Link> con automatizaciones: mantiene
        los grupos vivos y dispara la acción correspondiente sin que nadie revise
        nada. Sin esa pieza, segmentar es un proyecto que se hace una vez y se
        abandona.
      </p>

      <h2>Tres errores que arruinan el trabajo</h2>
      <ul>
        <li>
          <strong>Demasiados segmentos.</strong> Si tienes doce grupos y equipo de
          tres personas, ninguno recibe atención real. Empieza con tres o cuatro.
        </li>
        <li>
          <strong>Segmentar sin datos limpios.</strong> Si la mitad de tus
          contactos tiene el teléfono mal escrito o está duplicada, cualquier
          segmento hereda ese error. Limpia primero.
        </li>
        <li>
          <strong>No medir por segmento.</strong> Si mides la tasa de respuesta
          global, nunca vas a saber cuál grupo está funcionando. El valor de
          segmentar aparece cuando comparas resultados entre grupos.
        </li>
      </ul>

      <h2>Preguntas frecuentes</h2>

      <h3>¿Desde cuántos clientes vale la pena segmentar?</h3>
      <p>
        Desde que dejas de recordar de memoria quién es quién, que en la práctica
        ronda los 150 a 200 contactos activos. Antes de eso, la segmentación
        formal agrega trabajo sin agregar precisión: tú ya sabes a quién
        llamar.
      </p>

      <h3>¿Es lo mismo segmentar que hacer buyer personas?</h3>
      <p>
        No. La persona es un perfil ficticio que describe a tu cliente ideal y
        sirve para decidir cómo comunicar. El segmento es un grupo real de
        contactos en tu base, con nombre y teléfono, al que puedes mandarle algo
        mañana. Uno orienta, el otro se ejecuta.
      </p>

      <h3>¿Qué hago con los contactos que no encajan en ningún segmento?</h3>
      <p>
        Déjalos en un grupo general y revísalo cada cierto tiempo. Si crece
        demasiado, es señal de que tus criterios están mal definidos o de que
        estás capturando contactos que no son tu público, lo que suele apuntar a
        un problema en la fuente de captación.
      </p>

      <h3>¿La segmentación afecta la ley de datos personales?</h3>
      <p>
        Afecta cómo la aplicas. Puedes segmentar con datos que obtuviste
        legítimamente y para la finalidad que declaraste. Lo que no puedes es
        cruzar bases compradas o usar información para algo que la persona no
        autorizó. Mantén un canal claro de baja y respétalo de inmediato.
      </p>

      <h2>En resumen</h2>
      <p>
        La <strong>segmentación de clientes</strong> convierte una base de
        contactos en un mapa de oportunidades. Empieza por etapa del ciclo, suma
        RFM cuando tengas volumen, y asegúrate de que cada grupo tenga una acción
        asociada —si no, es solo orden.
      </p>
      <p>
        Y hazla dinámica desde el principio: los segmentos que hay que actualizar
        a mano dejan de usarse.{' '}
        <Link to="/#contacto">Agenda 30 minutos sin costo</Link> y vemos cómo
        quedaría con tu base actual, o revisa las{' '}
        <Link to="/blog/estrategias-de-marketing-digital-para-pymes">
          ocho estrategias de marketing digital para pymes
        </Link>{' '}
        para saber qué enviarle a cada grupo.
      </p>
    </ArticleLayout>
  )
}
