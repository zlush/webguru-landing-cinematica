import { Link } from 'react-router-dom'
import ArticleLayout from '../../components/ArticleLayout'
import { getArticle } from '../../content/articles'

const article = getArticle('que-es-un-crm')

export default function QueEsUnCrm() {
  return (
    <ArticleLayout article={article}>
      <p>
        Si alguien de tu equipo tiene los contactos de clientes en su teléfono
        personal, ya sabes por qué necesitas un CRM. <strong>Un CRM (Customer
        Relationship Management) es el sistema donde queda registrada cada
        interacción con cada cliente y cada prospecto</strong>, desde el primer
        mensaje hasta la compra repetida. No es una planilla más grande: es el
        lugar donde la información deja de depender de que alguien se acuerde.
      </p>
      <p>
        En este artículo verás qué es un CRM en términos concretos, cómo funciona
        por dentro, qué gana un negocio de servicios en Chile al implementarlo y
        cuáles son los errores que hacen que muchas implementaciones terminen
        abandonadas a los tres meses.
      </p>

      <h2>Qué es un CRM, sin la definición de folleto</h2>
      <p>
        Un CRM es una base de datos de personas con memoria. Cada contacto tiene
        una ficha: quién es, cómo llegó, qué preguntó, qué se le respondió, qué
        compró y cuándo hay que volver a hablarle. Esa ficha la ven todos los que
        deben verla, y no se pierde cuando el vendedor sale de vacaciones o
        renuncia.
      </p>
      <p>
        La diferencia práctica con una planilla es que el CRM <em>actúa</em>. Una
        planilla te muestra que Camila pidió información hace nueve días y nadie
        le respondió. Un CRM le manda a Camila un mensaje de seguimiento al
        segundo día, avisa al vendedor al cuarto, y si al noveno sigue sin
        respuesta la mueve a una campaña de reactivación. La planilla registra el
        problema; el CRM lo evita.
      </p>

      <h2>Cómo funciona un CRM por dentro</h2>
      <p>
        Aunque cada plataforma tiene su vocabulario, casi todos los CRM se
        organizan alrededor de cuatro piezas:
      </p>
      <ul>
        <li>
          <strong>Contactos.</strong> La ficha de cada persona, con su historial
          completo de mensajes, llamadas, citas y compras.
        </li>
        <li>
          <strong>Embudo o pipeline.</strong> Las etapas por las que pasa un
          prospecto: nuevo, contactado, cotizado, agendado, cerrado. Ver el embudo
          te dice exactamente en qué etapa se te caen los clientes.
        </li>
        <li>
          <strong>Bandeja de entrada.</strong> Los canales unificados. WhatsApp,
          Instagram, Facebook y correo llegando al mismo lugar, en vez de cuatro
          aplicaciones distintas con cuatro personas revisándolas.
        </li>
        <li>
          <strong>Automatizaciones.</strong> Las reglas del tipo «si pasa X,
          entonces haz Y». Son las que convierten el CRM de archivo en
          herramienta.
        </li>
      </ul>
      <p>
        Un CRM moderno agrega una quinta pieza: <strong>inteligencia
        artificial</strong> que responde consultas frecuentes, califica al
        prospecto según lo que escribe y agenda directamente en el calendario. Eso
        cambia el cálculo, porque el cuello de botella de la mayoría de los
        negocios de servicios no es la falta de contactos, es la velocidad de
        respuesta.
      </p>

      <h2>Por qué un CRM es urgente para una pyme en Chile</h2>
      <p>
        El comercio en Chile se mueve por WhatsApp. Eso trae una ventaja enorme
        —el cliente te escribe directo— y un problema silencioso: WhatsApp no
        recuerda por ti, no reasigna conversaciones y no avisa que alguien quedó
        sin respuesta. Cuando el volumen sube, la ventaja se convierte en un
        colador.
      </p>
      <p>
        Los tres agujeros que un CRM tapa primero suelen ser:
      </p>
      <ol>
        <li>
          <strong>El contacto que llega fuera de horario.</strong> Una parte
          importante de las consultas entra de noche, fines de semana o festivos.
          Sin respuesta automática, ese prospecto ya cotizó con otro antes de que
          abras.
        </li>
        <li>
          <strong>El seguimiento que nadie hace.</strong> Muy pocos negocios
          insisten más de una vez. El CRM insiste sin que nadie tenga que
          acordarse.
        </li>
        <li>
          <strong>La cita a la que el cliente no llega.</strong> En clínicas y
          servicios agendados, la inasistencia es pérdida directa de una hora
          vendida. Los recordatorios automáticos por WhatsApp son la
          intervención más barata contra eso: en las implementaciones de WebGuru
          hemos visto caídas de ausencias de hasta 40%.
        </li>
      </ol>
      <p>
        Súmale el contexto local: si ya emites boletas por el SII, cobras con
        Transbank o llevas inventario en Bsale, el CRM se conecta con eso vía API
        e integradores como Make o Zapier. La idea no es reemplazar tus sistemas,
        es que dejen de estar aislados.
      </p>

      <h2>Los cuatro errores que matan una implementación de CRM</h2>
      <p>
        La mayoría de los proyectos de CRM que fracasan no fracasan por el
        software. Fracasan por cómo se implementó:
      </p>
      <ul>
        <li>
          <strong>Migrar todo el desorden.</strong> Si subes una base sucia,
          duplicada y sin consentimiento, obtienes un CRM sucio. Limpia primero,
          migra después.
        </li>
        <li>
          <strong>Automatizar antes de entender el proceso.</strong> Si no sabes
          cuáles son tus etapas reales de venta, automatizar solo acelera el caos.
          Mapea el proceso a mano una vez, y recién entonces configúralo.
        </li>
        <li>
          <strong>Dejar canales fuera.</strong> Un CRM que no incluye el canal por
          donde llega el 70% de tus consultas no sirve. La adopción del equipo
          depende de que el CRM sea el único lugar donde hay que mirar.
        </li>
        <li>
          <strong>No definir qué se va a medir.</strong> Si nadie revisa la tasa
          de respuesta, la tasa de cierre por etapa y el porcentaje de
          inasistencia, no vas a saber si funcionó. Define esas tres métricas
          antes de encender nada.
        </li>
      </ul>
      <p>
        Un buen indicador de que la implementación va bien: a las dos semanas, tu
        equipo abre el CRM antes que WhatsApp.
      </p>

      <h2>Preguntas frecuentes sobre qué es un CRM</h2>

      <h3>¿Cuál es la diferencia entre un CRM y un ERP?</h3>
      <p>
        El CRM mira hacia afuera y el ERP hacia adentro. El CRM administra la
        relación con clientes y prospectos: conversaciones, embudo de venta,
        seguimiento y postventa. El ERP administra la operación interna:
        inventario, facturación, contabilidad, remuneraciones. Son complementarios
        y lo habitual es conectarlos, para que una venta cerrada en el CRM genere
        el documento correspondiente en el ERP sin que nadie lo copie a mano.
      </p>

      <h3>¿Un CRM sirve para un negocio de dos personas?</h3>
      <p>
        Sirve, y a veces más que en una empresa grande, porque en un equipo chico
        cada contacto perdido pesa mucho más. La diferencia es el alcance: un
        negocio pequeño no necesita veinte etapas de embudo ni reportería
        compleja, necesita que ningún mensaje quede sin responder y que los
        recordatorios salgan solos. Empieza por la bandeja unificada y los
        recordatorios, y crece desde ahí.
      </p>

      <h3>¿Cuánto tarda implementar un CRM?</h3>
      <p>
        Depende de cuántos canales e integraciones tengas, pero una configuración
        enfocada —bandeja unificada, embudo, recordatorios y un asistente
        respondiendo lo frecuente— se levanta en días, no en meses. Los proyectos
        que se estiran a trimestres suelen ser los que intentaron automatizar todo
        de una vez en lugar de resolver primero el agujero más grande.
      </p>

      <h3>¿La inteligencia artificial reemplaza a mi equipo de ventas?</h3>
      <p>
        No, y plantearlo así lleva a malas configuraciones. La IA es buena
        respondiendo lo repetitivo, disponible a cualquier hora, y filtrando quién
        tiene intención real de comprar. Lo que hace es que tu equipo llegue a la
        conversación cuando ya vale la pena tenerla, en lugar de gastar la mañana
        contestando «¿cuánto cuesta?». Las decisiones y los casos delicados siguen
        siendo humanos.
      </p>

      <h3>¿Qué pasa con los datos personales de mis clientes?</h3>
      <p>
        Es tu responsabilidad como responsable del tratamiento. Necesitas
        consentimiento para contactar, una finalidad clara, y un canal para que la
        persona pida acceder a sus datos o eliminarlos. Elige un CRM que te permita
        exportar y borrar contactos con facilidad, y publica una política de
        privacidad accesible: además de ser una obligación, Google y Meta la exigen
        para dejarte hacer campañas de captación de leads.
      </p>

      <h2>En resumen</h2>
      <p>
        Un CRM es la diferencia entre un negocio que depende de la memoria de las
        personas y uno que tiene un sistema. Si hoy pierdes clientes porque nadie
        respondió a tiempo, porque el seguimiento quedó en una planilla o porque el
        paciente no llegó y nadie volvió a llamarlo, el problema no es tu
        marketing: es que no hay nada sosteniendo el proceso después del primer
        contacto.
      </p>
      <p>
        Si quieres ver cómo se vería eso en tu operación,{' '}
        <Link to="/#contacto">agenda una demostración gratuita de 30 minutos</Link>{' '}
        y mapeamos juntos dónde se te están escapando los clientes. También puedes
        seguir con la guía de{' '}
        <Link to="/blog/automatizar-whatsapp-business-agendar-citas">
          cómo automatizar WhatsApp Business para agendar citas 24/7
        </Link>.
      </p>
    </ArticleLayout>
  )
}
