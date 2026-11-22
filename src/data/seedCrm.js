export const seedStages = [
  { id: "lead", name: "Lead", order_index: 1 },
  { id: "contactado", name: "Contactado", order_index: 2 },
  { id: "propuesta", name: "Propuesta", order_index: 3 },
  { id: "cerrado", name: "Cerrado", order_index: 4 },
];

export const seedContacts = [
  {
    id: "c1",
    name: "Laura Méndez",
    company: "Distribuidora del Norte",
    email: "laura@distnorte.mx",
    phone: "8112345678",
  },
  {
    id: "c2",
    name: "Carlos Ruiz",
    company: "Taller Ruiz e Hijos",
    email: "carlos@tallerruiz.com",
    phone: "8198765432",
  },
  {
    id: "c3",
    name: "Ana Sofía Torres",
    company: "Clínica Dental Sonrisa",
    email: "ana@sonrisadental.mx",
    phone: "8145678901",
  },
  {
    id: "c4",
    name: "Miguel Ángel Flores",
    company: "Constructora Flores",
    email: "miguel@conflores.com",
    phone: "8123456789",
  },
  {
    id: "c5",
    name: "Patricia Vega",
    company: "Estética Bella Vista",
    email: "patricia@bellavista.mx",
    phone: "8176543210",
  },
  {
    id: "c6",
    name: "Jorge Domínguez",
    company: "Domínguez Abogados",
    email: "jorge@dominguezlegal.mx",
    phone: "8134567890",
  },
];

export const seedDeals = [
  {
    id: "d1",
    contact_id: "c1",
    title: "Sistema de inventario",
    value: 25000,
    stage_id: "lead",
  },
  {
    id: "d2",
    contact_id: "c2",
    title: "App de citas para taller",
    value: 18000,
    stage_id: "contactado",
  },
  {
    id: "d3",
    contact_id: "c3",
    title: "Digitalización de expedientes",
    value: 32000,
    stage_id: "propuesta",
  },
  {
    id: "d4",
    contact_id: "c4",
    title: "Control de obra",
    value: 45000,
    stage_id: "contactado",
  },
  {
    id: "d5",
    contact_id: "c5",
    title: "Agenda online para sucursales",
    value: 15000,
    stage_id: "lead",
  },
  {
    id: "d6",
    contact_id: "c6",
    title: "Portal de clientes",
    value: 28000,
    stage_id: "propuesta",
  },
  {
    id: "d7",
    contact_id: "c1",
    title: "Mantenimiento anual",
    value: 12000,
    stage_id: "cerrado",
  },
  {
    id: "d8",
    contact_id: "c3",
    title: "Recordatorios automáticos",
    value: 8000,
    stage_id: "cerrado",
  },
];
