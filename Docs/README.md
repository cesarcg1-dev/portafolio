# ChacDev Portafolio — Documentación

**Versión:** 1.1 · **Fecha:** 22 de noviembre de 2026 · **Estado:** documentación ajustada a la copia sin base de datos

**ChacDev Portafolio** es un sitio de demostración para PYMES: una landing y tres demos interactivas (CRM, TaskFlow y BarberShop) que corren en `localhost`. No hay base de datos ni servidor externo: los datos de ejemplo viven en `src/data/` y los cambios se guardan en el navegador con `localStorage`.

La versión anterior usaba Supabase. Ese trabajo quedó como registro histórico en `CHANGELOG.md` y en los acuerdos superados de `DECISIONES.md`; ya no describe esta copia.

La estructura y el estilo toman como referencia la documentación de TaskFlowDB (`C:\Users\lench\Desktop\TaskFlowDB\TaskFlowDB app\Docs`). El contenido describe ChacDev Portafolio.

## Índice

- [Documentos](#documentos)
- [Orden de lectura](#orden-de-lectura)
- [Reglas para mantener la documentación](#reglas-para-mantener-la-documentación)

## Documentos

Cada pregunta se responde en un solo archivo.

| Archivo | Responde a |
|---|---|
| `PRD.md` | ¿Por qué existe el portafolio, para quién y qué incluye? |
| `ESPECIFICACION_FUNCIONAL.md` | ¿Qué hace cada pantalla y con qué reglas? |
| `SITE-MAP.md` | ¿Cómo se conectan las rutas y los componentes? |
| `ARQUITECTURA.md` | ¿Cómo está construido y qué límites tiene? |
| `MODELO_DE_DATOS.md` | ¿Qué datos hay y cómo se guardan? |
| `DECISIONES.md` | ¿Qué está acordado y qué falta por decidir? |
| `ROADMAP.md` | ¿En qué etapas se trabaja? |
| `MEJORAS.md` | ¿Qué mejoras se han registrado? |
| `CHANGELOG.md` | ¿Qué cambios hubo en esta copia? |
| `PLAN.md` | Plan original de construcción (documento de apoyo) |

El `README.md` de la raíz es la guía rápida para arrancar la app. Este archivo es el índice de la documentación oficial; ambos conviven por acuerdo A-07.

## Orden de lectura

`README` (raíz) → `Docs/README` → `PRD` → `ESPECIFICACION_FUNCIONAL` →
`SITE-MAP` → `ARQUITECTURA` → `MODELO_DE_DATOS` → `DECISIONES` →
`ROADMAP` → `MEJORAS` → `CHANGELOG`

## Reglas para mantener la documentación

1. Los archivos `.md` de `Docs/` son la documentación oficial.
2. Cada dato vive en un solo archivo; los demás lo enlazan, no lo copian.
3. Lo que no esté decidido se registra como **pendiente** en `DECISIONES.md`.
4. Las propuestas técnicas no son decisiones hasta aprobarse en `DECISIONES.md`.
5. Antes de cambiar un acuerdo, se actualiza `DECISIONES.md`.
6. Todo documento empieza con un índice. Al agregar, renombrar o quitar una sección, se actualiza el índice.
7. Los acuerdos se numeran `A-xx`, los pendientes `PD-xx` y las mejoras `M-xx` (ver `MEJORAS.md`).
8. Cada commit se registra en `CHANGELOG.md` con su hash y un resumen ejecutivo de lo hecho; la regla detallada está en ese archivo.
