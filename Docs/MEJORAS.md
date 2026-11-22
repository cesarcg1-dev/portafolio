# MEJORAS · ChacDev Portafolio

**Versión:** 1.1 · **Fecha:** 22 de noviembre de 2026 · **Estado:** M-001, M-003, M-004, M-005, M-006, M-008, M-011, M-017, M-019 y M-020 hechas; M-007, M-009 y M-012 descartadas en esta copia; el resto sigue pendiente

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
| M-002 | Definir el mecanismo de envío del formulario y probarlo | Pendiente |
| M-003 | Añadir `favicon.svg` y la etiqueta `og:image` | Hecha |
| M-004 | Reemplazar correo, GitHub y LinkedIn de ejemplo | Hecha |
| M-005 | Mostrar los enlaces de demos en el menú móvil | Hecha |
| M-006 | Agregar `Dialog` y el detalle de oportunidad en el CRM | Hecha |
| M-007 | Mostrar error cuando falle Supabase y validar variables de entorno | Descartada |
| M-008 | Corregir el conteo de subtareas heredado del README anterior | Hecha |
| M-009 | Configurar Supabase local con `supabase/config.toml` | Descartada |
| M-010 | Conectar el remote de GitHub y publicar en Vercel | Pendiente |
| M-011 | Revisar responsive en 375, 768 y 1024 px, y consola sin errores | Hecha |
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
- **M-002:** origen PD-03. Formspree quedó descartado el 22 de noviembre de 2026 (A-12); el `action` sigue con `TU-FORM-ID` y el envío no está probado. Falta elegir el mecanismo de envío. Verificación: enviar un mensaje real y confirmar recepción en `cesarcg1@gmail.com`.
- **M-003:** `index.html` referencia `/favicon.svg` y, desde el 22 de noviembre de 2026, `og:image` con `/og-image.png` y su texto alternativo. El PNG propio es de 1200×630 y usa los colores de la landing. Verificado: build correcto y petición 200 `image/png` sin errores de consola. **Hecha** el 22 de noviembre de 2026. Al publicar, PD-07 exige convertir la ruta en URL absoluta con el dominio final.
- **M-004:** origen PD-08. El 22 de noviembre de 2026 se reemplazó `tu-usuario` por `https://github.com/cesarcg1-dev`, se agregó `mailto:cesarcg1@gmail.com` y se quitó el enlace de LinkedIn en `Footer.jsx` (A-11). No había marcadores de lugar en `Home.jsx`. Verificado en navegador. **Hecha** el 22 de noviembre de 2026.
- **M-005:** la landing incluye un encabezado propio con botón ☰ y menú móvil que lleva a las secciones y a las tres demos. El `Navbar` que aparece dentro de las demos sigue ocultando sus enlaces por debajo de `md`. Verificación: abrir `/` en 375 px y comprobar que se pueda llegar a las tres demos desde el menú.
- **M-006:** origen PD-10. El CRM abre el `Dialog` desde «Editar» y, desde el 22 de noviembre de 2026, también al hacer clic en la información de la tarjeta o al pulsar `Enter` con el foco en ella. El cuadro permite ver y cambiar contacto, título y valor sin salir del pipeline; las flechas y «×» quedaron fuera del botón para no abrirlo. Verificado en navegador con clic, cierre, teclado y 375/768 px. **Hecha** el 22 de noviembre de 2026. PD-10 sigue abierto sobre si el detalle debe mostrar más campos.
- **M-007:** descartada el 22 de noviembre de 2026. No hay Supabase, variables de entorno ni consultas a servidor en esta copia; las demos siempre parten de los arreglos de `src/data/`, así que no hay una conexión que pueda fallar.
- **M-008:** la documentación anterior decía 15 subtareas, pero los datos de ejemplo tienen 8. Los documentos actuales registran 8. Verificación: contar los objetos de `seedSubtasks` en `src/data/seedTaskflow.js`.
- **M-009:** descartada en esta copia el 22 de noviembre de 2026. Pertenecía a la versión anterior con Supabase local (puertos 554xx, migración, seed y RLS), registrada en el `CHANGELOG.md`. En esta copia no hay carpeta `supabase/` ni configuración de ese tipo; ver A-09 y A-10.
- **M-010:** orígenes PD-02, PD-06 y PD-07. Esta copia no tiene carpeta `.git` ni remote, y no hay deploy confirmado. Verificación: `git remote -v` y abrir la URL pública.
- **M-011:** revisión registrada el 22 de noviembre de 2026. Se comprobaron las cuatro rutas (`/`, `/crm`, `/taskflow` y `/barbershop`) a 375, 768 y 1024 px: sin desbordamiento horizontal, sin texto recortado, contenido presente, consola sin errores y sin peticiones fallidas. La revisión fue programática (medidas de layout y consola) sobre cargas nuevas; este entorno no permitió inspeccionar capturas. **Hecha** el 22 de noviembre de 2026.
- **M-012:** descartada en esta copia el 22 de noviembre de 2026. No hay `schema.sql`, `seed.sql` ni RLS que verificar; los datos de ejemplo están en `src/data/seed*.js` y se comprueban abriendo las tres demos.
- **M-013:** tarea 5.5 del plan original, marcada como opcional. Verificación: filtrar las citas por barbero en `/barbershop`.
- **M-014 a M-016:** vienen del roadmap original (v1.1 y v2). No se ejecutan sin decisión previa.
- **M-017:** tipo UI/UX. Se adaptó el diseño de `landing_page_mtto_mex.zip` a ChacDev con paleta azul marino/azul/verde; el hero y el testimonio son ilustraciones hechas en CSS, no fotografías. Los estilos quedaron aislados bajo `.chacdev-landing` y `App.jsx` oculta el `Navbar`/`Footer` de la app solo en `/`. **Hecha el 21 de noviembre de 2026**: César aceptó el diseño y pidió guardarlo.
- **M-018:** tipo UI/UX. Motivo: las tres demos comparten un estilo básico y no tienen una revisión visual registrada. Resultado esperado: mejorar jerarquía, espaciado, estados y feedback visual sin romper el guardado local. Verificación: recorrer las tres demos en los tres anchos con Ctrl+F5. Observación de M-011: en `/barbershop` a 768 px, el campo `type="date"` muestra sus segmentos internos más anchos que el campo (133 vs 108 px), sin romper el diseño; en las demos a 375 px los enlaces del `Navbar` siguen ocultos por la clase `hidden md:flex`. Relación: M-005, M-006, M-011 y M-013.
- **M-019:** tipo funcionalidad. Motivo: en la versión anterior las demos eran de solo lectura por A-04, así que el visitante no podía probar cambios. Resultado esperado: crear, leer, editar y borrar registros sobre una copia local de los datos guardada en `localStorage`. **Hecha**: las tres demos crean, editan, cambian estado, borran y tienen «Reiniciar demo»; los cambios persisten tras recargar y no se envían a ningún servidor. Verificación: crear, editar, recargar y borrar un registro en cada demo. Relación: A-10; amplía M-016, que sigue pendiente porque no hay un modo sandbox con persistencia en servidor.
- **M-020:** tipo decisión de arquitectura. Motivo: César planteó que para fines de esta demo no se necesita base de datos. **Hecha el 22 de noviembre de 2026**: la evaluación se aplicó en esta copia, que es el proyecto sin base de datos; se registró como A-10 y cerró PD-11. La versión anterior con Supabase se conserva como registro histórico en `CHANGELOG.md`.
