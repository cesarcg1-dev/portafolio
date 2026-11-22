# PLAN — ChacDev Portafolio v1

> Documento de apoyo. La documentación oficial está en `Docs/README.md`.

> Este es el plan original de la versión con Supabase. En esta copia **no hay base de datos**: las tareas 0.2 y 1.3 a 1.8 se adaptaron a archivos de `src/data/` y `localStorage`, según A-10. Las filas marcadas «No aplica» conservan el plan original solo como registro.

**Objetivo:** Lanzar el portafolio con 3 demos funcionales en el menor tiempo posible, sin sacrificar calidad visual ni claridad del mensaje de negocio.

**Duración estimada:** 5-7 días de trabajo efectivo (dependiendo de familiaridad con React y Shadcn).

**Estados actualizados el 22 de noviembre de 2026.** Criterio: **Hecho** = comprobable en el código de esta copia; **Pendiente** = depende de cuenta externa, prueba visual o implementación faltante; **No aplica** = pertenecía a la versión con base de datos. Detalle en `Docs/MEJORAS.md`.

---

## Fase 0: Decisiones y preparación (Día 0)

| # | Tarea | Entregable | Tiempo estimado | Estado |
|---|-------|------------|-----------------|-------------|
| 0.1 | Confirmar stack: React + Vite vs Basecoat (vanilla) | Decisión documentada | 15 min | Hecho |
| 0.2 | Crear proyecto Supabase Free, anotar URL y anon key | Proyecto creado | 10 min | No aplica (A-10) |
| 0.3 | Crear repositorio GitHub (`chacdev-portafolio`) | Repo listo | 5 min | Pendiente |
| 0.4 | Crear proyecto Vercel vinculado al repo | Deploy automático configurado | 10 min | Pendiente |
| 0.5 | Elegir servicio de formulario (Formspree/EmailJS) y crear cuenta | Endpoint de formulario | 10 min | Pendiente |

**Criterio de salida:** repo creado, Vercel vinculado y servicio de formulario elegido. No se crea proyecto de base de datos.

---

## Fase 1: Setup del proyecto y datos de ejemplo (Día 1)

| # | Tarea | Entregable | Tiempo estimado | Estado |
|---|-------|------------|-----------------|-------------|
| 1.1 | Inicializar Vite + React + Tailwind | Proyecto corriendo localmente | 30 min | Hecho |
| 1.2 | Instalar y configurar Shadcn/UI (init + componentes base) | Button, Card, Dialog e Input disponibles | 30 min | Hecho (componentes copiados en `src/components/ui/`) |
| 1.3 | Definir las 9 colecciones de ejemplo en `src/data/seed*.js` | Datos listos para leer | 1h | Hecho |
| 1.4 | Insertar datos ficticios para las 3 demos | Arreglos con nombres y fechas coherentes | 1.5h | Hecho |
| 1.5 | Configurar RLS: SELECT público para `anon` en todas las tablas | Políticas activas | 30 min | No aplica (A-10) |
| 1.6 | Crear `useLocalStorage` y usarlo en las tres demos | Guardado local configurado | 15 min | Hecho |
| 1.7 | Probar la lectura de un arreglo de ejemplo en el navegador | Datos llegando a la interfaz | 15 min | Hecho |
| 1.8 | Arranque del programa (`npm run dev`) sin backend local | Servidor de desarrollo corriendo en `localhost` | 20 min | Hecho; build y cuatro rutas verificados el 22-nov-2026 |

**Criterio de salida:** `npm run dev` funciona, las demos muestran datos de ejemplo y guardan cambios en el navegador.

**Riesgo:** si el navegador bloquea `localStorage`, las demos siguen mostrando los arreglos de ejemplo, pero no recuerdan los cambios.

---

## Fase 2: Landing page (Día 2)

| # | Tarea | Entregable | Tiempo estimado | Estado |
|---|-------|------------|-----------------|-------------|
| 2.1 | Crear layout base con encabezado y pie propios | Estructura visual | 1h | Hecho |
| 2.2 | Hero: título, subtítulo, CTA | Sección hero funcional | 45 min | Hecho |
| 2.3 | Sección de 3 enlaces a demos | Demos navegables | 1h | Hecho |
| 2.4 | Secciones de problemas, servicios y proceso | Contenido de negocio | 30 min | Hecho |
| 2.5 | Formulario de contacto (nombre, email, mensaje) con envío a Formspree | Formulario funcional | 45 min | Pendiente |
| 2.6 | Responsive: ajustar en 375px, 768px, 1024px | Sin overflow ni texto cortado | 1h | Hecho; queda la revisión registrada de M-011 |

**Criterio de salida:** landing completa, responsive, formulario envía y confirma.

---

## Fase 3: Demo CRM (Día 3)

| # | Tarea | Entregable | Tiempo estimado | Estado |
|---|-------|------------|-----------------|-------------|
| 3.1 | Crear ruta `/crm` | Página accesible | 15 min | Hecho |
| 3.2 | Leer etapas, contactos y oportunidades desde `localStorage` | Datos cargando | 30 min | Hecho |
| 3.3 | Vista de pipeline: columnas por etapa, tarjetas de deal | Tablero visual | 2h | Hecho |
| 3.4 | Cuadro de detalle y edición con `Dialog` | Interacción funcional | 1h | Hecho desde «Editar»; queda el clic en la tarjeta (M-006) |
| 3.5 | Botón «Volver al portafolio» y «Reiniciar demo» | Navegación y reinicio | 10 min | Hecho |
| 3.6 | Responsive: pipeline en móvil (stack) | Usable en móvil | 45 min | Hecho |

