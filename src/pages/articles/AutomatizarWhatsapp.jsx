import { Link } from 'react-router-dom'
import ArticleLayout from '../../components/ArticleLayout'
import { getArticle } from '../../content/articles'

const article = getArticle('automatizar-whatsapp-business-agendar-citas')

export default function AutomatizarWhatsapp() {
  return (
    <ArticleLayout article={article}>
      <p>
        Un cliente te escribe un domingo a las 23:10 preguntando si tienes hora
        para el martes. Si nadie responde hasta el lunes a las 9, ese cliente ya
        preguntó en otros dos lugares. <strong>Automatizar WhatsApp Business
        significa que esa consulta reciba respuesta, quede calificada y salga
        agendada sin que nadie tenga que estar despierto.</strong>
      </p>
      <p>
        En esta guía verás las tres formas de automatizar WhatsApp, cuál te
        corresponde según tu volumen, cómo se arma un flujo de agendamiento paso a
        paso, y los errores que hacen que Meta bloquee cuentas.
      </p>

      <h2>Las tres formas de automatizar WhatsApp Business</h2>
      <p>
        Antes de elegir herramientas hay que entender que «WhatsApp Business» son
        en realidad dos productos distintos, y la automatización real solo es
        posible en uno de ellos.
      </p>
      <ul>
        <li>
          <strong>App WhatsApp Business.</strong> Gratuita, se instala en el
          teléfono. Permite mensaje de bienvenida, mensaje de ausencia y respuestas
          rápidas. Es un buen primer paso, pero no se conecta a tu calendario, no
          reasigna conversaciones y vive en un solo dispositivo.
        </li>
        <li>
          <strong>API de WhatsApp Business (Cloud API).</strong> Es la vía oficial
          para automatizar de verdad. No tiene interfaz propia: se conecta a una
          plataforma que sí la tiene. Permite múltiples agentes, plantillas
          aprobadas, automatizaciones y conexión con calendarios y CRM.
        </li>
        <li>
          <strong>API conectada a un CRM omnicanal.</strong> Es la API más una
          bandeja unificada donde WhatsApp convive con Instagram, Facebook y
          correo, con el historial del cliente al lado de la conversación. Es lo
          que necesitas si agendas horas.
        </li>
      </ul>
      <p>
        Una advertencia importante: existen herramientas «no oficiales» que
        automatizan WhatsApp simulando un teléfono. Son más baratas y funcionan
        hasta que Meta detecta el patrón y bloquea el número. Si tu agenda depende
        de ese número, no vale el ahorro.
      </p>

      <h2>Cómo se arma un flujo de agendamiento 24/7</h2>
      <p>
        Un flujo que agenda solo no es un árbol de menús con diez opciones. Es una
        conversación corta con cuatro momentos:
      </p>
      <ol>
        <li>
          <strong>Recibir y responder al instante.</strong> El primer mensaje sale
          en segundos, identifica el negocio y pregunta una sola cosa concreta:
          qué servicio necesita. Nada de «presione 1 para ventas».
        </li>
        <li>
          <strong>Calificar con dos o tres preguntas.</strong> Servicio, comuna o
          sucursal, y si es primera vez o control. Con eso ya sabes a qué agenda y
          a qué duración corresponde.
        </li>
        <li>
          <strong>Ofrecer horas reales.</strong> Acá está la diferencia entre un
          chatbot y una automatización útil: el asistente lee la disponibilidad del
          calendario y ofrece bloques que existen. Si el cliente elige uno, se
          reserva en el momento.
        </li>
        <li>
          <strong>Confirmar y recordar.</strong> Confirmación inmediata, recordatorio
          24 horas antes y otro 2 horas antes, siempre con opción de reprogramar en
          un toque. Reprogramar es infinitamente mejor que una inasistencia.
        </li>
      </ol>
      <p>
        Ese último punto es el que más dinero recupera. Una hora que se pierde por
        inasistencia no se vuelve a vender; en las implementaciones de WebGuru para
        clínicas y negocios agendados, los recordatorios automáticos han reducido
        las ausencias hasta 40%.
      </p>

      <h2>Qué automatizar y qué dejar en manos de una persona</h2>
      <p>
        La tentación es automatizar todo. El resultado suele ser un cliente
        atrapado en un bucle. Una división que funciona:
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Automatiza</th>
              <th>Deriva a una persona</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Horarios, dirección, formas de pago</td>
              <td>Reclamos y clientes molestos</td>
            </tr>
            <tr>
              <td>Precios de servicios estándar</td>
              <td>Cotizaciones complejas o a medida</td>
            </tr>
            <tr>
              <td>Agendar, reprogramar y cancelar</td>
              <td>Consultas clínicas o técnicas específicas</td>
            </tr>
            <tr>
              <td>Recordatorios y confirmaciones</td>
              <td>Negociación de condiciones</td>
            </tr>
            <tr>
              <td>Reactivación de contactos antiguos</td>
              <td>Cualquier caso donde el cliente insista en hablar con alguien</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        La regla práctica: <strong>siempre debe existir una salida hacia un
        humano</strong>, y debe ser evidente. Un asistente que no sabe decir «te
        comunico con alguien del equipo» genera más molestia que ausencia de
        respuesta.
      </p>

      <h2>Errores que bloquean cuentas y arruinan la reputación del número</h2>
      <p>
        Meta administra un puntaje de calidad por número. Si baja, primero te
        limitan el volumen de mensajes y después te bloquean. Lo que lo destruye:
      </p>
      <ul>
        <li>
          <strong>Escribir primero a quien no te dio permiso.</strong> Es la causa
          número uno de bloqueos. Solo puedes iniciar conversación con quien te
          entregó su número con una finalidad clara.
        </li>
        <li>
          <strong>Usar plantillas para publicidad encubierta.</strong> Las
          plantillas se aprueban para un uso; usarlas para promociones masivas
          genera reportes de spam.
        </li>
        <li>
          <strong>Ignorar el «no me escribas más».</strong> Debe existir una baja
          efectiva e inmediata. Si la persona lo pide y sigue recibiendo mensajes,
          te reporta.
        </li>
        <li>
          <strong>Contestar solo con automatizaciones y nunca cerrar el caso.</strong>{' '}
          Las conversaciones que quedan abiertas sin resolución también afectan la
          percepción de calidad.
        </li>
      </ul>
      <p>
        En Chile, además, aplica la normativa de datos personales: necesitas
        consentimiento para tratar el número y la persona tiene derecho a pedir que
        elimines sus datos. Ten un canal claro para eso y una política de
        privacidad publicada.
      </p>

      <h2>Preguntas frecuentes sobre automatizar WhatsApp Business</h2>

      <h3>¿Puedo automatizar WhatsApp Business gratis?</h3>
      <p>
        Parcialmente. La app gratuita de WhatsApp Business permite mensaje de
        bienvenida, mensaje de ausencia y respuestas rápidas, y para un negocio con
        pocas consultas diarias eso ya evita perder al que escribe de noche. Lo que
        no puedes hacer gratis es conectar con tu calendario, atender con varias
        personas en simultáneo ni calificar automáticamente. Para eso necesitas la
        API, que tiene un costo por conversación.
      </p>

      <h3>¿Cuánto cuesta la API de WhatsApp Business?</h3>
      <p>
        Meta cobra por conversación según el tipo de mensaje y el país, y la
        plataforma que uses para operarla cobra su propia suscripción. El detalle
        cambia con frecuencia, así que conviene revisar la tabla vigente de Meta
        antes de proyectar. La forma útil de evaluarlo no es el costo por mensaje
        sino el costo por hora recuperada: si una inasistencia evitada vale más que
        el mes completo de conversaciones, la cuenta cierra rápido.
      </p>

      <h3>¿El cliente se da cuenta de que habla con un bot?</h3>
      <p>
        Muchas veces sí, y no es un problema si la experiencia es buena y rápida.
        Lo que genera rechazo no es que sea automático, es que no resuelva. Ser
        transparente ayuda: un asistente que se presenta como asistente, responde
        en segundos y ofrece horas reales genera mejor percepción que uno que
        finge ser humano y se queda pegado en la tercera pregunta.
      </p>

      <h3>¿Puedo usar el mismo número que ya tengo?</h3>
      <p>
        En general sí, pero hay una condición: un número solo puede estar en la app
        de WhatsApp Business o en la API, no en ambas. Migrar a la API implica
        desvincularlo de la app, y el historial de conversaciones de la app no se
        traslada. Conviene planificar la migración en un día de bajo volumen y
        avisar al equipo, porque después de migrar se atiende desde la plataforma y
        no desde el teléfono.
      </p>

      <h3>¿Cuánto tarda estar operativo?</h3>
      <p>
        La parte técnica —verificar el negocio con Meta, conectar el número,
        aprobar las primeras plantillas— suele tomar algunos días, y depende de los
        tiempos de revisión de Meta más que de tu proveedor. Los flujos de
        agendamiento y recordatorios se configuran en paralelo. Lo que sí conviene
        no apresurar es la definición de qué se automatiza: ese es el trabajo que
        determina si funciona.
      </p>

      <h2>En resumen</h2>
      <p>
        Automatizar WhatsApp Business no es instalar un robot: es asegurarte de que
        ninguna consulta quede sin respuesta, que las horas se llenen solas y que
        el que agendó efectivamente llegue. Empieza por el agujero más grande
        —normalmente la consulta fuera de horario y la inasistencia— y crece desde
        ahí.
      </p>
      <p>
        Si quieres ver un flujo de agendamiento funcionando con tu propia agenda,{' '}
        <Link to="/#contacto">agenda una demostración gratuita de 30 minutos</Link>.
        Y si todavía estás decidiendo qué plataforma usar, parte por entender{' '}
        <Link to="/blog/que-es-un-crm">qué es un CRM y por qué lo necesitas</Link>.
      </p>
    </ArticleLayout>
  )
}
