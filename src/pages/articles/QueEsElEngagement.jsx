import { Link } from 'react-router-dom'
import ArticleLayout from '../../components/ArticleLayout'
import { getArticle } from '../../content/articles'

const article = getArticle('que-es-el-engagement')

export default function QueEsElEngagement() {
  return (
    <ArticleLayout article={article}>
      <p>
        Hay cuentas con 8% de <strong>engagement</strong> que no venden nada y
        cuentas con 1,2% que sostienen un negocio completo. Por eso la pregunta
        «¿qué es el engagement?» tiene una respuesta corta y una útil.
      </p>
      <p>
        La corta: <strong>es el porcentaje de personas que hacen algo con tu
        contenido en lugar de solo verlo pasar</strong>. La útil es entender qué
        mide realmente esa cifra, cómo se calcula bien según la red, y en qué
        casos sube mientras tu negocio baja.
      </p>

      <h2>La fórmula, y por qué casi todos la aplican mal</h2>
      <p>
        La fórmula base es simple:
      </p>
      <p>
        <strong>
          Engagement = (interacciones ÷ base de referencia) × 100
        </strong>
      </p>
      <p>
        El problema está en la base de referencia. Según qué pongas ahí, el mismo
        contenido puede dar 2% o 12%:
      </p>
      <ul>
        <li>
          <strong>Sobre seguidores.</strong> Interacciones divididas por tu número
          de seguidores. Es la más usada y la más engañosa, porque castiga a las
          cuentas grandes y premia a las chicas.
        </li>
        <li>
          <strong>Sobre alcance.</strong> Interacciones divididas por las personas
          que efectivamente vieron la publicación. Es la correcta si quieres saber
          si tu contenido es bueno.
        </li>
        <li>
          <strong>Sobre impresiones.</strong> Igual que la anterior pero contando
          veces mostradas, no personas. Da el número más bajo de los tres.
        </li>
      </ul>
      <p>
        Cuando compares tu engagement con el de alguien más, lo primero es
        preguntar cuál de las tres está usando. Si no lo dice, la comparación no
        significa nada.
      </p>

      <h2>Qué cuenta como interacción en cada red</h2>
      <ul>
        <li>
          <strong>Instagram:</strong> me gusta, comentarios, guardados y
          compartidos. Los dos últimos pesan mucho más en el algoritmo que un me
          gusta, porque implican intención real.
        </li>
        <li>
          <strong>Facebook:</strong> reacciones, comentarios, compartidos y clics
          en el contenido.
        </li>
        <li>
          <strong>TikTok:</strong> me gusta, comentarios, compartidos y —sobre
          todo— el porcentaje de video visto y las reproducciones repetidas.
        </li>
        <li>
          <strong>LinkedIn:</strong> reacciones, comentarios, compartidos y clics.
          Los comentarios largos valen desproporcionadamente más.
        </li>
      </ul>
      <p>
        Un guardado en Instagram vale más que veinte me gusta. Si tu contenido
        genera guardados, estás produciendo algo que la gente quiere volver a
        encontrar, que es lo más cercano a utilidad real que puedes medir.
      </p>

      <h2>Cuánto es un buen engagement</h2>
      <p>
        Como referencia general para cuentas de empresa, calculado sobre
        seguidores:
      </p>
      <ul>
        <li>
          <strong>Bajo 1%:</strong> algo está fallando —o creciste con seguidores
          que no eran tu público.
        </li>
        <li>
          <strong>1% a 3%:</strong> rango normal para la mayoría de las cuentas de
          negocio.
        </li>
        <li>
          <strong>3% a 6%:</strong> buen desempeño, comunidad activa.
        </li>
        <li>
          <strong>Sobre 6%:</strong> excelente, o cuenta muy pequeña donde cada
          interacción pesa mucho porcentualmente.
        </li>
      </ul>
      <p>
        Ese último punto importa: una cuenta de 300 seguidores con 30
        interacciones da 10%, y no significa que lo esté haciendo mejor que una de
        50.000 con 2%. Los porcentajes de cuentas chicas siempre se ven mejores.
      </p>

      <h2>Cuándo el engagement sube y el negocio no</h2>
      <p>
        Esta es la parte que no aparece en la mayoría de los artículos sobre el
        tema. El engagement es una métrica intermedia, no un resultado. Sube sin
        que pase nada bueno cuando:
      </p>
      <ul>
        <li>
          <strong>Publicas concursos.</strong> «Comenta y etiqueta a dos amigos»
          dispara el número y te llena la cuenta de gente que quería el premio, no
          tu servicio.
        </li>
        <li>
          <strong>Publicas contenido viral ajeno a tu rubro.</strong> El meme
          rinde en interacciones y no acerca a nadie a comprarte.
        </li>
        <li>
          <strong>Tu audiencia es principalmente del gremio.</strong> Si te siguen
          otros profesionales de lo mismo, van a interactuar mucho y comprar
          nunca.
        </li>
      </ul>
      <p>
        La forma de detectarlo: mira el engagement junto a los clics al perfil,
        los clics al enlace y las conversaciones iniciadas. Si las interacciones
        suben y esos tres se quedan planos, estás entreteniendo, no vendiendo.
      </p>

      <h2>Cinco formas concretas de mejorarlo</h2>
      <ul>
        <li>
          <strong>Pregunta algo respondible.</strong> «¿Qué opinan?» no genera
          nada. «¿Cobran el traslado aparte o incluido?» genera discusión, porque
          la gente tiene una postura y quiere decirla.
        </li>
        <li>
          <strong>Responde todos los comentarios en la primera hora.</strong> El
          algoritmo mide la conversación temprana, y tus respuestas cuentan como
          actividad. Es lo más barato que puedes hacer.
        </li>
        <li>
          <strong>Publica cuando tu gente está, no cuando dice el manual.</strong>{' '}
          Tus propias estadísticas traen esa hora. Copiar «los mejores horarios
          para publicar» de un artículo genérico es adivinar.
        </li>
        <li>
          <strong>Produce contenido guardable.</strong> Checklists, precios de
          referencia, errores comunes. Lo que la gente quiere tener a mano
          después.
        </li>
        <li>
          <strong>Muestra procesos y personas.</strong> En servicios, el
          antes/después y la cara de quien hace el trabajo superan
          consistentemente al contenido de marca pulido.
        </li>
      </ul>

      <h2>Del engagement a la conversación</h2>
      <p>
        Un comentario es una señal de interés que dura poco. La diferencia entre
        una cuenta que genera interacciones y una que genera clientes está en qué
        pasa después: quien comenta «¿precio?» debería terminar en una
        conversación por WhatsApp en minutos, no leyendo «te enviamos info por
        interno» y esperando dos días.
      </p>
      <p>
        Ahí es donde el engagement deja de ser una métrica de vanidad. Si cada
        interacción relevante entra a tu{' '}
        <Link to="/blog/que-es-un-crm">CRM</Link> como un contacto con
        seguimiento asignado, el número empieza a correlacionar con ventas. Si
        muere en la notificación, no.
      </p>

      <h2>Preguntas frecuentes</h2>

      <h3>¿El engagement afecta el alcance de mis publicaciones?</h3>
      <p>
        Sí, y de forma bastante directa. Las plataformas usan la interacción
        temprana como señal de calidad para decidir a cuánta gente más mostrar el
        contenido. Por eso la primera hora concentra tanto del resultado final de
        una publicación.
      </p>

      <h3>¿Comprar seguidores baja el engagement?</h3>
      <p>
        Lo destruye por partida doble: sube el denominador de la fórmula y agrega
        cuentas que nunca van a interactuar. Además el algoritmo detecta la
        proporción anómala y reduce el alcance orgánico. Es de las peores
        decisiones disponibles.
      </p>

      <h3>¿Cuál es la diferencia entre engagement y alcance?</h3>
      <p>
        El alcance es cuánta gente vio; el engagement es qué proporción hizo algo.
        Alcance alto con engagement bajo significa que el contenido se mostró pero
        no interesó. Alcance bajo con engagement alto significa que a quien le
        llegó le importó, y suele ser el mejor punto de partida para crecer.
      </p>

      <h3>¿Sirve responder con emojis a los comentarios?</h3>
      <p>
        Cuenta como respuesta pero aporta poco. Una respuesta con contenido real
        —que resuelva la duda o agregue un dato— genera más conversación y deja
        mejor impresión a quien lee sin comentar, que siempre son muchos más.
      </p>

      <h2>En resumen</h2>
      <p>
        El <strong>engagement</strong> mide si tu contenido le importa a alguien,
        y es una señal valiosa siempre que la leas junto a lo que pasa después:
        clics, conversaciones, cotizaciones. Sola, se infla con facilidad.
      </p>
      <p>
        Si tus publicaciones generan interacción pero no sabes cuántas de esas
        personas terminan escribiéndote,{' '}
        <Link to="/#contacto">agenda una demo gratuita de 30 minutos</Link> y
        vemos cómo conectar lo uno con lo otro. También te puede servir{' '}
        <Link to="/blog/que-es-la-segmentacion-de-clientes">
          cómo segmentar tu base de clientes
        </Link>{' '}
        para hablarle distinto a cada grupo.
      </p>
    </ArticleLayout>
  )
}
