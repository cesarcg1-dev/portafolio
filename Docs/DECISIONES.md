# ChacDev Portafolio — Decisiones

**Versión:** 1.1 · **Fecha:** 22 de noviembre de 2026 · **Estado:** acuerdos vigentes de esta copia y pendientes sin respuesta registrada

Antes de cambiar un acuerdo, se actualiza este archivo.

## Índice

- [Acuerdos constatados](#acuerdos-constatados)
- [Pendientes](#pendientes)

## Acuerdos constatados

Son decisiones ya visibles en el código, en los documentos originales o acordadas en sesión; no son propuestas. Los acuerdos de la versión con Supabase se conservan como registro histórico, pero se marcan como superados cuando no aplican a esta copia.

| ID | Acuerdo |
|---|---|
| A-01 | Stack React + Vite en lugar de HTML puro; la razón documentada es que shadcn/ui está pensado para React |
| A-02 | Un solo proyecto de Vercel con rutas para las demos, no subdominios |
| A-03 | Nueve colecciones de datos de ejemplo, tres por demo, definidas en `src/data/seed*.js` (actualizado el 22 de noviembre de 2026) |
| A-04 | Demos interactivas sin login: se pueden crear, editar y borrar registros; los cambios quedan solo en el navegador (actualizado el 22 de noviembre de 2026) |
| A-05 | Los datos ficticios se cargan desde `src/data/seed*.js`; `localStorage` guarda solo las modificaciones (actualizado el 22 de noviembre de 2026) |
| A-06 | El pipeline del CRM no tiene drag-and-drop: las tarjetas se mueven con flechas |
| A-07 | Hay dos `README.md`: el de la raíz es guía rápida y `Docs/README.md` es el índice de la documentación oficial (acordado el 21 de noviembre de 2026) |
| A-08 | Los archivos `.md` de `Docs/` son la documentación oficial y su estructura toma como referencia la de TaskFlowDB (acordado el 21 de noviembre de 2026) |
| A-09 | Acuerdo de la versión anterior: la fase de prueba usaba Supabase local con puertos 554xx y aplicaba el esquema como migración antes del seed. Queda superado por A-10 el 22 de noviembre de 2026 |
| A-10 | Esta copia no usa Supabase ni base de datos: las demos corren en `localhost` y los datos se guardan en el navegador con `localStorage` (acordado el 22 de noviembre de 2026) |
| A-11 | En el pie se muestran el correo `cesarcg1@gmail.com` y el GitHub `https://github.com/cesarcg1-dev`; no se muestra LinkedIn por decisión de César el 22 de noviembre de 2026 |
| A-12 | No se usa Formspree: César no tiene cuenta. El formulario envía con Formsubmit.co, sin cuenta ni base de datos; el endpoint se activó con la primera prueba y César confirmó la recepción (acordado el 22 de noviembre de 2026) |

## Pendientes

| ID | Tema | Mejora | Resolución |
|---|---|---|---|
| PD-01 | Confirmar React + Vite o evaluar Basecoat para volver a vanilla | — | Sin respuesta registrada; el código ya usa React |
| PD-02 | Dominio propio o `chacdev.vercel.app` | M-010 | Resuelto el 22 de noviembre de 2026: Vercel asignó `https://portafolio-mu-fawn-43.vercel.app/`. El nombre `chacdev.vercel.app` no se usó |
| PD-03 | Confirmar cuenta de Formspree y obtener el ID real del formulario | M-002 | Cerrado el 22 de noviembre de 2026: Formspree descartado (A-12); el envío funciona con Formsubmit.co y M-002 está hecha |
| PD-04 | Definir metas numéricas de éxito | — | Sin resolver |
| PD-05 | Confirmar proyecto de Supabase real y ejecución de `schema.sql` y `seed.sql` | M-012 | Cerrado el 22 de noviembre de 2026: en esta copia no hay proyecto de Supabase ni scripts SQL (A-10) |
| PD-06 | Crear el repositorio remoto en GitHub | M-010 | Resuelto el 22 de noviembre de 2026: `origin` apunta a `https://github.com/cesarcg1-dev/portafolio.git`, la rama `master` ya fue subida por César y Vercel despliega desde ahí |
| PD-07 | Publicar en Vercel y fijar la URL final | M-010 | Resuelto el 22 de noviembre de 2026: URL final `https://portafolio-mu-fawn-43.vercel.app/`. Verificadas las cuatro rutas con consola limpia y `/og-image.png` con estado 200 `image/png`; `og:image` se corrige a esa URL en `C-012`. La prueba del formulario en producción sigue en la fase 6.4 |
| PD-08 | Reemplazar correo, GitHub y LinkedIn de ejemplo | M-004 | Resuelto el 22 de noviembre de 2026 con A-11: correo y GitHub reales; LinkedIn se quita |
| PD-09 | Definir el trabajo con Supabase local | M-009 | Cerrado: pertenece a la versión anterior; en esta copia no aplica (A-10) |
| PD-10 | Definir el alcance del detalle de oportunidad en el CRM | M-006 | Sin resolver: M-006 abrió el cuadro existente al hacer clic en la tarjeta, con contacto, título y valor; falta decidir si el detalle mostrará más campos |
| PD-11 | Prescindir de Supabase en las demos y usar solo `localStorage` | M-020 | Resuelto el 22 de noviembre de 2026 con A-10: esta copia es el proyecto sin base de datos y M-019 quedó hecha |

La columna **Resolución** se llena cuando el pendiente se acuerde. Si la resolución crea un acuerdo, se agrega una fila `A-xx` y se escribe ese ID en la resolución. Al resolverse, la mejora correspondiente en `MEJORAS.md` pasa a `Hecha`.
