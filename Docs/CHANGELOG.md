# ChacDev Portafolio — Registro de cambios

**Versión:** 1.1 · **Fecha:** 22 de noviembre de 2026 · **Estado:** registro de los cambios de esta copia, sin base de datos

## Índice

- [Cómo se usa](#cómo-se-usa)
- [Resumen del avance](#resumen-del-avance)
- [22 de noviembre de 2026](#22-de-noviembre-de-2026)
- [21 de noviembre de 2026 (versión anterior con Supabase)](#21-de-noviembre-de-2026-versión-anterior-con-supabase)
- [Historial previo](#historial-previo)

## Cómo se usa

Este archivo registra los cambios de la copia `chacdev-portafolioSBD`, que sustituye como documento oficial a la copia `chacdev-portafolio` de `05-Portafolio ChacDev`. Las mejoras se siguen en `MEJORAS.md` y los acuerdos en `DECISIONES.md`.

**Regla de cada commit:** antes de commitear se toma el siguiente ID libre `C-001`, `C-002`, … y se escribe aquí su resumen ejecutivo: ID, mensaje del commit y fecha, seguidos de tres o cuatro líneas con lo hecho y el resultado verificado. Ese mismo ID va al principio del mensaje del commit, para localizarlo con `git log --grep=C-00x`. El resumen va en «Resumen del avance» y el detalle cronológico, bajo la fecha correspondiente. Como el ID se elige antes de commitear, el registro entra en el mismo commit que el cambio: no se hace un segundo commit solo para actualizar este archivo. El hash de Git no se copia aquí; se consulta con `git log --oneline`.

Los commits de esta copia se numeran desde `C-001`. Los dos primeros se hicieron con la regla anterior, que esperaba al commit para copiar el hash. Su equivalencia con el hash de Git, solo para esos dos, es: `C-001` = `22bad1b` y `C-002` = `3f4c945`. La regla de ID propio se aplica desde `C-003`.

## Resumen del avance

`C-001` — Actualizar portafolio a versión sin base de datos y preparar arranque local (22 de noviembre de 2026).

- Se reescriben los once documentos de `Docs/` para describir el código actual: demos en `localhost`, datos de ejemplo en `src/data/` y cambios en `localStorage`.
- Se registran los acuerdos A-10 y la resolución de PD-05, PD-09 y PD-11; A-09 queda como acuerdo superado de la versión anterior.
- Se actualizan los estados de mejoras: M-019 y M-020 pasan a `Hecha`; M-007, M-009 y M-012 quedan `Descartada` en esta copia.
- Prueba: build correcto con `npm run build`; las cuatro rutas abren en `localhost:5173` sin errores de consola ni peticiones fallidas. Queda pendiente la revisión registrada en 375, 768 y 1024 px (M-011).

`C-002` — Registrar hash del primer commit en el CHANGELOG (22 de noviembre de 2026).

- Segundo commit de esta copia, hecho con la regla anterior: solo actualizó este archivo para reemplazar el texto «Sin commit en esta copia» por el hash y el mensaje reales.
- Con la regla nueva no habría sido necesario: ese registro iba en el mismo commit del cambio.
- Prueba: `git status --short` quedó vacío y `git log -2 --oneline` mostró los dos commits.

`C-003` — Cambiar el registro del CHANGELOG a un ID propio (22 de noviembre de 2026).

- Se sustituye el hash por el ID `C-xx`, asignado antes de commitear, para que el cambio y su registro queden en un solo commit.
- Se actualizan las reglas en `Docs/README.md`, `Docs/CHANGELOG.md` y `Docs/ROADMAP.md`; se numeran `C-001` y `C-002` los dos commits ya existentes.
- Prueba: este registro se guarda junto con el cambio, en el mismo commit; `git log -1 --oneline` debe mostrar el mensaje encabezado por `C-003`.

`C-004` — Cerrar Etapa 0 y verificar responsive (22 de noviembre de 2026).

- Se revisan los 50 enlaces de los 11 documentos de `Docs/`: ninguno roto. Etapa 0 queda cerrada.
- M-011 pasa a `Hecha`: 12 combinaciones (375, 768 y 1024 px × `/`, `/crm`, `/taskflow` y `/barbershop`) sin desbordamiento horizontal, sin texto recortado, consola sin errores y sin peticiones fallidas.
- Se corrige PD-06: esta copia ya tiene `.git` y commits locales, pero sigue sin remote. Se anota para M-018 el campo `type="date"` de BarberShop a 768 px, más ancho por dentro que por fuera.
- Prueba: mediciones de layout y consola en navegador con cargas nuevas. Sin cambios de código, por lo que no aplica Ctrl+F5.

`C-005` — Fusionar PLAN.md en ROADMAP.md (22 de noviembre de 2026).

- Se confirma que ambos documentos trataban las mismas etapas: `ROADMAP.md` las resumía y `PLAN.md` las detallaba con tareas, tiempos y estados, algunos ya desactualizados en esta copia.
- `ROADMAP.md` incorpora las fases 0 a 7 del plan original, dependencias, riesgos y recursos, con los estados ajustados a la copia sin base de datos. `PLAN.md` se elimina.
- Se actualiza `Docs/README.md`: `ROADMAP.md` queda como único archivo de etapas y tareas, y `Docs/` pasa de 11 a 10 documentos.
- Prueba: revisor de enlaces internos de `Docs/` sin enlaces rotos. Sin cambios de código, por lo que no aplica Ctrl+F5.

Los commits `122162d` y `e0c97b8` pertenecen a la versión anterior con Supabase, en otro repositorio; sus resúmenes se conservan más abajo como registro histórico.

## 22 de noviembre de 2026

- Se reescriben los once documentos de `Docs/` para que coincidan con esta copia. Ya no se describe Supabase como parte del funcionamiento actual.
- Se corrige la redacción: lo que corre en `localhost` es la aplicación; no hay servidor de base de datos. Los datos de ejemplo están en `src/data/seed*.js` y las modificaciones se guardan en el navegador con `localStorage`.
- Se cierran PD-05, PD-09 y PD-11 con A-10. A-09 y los commits `122162d` y `e0c97b8` quedan como historia de la versión con Supabase.
- Se marcan como hechas M-019 (crear, editar, borrar y reiniciar en las tres demos) y M-020 (decisión de no usar base de datos); se descartan M-007, M-009 y M-012 por no aplicar aquí.
- Se copia `src/landing-mtto.css` desde la versión anterior, se crea `public/favicon.svg` y el `README.md` de la raíz, y se quita un bloque duplicado en `src/components/ui/input.jsx` que impedía compilar.
- Prueba: build correcto con `npm run build`; las cuatro rutas abren en `localhost:5173` sin errores de consola ni peticiones fallidas. Queda pendiente la revisión registrada en 375, 768 y 1024 px (M-011).
- Segundo commit (`C-002`), hecho con la regla anterior, registró el hash real del primero en este archivo. Con la regla nueva no se habría necesitado.
- Tercer commit (`C-003`): se cambia la regla de registro a un ID propio `C-xx`, asignado antes de commitear, para no hacer un segundo commit solo por el CHANGELOG. Se actualizan `Docs/README.md`, `Docs/CHANGELOG.md` y `Docs/ROADMAP.md`.
- Cuarto commit (`C-004`): se cierra Etapa 0 con la revisión de 50 enlaces y se marca M-011 como hecha tras comprobar las cuatro rutas en 375, 768 y 1024 px. Se corrige PD-06 y se registra una observación para M-018.
- Quinto commit (`C-005`): se fusiona `PLAN.md` en `ROADMAP.md` y se elimina `PLAN.md`. El roadmap conserva el detalle de fases, dependencias, riesgos y recursos con los estados de esta copia; `Docs/` queda con 10 archivos.

## 21 de noviembre de 2026 (versión anterior con Supabase)

- Se guarda el rediseño de la landing con el diseño del ZIP adaptado a ChacDev (`src/landing-mtto.css`, `src/pages/Home.jsx` y `src/App.jsx`). Primero se descartó la versión con imágenes generadas con IA y paleta vibrante, cuyo proveedor devolvió `Invalid credential`. M-017 pasa a `Hecha`.
- Se documenta la regla de registrar en `CHANGELOG.md` el identificador y el resumen ejecutivo de cada commit (en esa versión, el identificador era el hash de Git); se agregan M-017 a M-020 y se cierra PD-11 con M-020 descartada en esa versión.
- Se completa y verifica M-009: las cuatro rutas se abrieron con Ctrl+F5 sin errores de consola, las tres demos mostraron datos de Supabase local y la expansión de una tarea cargó sus subtareas. Se cerró PD-09 con el acuerdo A-09.
- Se levantó Supabase local con puertos 554xx y se agregó la migración `20261121000000_init_schema.sql` para que `supabase start` aplicara el esquema antes del seed. Las nueve tablas respondieron por API con `anon` y un `INSERT` fue rechazado por RLS. Se actualizaron `MEJORAS.md`, `ROADMAP.md`, `DECISIONES.md`, `ARQUITECTURA.md` y `MODELO_DE_DATOS.md` de esa versión.
- Se actualizaron los estados de `Docs/PLAN.md` y `Docs/MEJORAS.md` para reflejar el código de esa versión: 46 tareas con estados coincidentes.
- Se agregó a `ROADMAP.md` la nota de cierre de v1: detalle del CRM, favicon, ID real de Formspree y enlaces de contacto.
- Se generó la documentación completa en `Docs/`: `README.md`, `PRD.md`, `ESPECIFICACION_FUNCIONAL.md`, `SITE-MAP.md`, `ARQUITECTURA.md`, `MODELO_DE_DATOS.md`, `DECISIONES.md`, `ROADMAP.md`, `MEJORAS.md` y este archivo.
- Se reubicaron `PRD.md` y `ROADMAP.md` desde la raíz del repo a `Docs/`, y `DESICIONES.md` desde la carpeta padre a `Docs/DECISIONES.md` con el nombre corregido.
- Se reescribió el `README.md` de la raíz como guía rápida y se conservó `Docs/PLAN.md` como documento de apoyo.
- Se registraron los acuerdos A-07 y A-08 y los pendientes PD-01 a PD-10 en `Docs/DECISIONES.md`, y las mejoras M-001 a M-016 en `Docs/MEJORAS.md`.

### Resumen de commits de la versión anterior

`122162d` — Documentar proyecto y configurar Supabase local (M-009).

- Documentación oficial consolidada en `Docs/`: dos README intencionales (A-07) y estructura tomada de TaskFlowDB (A-08).
- M-009 hecha: Supabase local en puertos 554xx, migración que aplica el esquema antes del seed y RLS de solo lectura verificada.
- Prueba: 9 de 9 tablas responden por API con `anon`, las cuatro rutas abren sin errores de consola y las tres demos muestran datos; una tarea expandida cargó sus 2 subtareas.
- Etapa 2 siguió en curso: faltaban M-010, M-011 y M-012.

`e0c97b8` — Rediseñar la landing con el diseño del ZIP (M-017) y completar documentación.

- M-017 hecha: la landing adoptó el diseño de `landing_page_mtto_mex.zip` adaptado a ChacDev, con paleta azul marino/azul/verde. El CSS quedó aislado bajo `.chacdev-landing` y el Navbar/Footer de la app solo se ocultan en `/`.
- Documentación: regla de resumen ejecutivo por commit, mejoras M-017 a M-020 y cierre de PD-11 con M-020 descartada en esa versión.
- Prueba: `npm run build` correcto; 375, 768 y 1024 px sin desbordamiento horizontal, consola sin errores ni 404 y las tres demos intactas.

## Historial previo

- `8594406` — «Inicio de la aplicación». Era el único commit presente en `git log --oneline` de la versión anterior.
