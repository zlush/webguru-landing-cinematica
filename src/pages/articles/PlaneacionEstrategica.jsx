import { Link } from 'react-router-dom'
import ArticleLayout from '../../components/ArticleLayout'
import { getArticle } from '../../content/articles'

const article = getArticle('que-es-la-planeacion-estrategica')

export default function PlaneacionEstrategica() {
  return (
    <ArticleLayout article={article}>
      <p>
        El plan estratégico que se escribe en enero y se vuelve a abrir en
        diciembre no era un plan. Era un documento. La{' '}
        <strong>planeación estratégica</strong> que sirve en una pyme se
        distingue por una sola cosa: <strong>tiene un ciclo de revisión que
        alguien respeta</strong>.
      </p>
      <p>
        Esta guía va directo a eso: cómo hacer un diagnóstico honesto, convertirlo
        en objetivos medibles y bajarlo a un plan de 90 días que efectivamente se
        ejecuta, sin consultoras ni matrices de veinte casilleros.
      </p>

      <h2>Qué es y qué no es</h2>
      <p>
        La planeación estratégica es el proceso de decidir dónde quieres estar en
        un plazo definido y qué vas a dejar de hacer para llegar. La segunda parte
        es la que casi siempre falta: un plan que solo agrega actividades sin
        quitar ninguna no es una estrategia, es una lista de deseos.
      </p>
      <p>
        No es un presupuesto (eso es la traducción financiera del plan), no es una
        proyección de ventas, y no es un documento para el banco. Es el criterio
        que usas cuando aparezca una oportunidad y tengas que decidir si te
        distrae o te acerca.
      </p>

      <h2>Paso 1: el diagnóstico honesto</h2>
      <p>
        El FODA sirve si se hace con datos y no con adjetivos. «Buena atención al
        cliente» no es una fortaleza: es lo que todos creen de sí mismos.
        «Tiempo de respuesta promedio de 8 minutos cuando el rubro está en 4
        horas» sí lo es, porque se puede verificar.
      </p>
      <p>
        Tres preguntas que producen mejor diagnóstico que un FODA genérico:
      </p>
      <ul>
        <li>
          <strong>¿De dónde viene realmente la plata?</strong> Ordena tus ingresos
          por cliente y por servicio. Casi siempre aparece que una minoría de
          clientes o servicios genera la mayor parte del margen, y que hay líneas
          que ocupan tiempo y no dejan nada.
        </li>
        <li>
          <strong>¿Por qué te eligen los que te eligen?</strong> Pregúntaselo
          literalmente a cinco clientes recientes. La respuesta rara vez coincide
          con lo que dice tu página web.
        </li>
        <li>
          <strong>¿Dónde se cae el proceso?</strong> Si de cada diez cotizaciones
          cierras dos, el problema no está en generar más contactos. Está entre la
          cotización y el cierre.
        </li>
      </ul>

      <h2>Paso 2: objetivos que se puedan verificar</h2>
      <p>
        «Crecer», «mejorar el servicio» y «posicionar la marca» no son objetivos
        porque nadie puede decir si se cumplieron. Un objetivo útil responde
        cuatro cosas: qué, cuánto, para cuándo y quién.
      </p>
      <p>
        Compara:
      </p>
      <ul>
        <li>
          <strong>Malo:</strong> «Aumentar las ventas y mejorar la presencia
          digital».
        </li>
        <li>
          <strong>Bueno:</strong> «Pasar de 12 a 20 clientes con contrato de
          mantención al 31 de marzo. Responsable: Marcela. Revisión: primer lunes
          de cada mes».
        </li>
      </ul>
      <p>
        Y un límite práctico: <strong>tres objetivos por año, máximo</strong>. Con
        cinco o más, ninguno recibe atención suficiente y todos avanzan a medias.
        Es la restricción más incómoda de este proceso y la que más resultados
        produce.
      </p>

      <h2>Paso 3: elegir qué dejar de hacer</h2>
      <p>
        Este paso casi nunca aparece en las guías y es el que separa un plan real
        de uno decorativo. Si tu equipo ya está ocupado al 100%, cualquier
        iniciativa nueva desplaza algo. Si no decides tú qué se desplaza, lo
        decide el azar —y normalmente se desplaza lo importante-no-urgente, que es
        justamente lo estratégico.
      </p>
      <p>
        Haz la lista explícita: qué servicio dejas de ofrecer, qué cliente no
        renuevas, qué reunión se elimina, qué canal se abandona. Escríbelo en el
        plan con la misma seriedad que los objetivos.
      </p>

      <h2>Paso 4: el plan de 90 días</h2>
      <p>
        Un año es demasiado tiempo para planificar con detalle y demasiado poco
        para no hacer nada. La solución es dividir: dirección a doce meses,
        ejecución a noventa días.
      </p>
      <p>
        Para cada trimestre define, por objetivo:
      </p>
      <ul>
        <li>
          <strong>Dos o tres iniciativas concretas.</strong> No diez.
        </li>
        <li>
          <strong>Un responsable con nombre.</strong> «El equipo» no es un
          responsable.
        </li>
        <li>
          <strong>Un indicador que se mira semanalmente.</strong> Idealmente uno
          adelantado —cotizaciones enviadas— y no solo el resultado final, que
          llega tarde para corregir.
        </li>
        <li>
          <strong>Una fecha de revisión en el calendario.</strong> Agendada de
          verdad, con invitación enviada.
        </li>
      </ul>

      <h2>Paso 5: el ritmo de revisión</h2>
      <p>
        Aquí se juega todo. Un plan sin ritmo de revisión se abandona en seis
        semanas, sin excepción. El esquema mínimo que funciona en una pyme:
      </p>
      <ul>
        <li>
          <strong>Semanal, 15 minutos.</strong> Solo los indicadores adelantados y
          qué está bloqueado. De pie si es posible, para que no se estire.
        </li>
        <li>
          <strong>Mensual, 1 hora.</strong> Avance de cada objetivo y ajuste de
          iniciativas.
        </li>
        <li>
          <strong>Trimestral, media jornada.</strong> Cierre del ciclo de 90 días
          y definición del siguiente. Aquí sí se puede cambiar de rumbo.
        </li>
      </ul>
      <p>
        Los datos para esas revisiones tienen que salir solos de algún lado. Si
        preparar la reunión mensual toma dos días de armar planillas, la reunión
        se va a dejar de hacer. Un{' '}
        <Link to="/blog/que-es-un-crm">CRM</Link> con el embudo actualizado
        entrega esos números sin trabajo adicional, y esa es buena parte de su
        valor estratégico.
      </p>

      <h2>Preguntas frecuentes</h2>

      <h3>¿Una empresa de cinco personas necesita planeación estratégica?</h3>
      <p>
        Necesita menos formalidad y la misma claridad. En equipos chicos el
        proceso completo puede ocupar media jornada al trimestre y caber en dos
        páginas. Lo que no cambia es la necesidad de decidir qué no se va a hacer,
        que en equipos chicos pesa incluso más.
      </p>

      <h3>¿Cada cuánto se rehace el plan completo?</h3>
      <p>
        La dirección de largo plazo, una vez al año. Las iniciativas, cada
        trimestre. Y fuera de calendario cuando pasa algo que cambia los
        supuestos: perder un cliente que era el 30% de tu facturación amerita
        revisar, no esperar a diciembre.
      </p>

      <h3>¿Qué hago si el equipo no cumple lo comprometido?</h3>
      <p>
        Primero revisa si el problema es de capacidad y no de voluntad: en la
        mayoría de las pymes que vemos, el plan asumía tiempo que la operación
        diaria ya tenía tomado. Si a nadie le sobra una hora, el plan estaba mal
        dimensionado desde el principio. Reduce el alcance antes de exigir
        cumplimiento.
      </p>

      <h3>¿Sirven las metodologías tipo OKR en una pyme?</h3>
      <p>
        La lógica sirve —objetivo cualitativo con resultados medibles— pero la
        maquinaria completa suele ser demasiada estructura para un equipo chico.
        Quédate con lo esencial: pocos objetivos, indicadores verificables y
        revisión frecuente. Eso es el 90% del beneficio.
      </p>

      <h2>En resumen</h2>
      <p>
        La <strong>planeación estratégica</strong> en una pyme funciona cuando es
        corta, honesta y revisada seguido. Diagnostica con datos, define máximo
        tres objetivos con responsable y fecha, decide explícitamente qué dejas de
        hacer, y baja todo a ciclos de 90 días con revisión semanal.
      </p>
      <p>
        Lo demás es documentación.{' '}
        <Link to="/#contacto">Agenda 30 minutos sin costo</Link> y vemos cómo
        obtener los indicadores de tu proceso comercial sin armar planillas a
        mano, o empieza por{' '}
        <Link to="/blog/como-hacer-un-estudio-de-mercado">
          cómo hacer un estudio de mercado
        </Link>{' '}
        si el diagnóstico es lo que te falta.
      </p>
    </ArticleLayout>
  )
}
