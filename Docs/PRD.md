# ChacDev Portafolio — PRD (Documento de requisitos del producto)

**Versión:** 1.1 · **Fecha:** 22 de noviembre de 2026 · **Estado:** borrador basado en el código de esta copia; servicios externos sin confirmar

Explica el **porqué**. Las reglas de funcionamiento están en `ESPECIFICACION_FUNCIONAL.md`.

## Índice

- [1. Problema (hipótesis por validar)](#1-problema-hipótesis-por-validar)
- [2. Propuesta de valor](#2-propuesta-de-valor)
- [3. Usuario](#3-usuario)
- [4. Objetivos](#4-objetivos)
- [5. Alcance actual](#5-alcance-actual)
- [6. Fuera de alcance](#6-fuera-de-alcance)
- [7. Métricas de éxito (propuesta)](#7-métricas-de-éxito-propuesta)
- [8. Riesgos identificados](#8-riesgos-identificados)

## 1. Problema (hipótesis por validar)

Una PYME suele ordenar su operación con hojas de cálculo, WhatsApp o papel. Eso dificulta dar seguimiento a oportunidades, ver el estado de las tareas y llevar una agenda de citas. El portafolio existe para mostrar, con ejemplos concretos, que ChacDev entiende esos problemas y puede construir herramientas para resolverlos.

No hay entrevistas ni estudios registrados en el repositorio: el problema es una hipótesis, no un resultado validado.

## 2. Propuesta de valor

Tres demos navegables y editables sobre datos ficticios, sin login, que muestran un problema de negocio y una forma posible de resolverlo. Cada demo puede abrirse en la máquina de quien la prueba, sin instalar una base de datos, y enlaza de vuelta al formulario de contacto de la landing.

## 3. Usuario

| Usuario | Qué busca |
|---|---|
| Dueño o gerente de una PYME (taller, barbería, agencia pequeña, consultorio) | Entender en minutos cómo una herramienta web ordenaría su operación |
| Persona encargada de operaciones | Ver y probar ejemplos concretos de tareas, pipeline y agenda |

No es audiencia: reclutadores técnicos, otros desarrolladores ni empresas grandes. No se muestra código como argumento de venta.

## 4. Objetivos

- Generar confianza con tres demos funcionales, no con capturas.
- Comunicar problemas de negocio antes que tecnología.
- Facilitar el contacto desde cualquier sección.
- Mantener el sitio simple: una landing, tres rutas y sin backend.

## 5. Alcance actual

Lo que existe en el código:

- Landing con hero, problemas comunes, servicios, ejemplos, proceso y formulario de contacto, con menú propio para móvil.
- Demo CRM: pipeline con cuatro etapas, oportunidades y contactos; permite crear, editar, mover y borrar oportunidades.
- Demo TaskFlow: proyectos, tareas con estado y subtareas; permite crear, cambiar estado y borrar tareas y subtareas.
- Demo BarberShop: citas agrupadas por día con cliente, servicio, barbero, hora y estado; permite agregar, cambiar estado y borrar citas.
- Nueve colecciones de datos de ejemplo en `src/data/`, con los cambios guardados en `localStorage`.
- Navegación con React Router y estilos con Tailwind en las demos y CSS propio en la landing.

Ya están resueltos el formulario (Formsubmit.co, activado y probado), los datos de contacto del pie (correo y GitHub reales), el remote y la publicación: el sitio está en `https://portafolio-mu-fawn-43.vercel.app/` (PD-02, PD-06, PD-07). Falta solo la prueba del formulario desde la URL pública (fase 6.4). Ya no hay nada que configurar de base de datos.

## 6. Fuera de alcance

No está implementado: login, backend, escritura en un servidor, cuentas de usuario, panel de administración, pasarelas de pago, multilenguaje, blog, analítica, demos MttoMex y EdMex, ni modo sandbox con persistencia en servidor. Las demos guardan cambios solo en el navegador de quien las prueba: no sincronizan entre dispositivos ni comparten datos con otros visitantes. Tampoco hay drag-and-drop en el CRM: las tarjetas se mueven con flechas (A-06).

## 7. Métricas de éxito (propuesta)

- Visitas que llegan a al menos una demo.
- Permanencia en una demo mayor a 30 segundos.
- Clics en «Hablemos» o envíos del formulario.
- Tres demos destacadas, no más.

Las metas numéricas no están definidas (ver PD-04 en `DECISIONES.md`).

## 8. Riesgos identificados

- **Formulario dependiente de un servicio externo:** el envío usa Formsubmit.co; si el servicio falla, el visitante no podrá contactar (M-002).
- **Datos por navegador:** al limpiar el almacenamiento del sitio o cambiar de equipo, cada demo vuelve a sus datos de ejemplo. Es parte del diseño, pero conviene avisar al visitante; por eso las demos muestran `DemoNotice`.
- **Prueba del formulario en producción:** el sitio ya está publicado y el `action` apunta a Formsubmit.co, pero no se ha enviado un mensaje desde la URL pública (fase 6.4).
