import { Link } from 'react-router-dom'
import ArticleLayout from '../../components/ArticleLayout'
import { getArticle } from '../../content/articles'

const article = getArticle('estrategias-de-marketing-digital-para-pymes')

export default function EstrategiasMarketing() {
  return (
    <ArticleLayout article={article}>
      <p>
        La mayoría de las listas de <strong>estrategias de marketing digital</strong>{' '}
        tienen el mismo problema: enumeran doce tácticas sin decir cuánto cuesta
        cada una, cuánto tarda en dar resultado ni cuál conviene si eres tres
        personas. Este artículo ordena ocho estrategias por esas dos variables
        —costo y plazo— para que elijas dos o tres, no las ocho.
      </p>
      <p>
        Porque ese es el error más caro que vemos en pymes chilenas: intentar
        estar en todos lados con el presupuesto de estar en uno. Cinco canales a
        medias rinden menos que dos bien ejecutados.
      </p>

      <h2>Antes de elegir: las dos preguntas que ordenan todo</h2>
      <p>
        Ninguna estrategia es buena o mala en abstracto. Depende de dos cosas que
        tienes que responder antes de gastar un peso:
      </p>
      <ul>
        <li>
          <strong>¿Tu cliente te busca o lo tienes que interrumpir?</strong> Si
          alguien escribe «gasfíter de urgencia Providencia» en Google, hay
          demanda activa y tu trabajo es aparecer. Si vendes algo que la gente no
          sabe que necesita, ningún buscador te va a salvar: tienes que ir a
          buscarla tú en redes.
        </li>
        <li>
          <strong>¿Cuánto tiempo aguantas sin resultados?</strong> El SEO empieza
          a rendir entre el mes 4 y el 8. La publicidad pagada rinde el mismo día
          y deja de rendir el día que la apagas. Si necesitas ventas este mes, el
          SEO no es tu respuesta —aunque igual deberías empezarlo.
        </li>
      </ul>

      <h2>1. SEO local: aparecer cuando ya te están buscando</h2>
      <p>
        Para un negocio de servicios con atención presencial, esta es casi siempre
        la de mejor retorno, y empieza con algo gratis: la ficha de Google
        Business Profile completa, con horario real, fotos propias, servicios
        listados y respuesta a todas las reseñas.
      </p>
      <p>
        El detalle que casi nadie trabaja son las reseñas. No solo la cantidad: la{' '}
        <em>frecuencia</em>. Veinte reseñas de hace tres años pesan menos que
        nueve de los últimos seis meses. Pide reseña por WhatsApp al cierre de
        cada servicio, con el enlace directo. Si lo automatizas para que salga 24
        horas después, deja de depender de que alguien se acuerde.
      </p>
      <p>
        <strong>Costo:</strong> cero a bajo. <strong>Plazo:</strong> 2 a 4 meses
        para moverse en el mapa.
      </p>

      <h2>2. Contenido que responde preguntas reales</h2>
      <p>
        Escribir un artículo por semana sobre «tendencias del rubro» no sirve.
        Escribir sobre las preguntas que tus clientes hacen literalmente por
        WhatsApp antes de comprar, sí.
      </p>
      <p>
        El método más simple: abre tu bandeja de entrada y anota las quince
        preguntas que más se repiten. Cada una es un artículo. Ya sabes que hay
        demanda porque te la están haciendo, y ya sabes cómo la formula la gente
        porque tienes sus palabras exactas. Ese es el trabajo de investigación de
        palabras clave que muchos pagan por hacer con herramientas.
      </p>
      <p>
        <strong>Costo:</strong> tiempo, o entre $40.000 y $120.000 por artículo si
        lo externalizas. <strong>Plazo:</strong> 4 a 8 meses.
      </p>

      <h2>3. WhatsApp como canal de venta, no como buzón</h2>
      <p>
        En Chile la conversación comercial ocurre en WhatsApp. La diferencia entre
        una pyme que vende y una que no suele estar en el tiempo de respuesta: un
        contacto respondido en menos de cinco minutos tiene muchas más
        probabilidades de convertir que el mismo contacto respondido al día
        siguiente.
      </p>
      <p>
        Lo que sí mueve la aguja: un mensaje de bienvenida que califique en vez de
        solo saludar («¿es para hogar o empresa?», «¿en qué comuna?»), respuestas
        rápidas guardadas para lo que preguntan siempre, y un recordatorio
        automático 24 horas antes de cada cita agendada. Ese último punto solo
        suele bajar bastante las inasistencias. Lo desarrollamos completo en{' '}
        <Link to="/blog/automatizar-whatsapp-business-agendar-citas">
          cómo automatizar WhatsApp Business para agendar citas 24/7
        </Link>.
      </p>
      <p>
        <strong>Costo:</strong> bajo. <strong>Plazo:</strong> inmediato.
      </p>

      <h2>4. Publicidad de búsqueda: comprar la intención</h2>
      <p>
        Google Ads en búsqueda es caro por clic y barato por cliente, porque
        compras a alguien que ya está buscando resolver el problema. Para pymes
        con presupuesto acotado hay tres reglas que evitan quemar plata:
      </p>
      <ul>
        <li>
          <strong>Concordancia de frase, no amplia.</strong> La concordancia
          amplia le da a Google permiso para gastarte el presupuesto en búsquedas
          que no tienen nada que ver.
        </li>
        <li>
          <strong>Palabras clave negativas desde el día uno.</strong> «gratis»,
          «cómo hacer», «trabajo», «sueldo». Sin esta lista pagas por gente que
          nunca iba a comprar.
        </li>
        <li>
          <strong>Una campaña de marca.</strong> Cuesta poquísimo porque nadie más
          puja por tu nombre, y evita que un competidor aparezca sobre ti cuando
          te buscan a ti.
        </li>
      </ul>
      <p>
        <strong>Costo:</strong> desde $150.000 mensuales para tener datos útiles.{' '}
        <strong>Plazo:</strong> mismo día.
      </p>

      <h2>5. Remarketing: la más rentable y la que menos se usa</h2>
      <p>
        Entre el 95% y el 98% de quienes visitan tu sitio se van sin hacer nada.
        El remarketing les vuelve a mostrar tu marca después, y como ya te
        conocen, el costo por conversión suele ser una fracción del de una campaña
        fría.
      </p>
      <p>
        Es la estrategia con mejor relación esfuerzo/retorno de esta lista, y la
        que más pymes tienen sin activar. El requisito es haber instalado el píxel
        antes: no se puede hacer remarketing a las visitas de un mes que no
        mediste. Instálalo hoy aunque no vayas a hacer campañas hasta marzo.
      </p>
      <p>
        <strong>Costo:</strong> bajo. <strong>Plazo:</strong> necesitas acumular
        audiencia, 2 a 4 semanas.
      </p>

      <h2>6. Email a tu propia base</h2>
      <p>
        Es el único canal que realmente te pertenece. Si Instagram cambia el
        algoritmo mañana, tu alcance cae. Tu lista de correos no.
      </p>
      <p>
        Para una pyme no hace falta un calendario editorial elaborado: un correo
        mensual con algo genuinamente útil y una oferta clara mantiene la relación
        viva. Lo que sí importa es no comprar bases —destruye tu reputación de
        envío y termina mandando tus correos legítimos a spam— y segmentar antes
        de escribir, tema que cubrimos en{' '}
        <Link to="/blog/que-es-la-segmentacion-de-clientes">
          cómo segmentar tu base de clientes
        </Link>.
      </p>
      <p>
        <strong>Costo:</strong> gratis hasta unos 2.000 contactos en la mayoría de
        las plataformas. <strong>Plazo:</strong> inmediato si ya tienes base.
      </p>

      <h2>7. Video corto donde tu cliente ya está</h2>
      <p>
        El video vertical de 15 a 40 segundos es el formato con más alcance
        orgánico disponible hoy, y el que más se posterga porque la gente cree que
        necesita producción.
      </p>
      <p>
        No la necesita. Lo que funciona en servicios es mostrar el trabajo:
        antes/después, el proceso, el error que la gente comete. Grabado con
        teléfono, sin guion memorizado. La producción alta muchas veces rinde
        menos, porque se lee como publicidad y la gente la salta.
      </p>
      <p>
        <strong>Costo:</strong> tiempo. <strong>Plazo:</strong> 3 a 6 meses de
        constancia.
      </p>

      <h2>8. Automatizar el seguimiento (la que multiplica a las otras siete)</h2>
      <p>
        Esta no genera tráfico: evita que el tráfico que ya conseguiste se pierda.
        Y por eso va al final, porque es la que hace rentables a las demás.
      </p>
      <p>
        Un contacto que llega por Instagram, pregunta el precio y no vuelve a
        escribir no es un cliente perdido: es un cliente sin seguimiento. Si a las
        48 horas sale un mensaje automático, y al quinto día otro con un caso
        parecido resuelto, una parte de esos contactos vuelve. Sin
        automatización eso depende de que alguien revise la conversación y se
        acuerde, y en una semana ocupada nadie se acuerda.
      </p>
      <p>
        <strong>Costo:</strong> el de tu <Link to="/blog/que-es-un-crm">CRM</Link>.{' '}
        <strong>Plazo:</strong> inmediato.
      </p>

      <h2>Cómo elegir las tuyas</h2>
      <p>
        Si tuviéramos que recomendar un punto de partida para una pyme de
        servicios en Chile que hoy no hace nada estructurado:
      </p>
      <ul>
        <li>
          <strong>Mes 1:</strong> ficha de Google Business Profile completa,
          píxel instalado, WhatsApp con mensaje de bienvenida y recordatorios de
          cita.
        </li>
        <li>
          <strong>Mes 2 y 3:</strong> campaña de búsqueda acotada a tus tres
          servicios más rentables, más remarketing.
        </li>
        <li>
          <strong>Mes 4 en adelante:</strong> contenido respondiendo las preguntas
          reales de tu bandeja, y correo mensual a la base que ya acumulaste.
        </li>
      </ul>
      <p>
        Eso son cuatro de las ocho. Las otras cuatro entran cuando las primeras
        estén funcionando solas, no antes.
      </p>

      <h2>Preguntas frecuentes</h2>

      <h3>¿Cuánto debería invertir una pyme en marketing digital?</h3>
      <p>
        La referencia habitual es entre 5% y 10% de la facturación, pero es más
        útil pensarlo al revés: cuánto te puede costar conseguir un cliente para
        que siga siendo rentable. Si un cliente te deja $200.000 de margen al año
        y hoy cierras uno de cada cuatro contactos, puedes pagar bastante por
        contacto y seguir ganando. Ese número te dice tu presupuesto, no un
        porcentaje genérico.
      </p>

      <h3>¿Conviene contratar una agencia o hacerlo internamente?</h3>
      <p>
        Depende de qué parte. La configuración inicial —campañas, medición,
        automatizaciones— se hace una vez y conviene que la haga alguien con
        experiencia, porque los errores ahí se pagan todos los meses. La operación
        diaria (responder, publicar, pedir reseñas) casi siempre sale mejor
        internamente: nadie conoce tu negocio como tú.
      </p>

      <h3>¿Sirven las redes sociales si vendo a empresas?</h3>
      <p>
        Sirven, pero no todas ni igual. En B2B chileno LinkedIn y el correo pesan
        más que Instagram, y el ciclo de decisión es largo: vas a necesitar varios
        contactos antes de una reunión. Lo que no funciona es publicar en LinkedIn
        como si fuera Instagram, con frases motivacionales y cero sustancia
        técnica.
      </p>

      <h3>¿Cada cuánto debería revisar si las estrategias funcionan?</h3>
      <p>
        Las pagadas, semanalmente los primeros dos meses y luego mensual. Las
        orgánicas —SEO, contenido, video— mensualmente, y sin sacar conclusiones
        antes del cuarto mes. Cambiar la estrategia de SEO al segundo mes porque
        «no pasa nada» es la forma más común de no obtener resultados nunca.
      </p>

      <h2>En resumen</h2>
      <p>
        Las mejores <strong>estrategias de marketing digital</strong> para tu pyme
        no son las más sofisticadas: son las dos o tres que puedes sostener doce
        meses seguidos. La constancia le gana a la variedad, sobre todo con
        equipos chicos.
      </p>
      <p>
        Y ninguna de las ocho rinde si el contacto que generan se pierde en una
        bandeja sin responder.{' '}
        <Link to="/#contacto">Agenda 30 minutos sin costo</Link> y revisamos dónde
        se está cayendo hoy tu proceso, o parte por entender{' '}
        <Link to="/blog/que-es-un-crm">qué es un CRM y por qué lo necesitas</Link>.
      </p>
    </ArticleLayout>
  )
}
