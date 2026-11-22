# ChacDev Portafolio — Mapa de vistas

**Versión:** 1.1 · **Fecha:** 22 de noviembre de 2026 · **Estado:** describe la estructura actual de esta copia

## Índice

- [1. Estructura general](#1-estructura-general)
- [2. Componentes persistentes](#2-componentes-persistentes)
- [3. Rutas](#3-rutas)
- [4. Navegación](#4-navegación)

## 1. Estructura general

Hay cuatro rutas, manejadas por React Router con `BrowserRouter` en `main.jsx`.

```
main.jsx (BrowserRouter)
  └─ App
       ├── /            → Home (encabezado y pie propios)
       └── demos
            ├── Navbar
            ├── main
            │    ├── /crm         → CRM
            │    ├── /taskflow    → TaskFlow
            │    └── /barbershop  → BarberShop
            └── Footer
```

`App.jsx` oculta `Navbar` y `Footer` en `/` para no duplicar los de la landing. No hay peticiones a una base de datos: cada demo lee su arreglo inicial desde `src/data/` y guarda los cambios en `localStorage`.

## 2. Componentes persistentes

| Componente | Archivo | Función |
|---|---|---|
| `Navbar` | `src/components/layout/Navbar.jsx` | Marca, enlaces a las tres demos y botón «Hablemos»; solo en las demos |
| `Footer` | `src/components/layout/Footer.jsx` | Año, derechos reservados y enlaces sociales; solo en las demos |
| `DemoNotice` | `src/components/shared/DemoNotice.jsx` | Aviso de que los datos son de ejemplo y se guardan en el navegador |
| `Button` | `src/components/ui/button.jsx` | Botón reutilizable con variantes `default`, `outline` y `ghost` |
| `Card` | `src/components/ui/card.jsx` | Tarjeta y sus partes (`CardHeader`, `CardTitle`, `CardDescription`, `CardContent`) |
| `Badge` | `src/components/ui/badge.jsx` | Etiquetas de estado con variantes `default`, `pending`, `progress`, `done` y `danger` |
| `Dialog` | `src/components/ui/dialog.jsx` | Cuadro para crear y editar oportunidades en el CRM |
| `Input` / `Select` | `src/components/ui/input.jsx` | Campos usados en los formularios de las demos |

Los componentes de interfaz siguen el estilo shadcn/ui y están copiados en `src/components/ui/`.

## 3. Rutas

| ID | Ruta | Archivo | Fuente de datos |
|---|---|---|---|
| V-01 | `/` | `src/pages/Home.jsx` | Contenido estático y formulario a Formspree |
| V-02 | `/crm` | `src/pages/CRM.jsx` | `chac_crm_stages`, `chac_crm_contacts`, `chac_crm_deals` (semilla: `seedCrm.js`) |
| V-03 | `/taskflow` | `src/pages/TaskFlow.jsx` | `chac_tf_projects`, `chac_tf_tasks`, `chac_tf_subtasks` (semilla: `seedTaskflow.js`) |
| V-04 | `/barbershop` | `src/pages/BarberShop.jsx` | `chac_bs_services`, `chac_bs_barbers`, `chac_bs_appointments` (semilla: `seedBarbershop.js`) |

Las tres demos importan `useLocalStorage` desde `src/lib/useLocalStorage.js` y agrupan los resultados en el propio componente; no hay store global ni capa de repositorio.

## 4. Navegación

- La landing tiene su propio encabezado con menú móvil; sus enlaces son anclas internas y los de «Ver demos» son `Link` a las tres rutas.
- El `Navbar` de las demos oculta sus enlaces en pantallas pequeñas con `hidden md:flex` (M-005).
- Cada demo lleva un enlace «← Volver al portafolio» y un botón «Reiniciar demo».
- Los bloques inferiores de las demos apuntan a `/#contacto`; el botón «Hablemos» del `Navbar`, a `#contacto`.
- El alias `@/` de Vite resuelve a `src/`, por eso los imports usan rutas como `@/lib/useLocalStorage`.
- No hay ruta de error ni página 404 definida.