**Criterio de salida:** demo CRM muestra datos de ejemplo locales, navegable, responsive.

**Simplificación:** no hay drag-and-drop. Las tarjetas se mueven con flechas; el valor está en ver el pipeline.

---

## Fase 4: Demo TaskFlow (Día 4)

| # | Tarea | Entregable | Tiempo estimado | Estado |
|---|-------|------------|-----------------|-------------|
| 4.1 | Crear ruta `/taskflow` | Página accesible | 15 min | Hecho |
| 4.2 | Leer proyectos, tareas y subtareas desde `localStorage` | Datos cargando | 30 min | Hecho |
| 4.3 | Vista de proyectos con lista de tareas | Estructura visual | 1.5h | Hecho |
| 4.4 | Expansión de tarea para ver y editar subtareas | Checklist visible | 1h | Hecho |
| 4.5 | Indicadores de estado (badges: Pendiente, En progreso, Hecho) | UI clara | 30 min | Hecho |
| 4.6 | Responsive | Usable en móvil | 30 min | Hecho |

**Criterio de salida:** demo TaskFlow muestra proyectos, tareas y subtareas de ejemplo, con cambios guardados en el navegador.

---

## Fase 5: Demo BarberShop (Día 5)

| # | Tarea | Entregable | Tiempo estimado | Estado |
|---|-------|------------|-----------------|-------------|
| 5.1 | Crear ruta `/barbershop` | Página accesible | 15 min | Hecho |
| 5.2 | Leer servicios, barberos y citas desde `localStorage` | Datos cargando | 30 min | Hecho |
| 5.3 | Vista de calendario semanal (lista por día) | Calendario visual | 2h | Hecho |
| 5.4 | Tarjetas de cita con cliente, servicio, hora, barbero | Información clara | 30 min | Hecho |
| 5.5 | Filtro por barbero (opcional, si el tiempo permite) | Selector funcional | 30 min | Pendiente |
| 5.6 | Responsive: calendario en móvil (lista vertical) | Usable en móvil | 30 min | Hecho |

**Criterio de salida:** demo BarberShop muestra calendario con citas de ejemplo.

**Simplificación:** se usa una lista agrupada por día en lugar del grid semanal.

---

## Fase 6: Pulido y deploy (Día 6)

| # | Tarea | Entregable | Tiempo estimado | Estado |
|---|-------|------------|-----------------|-------------|
| 6.1 | Revisar responsive en 375px, 768px, 1024px en las 3 demos + landing | Sin overflow ni texto cortado | 1h | Pendiente |
| 6.2 | Verificar consola sin errores en producción | Consola limpia | 30 min | Pendiente |
| 6.3 | Añadir favicon y meta tags (título, descripción, og:image) | SEO básico | 30 min | Parcial: favicon y meta básicos; falta og:image |
| 6.4 | Probar formulario de contacto en producción | Confirmación recibida | 15 min | Pendiente |
| 6.5 | Configurar dominio (si aplica) o usar `.vercel.app` | URL final | 15 min | Pendiente |
| 6.6 | Deploy final y prueba en móvil real | Sitio funcional | 30 min | Pendiente |

**Criterio de salida:** sitio en producción, sin errores, formulario funcional.

---

## Fase 7: Post-lanzamiento (opcional)

| # | Tarea | Cuándo | Estado |
|---|-------|--------|--------|
| 7.1 | Añadir demos MttoMex y EdMex | v2 | Pendiente |
| 7.2 | Implementar modo sandbox (escritura temporal) | v2 | Pendiente |
| 7.3 | Añadir analytics (Vercel Analytics o Plausible) | v1.1 | Pendiente |

---

## Dependencias críticas

Fase 0 → Fase 1 → Fase 2 (landing)  
→ Fase 3 (CRM)  
→ Fase 4 (TaskFlow)  
→ Fase 5 (BarberShop)  
Fase 2,3,4,5 → Fase 6 (pulido y deploy)

- No puedes empezar Fase 2 sin Fase 1 (setup de React y datos de ejemplo).
- Las demos (Fases 3-5) son independientes entre sí; puedes paralelizarlas si tienes ayuda.
- Fase 6 requiere que al menos la landing y una demo estén listas.

---

## Riesgos del plan

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Shadcn/UI requiere más configuración de la esperada | Media | Medio | Dedicar Fase 1 completa; si se atasca, usar componentes copiados |
| `localStorage` bloqueado o limpiado | Media | Bajo | Mostrar `DemoNotice`, ofrecer «Reiniciar demo» y usar los arreglos de ejemplo como respaldo |
| Datos ficticios poco realistas | Baja | Medio | Cuidar nombres y fechas en `src/data/seed*.js` |
| Grid de calendario en BarberShop es complejo | Media | Bajo | Fallback a lista por día |

---

## Recursos necesarios

- Cuenta Vercel (Free/Hobby)
- Cuenta GitHub
- Cuenta Formspree (Free tier suficiente)
- Node.js instalado localmente
- Editor (VS Code recomendado)

No se necesita cuenta de Supabase ni configuración de base de datos.
