# Casos de éxito — borrador, pendientes de autorización

**Este archivo no se importa desde ningún módulo, así que no entra al bundle.**
Ahí está la razón de que exista.

`src/content/casos.js` exporta un array vacío. Se probó dejar los casos ahí con
`publicado: false` y **no sirve**: esa bandera impide que el caso se renderice,
pero el archivo se importa igual desde `Clinicas.jsx`, así que el contenido
viaja dentro del JavaScript que descarga cualquier visitante. Se verificó
leyendo `dist/assets/index-*.js`: el nombre de la clínica, las cifras y la cita
estaban todos ahí. Con autorización pendiente, eso equivale a publicarlos.

Regla, entonces: **el texto de un caso vive acá hasta que el cliente autorice.**
Recién ahí se copia a `casos.js`.

---

## Cómo publicar uno

1. Obtener autorización explícita del cliente para su **nombre, logo y cifras**.
   Es su información, no la nuestra.
2. Copiar el objeto correspondiente a `CASOS_CLINICAS` en `src/content/casos.js`.
3. `node scripts/prerender.mjs` — el HTML estático que sirve Vercel es el
   versionado en `prerendered/`, no se regenera solo en el deploy.

---

## Caso 1 — Clínica Rochefort (Chile)

**Estado:** autorización pendiente al 14-08-2026.

**Evidencia en mano:** capturas de la agenda semanal del 13–19 de mayo de 2024 y
del 11–17 de noviembre de 2024; gráfico de facturación por medio de pago de
abril a septiembre de 2024, con la entrada de WebGuru marcada en mayo;
testimonio firmado con foto y 5 estrellas.

**Logo:** ya está en el sitio, es el número 11 de `LOGOS_CLINICAS` en
`Clinicas.jsx` → `/logos/11.webp`.

```js
{
  publicado: true,
  cliente: 'Clínica Rochefort',
  logo: '/logos/11.webp',
  contexto: 'Clínica dental · Chile',
  titular: 'De una agenda con huecos a una semana completa.',

  // Dos métricas, no tres. No hay una tercera que la evidencia sostenga, y
  // rellenar el hueco con un número blando es lo que hace que un prospecto
  // descuente también los otros dos.
  metricas: [
    { n: '×2,4',    text: 'Facturación mensual, entre mayo y septiembre de 2024.' },
    { n: '6 meses', text: 'De una agenda con horas sueltas a una semana completa, de mayo a noviembre de 2024.' },
  ],

  relato: [
    'En mayo de 2024 la agenda semanal de la clínica tenía horas sueltas repartidas de lunes a viernes y días enteros sin ocupar. El problema no era la demanda: era que las consultas llegaban por WhatsApp y nadie alcanzaba a responderlas ni a hacerles seguimiento.',
    'Se implementó el CRM con la agenda sincronizada, un asistente con IA que responde y agenda por WhatsApp a cualquier hora, y las secuencias de confirmación y reactivación sobre la base de pacientes que la clínica ya tenía.',
    'Seis meses después, la misma semana muestra la agenda cubierta de lunes a viernes. La facturación mensual acompañó: se multiplicó por 2,4 entre mayo y septiembre de 2024.',
  ],

  cita: {
    texto: 'Desde que uso WebGuru he podido mejorar en muchos aspectos y automatizar muchos procesos, además de poder implementar un asistente virtual con IA, lo que me da más tiempo para poder enfocarme en solucionar otras cosas de mi negocio. Lo mejor de todo es que todo es 100% personalizable.',
    autor: 'Günther Rochefort',
    cargo: 'Clínica Rochefort, Chile',
  },
}
```

**Pendiente de confirmar con el cliente antes de publicar:**

- La grafía del nombre. El testimonio dice "Gunther" y el logo del sitio dice
  "Günther". Hay que usar la que él use.
- Que el ×2,4 se lea como facturación mensual y no como número de pagos.

**Vale la pena pedirle además:** los dos archivos de las capturas de agenda por
separado. El antes/después de esa semana es la prueba más persuasiva de todo el
material, y hoy sólo existe dentro de una imagen compuesta.

---

## Caso 2 — Clínica Apolo (Chile)

**Estado:** autorización pendiente al 14-08-2026.

**Evidencia en mano:** captura del panel de la clínica con las citas atendidas
entre el 01-09-2025 y el 01-10-2025, desglosadas por profesional y sede
(total 135), y un estado de resultado a seis meses.

**Logo:** número 8 de `LOGOS_CLINICAS` → `/logos/8.webp`.

```js
{
  publicado: true,
  cliente: 'Clínica Apolo',
  logo: '/logos/8.webp',
  contexto: 'Red de clínicas con sedes de Antofagasta a Puerto Varas · Chile',
  titular: 'Seis sedes y una sola agenda.',

  metricas: [
    { n: '135',     text: 'Citas atendidas en un mes, entre el 1 de septiembre y el 1 de octubre de 2025.' },
    { n: '6 sedes', text: 'Santiago, Antofagasta, La Serena, Valdivia, Puerto Varas y Temuco, más atención online.' },
  ],

  relato: [
    'Una red con seis sedes repartidas entre Antofagasta y Puerto Varas tiene un problema que una clínica de un local no tiene: cada sede llevaba su propia agenda y su propio WhatsApp, y nadie veía el total.',
    'Hoy las consultas de todas las sedes entran a una sola bandeja y se agendan contra la disponibilidad real de cada profesional en cada ciudad. La administración ve el consolidado y cada sede ve lo suyo.',
  ],

  cita: null,
}
```

### Por qué el "+10X" de la captura no está acá

El estado de resultado del panel trae un badge de **+10X**, y queda fuera a
propósito. En ese gráfico la línea arranca prácticamente en cero en el primer
mes: dividir por una base cercana a cero da un múltiplo enorme por aritmética,
no por resultado. Es el primer número que desarma alguien que revise el caso en
serio, y al caerse arrastra la credibilidad de los que sí se sostienen.

Las 135 citas atendidas y la cobertura de seis sedes son verificables y se
sostienen solas.

Si se quiere una cifra de crecimiento para este caso, hay que pedirle a la
clínica el dato con su base: "de X a Y entre tal y tal mes". Con eso sí se puede
publicar un múltiplo.
