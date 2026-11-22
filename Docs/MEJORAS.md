# MEJORAS · ChacDev Portafolio

**Versión:** 1.1 · **Fecha:** 22 de noviembre de 2026 · **Estado:** M-001, M-005, M-008, M-017, M-019 y M-020 hechas; M-007, M-009 y M-012 descartadas en esta copia; el resto sigue pendiente

Aquí se archivan las mejoras que salen durante el trabajo y que **no** forman parte del PRD. El listado de mejoras es la tabla de abajo.

## Índice

- [Cómo se usa](#cómo-se-usa)
- [Listado de mejoras](#listado-de-mejoras)
- [Notas](#notas)

## Cómo se usa

- Cada mejora lleva el ID `M-001`, `M-002`, …
- **Concepto:** una línea corta, en español.
- **Estado:** `Pendiente`, `En curso`, `Hecha` o `Descartada`.
- Ninguna fila se borra: solo cambia de estado.
- No se implementa nada de esta lista hasta que César lo pida. Las mejoras marcadas como hechas ya estaban en el código o se aprobaron en sesión.
- Formato tomado de `MEJORAS.md` de TaskFlowDB, en `C:\Users\lench\Desktop\TaskFlowDB\TaskFlowDB app\Docs\MEJORAS.md`.

## Listado de mejoras

| ID | Concepto | Estado |
|---|---|---|
| M-001 | Documentación inicial de ChacDev Portafolio | Hecha |
| M-002 | Poner el ID real de Formspree y probar el envío | Pendiente |
| M-003 | Añadir `favicon.svg` y la etiqueta `og:image` | Pendiente |
| M-004 | Reemplazar correo, GitHub y LinkedIn de ejemplo | Pendiente |
| M-005 | Mostrar los enlaces de demos en el menú móvil | Hecha |
| M-006 | Agregar `Dialog` y el detalle de oportunidad en el CRM | Pendiente |
| M-007 | Mostrar error cuando falle Supabase y validar variables de entorno | Descartada |
| M-008 | Corregir el conteo de subtareas heredado del README anterior | Hecha |
| M-009 | Configurar Supabase local con `supabase/config.toml` | Descartada |
| M-010 | Conectar el remote de GitHub y publicar en Vercel | Pendiente |
| M-011 | Revisar responsive en 375, 768 y 1024 px, y consola sin errores | Pendiente |
| M-012 | Verificar ejecución de `schema.sql`, `seed.sql` y RLS en Supabase | Descartada |
| M-013 | Filtro por barbero en BarberShop (opcional del plan) | Pendiente |
| M-014 | Añadir analítica (v1.1) | Pendiente |
| M-015 | Demos MttoMex y EdMex (v2) | Pendiente |
| M-016 | Modo sandbox con escritura temporal (v2) | Pendiente |
| M-017 | Mejorar la UI/UX de la landing con el diseño del ZIP | Hecha |
| M-018 | Mejorar la UI/UX de las tres demos (CRM, TaskFlow y BarberShop) | Pendiente |
| M-019 | Crear, leer, editar y borrar en las demos con guardado en `localStorage` | Hecha |
| M-020 | Evaluar prescindir de Supabase en las demos de la portada | Hecha |

## Notas

- **M-001:** tipo documentación. Motivo: la documentación estaba repartida entre la raíz del repo, la carpeta padre y el workspace. Resultado esperado: un conjunto de documentos en `Docs/` que explique el porqué, las reglas, la arquitectura, los datos, las decisiones y las etapas, más una guía rápida en la raíz. Acuerdos aplicados: A-07 y A-08. Archivos creados: los diez documentos de `Docs/` y el `README.md` de la raíz. Archivos reubicados: `PRD.md` y `ROADMAP.md` entraron a `Docs/`; `DESICIONES.md` pasó a `Docs/DECISIONES.md` con el nombre corregido. El 22 de noviembre de 2026 se actualizaron los documentos de `Docs/` a la copia sin base de datos.
- **M-002:** origen PD-03. El `action` del formulario contiene `TU-FORM-ID`; el envío no está probado. Verificación: enviar un mensaje real y confirmar recepción.
- **M-003:** `index.html` referencia `/favicon.svg`. En la versión anterior no existía la carpeta `public/`; en esta copia se agregó el icono, pero sigue sin haber `og:image`. Verificación: recargar con Ctrl+F5 y comprobar que no haya 404 en la consola.
- **M-004:** origen PD-08. `Footer.jsx` y `Home.jsx` conservan `tu-usuario` en los enlaces sociales. Verificación: abrir el pie de página y la sección de contacto con datos reales.
- **M-005:** la landing incluye un encabezado propio con botón ☰ y menú móvil que lleva a las secciones y a las tres demos. El `Navbar` que aparece dentro de las demos sigue ocultando sus enlaces por debajo de `md`. Verificación: abrir `/` en 375 px y comprobar que se pueda llegar a las tres demos desde el menú.
- **M-006:** origen PD-10. `src/components/ui/dialog.jsx` existe y el CRM lo abre desde «Editar» para ver y cambiar contacto, título y valor. Sigue sin abrirse al hacer clic en la tarjeta. Verificación: hacer clic en una oportunidad y ver su detalle sin salir del pipeline.
- **M-007:** descartada el 22 de noviembre de 2026. No hay Supabase, variables de entorno ni consultas a servidor en esta copia; las demos siempre parten de los arreglos de `src/data/`, así que no hay una conexión que pueda fallar.
- **M-008:** la documentación anterior decía 15 subtareas, pero los datos de ejemplo tienen 8. Los documentos actuales registran 8. Verificación: contar los objetos de `seedSubtasks` en `src/data/seedTaskflow.js`.
- **M-009:** descartada en esta copia el 22 de noviembre de 2026. Pertenecía a la versión anterior con Supabase local (puertos 554xx, migración, seed y RLS), registrada en el `CHANGELOG.md`. En esta copia no hay carpeta `supabase/` ni configuración de ese tipo; ver A-09 y A-10.
- **M-010:** orígenes PD-02, PD-06 y PD-07. Esta copia no tiene carpeta `.git` ni remote, y no hay deploy confirmado. Verificación: `git remote -v` y abrir la URL pública.
- **M-011:** las clases responsive existen, pero no hay revisión registrada en los tres anchos ni comprobación de consola de esta copia. Verificación: revisar 375, 768 y 1024 px en la landing y las tres demos, con Ctrl+F5.
- **M-012:** descartada en esta copia el 22 de noviembre de 2026. No hay `schema.sql`, `seed.sql` ni RLS que verificar; los datos de ejemplo están en `src/data/seed*.js` y se comprueban abriendo las tres demos.
- **M-013:** tarea 5.5 del plan original, marcada como opcional. Verificación: filtrar las citas por barbero en `/barbershop`.
- **M-014 a M-016:** vienen del roadmap original (v1.1 y v2). No se ejecutan sin decisión previa.
- **M-017:** tipo UI/UX. Se adaptó el diseño de `landing_page_mtto_mex.zip` a ChacDev con paleta azul marino/azul/verde; el hero y el testimonio son ilustraciones hechas en CSS, no fotografías. Los estilos quedaron aislados bajo `.chacdev-landing` y `App.jsx` oculta el `Navbar`/`Footer` de la app solo en `/`. **Hecha el 21 de noviembre de 2026**: César aceptó el diseño y pidió guardarlo.
- **M-018:** tipo UI/UX. Motivo: las tres demos comparten un estilo básico y no tienen una revisión visual registrada. Resultado esperado: mejorar jerarquía, espaciado, estados y feedback visual sin romper el guardado local. Verificación: recorrer las tres demos en los tres anchos con Ctrl+F5. Relación: M-005, M-006, M-011 y M-013.
- **M-019:** tipo funcionalidad. Motivo: en la versión anterior las demos eran de solo lectura por A-04, así que el visitante no podía probar cambios. Resultado esperado: crear, leer, editar y borrar registros sobre una copia local de los datos guardada en `localStorage`. **Hecha**: las tres demos crean, editan, cambian estado, borran y tienen «Reiniciar demo»; los cambios persisten tras recargar y no se envían a ningún servidor. Verificación: crear, editar, recargar y borrar un registro en cada demo. Relación: A-10; amplía M-016, que sigue pendiente porque no hay un modo sandbox con persistencia en servidor.
- **M-020:** tipo decisión de arquitectura. Motivo: César planteó que para fines de esta demo no se necesita base de datos. **Hecha el 22 de noviembre de 2026**: la evaluación se aplicó en esta copia, que es el proyecto sin base de datos; se registró como A-10 y cerró PD-11. La versión anterior con Supabase se conserva como registro histórico en `CHANGELOG.md`.
