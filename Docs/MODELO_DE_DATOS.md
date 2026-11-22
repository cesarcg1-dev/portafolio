# ChacDev Portafolio — Modelo de datos

**Versión:** 1.1 · **Fecha:** 22 de noviembre de 2026 · **Estado:** describe los arreglos de `src/data/` y las claves de `localStorage` de esta copia

## Índice

- [1. Almacenamiento](#1-almacenamiento)
- [2. CRM](#2-crm)
- [3. TaskFlow](#3-taskflow)
- [4. BarberShop](#4-barbershop)
- [5. Persistencia y límites](#5-persistencia-y-límites)
- [6. Datos de ejemplo](#6-datos-de-ejemplo)

## 1. Almacenamiento

No hay base de datos. Cada demo define sus datos de ejemplo en un archivo de `src/data/` y usa `src/lib/useLocalStorage.js` para guardar los cambios en el navegador.

| Demo | Archivo de ejemplo | Claves de `localStorage` |
|---|---|---|
| CRM | `src/data/seedCrm.js` | `chac_crm_stages`, `chac_crm_contacts`, `chac_crm_deals` |
| TaskFlow | `src/data/seedTaskflow.js` | `chac_tf_projects`, `chac_tf_tasks`, `chac_tf_subtasks` |
| BarberShop | `src/data/seedBarbershop.js` | `chac_bs_services`, `chac_bs_barbers`, `chac_bs_appointments` |

Son nueve colecciones, tres por demo. No hay esquema SQL, migraciones, RLS, índices ni tipos generados: los campos son propiedades de objetos JavaScript. Los identificadores son textos cortos (`c1`, `t2`, `srv3`), no UUID.

## 2. CRM

### `seedStages` → `chac_crm_stages`

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | texto | `lead`, `contactado`, `propuesta` o `cerrado` |
| `name` | texto | Nombre visible de la etapa |
| `order_index` | número | Orden de la etapa en el arreglo |

La interfaz muestra las etapas en el orden del arreglo; `order_index` no se usa para ordenar en tiempo de ejecución.

### `seedContacts` → `chac_crm_contacts`

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | texto | `c1` a `c6` |
| `name` | texto | Nombre del contacto |
| `company` | texto | Empresa |
| `email` | texto | Correo |
| `phone` | texto | Teléfono |

### `seedDeals` → `chac_crm_deals`

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | texto | `d1` a `d8`; los nuevos usan `uid()` |
| `contact_id` | texto | Referencia a un contacto; puede quedar vacío |
| `title` | texto | Título de la oportunidad |
| `value` | número | Valor estimado |
| `stage_id` | texto | Etapa actual; al crear se usa la primera |

Al borrar un contacto no hay acción en cascada, pero la interfaz no permite borrar contactos.

## 3. TaskFlow

### `seedProjects` → `chac_tf_projects`

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | texto | `p1` o `p2` |
| `name` | texto | Nombre del proyecto |
| `description` | texto | Descripción |
| `status` | texto | `active` en los datos de ejemplo |

### `seedTasks` → `chac_tf_tasks`

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | texto | `t1` a `t8`; los nuevos usan `uid()` |
| `project_id` | texto | Proyecto al que pertenece |
| `title` | texto | Título de la tarea |
| `status` | texto | `pending`, `in_progress` o `done` |
| `assignee_name` | texto | Responsable |
| `due_date` | texto | Fecha fija `AAAA-MM-DD` en el ejemplo; se guarda, pero no se muestra |

### `seedSubtasks` → `chac_tf_subtasks`

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | texto | `s1` a `s8`; las nuevas usan `uid()` |
| `task_id` | texto | Tarea a la que pertenece |
| `title` | texto | Texto de la subtarea |
| `done` | booleano | Si está terminada |

Al borrar una tarea, el código también quita sus subtareas del arreglo `chac_tf_subtasks`.

## 4. BarberShop

### `seedServices` → `chac_bs_services`

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | texto | `srv1` a `srv4` |
| `name` | texto | Nombre del servicio |
| `duration_min` | número | Duración en minutos |
| `price` | número | Precio |

### `seedBarbers` → `chac_bs_barbers`

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | texto | `b1` a `b3` |
| `name` | texto | Nombre del barbero |
| `active` | booleano | Si está activo |

### `seedAppointments` → `chac_bs_appointments`

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | texto | `a1` a `a12`; las nuevas usan `uid()` |
| `service_id` | texto | Servicio elegido |
| `barber_id` | texto | Barbero elegido |
| `client_name` | texto | Nombre del cliente |
| `datetime` | texto | Fecha y hora en formato ISO |
| `status` | texto | `confirmed`, `pending`, `completed` o `cancelled` |

Las citas de ejemplo se generan al cargar la página con desplazamientos de 0 a 4 días desde la fecha actual, a horas fijas. Por eso las fechas cambian cada día, aunque los nombres y las horas sean siempre los mismos.

## 5. Persistencia y límites

- `useLocalStorage` guarda el arreglo completo bajo la clave indicada cada vez que cambia.
- Si la clave no existe o el valor no se puede interpretar, se usa el arreglo de `src/data/`.
- «Reiniciar demo» elimina la clave y vuelve a cargar el arreglo de ejemplo.
- No hay índices, relaciones forzadas ni reglas de acceso: las referencias entre colecciones se resuelven en los componentes con `find()`.
- Los datos son propios de cada navegador; no hay sincronización ni respaldo en servidor.
- En TaskFlow, borrar una tarea también borra sus subtareas; en las otras demos no hay borrado en cascada porque sólo se editan las colecciones principales.

## 6. Datos de ejemplo

| Demo | Colecciones | Cantidades |
|---|---|---|
| CRM | etapas / contactos / oportunidades | 4 / 6 / 8 |
| TaskFlow | proyectos / tareas / subtareas | 2 / 8 / 8 |
| BarberShop | servicios / barberos / citas | 4 / 3 / 12 |

Los datos son ficticios y están fuera del alcance de cualquier negocio real. Las fechas de TaskFlow están escritas en el archivo de ejemplo; las de BarberShop se calculan al cargar la app.
