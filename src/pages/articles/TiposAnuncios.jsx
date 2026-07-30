import { Link } from 'react-router-dom'
import ArticleLayout from '../../components/ArticleLayout'
import { getArticle } from '../../content/articles'

const article = getArticle('tipos-de-anuncios-publicitarios')

export default function TiposAnuncios() {
  return (
    <ArticleLayout article={article}>
      <p>
        El error más caro en publicidad digital no es elegir mal la plataforma.
        Es <strong>poner un anuncio de cierre frente a alguien que todavía no
        sabe que tiene el problema</strong>. El anuncio puede estar bien diseñado,
        el presupuesto bien puesto y la segmentación bien hecha: si el mensaje no
        corresponde a la etapa en que está la persona, no convierte.
      </p>
      <p>
        Este artículo recorre los tipos de anuncios publicitarios digitales
        explicando qué hace cada uno, en qué etapa funciona y qué métrica mirar
        para saber si está rindiendo.
      </p>

      <h2>Las tres etapas que ordenan todo</h2>
      <p>
        Antes de los formatos, el marco. Toda persona pasa por tres momentos, y
        cada tipo de anuncio sirve en uno:
      </p>
      <ul>
        <li>
          <strong>No sabe que tiene el problema.</strong> Aquí no puedes vender,
          solo llamar la atención. Formatos visuales e interruptivos.
        </li>
        <li>
          <strong>Sabe que tiene el problema y busca soluciones.</strong> Está
          comparando. Aquí compites con contenido y con credibilidad.
        </li>
        <li>
          <strong>Ya decidió y elige proveedor.</strong> Aquí es donde se cierra,
          y donde vale la pena pagar más por clic.
        </li>
      </ul>
      <p>
        Casi toda la plata mal gastada en publicidad viene de confundir la etapa
        uno con la tres.
      </p>

      <h2>Anuncios de búsqueda</h2>
      <p>
        Texto que aparece en Google cuando alguien escribe algo. Es el formato de{' '}
        <strong>intención pura</strong>: no interrumpes a nadie, apareces cuando
        ya te están buscando.
      </p>
      <p>
        <strong>Etapa:</strong> decisión, sobre todo. <strong>Métrica clave:</strong>{' '}
        costo por conversión, no costo por clic. Un clic de $1.200 que cierra uno
        de cada seis es mejor negocio que uno de $300 que no cierra nunca.
      </p>
      <p>
        La palabra clave lo dice todo: «precio», «cerca de mí», «cotizar»,
        «urgente» son de decisión. «Qué es», «cómo funciona», «para qué sirve» son
        de investigación —y ahí conviene llevar a un artículo, no a una página de
        venta.
      </p>

      <h2>Anuncios de display</h2>
      <p>
        Banners gráficos en sitios de la red de Google. Alcance enorme y costo por
        mil impresiones bajísimo, pero la tasa de clic es muy baja porque nadie
        entró a ese sitio buscándote.
      </p>
      <p>
        <strong>Etapa:</strong> reconocimiento. <strong>Métrica clave:</strong>{' '}
        alcance y frecuencia, no clics. Si mides display por clics vas a concluir
        que no sirve y lo vas a apagar.
      </p>
      <p>
        Para una pyme, el display frío rara vez vale la pena. El display de{' '}
        <em>remarketing</em>, en cambio, es de lo más rentable que existe.
      </p>

      <h2>Anuncios de video</h2>
      <p>
        YouTube y video en redes. El formato con más capacidad de generar
        recuerdo, y el que más castiga la falta de gancho: si los primeros tres
        segundos no detienen, no hay anuncio.
      </p>
      <p>
        <strong>Etapa:</strong> reconocimiento y consideración.{' '}
        <strong>Métrica clave:</strong> porcentaje de reproducción completada y
        costo por visualización.
      </p>
      <p>
        Regla práctica: el primer plano tiene que mostrar el problema, no tu
        logo. El logo al inicio es la forma más rápida de que salten el anuncio.
      </p>

      <h2>Anuncios en redes sociales</h2>
      <p>
        Instagram, Facebook, TikTok, LinkedIn. Aquí no compras intención: compras
        atención sobre un perfil demográfico y de intereses. Funcionan cuando el
        producto se entiende visualmente y cuando la oferta es clara sin
        contexto previo.
      </p>
      <p>
        <strong>Etapa:</strong> reconocimiento y consideración.{' '}
        <strong>Métrica clave:</strong> costo por resultado y frecuencia. Cuando
        la frecuencia pasa de 3 en una audiencia chica, empieza la fatiga: mismo
        gasto, menos resultado, más gente molesta.
      </p>
      <p>
        En Chile, un detalle que cambia el rendimiento: mandar el clic a WhatsApp
        en vez de a un formulario. La conversación baja la fricción de forma
        notoria, siempre que haya alguien —o algo— respondiendo rápido al otro
        lado.
      </p>

      <h2>Remarketing</h2>
      <p>
        No es un formato sino una forma de segmentar: mostrarle anuncios a quien
        ya te visitó. Puede ser display, video o redes.
      </p>
      <p>
        <strong>Etapa:</strong> consideración y decisión.{' '}
        <strong>Métrica clave:</strong> costo por conversión, que casi siempre es
        una fracción del de campañas frías.
      </p>
      <p>
        Es la estrategia con mejor retorno de esta lista y la que más pymes tienen
        sin activar, normalmente porque no instalaron el píxel a tiempo. El píxel
        no cuesta nada y hay que ponerlo hoy aunque las campañas empiecen en seis
        meses: sin historial no hay audiencia a la cual volver.
      </p>

      <h2>Anuncios de shopping y catálogo</h2>
      <p>
        Ficha de producto con foto, precio y tienda directamente en el resultado
        de búsqueda o en el feed. Exclusivo de ecommerce, y muy eficiente porque
        la persona ya vio el precio antes de hacer clic: filtra solo a quien le
        acomoda.
      </p>
      <p>
        <strong>Etapa:</strong> decisión. <strong>Métrica clave:</strong> ROAS
        (retorno sobre inversión publicitaria) por producto, no del total. El
        promedio de la cuenta suele esconder que dos productos sostienen el
        resultado y ocho pierden plata.
      </p>

      <h2>Anuncios nativos y contenido patrocinado</h2>
      <p>
        Publicidad con el formato del medio donde aparece: un artículo
        recomendado, una publicación patrocinada. Rinde mejor que el display
        porque no se lee como anuncio, y su riesgo es el opuesto: si engaña,
        quema la marca.
      </p>
      <p>
        <strong>Etapa:</strong> consideración. <strong>Métrica clave:</strong>{' '}
        tiempo en página después del clic. Si la gente entra y sale en cinco
        segundos, el anuncio prometió algo que el contenido no cumplió.
      </p>

      <h2>Qué combinar según tu presupuesto</h2>
      <ul>
        <li>
          <strong>Menos de $200.000 al mes:</strong> solo búsqueda, en tus dos o
          tres servicios más rentables, más remarketing. Nada más. Repartir esta
          cifra en cuatro formatos garantiza que ninguno junte datos suficientes
          para optimizarse.
        </li>
        <li>
          <strong>$200.000 a $600.000:</strong> lo anterior, más redes con video
          corto para alimentar la audiencia de remarketing.
        </li>
        <li>
          <strong>Sobre $600.000:</strong> ahí sí tiene sentido sumar video de
          reconocimiento y display segmentado, porque ya tienes cerrado el fondo
          del embudo.
        </li>
      </ul>
      <p>
        La regla que resume todo: <strong>construye desde abajo del embudo hacia
        arriba</strong>. Primero captura a los que ya te buscan, después a los que
        te conocen, y solo al final invierte en que te conozcan más. Al revés se
        gasta mucho antes de aprender nada.
      </p>

      <h2>Preguntas frecuentes</h2>

      <h3>¿Cuál es el tipo de anuncio más barato?</h3>
      <p>
        Por clic, el display. Por cliente conseguido, casi siempre el remarketing.
        Son preguntas distintas y conviene no confundirlas: el formato más barato
        de comprar suele ser el más caro por resultado.
      </p>

      <h3>¿Cuánto tiempo debo dejar correr un anuncio antes de juzgarlo?</h3>
      <p>
        Lo suficiente para acumular datos, no un número fijo de días. Como
        referencia práctica, unas 50 a 100 conversiones antes de sacar
        conclusiones firmes, o al menos dos semanas si el volumen es bajo. Apagar
        campañas a los tres días es la causa más común de «la publicidad no me
        funciona».
      </p>

      <h3>¿Puedo usar el mismo anuncio en todas las plataformas?</h3>
      <p>
        El mensaje sí, la pieza no. Un video horizontal en TikTok se ve mal, y un
        texto de LinkedIn en Instagram se lee acartonado. Lo que se reutiliza es
        el argumento; el formato se adapta a cada lugar.
      </p>

      <h3>¿Qué es más importante, la segmentación o el creativo?</h3>
      <p>
        Hoy el creativo, y por bastante. Las plataformas se volvieron muy buenas
        encontrando a quién mostrarle algo si el algo es bueno. Un creativo débil
        con segmentación perfecta rinde peor que un creativo fuerte con
        segmentación amplia.
      </p>

      <h2>En resumen</h2>
      <p>
        Los <strong>tipos de anuncios publicitarios</strong> no compiten entre sí:
        ocupan lugares distintos del recorrido. Búsqueda y remarketing cierran,
        video y redes construyen, display y nativos amplían.
      </p>
      <p>
        Y todos comparten el mismo punto de fuga: el momento después del clic. Un
        anuncio que trae veinte contactos al mes a una bandeja que nadie revisa a
        tiempo es plata gastada.{' '}
        <Link to="/#contacto">Agenda 30 minutos sin costo</Link> y revisamos qué
        pasa con tus contactos después del clic, o mira las{' '}
        <Link to="/blog/estrategias-de-marketing-digital-para-pymes">
          ocho estrategias de marketing digital para pymes
        </Link>{' '}
        para ubicar la publicidad dentro de un plan más amplio.
      </p>
    </ArticleLayout>
  )
}
