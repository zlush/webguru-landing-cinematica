import { Link } from 'react-router-dom'
import ArticleLayout from '../../components/ArticleLayout'
import { getArticle } from '../../content/articles'

const article = getArticle('que-es-un-copywriter')

export default function QueEsUnCopywriter() {
  return (
    <ArticleLayout article={article}>
      <p>
        Un <strong>copywriter</strong> no «escribe bonito». Cambia el orden en que
        aparece la información para que la persona llegue a una decisión antes de
        aburrirse. Esa es la diferencia entre un texto que se lee y uno que
        vende.
      </p>
      <p>
        En esta guía verás qué hace exactamente un copywriter, en qué se
        diferencia de un redactor de contenidos, cuánto cobra en Chile, y dos
        fórmulas que puedes aplicar hoy a tus propios textos sin contratar a
        nadie.
      </p>

      <h2>Qué hace realmente</h2>
      <p>
        El copywriting es escritura persuasiva orientada a una acción concreta:
        que la persona cotice, se inscriba, compre o responda. Todo lo que no
        empuja hacia esa acción sobra, y quitarlo es buena parte del trabajo.
      </p>
      <p>
        Un copywriter trabaja sobre textos cortos y de alto impacto: titulares de
        páginas, anuncios, asuntos de correo, descripciones de producto,
        secuencias de mensajes, guiones de video. El volumen es bajo y el efecto
        de cada palabra es alto —cambiar un titular puede mover la conversión de
        una página completa.
      </p>
      <p>
        Y antes de escribir, investiga. Un buen copy no sale de la inspiración:
        sale de leer reseñas, escuchar llamadas de venta y revisar qué preguntan
        los clientes por WhatsApp. Las mejores frases de venta suelen ser cosas
        que los propios clientes ya dijeron.
      </p>

      <h2>Copywriter, redactor de contenidos y community manager</h2>
      <p>
        Se confunden todo el tiempo y hacen cosas distintas:
      </p>
      <ul>
        <li>
          <strong>Copywriter.</strong> Textos que piden una acción inmediata.
          Se mide en conversión: cuántos de los que leyeron hicieron lo que
          debían hacer.
        </li>
        <li>
          <strong>Redactor de contenidos.</strong> Artículos, guías y material
          educativo. Se mide en tráfico, posicionamiento y tiempo de lectura. El
          objetivo es construir confianza a mediano plazo, no cerrar hoy.
        </li>
        <li>
          <strong>Community manager.</strong> Conversación y presencia diaria en
          redes. Se mide en interacción y en calidad de la relación con la
          audiencia.
        </li>
      </ul>
      <p>
        En una pyme suele ser la misma persona haciendo las tres cosas, y está
        bien. El problema aparece cuando se le pide conversión a contenido
        educativo, o cuando la página de servicios está escrita con el tono de un
        artículo informativo: explica mucho y no pide nada.
      </p>

      <h2>Las dos fórmulas que puedes aplicar hoy</h2>
      <p>
        No necesitas dominar veinte estructuras. Con estas dos cubres casi
        cualquier texto comercial.
      </p>

      <h3>AIDA</h3>
      <p>
        <strong>Atención, Interés, Deseo, Acción.</strong> La estructura clásica,
        útil para páginas de venta y anuncios:
      </p>
      <ul>
        <li>
          <strong>Atención:</strong> un titular que nombre el problema, no tu
          empresa. «Tus clientes escriben a las 22:00 y nadie responde» funciona
          mejor que «Somos líderes en soluciones digitales».
        </li>
        <li>
          <strong>Interés:</strong> muestra que entiendes la situación en detalle.
          Aquí se usa el lenguaje literal del cliente.
        </li>
        <li>
          <strong>Deseo:</strong> el resultado concreto, con prueba. Casos,
          números, un antes y después verificable.
        </li>
        <li>
          <strong>Acción:</strong> una sola instrucción clara. No tres botones
          distintos compitiendo.
        </li>
      </ul>

      <h3>PAS</h3>
      <p>
        <strong>Problema, Agitación, Solución.</strong> Más corta y más efectiva
        en mensajes breves —anuncios, WhatsApp, asuntos de correo:
      </p>
      <ul>
        <li>
          <strong>Problema:</strong> «Cotizas y después no sabes qué pasó con esa
          persona».
        </li>
        <li>
          <strong>Agitación:</strong> «De cada diez cotizaciones sin seguimiento,
          la mayoría no vuelve. No porque el precio estuviera mal, sino porque
          nadie volvió a escribir».
        </li>
        <li>
          <strong>Solución:</strong> «Un seguimiento automático a los 2, 7 y 21
          días recupera parte de eso sin que nadie lo recuerde».
        </li>
      </ul>
      <p>
        Una advertencia sobre la agitación: describe la consecuencia real, no
        inventes urgencia. El texto que exagera se nota, y quema la confianza que
        estás tratando de construir.
      </p>

      <h2>Cuánto cobra un copywriter en Chile</h2>
      <p>
        Los rangos varían muchísimo según experiencia y tipo de proyecto, pero
        como referencia orientativa del mercado freelance:
      </p>
      <ul>
        <li>
          <strong>Página de servicios o landing:</strong> entre $150.000 y
          $600.000 según profundidad de investigación.
        </li>
        <li>
          <strong>Set de anuncios:</strong> entre $80.000 y $250.000.
        </li>
        <li>
          <strong>Secuencia de correos o mensajes:</strong> entre $200.000 y
          $500.000.
        </li>
        <li>
          <strong>Por hora:</strong> entre $15.000 y $50.000.
        </li>
      </ul>
      <p>
        La pregunta útil no es cuánto cobra, sino cuánto vale para ti. Si tu
        página recibe 500 visitas al mes y convierte 1%, pasar a 2% son cinco
        contactos más mensuales. Multiplícalo por tu margen y sabrás cuánto puedes
        pagar por ese trabajo.
      </p>

      <h2>Cómo evaluar a uno antes de contratarlo</h2>
      <ul>
        <li>
          <strong>Pide resultados, no portafolio bonito.</strong> «Este titular
          subió la conversión de 1,2% a 2,1%» vale más que veinte piezas
          visualmente atractivas sin dato.
        </li>
        <li>
          <strong>Fíjate en qué te pregunta.</strong> Si no pregunta por tu
          cliente, tus objeciones frecuentes y tu competencia, va a escribir
          genérico.
        </li>
        <li>
          <strong>Pide una prueba pagada y corta.</strong> Un titular y tres
          variantes de anuncio. Barato, rápido, y te dice casi todo.
        </li>
      </ul>

      <h2>Preguntas frecuentes</h2>

      <h3>¿La inteligencia artificial reemplaza al copywriter?</h3>
      <p>
        Reemplaza la parte mecánica: generar variantes, adaptar formatos, salir
        de la página en blanco. No reemplaza lo que da resultado, que es saber
        qué objeción está frenando la compra y en qué orden desarmarla. El texto
        de IA sin esa investigación se lee correcto y no convierte, que es
        exactamente el problema que tiene la mayoría del contenido publicado hoy.
      </p>

      <h3>¿Necesito un copywriter si tengo poco tráfico?</h3>
      <p>
        Con muy poco tráfico, primero consigue visitas: mejorar la conversión de
        50 visitas mensuales no cambia nada. Con volumen estable, el copy pasa a
        ser de las inversiones más rentables porque el efecto se aplica a todo el
        tráfico futuro.
      </p>

      <h3>¿Qué texto conviene mejorar primero?</h3>
      <p>
        El que más gente ve antes de decidir. Normalmente el titular de la
        portada, la página del servicio más rentable, y el primer mensaje que
        reciben quienes escriben por WhatsApp. Ese último casi nunca se trabaja y
        lo lee el 100% de tus prospectos.
      </p>

      <h3>¿Cómo sé si un texto está funcionando?</h3>
      <p>
        Comparando contra el anterior con la misma cantidad de tráfico. Sin
        medición no hay copywriting, hay opinión. Cambia una cosa a la vez y deja
        correr hasta juntar datos suficientes.
      </p>

      <h2>En resumen</h2>
      <p>
        Un <strong>copywriter</strong> ordena la información para que la decisión
        llegue antes que el aburrimiento. Investiga, escribe corto y mide. Si vas
        a empezar tú, usa PAS en lo breve y AIDA en lo largo, y arregla primero el
        texto que más gente ve.
      </p>
      <p>
        Y recuerda que el mejor copy del mundo se desperdicia si el contacto que
        genera queda sin respuesta.{' '}
        <Link to="/#contacto">Agenda 30 minutos sin costo</Link> y revisamos qué
        pasa después de que alguien te escribe, o mira{' '}
        <Link to="/blog/tipos-de-anuncios-publicitarios">
          qué tipo de anuncio usar en cada etapa
        </Link>{' '}
        para saber dónde poner cada mensaje.
      </p>
    </ArticleLayout>
  )
}
