# ChacDev Portafolio — Especificación funcional

**Versión:** 1.1 · **Fecha:** 22 de noviembre de 2026 · **Estado:** describe el comportamiento observable en el código de esta copia

## Índice

- [1. Landing](#1-landing)
- [2. Demo CRM](#2-demo-crm)
- [3. Demo TaskFlow](#3-demo-taskflow)
- [4. Demo BarberShop](#4-demo-barbershop)
- [5. Datos locales](#5-datos-locales)
- [6. Navegación](#6-navegación)
- [7. Formulario de contacto](#7-formulario-de-contacto)
- [8. Responsive](#8-responsive)
- [9. Límites de las demos](#9-límites-de-las-demos)

## 1. Landing

Ruta `/`. Tiene encabezado y pie propios, distintos de los de las demos.

| Sección | Contenido |
|---|---|
| Hero | Titular, subtitular y enlaces «Ver demos» (`#ejemplos`) y «Hablemos» (`#contacto`) |
| Problemas | Cuatro situaciones comunes: procesos manuales, tareas repetitivas, información dispersa y seguimiento difícil |
| Servicios | Seis tarjetas: aplicaciones de control, CRM, solicitudes, inventarios, automatización y «Y mucho más» |
| Ejemplos | Tres enlaces a las demos y una maqueta de panel construida con CSS y SVG |
| Proceso | Cuatro pasos: escuchamos, proponemos, desarrollamos e implementamos |
| Contacto | Frase de cita y formulario con nombre, email y mensaje |

El botón ☰ del encabezado abre el menú en pantallas pequeñas; al elegir un enlace se cierra. Los textos están en lenguaje de negocio, no técnico.

## 2. Demo CRM

Ruta `/crm`. Lee las etapas, contactos y oportunidades de `localStorage`, con los archivos `seedCrm.js` como valor inicial.

- El tablero muestra una columna por etapa: Lead, Contactado, Propuesta y Cerrado. Desde `md` van en cuatro columnas; antes, se apilan.
- Cada tarjeta muestra título de la oportunidad, empresa del contacto y valor en formato `es-MX`. Si no hay contacto, muestra «Sin empresa».
- Cada columna muestra el número de oportunidades y la suma de sus valores; si está vacía, muestra «Sin oportunidades».
- «+ Nueva oportunidad» abre un cuadro para elegir contacto, escribir título y valor. La oportunidad nueva entra en la primera etapa.
- «Editar» abre el mismo cuadro con los datos de la oportunidad. Las flechas ← y → la mueven entre etapas. La × la borra.
- «Reiniciar demo» devuelve las oportunidades a las ocho de ejemplo. Las etapas y los contactos no se editan.
- Al pie hay un enlace «Hablemos» hacia `/#contacto`.

## 3. Demo TaskFlow

Ruta `/taskflow`. Lee proyectos, tareas y subtareas de `localStorage`, con `seedTaskflow.js` como valor inicial.

- Los proyectos se muestran como tarjetas con nombre y descripción.
- Las tareas se agrupan por proyecto y muestran título y responsable.
- Al hacer clic en la etiqueta de estado se cambia en ciclo: Pendiente → En progreso → Hecho → Pendiente.
- Al hacer clic en una tarea se expanden sus subtareas. Una terminada se muestra tachada y con ✓; una pendiente, con ○. El botón de la subtarea alterna entre terminada y pendiente.
- Dentro de la tarea expandida se puede escribir una nueva subtarea y usar «Añadir» o la tecla Enter. La × junto a una subtarea la borra.
- «+ Nueva tarea» pide título y responsable; la tarea nueva queda como Pendiente. La × junto a una tarea la borra y también borra sus subtareas.
- «Reiniciar demo» devuelve los tres grupos a los datos de ejemplo.

## 4. Demo BarberShop

Ruta `/barbershop`. Lee servicios, barberos y citas de `localStorage`, con `seedBarbershop.js` como valor inicial.

- El formulario pide cliente, servicio, barbero, fecha y hora. «+» agrega la cita con estado Confirmada.
- Al hacer clic en la etiqueta de estado se cambia en ciclo: Pendiente → Confirmada → Completada → Cancelada → Pendiente.
- La × borra la cita. «Reiniciar demo» devuelve las doce citas de ejemplo.
- Las citas se ordenan por fecha y hora y se agrupan por día con `toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'short' })`.
- Cada tarjeta muestra cliente, servicio, barbero, hora y etiqueta de estado. La hora usa `toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })`.
- Si no quedan citas, muestra «Sin citas. Agrega una arriba.». No hay filtro por barbero (M-013).

## 5. Datos locales

Las tres demos usan `src/lib/useLocalStorage.js`. Esta función:

1. Lee la clave indicada en `localStorage` del navegador.
2. Si no existe o no se puede interpretar, usa el arreglo de `src/data/seed*.js` como valor inicial.
3. Guarda el arreglo completo cada vez que cambia.
4. Al reiniciar, quita la clave y vuelve a cargar el arreglo de ejemplo.

| Demo | Claves de `localStorage` | Datos de ejemplo |
|---|---|---|
| CRM | `chac_crm_stages`, `chac_crm_contacts`, `chac_crm_deals` | 4 etapas, 6 contactos, 8 oportunidades |
| TaskFlow | `chac_tf_projects`, `chac_tf_tasks`, `chac_tf_subtasks` | 2 proyectos, 8 tareas, 8 subtareas |
| BarberShop | `chac_bs_services`, `chac_bs_barbers`, `chac_bs_appointments` | 4 servicios, 3 barberos, 12 citas |

Los cambios quedan solo en ese navegador y no se envían a ningún servidor. Los detalles de cada colección están en `MODELO_DE_DATOS.md`.

## 6. Navegación

- `main.jsx` monta `BrowserRouter`; `App.jsx` define las cuatro rutas y oculta el `Navbar` y el `Footer` de la app en `/`, porque la landing trae los suyos.
- En las demos, el `Navbar` enlaza a inicio, CRM, TaskFlow y BarberShop; esos enlaces llevan la clase `hidden md:flex` y no se ven en móvil (M-005).
- El botón «Hablemos» del `Navbar` apunta a `#contacto`; los bloques inferiores de las demos enlazan a `/#contacto`.
- Cada demo muestra el aviso `DemoNotice` («Los datos son de ejemplo y se guardan solo en tu navegador») y un enlace «← Volver al portafolio».
- No hay ruta de error ni página 404 definida.

## 7. Formulario de contacto

- Campos: `nombre` (texto), `email` (correo) y `mensaje` (área de texto). Los tres son obligatorios.
- Es un formulario HTML nativo: `method="POST"` y `action` hacia Formspree.
- La dirección actual contiene `TU-FORM-ID`, un marcador de posición. Falta el ID real (M-002).
- No hay confirmación propia ni estado de envío en la interfaz; depende de la respuesta del servicio externo.

## 8. Responsive

- La landing usa `src/landing-mtto.css`, con reglas bajo `.chacdev-landing`; el menú móvil se controla con el botón ☰.
- El pipeline del CRM usa `md:grid-cols-4`; en móvil se apila. TaskFlow y BarberShop usan `max-w-4xl` con `px-4`.
- El formulario de contacto de la landing pasa a dos columnas desde `sm`.
- No hay revisión registrada en 375, 768 y 1024 px de esta copia (M-011).

## 9. Límites de las demos

- Sin base de datos: no hay servidor, consultas, RLS ni archivos de configuración de base de datos.
- Sin login y sin sincronización: cada visitante ve sus propios cambios en su navegador.
- Los datos son ficticios y están definidos en `src/data/seedCrm.js`, `seedTaskflow.js` y `seedBarbershop.js`.
- Al limpiar los datos del sitio en el navegador, las demos vuelven a los valores de ejemplo.
- El formulario de contacto sí depende de un servicio externo (Formspree) y sigue con ID de ejemplo.
