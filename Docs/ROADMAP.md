# ChacDev Portafolio — Roadmap

**Versión:** 1.1 · **Fecha:** 22 de noviembre de 2026 · **Estado:** Etapas 0 y 1 cerradas y Etapa 2 verificada; v1.1 y v2 sin iniciar

Cada etapa termina cuando se cumple su condición. Los temas sin decidir se registran en `DECISIONES.md`; el detalle de las mejoras, en `MEJORAS.md`.

> Este archivo incorpora el contenido del antiguo `PLAN.md`, fusionado aquí el 22 de noviembre de 2026 (C-005). Los tiempos estimados y las filas «No aplica» vienen del plan original con Supabase y se conservan solo como registro histórico (A-10).

## Índice

- [Objetivo y criterio de estados](#objetivo-y-criterio-de-estados)
- [Resumen de etapas](#resumen-de-etapas)
- [Detalle de fases](#detalle-de-fases)
- [Estado actual](#estado-actual)
- [Dependencias](#dependencias)
- [Riesgos](#riesgos)
- [Recursos necesarios](#recursos-necesarios)
- [Regla de avance](#regla-de-avance)

## Objetivo y criterio de estados

**Objetivo:** lanzar el portafolio con 3 demos funcionales en el menor tiempo posible, sin sacrificar calidad visual ni claridad del mensaje de negocio.

**Duración estimada original:** 5-7 días de trabajo efectivo, según familiaridad con React y Shadcn.

**Criterio:** **Hecho** = comprobable en el código o verificado en navegador; **Pendiente** = depende de cuenta externa, prueba o implementación faltante; **No aplica** = pertenecía a la versión con base de datos. El estado de cada mejora se sigue en `MEJORAS.md`.

## Resumen de etapas

| Etapa | Fase original | Trabajo | Listo cuando |
|---|---|---|---|
| Trabajo base | Fases 0-5 | Decisiones, setup, landing y tres demos | Hecho; detalle en «Detalle de fases» |
| 0. Documentación | Sin fase original | Documentar qué hace y cómo está hecho el portafolio | Los documentos de `Docs/` estén revisados y coincidan con el código de esta copia |
| 1. Cierre de v1 | 2.5, 3.4, 6.3, 6.4, 6.5 | Formulario, favicon, contacto real y detalle del CRM | M-002, M-003, M-004 y M-006 figuren como `Hecha` |
| 2. Verificación local | 1.8, 6.1, 6.2 | Arrancar en `localhost`, comprobar build, demos y consola | El arranque y el build quedaron verificados el 22 de noviembre de 2026 |
| 3. v1.1 | 7.3 | Añadir analítica | M-014 figure como `Hecha` |
| 4. v2 | 7.1, 7.2 | Demos MttoMex y EdMex, y modo sandbox | M-015 y M-016 figuren como `Hecha` |

M-009 y M-012, que antes correspondían a Supabase, quedaron descartadas en esta copia por A-10.

## Detalle de fases

### Fase 0: Decisiones y preparación (Día 0)

| # | Tarea | Entregable | Tiempo estimado | Estado |
|---|---|---|---|---|
| 0.1 | Confirmar stack: React + Vite vs Basecoat (vanilla) | Decisión documentada | 15 min | Hecho |
| 0.2 | Crear proyecto Supabase Free, anotar URL y anon key | Proyecto creado | 10 min | No aplica (A-10) |
| 0.3 | Crear repositorio GitHub (`cesarcg1-dev/portafolio`) | Repo listo | 5 min | Pendiente: César debe crearlo y conectarlo (PD-06, M-010) |
| 0.4 | Crear proyecto Vercel vinculado al repo | Deploy automático configurado | 10 min | Pendiente: importar con el nombre `chacdev` para `https://chacdev.vercel.app` (PD-02, PD-07, M-010) |
| 0.5 | Elegir servicio de formulario: Formsubmit.co, sin cuenta | Endpoint configurado | 10 min | Hecho el 22 de noviembre de 2026: endpoint activado y mensaje de prueba recibido (A-12) |

**Criterio de salida:** repo creado, Vercel vinculado y servicio de formulario elegido. No se crea proyecto de base de datos.

### Fase 1: Setup del proyecto y datos de ejemplo (Día 1)

| # | Tarea | Entregable | Tiempo estimado | Estado |
|---|---|---|---|---|
| 1.1 | Inicializar Vite + React + Tailwind | Proyecto corriendo localmente | 30 min | Hecho |
| 1.2 | Instalar y configurar Shadcn/UI (init + componentes base) | Button, Card, Dialog e Input disponibles | 30 min | Hecho (componentes copiados en `src/components/ui/`) |
| 1.3 | Definir las 9 colecciones de ejemplo en `src/data/seed*.js` | Datos listos para leer | 1h | Hecho |
| 1.4 | Insertar datos ficticios para las 3 demos | Arreglos con nombres y fechas coherentes | 1.5h | Hecho |
| 1.5 | Configurar RLS: SELECT público para `anon` en todas las tablas | Políticas activas | 30 min | No aplica (A-10) |
| 1.6 | Crear `useLocalStorage` y usarlo en las tres demos | Guardado local configurado | 15 min | Hecho |
| 1.7 | Probar la lectura de un arreglo de ejemplo en el navegador | Datos llegando a la interfaz | 15 min | Hecho |
| 1.8 | Arranque del programa (`npm run dev`) sin backend local | Servidor de desarrollo corriendo en `localhost` | 20 min | Hecho; build y cuatro rutas verificados el 22 de noviembre de 2026 |

**Criterio de salida:** `npm run dev` funciona, las demos muestran datos de ejemplo y guardan cambios en el navegador.

**Riesgo:** si el navegador bloquea `localStorage`, las demos siguen mostrando los arreglos de ejemplo, pero no recuerdan los cambios.

### Fase 2: Landing page (Día 2)

| # | Tarea | Entregable | Tiempo estimado | Estado |
|---|---|---|---|---|
| 2.1 | Crear layout base con encabezado y pie propios | Estructura visual | 1h | Hecho |
| 2.2 | Hero: título, subtítulo, CTA | Sección hero funcional | 45 min | Hecho |
| 2.3 | Sección de 3 enlaces a demos | Demos navegables | 1h | Hecho |
| 2.4 | Secciones de problemas, servicios y proceso | Contenido de negocio | 30 min | Hecho |
| 2.5 | Formulario de contacto (nombre, email, mensaje) con envío a Formsubmit.co | Formulario funcional | 45 min | Hecho: endpoint activado y mensaje de prueba recibido (M-002) |
| 2.6 | Responsive: ajustar en 375px, 768px, 1024px | Sin desbordamiento ni texto cortado | 1h | Hecho; revisión registrada el 22 de noviembre de 2026 (M-011) |

**Criterio de salida:** landing completa, responsive, formulario envía y confirma.

### Fase 3: Demo CRM (Día 3)

| # | Tarea | Entregable | Tiempo estimado | Estado |
|---|---|---|---|---|
| 3.1 | Crear ruta `/crm` | Página accesible | 15 min | Hecho |
| 3.2 | Leer etapas, contactos y oportunidades desde `localStorage` | Datos cargando | 30 min | Hecho |
| 3.3 | Vista de pipeline: columnas por etapa, tarjetas de oportunidad | Tablero visual | 2h | Hecho |
| 3.4 | Cuadro de detalle y edición con `Dialog` | Interacción funcional | 1h | Hecho: se abre desde «Editar» y al hacer clic en la tarjeta (M-006) |
| 3.5 | Botón «Volver al portafolio» y «Reiniciar demo» | Navegación y reinicio | 10 min | Hecho |
| 3.6 | Responsive: pipeline en móvil (stack) | Usable en móvil | 45 min | Hecho |

**Criterio de salida:** demo CRM muestra datos de ejemplo locales, navegable y responsive.

**Simplificación:** no hay drag-and-drop. Las tarjetas se mueven con flechas; el valor está en ver el pipeline.

### Fase 4: Demo TaskFlow (Día 4)

| # | Tarea | Entregable | Tiempo estimado | Estado |
|---|---|---|---|---|
| 4.1 | Crear ruta `/taskflow` | Página accesible | 15 min | Hecho |
| 4.2 | Leer proyectos, tareas y subtareas desde `localStorage` | Datos cargando | 30 min | Hecho |
| 4.3 | Vista de proyectos con lista de tareas | Estructura visual | 1.5h | Hecho |
| 4.4 | Expansión de tarea para ver y editar subtareas | Checklist visible | 1h | Hecho |
| 4.5 | Indicadores de estado (badges: Pendiente, En progreso, Hecho) | UI clara | 30 min | Hecho |
| 4.6 | Responsive | Usable en móvil | 30 min | Hecho |

**Criterio de salida:** demo TaskFlow muestra proyectos, tareas y subtareas de ejemplo, con cambios guardados en el navegador.

### Fase 5: Demo BarberShop (Día 5)

| # | Tarea | Entregable | Tiempo estimado | Estado |
|---|---|---|---|---|
| 5.1 | Crear ruta `/barbershop` | Página accesible | 15 min | Hecho |
| 5.2 | Leer servicios, barberos y citas desde `localStorage` | Datos cargando | 30 min | Hecho |
| 5.3 | Vista de calendario semanal (lista por día) | Calendario visual | 2h | Hecho |
| 5.4 | Tarjetas de cita con cliente, servicio, hora, barbero | Información clara | 30 min | Hecho |
| 5.5 | Filtro por barbero (opcional, si el tiempo permite) | Selector funcional | 30 min | Pendiente (M-013) |
| 5.6 | Responsive: calendario en móvil (lista vertical) | Usable en móvil | 30 min | Hecho |

**Criterio de salida:** demo BarberShop muestra calendario con citas de ejemplo.

**Simplificación:** se usa una lista agrupada por día en lugar del grid semanal.

### Fase 6: Pulido y deploy (Día 6)

| # | Tarea | Entregable | Tiempo estimado | Estado |
|---|---|---|---|---|
| 6.1 | Revisar responsive en 375px, 768px, 1024px en las 3 demos + landing | Sin desbordamiento ni texto cortado | 1h | Hecho en local el 22 de noviembre de 2026 (M-011); falta en producción |
| 6.2 | Verificar consola sin errores en producción | Consola limpia | 30 min | Pendiente; solo se ha comprobado en desarrollo |
| 6.3 | Añadir favicon y meta tags (título, descripción, og:image) | SEO básico | 30 min | Hecho: favicon, meta básicos y `og:image` con URL absoluta (M-003); falta comprobarla en producción (PD-07) |
| 6.4 | Probar formulario de contacto en producción | Confirmación recibida | 15 min | Pendiente; comprobado en localhost el 22 de noviembre de 2026, falta al publicar |
| 6.5 | Configurar dominio (si aplica) o usar `.vercel.app` | URL final | 15 min | Dominio elegido: `https://chacdev.vercel.app` (PD-02); falta configurarlo en Vercel |
| 6.6 | Deploy final y prueba en móvil real | Sitio funcional | 30 min | Pendiente (M-010) |

**Preparación hecha el 22 de noviembre de 2026:** `vercel.json` redirige todas las rutas a `index.html` para que `/crm`, `/taskflow` y `/barbershop` abran al entrar directamente; `og:image` usa ya la URL absoluta del dominio elegido (PD-02).

**Criterio de salida:** sitio en producción, sin errores y con formulario funcional.

### Fase 7: Post-lanzamiento (opcional)

| # | Tarea | Cuándo | Estado |
|---|---|---|---|
| 7.1 | Añadir demos MttoMex y EdMex | v2 | Pendiente (M-015) |
| 7.2 | Implementar modo sandbox (escritura temporal) | v2 | Pendiente (M-016) |
| 7.3 | Añadir analytics (Vercel Analytics o Plausible) | v1.1 | Pendiente (M-014) |

## Estado actual

Situación al 22 de noviembre de 2026:

- **Etapa 0:** cerrada el 22 de noviembre de 2026. Documentación reescrita para describir la copia sin base de datos; 50 enlaces entre los 11 documentos revisados, sin enlaces rotos. Al fusionarse `PLAN.md` aquí, `Docs/` quedó con 10 archivos (C-005).
- **Etapa 1:** cerrada el 22 de noviembre de 2026. Formsubmit.co activado y mensaje de prueba recibido por César; M-002, M-003, M-004 y M-006 figuran como `Hecha`.
- **Etapa 2:** verificada el 22 de noviembre de 2026. Esta copia no tiene base de datos que verificar: las demos leen `src/data/` y guardan en `localStorage`. `npm install` y `npm run build` funcionan; las cuatro rutas abren sin errores de consola ni peticiones fallidas.
- **Etapas 3 y 4:** pendientes, según el plan original.
- **Trabajo ya realizado en esta copia:** landing con diseño propio, rutas `/crm`, `/taskflow` y `/barbershop`, nueve colecciones de datos de ejemplo y operaciones crear/editar/borrar con «Reiniciar demo» (M-019).

## Dependencias

La Fase 0 precede a la Fase 1, y esta a la Fase 2. Las fases 3, 4 y 5 son independientes entre sí y pueden paralelizarse. La Fase 6 requiere que al menos la landing y una demo estén listas.

## Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|---|---|---|---|
| Shadcn/UI requiere más configuración de la esperada | Media | Medio | Dedicar la Fase 1 completa; si se atasca, usar componentes copiados |
| `localStorage` bloqueado o limpiado | Media | Bajo | Mostrar `DemoNotice`, ofrecer «Reiniciar demo» y usar los arreglos de ejemplo como respaldo |
| Datos ficticios poco realistas | Baja | Medio | Cuidar nombres y fechas en `src/data/seed*.js` |
| Grid de calendario en BarberShop es complejo | Media | Bajo | Fallback a lista por día, ya aplicado |

## Recursos necesarios

- Cuenta Vercel (Free/Hobby)
- Cuenta GitHub
- Endpoint de Formsubmit.co ya activado (no requiere cuenta)
- Node.js instalado localmente
- Editor (VS Code recomendado)

No se necesita cuenta de Supabase ni configuración de base de datos.

## Regla de avance

No se avanza a una etapa superior si queda un pendiente que la bloquee. Las mejoras se registran en `MEJORAS.md` antes de ejecutarse. Después de cada cambio de código se comprueba el resultado con `npm run build` y, en lo visual, con recarga forzada (Ctrl+F5). Cada commit se registra en `CHANGELOG.md` con su ID `C-xx`, su mensaje y su resumen ejecutivo, en el mismo commit del cambio; la regla detallada está en ese archivo.
