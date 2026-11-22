const today = new Date();
const day = (offset, hour, minute = 0) => {
  const d = new Date(today);
  d.setDate(d.getDate() + offset);
  d.setHours(hour, minute, 0, 0);
  return d.toISOString();
};

export const seedServices = [
  { id: "srv1", name: "Corte clásico", duration_min: 30, price: 150 },
  { id: "srv2", name: "Corte + barba", duration_min: 45, price: 220 },
  { id: "srv3", name: "Afeitado", duration_min: 20, price: 100 },
  { id: "srv4", name: "Diseño de barba", duration_min: 25, price: 130 },
];

export const seedBarbers = [
  { id: "b1", name: "Luis García", active: true },
  { id: "b2", name: "Pedro Martínez", active: true },
  { id: "b3", name: "José Ramírez", active: true },
];

export const seedAppointments = [
  {
    id: "a1",
    service_id: "srv1",
    barber_id: "b1",
    client_name: "Juan Pérez",
    datetime: day(0, 9),
    status: "confirmed",
  },
  {
    id: "a2",
    service_id: "srv2",
    barber_id: "b2",
    client_name: "Carlos López",
    datetime: day(0, 10, 30),
    status: "confirmed",
  },
  {
    id: "a3",
    service_id: "srv3",
    barber_id: "b1",
    client_name: "Miguel Torres",
    datetime: day(0, 12),
    status: "completed",
  },
  {
    id: "a4",
    service_id: "srv1",
    barber_id: "b3",
    client_name: "Andrés Silva",
    datetime: day(0, 13),
    status: "confirmed",
  },
  {
    id: "a5",
    service_id: "srv4",
    barber_id: "b2",
    client_name: "Roberto Díaz",
    datetime: day(1, 9),
    status: "confirmed",
  },
  {
    id: "a6",
    service_id: "srv2",
    barber_id: "b1",
    client_name: "Fernando Ríos",
    datetime: day(1, 11),
    status: "pending",
  },
  {
    id: "a7",
    service_id: "srv1",
    barber_id: "b3",
    client_name: "Sergio Vega",
    datetime: day(1, 16),
    status: "confirmed",
  },
  {
    id: "a8",
    service_id: "srv3",
    barber_id: "b2",
    client_name: "Daniela Cruz",
    datetime: day(2, 10),
    status: "confirmed",
  },
  {
    id: "a9",
    service_id: "srv1",
    barber_id: "b1",
    client_name: "Emilio Castro",
    datetime: day(2, 12),
    status: "confirmed",
  },
  {
    id: "a10",
    service_id: "srv4",
    barber_id: "b3",
    client_name: "Raúl Mendoza",
    datetime: day(3, 9),
    status: "pending",
  },
  {
    id: "a11",
    service_id: "srv2",
    barber_id: "b2",
    client_name: "Iván Torres",
    datetime: day(3, 14),
    status: "confirmed",
  },
  {
    id: "a12",
    service_id: "srv1",
    barber_id: "b1",
    client_name: "Óscar Luna",
    datetime: day(4, 11),
    status: "confirmed",
  },
];
