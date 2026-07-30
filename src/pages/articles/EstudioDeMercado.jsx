import { Link } from 'react-router-dom'
import ArticleLayout from '../../components/ArticleLayout'
import { getArticle } from '../../content/articles'

const article = getArticle('como-hacer-un-estudio-de-mercado')

export default function EstudioDeMercado() {
  return (
    <ArticleLayout article={article}>
      <p>
        Veinte conversaciones bien hechas te dicen más que una encuesta de
        doscientas respuestas mal preguntadas. Y cuestan cero.
      </p>
      <p>
        Esa es la idea central de esta guía sobre{' '}
        <strong>cómo hacer un estudio de mercado</strong> cuando no tienes
        presupuesto para contratar uno. No vas a obtener un informe de cien
        páginas, pero sí lo que realmente necesitas: saber si hay gente dispuesta
        a pagar por lo que quieres vender, y a cuánto.
      </p>

      <h2>Paso 1: define una decisión, no un tema</h2>
      <p>
        El error que arruina la mayoría de los estudios caseros es empezar con un
        tema («quiero conocer el mercado de las mascotas») en lugar de una
        decisión pendiente.
      </p>
      <p>
        Un estudio útil nace de una pregunta que cambia lo que vas a hacer:
      </p>
      <ul>
        <li>
          ¿Lanzo el plan mensual a $29.000 o a $39.000?
        </li>
        <li>
          ¿Abro en Ñuñoa o mantengo solo atención a domicilio?
        </li>
        <li>
          ¿Los clientes que se van lo hacen por precio o por tiempo de respuesta?
        </li>
      </ul>
      <p>
        Si tu pregunta no tiene al menos dos respuestas posibles que te llevarían
        a acciones distintas, no la investigues: no vas a hacer nada con el
        resultado.
      </p>

      <h2>Paso 2: exprime lo que ya tienes</h2>
      <p>
        Antes de preguntarle nada a nadie, hay datos gratis esperando:
      </p>
      <ul>
        <li>
          <strong>Tu propia bandeja de entrada.</strong> Las preguntas que más se
          repiten en WhatsApp son tu investigación de mercado. Ahí está el
          lenguaje exacto de tu cliente y sus objeciones reales.
        </li>
        <li>
          <strong>Reseñas de tu competencia.</strong> Las de 2 y 3 estrellas son
          oro: dicen exactamente qué falla en el servicio que la gente ya está
          comprando. Es la forma más rápida de encontrar tu diferencial.
        </li>
        <li>
          <strong>Google Trends y el autocompletado.</strong> Gratis, y te muestran
          estacionalidad y cómo formula la gente sus búsquedas.
        </li>
        <li>
          <strong>Datos públicos del INE y estadísticas municipales.</strong>{' '}
          Población, hogares y actividad económica por comuna, útil para
          dimensionar mercado local.
        </li>
      </ul>
      <p>
        Con esto solo, muchas decisiones ya quedan resueltas sin encuestar a
        nadie.
      </p>

      <h2>Paso 3: veinte conversaciones antes que doscientas encuestas</h2>
      <p>
        Para una pyme, la entrevista corta rinde mucho más que la encuesta
        masiva. Quince minutos por teléfono con veinte personas de tu público te
        da matices que ninguna escala del 1 al 5 captura.
      </p>
      <p>
        Reglas para que sirva:
      </p>
      <ul>
        <li>
          <strong>Pregunta por el pasado, no por el futuro.</strong> «¿Comprarías
          esto?» produce respuestas amables e inútiles. «¿Cuándo fue la última vez
          que tuviste este problema y qué hiciste?» produce hechos.
        </li>
        <li>
          <strong>No menciones tu solución hasta el final.</strong> Apenas la
          nombras, la persona empieza a opinar sobre tu idea en vez de contarte su
          situación.
        </li>
        <li>
          <strong>Persigue los números.</strong> «¿Cuánto pagaste?», «¿cuántas
          veces al año?», «¿cuánto tiempo te tomó?». Los números se pueden
          proyectar; las opiniones no.
        </li>
        <li>
          <strong>Anota frases literales.</strong> Te van a servir después para
          escribir tu página y tus anuncios, como vimos en{' '}
          <Link to="/blog/que-es-un-copywriter">qué hace un copywriter</Link>.
        </li>
      </ul>

      <h2>Paso 4: la encuesta, si de verdad la necesitas</h2>
      <p>
        La encuesta sirve para <em>cuantificar</em> algo que ya entendiste
        cualitativamente. Nunca al revés. Si la lanzas sin haber conversado antes,
        vas a preguntar lo que tú crees importante y no lo que lo es.
      </p>
      <p>
        Cómo hacerla bien:
      </p>
      <ul>
        <li>
          <strong>Máximo 7 preguntas.</strong> Más que eso y la tasa de abandono
          se dispara.
        </li>
        <li>
          <strong>Nada de preguntas dobles.</strong> «¿Te parece rápido y barato?»
          no se puede responder si es rápido pero caro.
        </li>
        <li>
          <strong>Cuidado con dirigir.</strong> «¿Cuánto valoras la buena
          atención?» tiene una sola respuesta posible y no informa nada.
        </li>
        <li>
          <strong>El precio, con rangos y contexto.</strong> Preguntar «¿cuánto
          pagarías?» da cifras irreales. Preguntar «¿cuál de estos tres planes
          elegirías?» obliga a decidir, que es lo que pasa en la realidad.
        </li>
      </ul>
      <p>
        Para distribuirla, WhatsApp supera por lejos al correo en tasa de
        respuesta. Lo cubrimos en{' '}
        <Link to="/blog/como-hacer-una-encuesta-en-whatsapp">
          cómo hacer una encuesta en WhatsApp
        </Link>.
      </p>

      <h2>Paso 5: leer los resultados sin engañarte</h2>
      <p>
        Tres trampas frecuentes al interpretar:
      </p>
      <ul>
        <li>
          <strong>Sesgo de muestra.</strong> Si encuestaste a tus seguidores de
          Instagram, mediste a gente que ya te quiere. No representa al mercado.
        </li>
        <li>
          <strong>Confundir interés con intención.</strong> Que 80% diga «me
          interesa» no significa nada. La pregunta que discrimina es si dejaría el
          correo, agendaría una hora o pagaría una reserva.
        </li>
        <li>
          <strong>Buscar la respuesta que querías.</strong> Si empezaste
          convencido de tu idea, vas a encontrar cómo confirmarla. Un antídoto:
          escribe antes qué resultado te haría abandonar el proyecto.
        </li>
      </ul>

      <h2>Paso 6: la prueba real</h2>
      <p>
        El estudio más confiable no es preguntar: es vender. Antes de invertir en
        el servicio completo, publica la oferta, pon un botón, y mide cuánta gente
        llega hasta el final. Aunque después les avises que aún no está
        disponible, ese dato vale más que cualquier encuesta.
      </p>
      <p>
        Una campaña de $80.000 durante una semana te dice si hay demanda real con
        una precisión que ninguna investigación declarativa alcanza.
      </p>

      <h2>Preguntas frecuentes</h2>

      <h3>¿Cuántas respuestas necesito para que sea confiable?</h3>
      <p>
        Depende de qué tan preciso necesites el resultado. Para decisiones
        binarias en una pyme, entre 30 y 100 respuestas de gente correcta suele
        bastar. Diez respuestas de tu público real valen más que doscientas de
        gente al azar.
      </p>

      <h3>¿Cuánto cuesta un estudio de mercado profesional en Chile?</h3>
      <p>
        Un estudio formal con empresa especializada parte alrededor de los tres
        millones de pesos y puede subir bastante según alcance. Por eso, para
        validar una decisión acotada, el enfoque de esta guía suele ser
        suficiente y proporcional al riesgo.
      </p>

      <h3>¿Puedo estudiar el mercado sin tener clientes todavía?</h3>
      <p>
        Sí, y es cuando más importa. Sin base propia, apóyate en reseñas de la
        competencia, grupos y foros donde tu público conversa, y entrevistas a
        conocidos que calcen con el perfil. Lo que no puedes es preguntarle a tu
        entorno cercano si «les parece buena idea»: te van a decir que sí.
      </p>

      <h3>¿Cada cuánto conviene repetirlo?</h3>
      <p>
        Cuando vayas a tomar una decisión importante —precio, nuevo servicio,
        nueva ubicación— y una revisión ligera una vez al año. Lo que sí conviene
        es tener siempre activa la escucha barata: leer reseñas y anotar las
        preguntas repetidas no cuesta nada y no caduca.
      </p>

      <h2>En resumen</h2>
      <p>
        Para <strong>hacer un estudio de mercado</strong> sin presupuesto: parte de
        una decisión concreta, exprime los datos que ya tienes, conversa con veinte
        personas antes de encuestar a doscientas, y valida con una venta real
        siempre que puedas.
      </p>
      <p>
        Y guarda todo lo que aprendas donde no se pierda: las frases, las
        objeciones y los precios que te dijeron valen para los próximos dos años.{' '}
        <Link to="/#contacto">Agenda 30 minutos sin costo</Link> y vemos cómo
        registrar eso en tu proceso comercial, o continúa con{' '}
        <Link to="/blog/que-es-la-planeacion-estrategica">
          planeación estratégica para pymes
        </Link>{' '}
        para convertir los hallazgos en un plan.
      </p>
    </ArticleLayout>
  )
}
