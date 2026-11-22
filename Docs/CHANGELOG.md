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

**Regla de cada commit:** al crear un commit se carga aquí su resumen ejecutivo: hash y mensaje del commit, seguidos de tres o cuatro líneas con lo hecho y el resultado verificado. El resumen va en «Resumen del avance» y el detalle cronológico, bajo la fecha correspondiente. El hash se toma de `git log -1 --oneline` justo después del commit; si el texto se escribió antes, se completa con el hash real en ese momento.

Esta copia no tiene carpeta `.git`, así que los cambios del 22 de noviembre se registran sin hash. Cuando César cree el primer commit aquí, se agregará el hash real a ese registro.

## Resumen del avance

Sin commit en esta copia — Documentar la versión sin base de datos (22 de noviembre de 2026).

- Se reescriben los diez documentos de `Docs/` para describir el código actual: demos en `localhost`, datos de ejemplo en `src/data/` y cambios en `localStorage`.
- Se registran los acuerdos A-10 y la resolución de PD-05, PD-09 y PD-11; A-09 queda como acuerdo superado de la versión anterior.
- Se actualizan los estados de mejoras: M-019 y M-020 pasan a `Hecha`; M-007, M-009 y M-012 quedan `Descartada` en esta copia.
- Prueba: build correcto con `npm run build`; las cuatro rutas abren en `localhost:5173` sin errores de consola ni peticiones fallidas. Queda pendiente la revisión registrada en 375, 768 y 1024 px (M-011).

`122162d` y `e0c97b8` — Commits de la versión anterior con Supabase; sus resúmenes se conservan más abajo como registro histórico.

## 22 de noviembre de 2026

- Se reescriben los once documentos de `Docs/` para que coincidan con esta copia. Ya no se describe Supabase como parte del funcionamiento actual.
- Se corrige la redacción: lo que corre en `localhost` es la aplicación; no hay servidor de base de datos. Los datos de ejemplo están en `src/data/seed*.js` y las modificaciones se guardan en el navegador con `localStorage`.
- Se cierran PD-05, PD-09 y PD-11 con A-10. A-09 y los commits `122162d` y `e0c97b8` quedan como historia de la versión con Supabase.
- Se marcan como hechas M-019 (crear, editar, borrar y reiniciar en las tres demos) y M-020 (decisión de no usar base de datos); se descartan M-007, M-009 y M-012 por no aplicar aquí.
- Se copia `src/landing-mtto.css` desde la versión anterior, se crea `public/favicon.svg` y el `README.md` de la raíz, y se quita un bloque duplicado en `src/components/ui/input.jsx` que impedía compilar.
- Prueba: build correcto con `npm run build`; las cuatro rutas abren en `localhost:5173` sin errores de consola ni peticiones fallidas. Queda pendiente la revisión registrada en 375, 768 y 1024 px (M-011).

## 21 de noviembre de 2026 (versión anterior con Supabase)

- Se guarda el rediseño de la landing con el diseño del ZIP adaptado a ChacDev (`src/landing-mtto.css`, `src/pages/Home.jsx` y `src/App.jsx`). Primero se descartó la versión con imágenes generadas con IA y paleta vibrante, cuyo proveedor devolvió `Invalid credential`. M-017 pasa a `Hecha`.
- Se documenta la regla de registrar en `CHANGELOG.md` el hash y el resumen ejecutivo de cada commit; se agregan M-017 a M-020 y se cierra PD-11 con M-020 descartada en esa versión.
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
