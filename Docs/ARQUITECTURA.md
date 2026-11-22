# ChacDev Portafolio — Arquitectura

**Versión:** 1.1 · **Fecha:** 22 de noviembre de 2026 · **Estado:** describe el stack declarado en `package.json` y el flujo real del código de esta copia

## Índice

- [1. Stack](#1-stack)
- [2. Flujo de datos](#2-flujo-de-datos)
- [3. Estructura del código](#3-estructura-del-código)
- [4. Variables de entorno](#4-variables-de-entorno)
- [5. Privacidad y seguridad](#5-privacidad-y-seguridad)
- [6. Límites](#6-límites)
- [7. Arranque local](#7-arranque-local)

## 1. Stack

Tomado de `package.json`:

| Componente | Versión declarada | Uso |
|---|---|---|
| React | ^18.3.1 | Interfaz |
| React DOM | ^18.3.1 | Render |
| React Router DOM | ^6.26.2 | Rutas `/`, `/crm`, `/taskflow`, `/barbershop` |
| Tailwind CSS | ^3.4.13 | Estilos de las demos |
| Vite | ^5.4.8 | Servidor de desarrollo y build |
| `@vitejs/plugin-react` | ^4.3.2 | Plugin de React para Vite |
| PostCSS / Autoprefixer | ^8.4.47 / ^10.4.20 | Procesamiento de CSS |
| `tailwindcss-animate` | ^1.0.7 | Plugin de animaciones |
| `clsx` / `tailwind-merge` | ^2.1.1 / ^2.5.4 | Utilidad `cn()` para clases |
| `class-variance-authority` | ^0.7.0 | Declarada; sin uso en los archivos revisados |
| `lucide-react` | ^0.454.0 | Declarada; sin imports en `src/` |

No hay cliente de base de datos ni dependencias de servidor en `package.json`. Scripts disponibles: `dev`, `build` y `preview`. No hay script `lint`.

## 2. Flujo de datos

```
Navegador
  └─ main.jsx (BrowserRouter)
       └─ App.jsx
            ├─ /            → pages/Home.jsx (contenido estático)
            └─ demos
                 ├─ Navbar + Footer
                 └─ pages/CRM.jsx | TaskFlow.jsx | BarberShop.jsx
                      └─ src/lib/useLocalStorage.js
                           ├─ src/data/seedCrm.js | seedTaskflow.js | seedBarbershop.js
                           └─ localStorage del navegador
```

Cada página llama a `useLocalStorage` con una clave y un arreglo de ejemplo. La función devuelve el valor guardado si existe; si no, devuelve el arreglo de `src/data/`. No hay store global, capa de repositorio ni peticiones a un servidor de datos: el agrupamiento de resultados ocurre en cada componente.

La landing no consume datos: muestra contenido fijo y envía el formulario a Formspree (A-10).

## 3. Estructura del código

| Ruta | Contenido |
|---|---|
| `src/main.jsx` | Punto de entrada; monta `BrowserRouter` |
| `src/App.jsx` | Layout y definición de las cuatro rutas; oculta `Navbar`/`Footer` en `/` |
| `src/pages/` | `Home.jsx`, `CRM.jsx`, `TaskFlow.jsx`, `BarberShop.jsx` |
| `src/components/layout/` | `Navbar.jsx` y `Footer.jsx` para las demos |
| `src/components/shared/` | `DemoNotice.jsx`, aviso de datos locales |
| `src/components/ui/` | `button.jsx`, `card.jsx`, `badge.jsx`, `dialog.jsx`, `input.jsx` |
| `src/lib/useLocalStorage.js` | Lectura, escritura y reinicio de cada colección |
| `src/lib/utils.js` | Funciones `cn()` y `uid()` |
| `src/data/seedCrm.js` | Etapas, contactos y oportunidades de ejemplo |
| `src/data/seedTaskflow.js` | Proyectos, tareas y subtareas de ejemplo |
| `src/data/seedBarbershop.js` | Servicios, barberos y citas de ejemplo |
| `src/landing-mtto.css` | Estilos de la landing bajo `.chacdev-landing` |
| `src/index.css` | Directivas de Tailwind y estilo base del `body` |
| `public/favicon.svg` | Icono del sitio |
| `README.md` (raíz) | Guía rápida de arranque |

El alias `@/` está definido en `vite.config.js` y `jsconfig.json` y apunta a `src/`.

## 4. Variables de entorno

No hay variables de entorno en esta copia. No se necesita `.env.local` ni ninguna clave para probar las demos: todo se ejecuta en el navegador.

## 5. Privacidad y seguridad

- No hay login, roles ni permisos de servidor.
- Los cambios de las demos quedan en el `localStorage` del dispositivo de quien las prueba y no se envían a ningún servidor.
- El formulario envía los datos a Formsubmit.co como servicio externo; el endpoint está activado y César confirmó la recepción de un mensaje de prueba (A-12, M-002).
- No hay secretos en el repositorio: `.env.local` y `.env` están en `.gitignore`, aunque hoy no se usan.

## 6. Límites

- El sitio depende de Formspree para el formulario; las demos no dependen de servicios externos.
- Los datos no se comparten entre navegadores ni dispositivos, y se pierden al limpiar el almacenamiento del sitio.
- No hay remote de GitHub ni deploy confirmado (PD-06, PD-07).
- No hay página 404 ni manejo de rutas desconocidas.
- El `Navbar` de las demos no muestra sus enlaces en móvil (M-005); la landing sí tiene menú móvil propio.

## 7. Arranque local

Requiere Node.js y npm. En la raíz del proyecto:

```bash
npm install
npm run dev
```

Luego abrir `http://localhost:5173`. Para el build: `npm run build`; para verlo: `npm run preview`.

No hay base de datos que levantar ni configuración previa: al abrir cada demo se cargan los arreglos de `src/data/`. La guía rápida está en el `README.md` de la raíz.
