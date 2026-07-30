import { Link } from 'react-router-dom'
import ArticleLayout from '../../components/ArticleLayout'
import { getArticle } from '../../content/articles'

const article = getArticle('como-hacer-una-encuesta-en-whatsapp')

export default function EncuestaWhatsapp() {
  return (
    <ArticleLayout article={article}>
      <p>
        WhatsApp tiene tasas de respuesta que ningún correo alcanza. El problema
        no suele ser la herramienta: es preguntar en el momento equivocado del
        ciclo, o preguntar tanto que nadie termina.
      </p>
      <p>
        Aquí van los tres métodos para <strong>hacer una encuesta en
        WhatsApp</strong>, cuándo conviene cada uno, y las reglas que hacen la
        diferencia entre un 15% y un 60% de respuesta.
      </p>

      <h2>Método 1: la encuesta nativa de grupos</h2>
      <p>
        WhatsApp trae una función de encuestas incorporada. Funciona en grupos y
        también en chats individuales.
      </p>
      <p>
        Para crearla: abre el chat, toca el clip de adjuntar (o el «+» en iPhone),
        elige <strong>Encuesta</strong>, escribe la pregunta y agrega las
        opciones. Puedes decidir si permites una sola respuesta o varias.
      </p>
      <ul>
        <li>
          <strong>Cuándo usarla:</strong> comunidades, grupos de clientes
          frecuentes, equipos internos. Decisiones simples y de bajo compromiso.
        </li>
        <li>
          <strong>Ventaja:</strong> se responde con un toque y los resultados se
          ven en vivo.
        </li>
        <li>
          <strong>Límite:</strong> los votos son visibles para todo el grupo, así
          que no sirve para nada sensible —satisfacción, precio, evaluación de
          personas. La gente responde distinto cuando el resto la ve.
        </li>
      </ul>

      <h2>Método 2: opciones numeradas en chat individual</h2>
      <p>
        El más versátil y el que mejor funciona para medir satisfacción. Consiste
        en mandar un mensaje corto pidiendo que respondan con un número.
      </p>
      <p>
        Ejemplo de lo que sí funciona:
      </p>
      <p>
        <em>
          «Hola Camila, gracias por confiar en nosotros ayer. En una escala de 1 a
          5, ¿qué tan probable es que nos recomiendes? Responde solo con el
          número.»
        </em>
      </p>
      <p>
        Por qué funciona: una sola pregunta, respuesta de un carácter, y el
        contexto explica por qué la estás haciendo. Las tres cosas suben la tasa
        de respuesta.
      </p>
      <ul>
        <li>
          <strong>Cuándo usarla:</strong> postventa, satisfacción, calificación de
          prospectos.
        </li>
        <li>
          <strong>Ventaja:</strong> privado, funciona con cualquier versión de
          WhatsApp, y quien responde queda en conversación abierta para
          profundizar.
        </li>
        <li>
          <strong>Límite:</strong> hay que tabular a mano si no está conectado a
          un sistema.
        </li>
      </ul>
      <p>
        El truco que casi nadie aplica: cuando alguien responde 1, 2 o 3, contesta
        de inmediato preguntando qué pasó. Ahí está la información valiosa, y
        además recuperas al cliente molesto antes de que escriba una reseña.
      </p>

      <h2>Método 3: automatizada desde el CRM</h2>
      <p>
        La versión que escala. En lugar de que alguien se acuerde de preguntar, la
        encuesta sale sola cuando ocurre un evento: se cerró un servicio, pasaron
        7 días de la compra, terminó una atención.
      </p>
      <p>
        Lo que cambia respecto a los métodos anteriores:
      </p>
      <ul>
        <li>
          <strong>Consistencia.</strong> Se le pregunta al 100% de los clientes,
          no solo a los que alguien recordó.
        </li>
        <li>
          <strong>Momento óptimo.</strong> A las pocas horas de terminado el
          servicio la respuesta es mucho mayor que una semana después.
        </li>
        <li>
          <strong>Respuesta registrada.</strong> El resultado queda en la ficha del
          contacto, así que puedes segmentar por satisfacción y ver la evolución
          en el tiempo. Sobre eso, mira{' '}
          <Link to="/blog/que-es-la-segmentacion-de-clientes">
            cómo segmentar tu base de clientes
          </Link>.
        </li>
        <li>
          <strong>Acción automática.</strong> Nota baja abre una tarea para el
          encargado; nota alta dispara la solicitud de reseña en Google. Esa
          bifurcación sola justifica la automatización.
        </li>
      </ul>
      <p>
        Requiere WhatsApp Business API conectada a un{' '}
        <Link to="/blog/que-es-un-crm">CRM</Link>. La app normal de WhatsApp
        Business no permite automatizar envíos según eventos.
      </p>

      <h2>Las reglas que suben la tasa de respuesta</h2>
      <ul>
        <li>
          <strong>Una pregunta, no cinco.</strong> Si necesitas más, manda la
          segunda solo a quien respondió la primera.
        </li>
        <li>
          <strong>Di cuánto demora.</strong> «Son 10 segundos» funciona porque
          elimina la incertidumbre.
        </li>
        <li>
          <strong>Manda dentro de las primeras 24 horas.</strong> Después de tres
          días la respuesta cae fuerte y además el recuerdo ya se distorsionó.
        </li>
        <li>
          <strong>Personaliza con el nombre y el servicio.</strong> «Tu
          mantención del martes» rinde mucho más que «nuestro servicio».
        </li>
        <li>
          <strong>Agradece siempre la respuesta.</strong> Suena obvio y casi nadie
          lo hace. Es lo que hace que respondan la próxima vez.
        </li>
      </ul>

      <h2>Lo que hay que evitar</h2>
      <ul>
        <li>
          <strong>Escribir a quien no te dio permiso.</strong> Además del riesgo
          legal, los reportes de spam pueden costarte la cuenta. Encuesta solo a
          clientes y contactos que aceptaron recibir mensajes.
        </li>
        <li>
          <strong>Encuestar demasiado seguido.</strong> Una vez por interacción
          relevante, no todos los meses.
        </li>
        <li>
          <strong>Preguntar sin hacer nada con la respuesta.</strong> Es la forma
          más rápida de que la gente deje de contestar: si nada cambia, aprenden
          que no sirve.
        </li>
        <li>
          <strong>Mandar enlaces a formularios externos sin explicar.</strong> Un
          link pelado en WhatsApp tiene tasa de clic bajísima y parece spam.
        </li>
      </ul>

      <h2>Preguntas frecuentes</h2>

      <h3>¿Cuántas preguntas puede tener una encuesta por WhatsApp?</h3>
      <p>
        Una, idealmente. Dos como máximo en el mismo mensaje. WhatsApp es un canal
        de conversación breve: todo lo que se parezca a un formulario rompe la
        expectativa del medio y baja la respuesta.
      </p>

      <h3>¿Puedo hacer encuestas anónimas?</h3>
      <p>
        En WhatsApp no, porque siempre sabes quién responde. Si necesitas
        anonimato real —clima laboral, por ejemplo— usa el canal solo para
        distribuir el enlace a un formulario anónimo, y dilo explícitamente.
      </p>

      <h3>¿Qué es una buena tasa de respuesta?</h3>
      <p>
        Con clientes propios y una sola pregunta enviada en el momento correcto,
        entre 40% y 60% es alcanzable. Bajo 20% suele indicar que preguntaste
        tarde, que pediste demasiado, o que el contacto no era tan cercano como
        creías.
      </p>

      <h3>¿Sirve ofrecer un incentivo por responder?</h3>
      <p>
        Sube la cantidad y ensucia la calidad: atrae a quien quiere el premio y
        responde cualquier cosa. Para satisfacción, mejor sin incentivo. Para
        estudios más largos donde pides tiempo real, un incentivo moderado es
        razonable.
      </p>

      <h2>En resumen</h2>
      <p>
        Para <strong>hacer una encuesta en WhatsApp</strong>: usa la función nativa
        en grupos para temas livianos, opciones numeradas en chats individuales
        para satisfacción, y automatización desde el CRM cuando quieras
        preguntarle a todos sin depender de nadie.
      </p>
      <p>
        Y sobre todo, define antes qué vas a hacer con cada respuesta posible. Una
        encuesta sin acción asociada solo gasta la paciencia de tus clientes.{' '}
        <Link to="/#contacto">Agenda 30 minutos sin costo</Link> y vemos cómo
        automatizarla, o revisa{' '}
        <Link to="/blog/automatizar-whatsapp-business-agendar-citas">
          cómo automatizar WhatsApp Business para agendar citas
        </Link>.
      </p>
    </ArticleLayout>
  )
}
