export const seedProjects = [
  {
    id: "p1",
    name: "Rediseño de sitio web",
    description:
      "Actualización de la imagen y estructura del sitio corporativo",
    status: "active",
  },
  {
    id: "p2",
    name: "App móvil de pedidos",
    description: "Desarrollo de la primera versión para clientes frecuentes",
    status: "active",
  },
];

export const seedTasks = [
  {
    id: "t1",
    project_id: "p1",
    title: "Wireframes de la homepage",
    status: "done",
    assignee_name: "Diana",
    due_date: "2026-11-18",
  },
  {
    id: "t2",
    project_id: "p1",
    title: "Diseño de componentes UI",
    status: "in_progress",
    assignee_name: "Diana",
    due_date: "2026-11-23",
  },
  {
    id: "t3",
    project_id: "p1",
    title: "Maquetación responsive",
    status: "pending",
    assignee_name: "Luis",
    due_date: "2026-11-26",
  },
  {
    id: "t4",
    project_id: "p1",
    title: "Integración con CMS",
    status: "pending",
    assignee_name: "Luis",
    due_date: "2026-11-29",
  },
  {
    id: "t5",
    project_id: "p2",
    title: "Definir flujo de usuario",
    status: "done",
    assignee_name: "Karla",
    due_date: "2026-11-16",
  },
  {
    id: "t6",
    project_id: "p2",
    title: "Pantallas de catálogo",
    status: "in_progress",
    assignee_name: "Karla",
    due_date: "2026-11-22",
  },
  {
    id: "t7",
    project_id: "p2",
    title: "Carrito de compras",
    status: "pending",
    assignee_name: "Roberto",
    due_date: "2026-11-27",
  },
  {
    id: "t8",
    project_id: "p2",
    title: "Pruebas en dispositivo real",
    status: "pending",
    assignee_name: "Roberto",
    due_date: "2026-12-01",
  },
];

export const seedSubtasks = [
  {
    id: "s1",
    task_id: "t1",
    title: "Revisar referencias visuales",
    done: true,
  },
  { id: "s2", task_id: "t1", title: "Aprobar con cliente", done: true },
  {
    id: "s3",
    task_id: "t2",
    title: "Diseñar botones primarios y secundarios",
    done: true,
  },
  {
    id: "s4",
    task_id: "t2",
    title: "Diseñar tarjetas de contenido",
    done: false,
  },
  { id: "s5", task_id: "t3", title: "Definir breakpoints", done: false },
  { id: "s6", task_id: "t4", title: "Configurar entorno local", done: true },
  { id: "s7", task_id: "t4", title: "Conectar API de contenidos", done: false },
  { id: "s8", task_id: "t5", title: "Documentar flujo principal", done: true },
];
