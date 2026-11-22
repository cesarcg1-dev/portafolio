# ChacDev Portafolio

Sitio de demostración para PYMES: una landing y tres demos interactivas (CRM, TaskFlow y BarberShop).

## Cómo probarlo

Necesitas Node.js y npm. Desde esta carpeta:

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`. Para generar y ver la versión de producción:

```bash
npm run build
npm run preview
```

Si la página no refleja los cambios, recarga con **Ctrl+F5**.

## Datos de las demos

No hay base de datos ni servidor externo. Las demos corren en tu `localhost`, leen datos de ejemplo desde `src/data/seed*.js` y guardan tus cambios en `localStorage`, dentro de tu navegador. Cada demo tiene un botón **Reiniciar demo** para volver a los datos originales. Los cambios no se comparten con otras personas ni se envían a ningún servidor.

El formulario de contacto de la landing envía los mensajes con Formsubmit.co a `cesarcg1@gmail.com`. Se activó y se comprobó con un mensaje de prueba el 22 de noviembre de 2026. Las demos, en cambio, no envían sus datos a ningún servidor.

## Rutas

| Ruta | Contenido |
|---|---|
| `/` | Landing con servicios, ejemplos y contacto |
| `/crm` | Pipeline de oportunidades |
| `/taskflow` | Proyectos, tareas y subtareas |
| `/barbershop` | Agenda de citas |

## Publicación

El sitio publicado está en `https://portafolio-mu-fawn-43.vercel.app/`. El remote es `https://github.com/cesarcg1-dev/portafolio` (PD-06) y Vercel despliega automáticamente desde la rama `master`.

Si necesitas volver a subir cambios desde otra copia, ejecuta desde esta carpeta:

```bash
git remote add origin https://github.com/cesarcg1-dev/portafolio.git
git push -u origin master
```

El archivo `vercel.json` redirige `/crm`, `/taskflow` y `/barbershop` a `index.html`, así que esas rutas funcionan al abrirlas directamente. PD-02 quedó resuelto con la URL que asignó Vercel; `chacdev.vercel.app` no se usó. Falta probar el formulario en producción (fase 6.4).

## Documentación

La documentación oficial está en `Docs/`. Empieza por `Docs/README.md`; los acuerdos y el historial de la versión anterior con Supabase están en `Docs/DECISIONES.md` y `Docs/CHANGELOG.md`.
