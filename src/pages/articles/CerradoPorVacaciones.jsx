import { Link } from 'react-router-dom'
import ArticleLayout from '../../components/ArticleLayout'
import { getArticle } from '../../content/articles'

const article = getArticle('mensaje-cerrado-por-vacaciones-whatsapp-business')

export default function CerradoPorVacaciones() {
  return (
    <ArticleLayout article={article}>
      <p>
        El mensaje automático de <strong>cerrado por vacaciones</strong> evita que
        te escriban enojados. Lo que evita <em>perder</em> al cliente es otra
        cosa: qué pasa con ese mensaje cuando vuelves.
      </p>
      <p>
        Esta guía trae la configuración paso a paso, diez ejemplos listos para
        copiar, y —la parte que casi nadie resuelve— cómo no llegar a una bandeja
        con 200 mensajes sin leer el primer día de vuelta.
      </p>

      <h2>Cómo configurarlo en WhatsApp Business</h2>
      <p>
        La app trae dos herramientas distintas y conviene usar las dos:
      </p>
      <p>
        <strong>Mensaje de ausencia</strong> — se envía automáticamente cuando te
        escriben fuera del horario que definas:
      </p>
      <ul>
        <li>Abre WhatsApp Business y ve a <strong>Ajustes</strong>.</li>
        <li>Entra a <strong>Herramientas para la empresa</strong>.</li>
        <li>Toca <strong>Mensaje de ausencia</strong> y actívalo.</li>
        <li>
          Escribe el texto y elige la programación:{' '}
          <strong>Enviar siempre</strong> mientras dure el cierre es lo correcto
          para vacaciones, no «fuera del horario comercial».
        </li>
        <li>
          En <strong>Destinatarios</strong>, deja «Todos» salvo que quieras
          excluir a alguien.
        </li>
      </ul>
      <p>
        <strong>Mensaje de bienvenida</strong> — se envía a quien te escribe por
        primera vez o tras 14 días de inactividad. Durante las vacaciones conviene
        cambiarlo también, porque si no, un contacto nuevo recibe un saludo
        normal prometiendo atención inmediata.
      </p>
      <p>
        Y un detalle que se olvida siempre: <strong>agrega las fechas al perfil
        de la empresa</strong>, en la descripción. Mucha gente la revisa antes de
        escribir.
      </p>

      <h2>Qué debe decir un buen mensaje</h2>
      <p>
        Cuatro elementos, y ninguno sobra:
      </p>
      <ul>
        <li>
          <strong>La fecha exacta de regreso.</strong> «Volvemos pronto» genera
          más ansiedad que información. «Retomamos el lunes 5 de enero» permite
          decidir si esperan o buscan otra opción.
        </li>
        <li>
          <strong>Qué pasa con su mensaje.</strong> Saber que quedó registrado y
          será respondido en orden baja mucho la insistencia.
        </li>
        <li>
          <strong>Una alternativa para urgencias reales.</strong> Un correo, un
          turno, o el enlace a agendar para cuando vuelvas.
        </li>
        <li>
          <strong>Algo que puedan hacer solos.</strong> Preguntas frecuentes,
          catálogo, formulario de cotización. Convierte la espera en avance.
        </li>
      </ul>

      <h2>10 ejemplos listos para copiar</h2>

      <h3>1. General</h3>
      <p>
        <em>
          «¡Hola! Gracias por escribirnos 👋 Estamos en receso de verano hasta el
          lunes 5 de enero. Tu mensaje quedó registrado y te responderemos en
          orden de llegada apenas volvamos. Si es urgente, escríbenos a
          contacto@tuempresa.cl»
        </em>
      </p>

      <h3>2. Con agendamiento</h3>
      <p>
        <em>
          «Gracias por tu mensaje. Volvemos el 5 de enero. Si quieres asegurar tu
          hora para esa semana, puedes agendarla directamente aquí: [enlace]. Las
          primeras horas se llenan rápido al regreso.»
        </em>
      </p>

      <h3>3. Retail o tienda</h3>
      <p>
        <em>
          «¡Hola! Nuestra tienda está cerrada por vacaciones hasta el 5 de enero.
          Puedes seguir comprando en línea en tuempresa.cl —los despachos se
          reanudan el 7 de enero. Cualquier consulta la respondemos al volver.»
        </em>
      </p>

      <h3>4. Servicios profesionales</h3>
      <p>
        <em>
          «Gracias por contactarnos. El estudio permanecerá cerrado entre el 20 de
          enero y el 3 de febrero. Los casos en curso ya tienen coordinación con
          su abogado responsable. Para nuevas consultas, te contactaremos la
          primera semana de febrero.»
        </em>
      </p>

      <h3>5. Salud y estética</h3>
      <p>
        <em>
          «¡Hola! Estamos en receso hasta el 5 de enero. Si tienes una hora
          agendada para esa semana, sigue confirmada 😊 Para reagendar o pedir
          hora nueva, escríbenos y te respondemos apenas volvamos.»
        </em>
      </p>

      <h3>6. Con equipo de turno</h3>
      <p>
        <em>
          «Gracias por escribir. Nuestro equipo está de vacaciones hasta el 5 de
          enero, pero mantenemos turno para emergencias: +56 9 XXXX XXXX. Para
          todo lo demás, te respondemos al regreso.»
        </em>
      </p>

      <h3>7. Breve</h3>
      <p>
        <em>
          «¡Gracias por tu mensaje! 🌴 Vacaciones hasta el 5 de enero. Te
          respondemos ese mismo día.»
        </em>
      </p>

      <h3>8. Fin de año</h3>
      <p>
        <em>
          «¡Gracias por acompañarnos este año! 🎉 Cerramos entre el 24 de
          diciembre y el 2 de enero para descansar con nuestras familias. Te
          deseamos unas felices fiestas y nos leemos el 3 de enero.»
        </em>
      </p>

      <h3>9. B2B</h3>
      <p>
        <em>
          «Gracias por su mensaje. Nuestras oficinas permanecerán cerradas del 27
          de diciembre al 3 de enero. Las cotizaciones recibidas serán procesadas
          por orden de llegada a partir del 6 de enero. Para temas contractuales
          urgentes: gerencia@tuempresa.cl»
        </em>
      </p>

      <h3>10. Con contenido útil</h3>
      <p>
        <em>
          «¡Hola! Estamos de vacaciones hasta el 5 de enero. Mientras tanto, quizá
          te sirva nuestra guía de preguntas frecuentes: [enlace]. Resuelve el 80%
          de lo que nos consultan. Si tu caso no está ahí, te respondemos al
          volver.»
        </em>
      </p>

      <h2>El problema real: la vuelta</h2>
      <p>
        El mensaje automático resuelve la percepción. No resuelve que el primer
        día de vuelta tengas 200 conversaciones sin leer, todas iguales, y que
        entre ellas haya cinco clientes que sí iban a comprar.
      </p>
      <p>
        Lo que evita perderlos:
      </p>
      <ul>
        <li>
          <strong>Etiqueta automáticamente lo que llega.</strong> Si cada mensaje
          entra a tu <Link to="/blog/que-es-un-crm">CRM</Link> como contacto con
          origen y fecha, al volver tienes una lista ordenada en vez de una
          bandeja.
        </li>
        <li>
          <strong>Califica durante el cierre.</strong> Un mensaje automático que
          pregunte «¿es cotización nueva o cliente actual?» ya te separa los
          urgentes de los que pueden esperar.
        </li>
        <li>
          <strong>Responde en orden inverso.</strong> Los más recientes primero:
          quien escribió hace dos semanas probablemente ya resolvió con otro.
        </li>
        <li>
          <strong>Manda un mensaje de reapertura.</strong> El día que vuelves,
          escribe a todos los que quedaron pendientes. Un simple «ya estamos de
          vuelta, ¿seguimos con lo tuyo?» recupera buena parte de esos contactos.
        </li>
      </ul>
      <p>
        Ese último punto es el de mayor retorno de todo el artículo y el que casi
        nadie hace.
      </p>

      <h2>Preguntas frecuentes</h2>

      <h3>¿El mensaje de ausencia se envía cada vez que escriben?</h3>
      <p>
        No. WhatsApp lo envía una vez por conversación dentro de un período, para
        no saturar. Si la persona insiste varias veces el mismo día, recibe el
        automático solo la primera.
      </p>

      <h3>¿Puedo programar fechas exactas de inicio y fin?</h3>
      <p>
        La app permite «Enviar siempre», «Horario personalizado» y «Fuera del
        horario comercial». Para vacaciones lo práctico es activar «Enviar
        siempre» el último día y desactivarlo al volver. Ponte un recordatorio: se
        olvida con frecuencia y quedar con el mensaje de vacaciones en marcha una
        semana después es peor que no haberlo puesto.
      </p>

      <h3>¿Funciona igual en WhatsApp normal?</h3>
      <p>
        No. Los mensajes automáticos son exclusivos de WhatsApp Business, que es
        gratis y se puede instalar conservando el mismo número. Si usas WhatsApp
        personal para tu negocio, cambiarte es de las mejoras más simples
        disponibles.
      </p>

      <h3>¿Conviene avisar antes de cerrar?</h3>
      <p>
        Sí, y bastante. Un aviso a tu base una semana antes concentra los pedidos
        pendientes en días hábiles y reduce los mensajes durante el cierre. Además
        se lee como buena organización.
      </p>

      <h2>En resumen</h2>
      <p>
        Un buen <strong>mensaje de cerrado por vacaciones</strong> dice la fecha
        exacta de regreso, confirma que el mensaje quedó registrado, ofrece una
        alternativa y deja algo que la persona pueda hacer sola.
      </p>
      <p>
        Pero el mensaje es la parte fácil. Lo que define si pierdes clientes es
        tener registrado lo que llegó y volver a escribirles al regresar.{' '}
        <Link to="/#contacto">Agenda 30 minutos sin costo</Link> y lo dejamos
        funcionando antes de tus próximas vacaciones, o mira{' '}
        <Link to="/blog/automatizar-whatsapp-business-agendar-citas">
          cómo automatizar WhatsApp Business para agendar citas 24/7
        </Link>.
      </p>
    </ArticleLayout>
  )
}
