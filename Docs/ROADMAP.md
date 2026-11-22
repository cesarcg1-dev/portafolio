# ChacDev Portafolio — Roadmap

**Versión:** 1.1 · **Fecha:** 22 de noviembre de 2026 · **Estado:** documentación actualizada a la copia sin base de datos; cierre de v1 pendiente; v1.1 y v2 sin iniciar

Cada etapa termina cuando se cumple su condición. Los temas sin decidir se registran en `DECISIONES.md`.

## Índice

- [Etapas propuestas](#etapas-propuestas)
- [Estado actual](#estado-actual)
- [Regla de avance](#regla-de-avance)

## Etapas propuestas

| Etapa | Trabajo | Listo cuando |
|---|---|---|
| 0. Documentación | Documentar qué hace y cómo está hecho el portafolio | Los documentos de `Docs/` estén revisados y coincidan con el código de esta copia |
| 1. Cierre de v1 | Formulario, favicon, contacto real y detalle del CRM | M-002, M-003, M-004 y M-006 figuren como `Hecha` |
| 2. Verificación local | Arrancar en `localhost`, comprobar build, demos y consola | El arranque y el build de esta copia quedaron verificados el 22 de noviembre de 2026 |
| 3. v1.1 | Añadir analítica | M-014 figure como `Hecha` |
| 4. v2 | Demos MttoMex y EdMex, y modo sandbox | M-015 y M-016 figuren como `Hecha` |

M-009 y M-012, que antes correspondían a Supabase, quedaron descartadas en esta copia por A-10.

## Estado actual

Situación al 22 de noviembre de 2026:

- **Etapa 0:** documentación reescrita el 22 de noviembre para describir la copia sin base de datos. Falta la comprobación final de enlaces entre documentos.
- **Etapa 1:** pendiente. Siguen el ID real de Formspree (M-002), `og:image` (M-003), datos de contacto (M-004) y el clic en la tarjeta del CRM (M-006).
- **Etapa 2:** verificada el 22 de noviembre de 2026. Esta copia no tiene base de datos que verificar: las demos leen `src/data/` y guardan en `localStorage`. `npm install` y `npm run build` funcionan; las cuatro rutas abren sin errores de consola ni peticiones fallidas.
- **Etapas 3 y 4:** pendientes, según el roadmap original.
- **Trabajo ya realizado en esta copia:** landing con diseño propio, rutas `/crm`, `/taskflow` y `/barbershop`, nueve colecciones de datos de ejemplo y operaciones crear/editar/borrar con «Reiniciar demo» (M-019).

## Regla de avance

No se avanza a una etapa superior si queda un pendiente que la bloquee. Las mejoras se registran en `MEJORAS.md` antes de ejecutarse. Después de cada cambio de código se comprueba el resultado con `npm run build` y, en lo visual, con recarga forzada (Ctrl+F5). Cada commit se registra en `CHANGELOG.md` con su ID `C-xx`, su mensaje y su resumen ejecutivo, en el mismo commit del cambio; la regla detallada está en ese archivo.
