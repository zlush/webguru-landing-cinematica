import { Link } from 'react-router-dom'
import ArticleLayout from '../../components/ArticleLayout'
import { getArticle } from '../../content/articles'

const article = getArticle('que-es-un-webinar')

export default function QueEsUnWebinar() {
  return (
    <ArticleLayout article={article}>
      <p>
        Un <strong>webinar</strong> es una charla en vivo por internet con
        inscripción previa, pensada para enseñar algo concreto a un grupo que
        tiene el mismo problema. Y su número más importante es este: de cada 100
        personas que se inscriben, suelen llegar entre 25 y 40.
      </p>
      <p>
        Ese dato ordena todo lo demás. El webinar no se gana el día del webinar:
        se gana en los días previos, consiguiendo que la gente aparezca, y en los
        siete siguientes, convirtiendo a quienes asistieron.
      </p>

      <h2>Para qué sirve de verdad</h2>
      <p>
        En servicios y en B2B, el webinar resuelve un problema específico: vender
        algo que necesita explicación. Si tu cliente no entiende el valor en un
        anuncio de treinta segundos, una hora de demostración hace lo que ninguna
        landing va a lograr.
      </p>
      <p>
        Además genera tres cosas simultáneamente que normalmente cuestan por
        separado: contactos calificados (dieron su correo por un tema específico),
        autoridad (te vieron explicar durante una hora) y una grabación que sigue
        trabajando meses después.
      </p>
      <p>
        Donde no funciona: productos de compra impulsiva o precio bajo. Si tu
        ticket es de $15.000, el costo de organizar un webinar no se recupera.
      </p>

      <h2>Formatos</h2>
      <ul>
        <li>
          <strong>En vivo.</strong> El de mayor conversión, porque hay preguntas
          reales y sensación de evento. También el más exigente.
        </li>
        <li>
          <strong>Automatizado.</strong> Una grabación que se presenta en horarios
          fijos. Escala sin esfuerzo, convierte bastante menos, y si finge ser en
          vivo cuando no lo es, el daño a la confianza no compensa.
        </li>
        <li>
          <strong>Híbrido.</strong> Contenido grabado con presentador en vivo
          respondiendo el chat. Buen punto medio: elimina el riesgo de que algo
          salga mal en la demo y mantiene la interacción.
        </li>
      </ul>

      <h2>Qué plataforma elegir</h2>
      <p>
        Menos importante de lo que parece, pero hay diferencias que importan:
      </p>
      <ul>
        <li>
          <strong>Zoom Webinars:</strong> lo más confiable en conexiones
          inestables. Buena opción si tu público está fuera de las grandes
          ciudades.
        </li>
        <li>
          <strong>Google Meet:</strong> gratis y suficiente para grupos chicos, sin
          herramientas de webinar propiamente tales (encuestas, sala de espera con
          marca, métricas de asistencia).
        </li>
        <li>
          <strong>YouTube en vivo:</strong> sin límite de asistentes y con la
          grabación quedando indexada, lo que suma tráfico después. A cambio
          pierdes el control de la inscripción, que es donde está el valor
          comercial.
        </li>
      </ul>
      <p>
        Para un primer webinar, cualquiera sirve. Elegir plataforma es de los
        últimos problemas que vas a tener.
      </p>

      <h2>El tema: donde se decide el resultado</h2>
      <p>
        Un webinar sobre «Tendencias del marketing digital 2026» convoca poco y
        convierte menos. Uno sobre «Cómo responder los WhatsApp de tu negocio en
        menos de 5 minutos sin contratar a nadie» convoca a gente con un problema
        específico y con intención de resolverlo.
      </p>
      <p>
        Tres pruebas para validar un tema antes de armarlo:
      </p>
      <ul>
        <li>
          <strong>¿Es una pregunta que te hacen?</strong> Si nadie te la ha hecho
          nunca, probablemente nadie se inscriba.
        </li>
        <li>
          <strong>¿Se puede resolver en 40 minutos?</strong> Si el tema necesita
          tres horas, es un curso, no un webinar.
        </li>
        <li>
          <strong>¿Quien tiene ese problema es tu cliente?</strong> Si atrae
          principalmente a colegas del rubro, tendrás asistencia y cero ventas.
        </li>
      </ul>

      <h2>La estructura de 60 minutos</h2>
      <ul>
        <li>
          <strong>0-5 min.</strong> Bienvenida y promesa concreta: qué van a poder
          hacer al terminar. Nada de presentaciones institucionales largas.
        </li>
        <li>
          <strong>5-15 min.</strong> El problema en detalle, con datos o casos.
          Que se reconozcan.
        </li>
        <li>
          <strong>15-40 min.</strong> El contenido útil de verdad, paso a paso.
          Aquí se entrega valor sin reservarse lo bueno: la gente compra porque
          quedó convencida de que sabes, no porque le escondiste algo.
        </li>
        <li>
          <strong>40-50 min.</strong> Cómo se ve esto implementado, y ahí sí la
          oferta. Una sola, clara, con condición de cierre razonable.
        </li>
        <li>
          <strong>50-60 min.</strong> Preguntas. La parte que más convierte,
          porque las objeciones salen solas y las respondes frente a todos.
        </li>
      </ul>

      <h2>Cómo lograr que efectivamente asistan</h2>
      <p>
        Aquí es donde se pierde o se gana la mitad del resultado. Lo que funciona:
      </p>
      <ul>
        <li>
          <strong>Recordatorio por WhatsApp, no solo por correo.</strong> La
          diferencia de asistencia es grande. Uno el día anterior y otro 30
          minutos antes.
        </li>
        <li>
          <strong>Inscripción con fecha cercana.</strong> Abrir inscripciones tres
          semanas antes suena prolijo y baja la asistencia: la gente se olvida.
          Entre 7 y 10 días funciona mejor.
        </li>
        <li>
          <strong>Pedir una pregunta al inscribirse.</strong> Sube el compromiso y
          además te dice qué desarrollar. Quien escribió una pregunta tiene mucha
          más probabilidad de aparecer.
        </li>
      </ul>

      <h2>El seguimiento: donde ocurre la venta</h2>
      <p>
        La mayoría de las inscripciones no compra durante el webinar. Compra
        después, si hay seguimiento. Un esquema que funciona:
      </p>
      <ul>
        <li>
          <strong>Mismo día:</strong> grabación a todos, asistentes y ausentes,
          con el material prometido.
        </li>
        <li>
          <strong>Día 2:</strong> resumen de las preguntas más interesantes que
          salieron. Sirve especialmente para quien no pudo asistir.
        </li>
        <li>
          <strong>Día 4:</strong> un caso concreto relacionado con el tema.
        </li>
        <li>
          <strong>Día 7:</strong> cierre de la oferta, con la condición que
          anunciaste.
        </li>
      </ul>
      <p>
        Y una distinción clave: quien asistió más de 40 minutos merece un contacto
        personal, no un correo masivo. Ese es el segmento más caliente que vas a
        tener, y tratarlo como al resto es desperdiciarlo. Si tu{' '}
        <Link to="/blog/que-es-un-crm">CRM</Link> marca automáticamente a esos
        contactos, el equipo sabe a quién llamar sin revisar planillas.
      </p>

      <h2>Preguntas frecuentes</h2>

      <h3>¿Cuánta gente necesito para que valga la pena?</h3>
      <p>
        Menos de la que crees. Con 15 asistentes correctos —gente con el problema
        y capacidad de decidir— un webinar puede pagar meses de trabajo. Cien
        asistentes equivocados no valen nada. Optimiza por perfil, no por
        cantidad.
      </p>

      <h3>¿Conviene cobrar la entrada?</h3>
      <p>
        Cobrar algo simbólico sube fuerte la tasa de asistencia y filtra
        curiosos, pero reduce mucho el número de inscritos. Si tu objetivo es
        generar contactos, gratis. Si es vender algo caro a pocos, cobrar tiene
        sentido.
      </p>

      <h3>¿Qué hago con la grabación?</h3>
      <p>
        Súbela recortada por temas: cada bloque de 5 minutos es contenido para
        redes durante semanas. Y publica la versión completa en una página propia
        con transcripción, que suma posicionamiento por las preguntas que se
        respondieron ahí.
      </p>

      <h3>¿Cada cuánto conviene hacer webinars?</h3>
      <p>
        Mensual es sostenible para un equipo chico y suficiente para construir
        audiencia. Semanal agota el tema y la base. Si el primero funciona,
        repítelo con el mismo contenido antes de inventar uno nuevo: casi nadie de
        la primera vez lo vio.
      </p>

      <h2>En resumen</h2>
      <p>
        Un <strong>webinar</strong> es la mejor herramienta que existe para vender
        algo que necesita explicación. Elige un tema con problema concreto, entrega
        valor real durante 40 minutos, y prepara el seguimiento antes de hacerlo,
        no después.
      </p>
      <p>
        Si no tienes definido qué pasa con los asistentes al día siguiente, el
        webinar va a generar aplausos y ninguna venta.{' '}
        <Link to="/#contacto">Agenda una demo de 30 minutos</Link> y armamos ese
        seguimiento, o revisa{' '}
        <Link to="/blog/que-es-la-segmentacion-de-clientes">
          cómo segmentar tu base
        </Link>{' '}
        para separar a los que asistieron de los que no.
      </p>
    </ArticleLayout>
  )
}
