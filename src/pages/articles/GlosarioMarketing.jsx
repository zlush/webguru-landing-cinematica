import { Link } from 'react-router-dom'
import ArticleLayout from '../../components/ArticleLayout'
import { getArticle } from '../../content/articles'

const article = getArticle('glosario-marketing-digital')

export default function GlosarioMarketing() {
  return (
    <ArticleLayout article={article}>
      <p>
        En una reunión de marketing se dicen quince siglas en diez minutos y nadie
        pregunta qué significan. Este <strong>glosario de marketing digital</strong>{' '}
        reúne los términos que realmente vas a escuchar cuando alguien te presenta
        resultados o te propone una estrategia, explicados sin jerga y con la
        fórmula concreta cuando corresponde.
      </p>
      <p>
        Está ordenado por bloques: audiencia y contenido, embudo y conversión,
        métricas de plata, canales y publicidad, y automatización. Si te interesa
        solo un número, salta directo a la sección de métricas.
      </p>

      <h2>Audiencia y contenido</h2>

      <h3>Engagement</h3>
      <p>
        Es el nivel de interacción real que genera tu contenido: comentarios,
        guardados, compartidos, clics, tiempo de visualización. Se expresa como
        tasa: interacciones dividido por alcance o por seguidores. Importa porque
        los algoritmos de Instagram, Facebook y TikTok usan el engagement temprano
        para decidir a cuánta gente más le muestran una publicación. Un contenido
        con muchas vistas y poco engagement suele significar que el gancho funcionó
        pero el contenido no cumplió.
      </p>

      <h3>Segmentación</h3>
      <p>
        Es dividir tu audiencia en grupos que se comportan parecido, para hablarles
        distinto. Puede ser demográfica (edad, comuna), por comportamiento (abrió el
        correo, visitó la página de precios), por etapa del embudo, o por valor
        (clientes que ya compraron tres veces). En un CRM la segmentación es lo que
        te permite mandar el recordatorio de control solo a quienes ya se
        atendieron, en lugar de a toda la base.
      </p>

      <h3>Alcance e impresiones</h3>
      <p>
        <strong>Alcance</strong> es cuántas personas distintas vieron tu contenido.{' '}
        <strong>Impresiones</strong> es cuántas veces se mostró, incluyendo
        repeticiones a la misma persona. Si tienes 1.000 de alcance y 4.000
        impresiones, cada persona lo vio unas cuatro veces. Se confunden todo el
        tiempo, y la diferencia importa: mucha impresión con poco alcance puede ser
        saturación, y eso desgasta la creatividad.
      </p>

      <h3>Buyer persona</h3>
      <p>
        Es el perfil concreto de tu cliente ideal: qué problema tiene, qué busca en
        Google, qué objeción pone antes de comprar. No es un dato demográfico, es
        una descripción de comportamiento. Sirve para decidir qué contenido escribir
        y qué objeción responder primero en la conversación de venta.
      </p>

      <h2>Embudo y conversión</h2>

      <h3>Embudo de conversión (funnel)</h3>
      <p>
        Es el recorrido desde que alguien te conoce hasta que compra, dividido en
        etapas. Una versión simple: descubrimiento, interés, consideración, compra,
        retención. Se llama embudo porque en cada etapa se pierde gente. Su utilidad
        no es el dibujo, es que te obliga a medir <em>en qué etapa</em> se te caen
        los clientes, que es lo único que te dice qué arreglar.
      </p>

      <h3>Lead y lead calificado</h3>
      <p>
        Un <strong>lead</strong> es un contacto que dejó sus datos o te escribió. Un{' '}
        <strong>lead calificado</strong> es uno que además cumple las condiciones
        para ser cliente: necesita lo que vendes, puede pagarlo y está en tu zona de
        atención. La distinción es la que define si tu equipo de ventas pierde la
        mañana o la aprovecha. Calificar puede ser automático: tres preguntas en el
        chat suelen bastar.
      </p>

      <h3>Tasa de conversión</h3>
      <p>
        Porcentaje de personas que hacen la acción que buscas sobre el total que
        tuvo la oportunidad de hacerla.
      </p>
      <p>
        <strong>Tasa de conversión = (conversiones ÷ visitas o leads) × 100</strong>
      </p>
      <p>
        Siempre hay que decir de qué conversión se habla: de visita a lead, de lead
        a cita, de cita a venta. Cuando alguien dice «convertimos 3%» sin especificar
        el paso, el número no significa nada.
      </p>

      <h3>Lead nurturing</h3>
      <p>
        Es el trabajo de acompañar a un lead que todavía no está listo para comprar,
        con contenido y mensajes espaciados en el tiempo, hasta que lo esté. La
        mayoría de los negocios no lo hace: contacta una vez y abandona. Es donde
        una secuencia automatizada rinde más, porque el costo de insistir bien es
        casi cero.
      </p>

      <h3>Churn</h3>
      <p>
        Tasa de abandono: el porcentaje de clientes que dejan de comprarte en un
        período. En servicios recurrentes es la métrica que decide si creces o
        corres en el lugar, porque un churn alto obliga a captar solo para
        reemplazar lo que se fue.
      </p>

      <h2>Las métricas que hablan de plata</h2>
      <p>
        Estas cuatro son las que conviene saber de memoria, porque son las que
        determinan si tu marketing es un gasto o una inversión.
      </p>

      <h3>CAC — Costo de Adquisición de Cliente</h3>
      <p>
        <strong>CAC = inversión total en marketing y ventas ÷ clientes nuevos
        conseguidos</strong>
      </p>
      <p>
        Si gastaste $2.000.000 en un mes entre publicidad y comisiones, y cerraste
        20 clientes nuevos, tu CAC es $100.000. Un error frecuente es contar solo la
        publicidad y dejar fuera los sueldos y las herramientas, lo que da un CAC
        artificialmente bajo.
      </p>

      <h3>LTV — Valor de Vida del Cliente</h3>
      <p>
        <strong>LTV = ticket promedio × compras por año × años de permanencia</strong>
      </p>
      <p>
        Un paciente que gasta $45.000 por sesión, viene cuatro veces al año y se
        queda tres años tiene un LTV de $540.000. La comparación que importa es{' '}
        <strong>LTV contra CAC</strong>: como referencia práctica, un LTV de al menos
        tres veces el CAC deja margen para operar. Si tu LTV es apenas mayor que tu
        CAC, cada cliente nuevo casi no deja nada.
      </p>

      <h3>ROAS — Retorno de la Inversión Publicitaria</h3>
      <p>
        <strong>ROAS = ingresos generados por la campaña ÷ inversión publicitaria</strong>
      </p>
      <p>
        Un ROAS de 4 significa que por cada peso invertido volvieron cuatro en
        ingresos. Ojo: es ingreso, no utilidad. Un ROAS de 3 en un negocio con 20%
        de margen todavía pierde dinero, así que conviene mirarlo junto al margen.
      </p>

      <h3>CPL y CPC</h3>
      <p>
        <strong>CPL</strong> (costo por lead) es cuánto pagas por cada contacto que
        deja sus datos. <strong>CPC</strong> (costo por clic) es cuánto pagas por
        cada clic al anuncio. Un CPC bajo con un CPL alto significa que la gente
        entra pero la página no convence: el problema está en la landing, no en el
        anuncio.
      </p>

      <h3>No-show</h3>
      <p>
        Es el cliente que agendó y no llegó. No es una métrica de marketing clásica,
        pero en cualquier negocio con agenda es la que más plata silenciosa se lleva:
        una hora vacía no se recupera. Se mide como porcentaje de citas no asistidas
        sobre citas agendadas, y es una de las métricas que baja más rápido con
        recordatorios automáticos.
      </p>

      <h2>Canales, publicidad y SEO en el contexto chileno</h2>

      <h3>SEO y SEM</h3>
      <p>
        <strong>SEO</strong> es aparecer en los resultados no pagados de Google
        trabajando el contenido y la parte técnica del sitio; es lento y acumulativo.{' '}
        <strong>SEM</strong> es pagar por aparecer; es inmediato y se apaga cuando
        dejas de pagar. La combinación habitual en Chile para un negocio de servicios
        es SEM para llenar la agenda ahora y SEO para dejar de depender del SEM en un
        año.
      </p>

      <h3>Omnicanalidad</h3>
      <p>
        Es que el cliente pueda escribirte por WhatsApp, seguir por Instagram y
        terminar por correo, y que del otro lado sea la misma conversación con el
        mismo historial. No es «estar en todos los canales»: eso es multicanal.
        Omnicanal es que los canales estén conectados. En la práctica se logra con una
        bandeja unificada dentro de un CRM.
      </p>

      <h3>Remarketing</h3>
      <p>
        Mostrar anuncios a quien ya interactuó contigo: visitó tu sitio, vio un video,
        abandonó un formulario. Suele ser la inversión publicitaria más eficiente
        porque le hablas a alguien que ya te conoce. Requiere haber instalado el píxel
        o etiqueta correspondiente <em>antes</em>, y tener la base legal para hacerlo.
      </p>

      <h3>Landing page</h3>
      <p>
        Una página con un solo objetivo y sin distracciones, hecha para que quien
        llega desde un anuncio haga una acción. La regla que más resultado da es la
        coincidencia de mensaje: si el anuncio promete «horas disponibles esta
        semana», eso mismo debe decir el titular de la página. Cuando no coincide, la
        tasa de conversión se derrumba.
      </p>

      <h2>Automatización e inteligencia artificial</h2>

      <h3>Automatización de marketing</h3>
      <p>
        Reglas del tipo «si pasa X, entonces haz Y» que se ejecutan sin intervención:
        si alguien llena el formulario, mándale un WhatsApp en un minuto; si no
        respondió en dos días, insiste; si agendó, recuérdale 24 horas antes. Es
        distinto de una campaña masiva: la automatización reacciona al comportamiento
        de cada persona.
      </p>

      <h3>Trigger y workflow</h3>
      <p>
        El <strong>trigger</strong> es el evento que dispara la automatización (un
        formulario enviado, una etapa del embudo alcanzada, una fecha). El{' '}
        <strong>workflow</strong> es la secuencia de acciones que ocurre después.
        Cuando alguien te dice que «configuró un flujo», está hablando de esto.
      </p>

      <h3>Chatbot y asistente con IA</h3>
      <p>
        Un <strong>chatbot</strong> clásico sigue un árbol de opciones predefinido: si
        el usuario escribe algo que no está en el árbol, se pierde. Un{' '}
        <strong>asistente con IA</strong> interpreta lenguaje natural, responde con
        la información de tu negocio y puede ejecutar acciones como consultar
        disponibilidad y agendar. La diferencia práctica la nota el cliente en la
        primera pregunta mal escrita.
      </p>

      <h3>API e integración</h3>
      <p>
        Una <strong>API</strong> es la puerta por la que dos sistemas se hablan sin
        que una persona copie datos de uno a otro. Cuando alguien dice que «se integra
        vía API», significa que el CRM puede leer y escribir en tu calendario, tu ERP
        o tu sistema de facturación de forma automática. Es lo que evita tener la
        misma base de clientes en tres lugares distintos y desactualizada en dos.
      </p>

      <h2>Preguntas frecuentes sobre marketing digital</h2>

      <h3>¿Cuál es la métrica más importante de todas?</h3>
      <p>
        Si tuvieras que elegir una sola, la relación entre LTV y CAC, porque resume
        si tu negocio gana o pierde con cada cliente nuevo. Dicho eso, elegir una sola
        métrica es riesgoso: un LTV/CAC saludable con un churn en alza significa que
        el modelo se está rompiendo y todavía no se nota. Mira dos o tres juntas.
      </p>

      <h3>¿Engagement alto garantiza más ventas?</h3>
      <p>
        No necesariamente. El engagement mide interés en el contenido, no intención de
        compra. Es perfectamente posible tener publicaciones muy comentadas y una
        agenda vacía, sobre todo si el contenido entretiene pero nunca dice qué
        vendes ni cómo agendar. La forma de conectarlos es medir cuántos de esos
        interesados llegan al primer contacto real.
      </p>

      <h3>¿Cada cuánto debería revisar estas métricas?</h3>
      <p>
        Las operativas —tasa de respuesta, citas agendadas, no-shows— conviene verlas
        semanalmente, porque se corrigen rápido. Las económicas —CAC, LTV, ROAS,
        churn— mensualmente, porque con menos datos el ruido supera la señal. Revisar
        el CAC todos los días lleva a decisiones impulsivas basadas en variación
        normal.
      </p>

      <h3>¿Necesito un CRM para medir todo esto?</h3>
      <p>
        Para las métricas de redes sociales no: las dan las propias plataformas. Para
        las que atraviesan el embudo completo, sí, porque hay que unir el origen del
        contacto con lo que finalmente compró. Sin ese hilo no puedes saber qué canal
        trae clientes que pagan y qué canal trae curiosos, que es justamente la
        decisión donde más presupuesto se desperdicia.
      </p>

      <h3>¿Sirve este glosario si no tengo equipo de marketing?</h3>
      <p>
        Sirve especialmente en ese caso. Si contratas una agencia o un freelance, estos
        términos son los que van a aparecer en los informes, y entenderlos es lo que te
        permite preguntar «¿ese 3% es de visita a lead o de lead a venta?». Esa pregunta
        cambia por completo la conversación.
      </p>

      <h2>En resumen</h2>
      <p>
        Un glosario de marketing digital no sirve para hablar más bonito, sirve para
        que nadie te presente un número sin contexto. Si te quedas con tres ideas:
        siempre pregunta de qué conversión se habla, mira el LTV contra el CAC y no
        confundas engagement con ventas.
      </p>
      <p>
        Si quieres ver estas métricas sobre tu propio negocio,{' '}
        <Link to="/calculadora">prueba la calculadora de rentabilidad</Link> o{' '}
        <Link to="/#contacto">agenda una demostración gratuita de 30 minutos</Link>.
        Y si el término que más te interesó fue omnicanalidad, sigue con{' '}
        <Link to="/blog/que-es-un-crm">qué es un CRM y por qué lo necesitas</Link>.
      </p>
    </ArticleLayout>
  )
}
