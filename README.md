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

El formulario de contacto de la landing sí usa Formspree, pero todavía tiene un ID de ejemplo (`TU-FORM-ID`), así que aún no envía mensajes reales.

## Rutas

| Ruta | Contenido |
|---|---|
| `/` | Landing con servicios, ejemplos y contacto |
| `/crm` | Pipeline de oportunidades |
| `/taskflow` | Proyectos, tareas y subtareas |
| `/barbershop` | Agenda de citas |

## Documentación

La documentación oficial está en `Docs/`. Empieza por `Docs/README.md`; los acuerdos y el historial de la versión anterior con Supabase están en `Docs/DECISIONES.md` y `Docs/CHANGELOG.md`.
