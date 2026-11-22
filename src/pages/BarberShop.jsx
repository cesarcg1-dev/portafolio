import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "@/lib/useLocalStorage";
import { uid } from "@/lib/utils";
import {
  seedServices,
  seedBarbers,
  seedAppointments,
} from "@/data/seedBarbershop";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input, Select } from "@/components/ui/input";
import { DemoNotice } from "@/components/shared/DemoNotice";

const statusLabel = {
  confirmed: "Confirmada",
  pending: "Pendiente",
  cancelled: "Cancelada",
  completed: "Completada",
};
const statusVariant = {
  confirmed: "progress",
  pending: "pending",
  cancelled: "danger",
  completed: "done",
};

export default function BarberShop() {
  const [services] = useLocalStorage("chac_bs_services", seedServices);
  const [barbers] = useLocalStorage("chac_bs_barbers", seedBarbers);
  const [appointments, setAppointments, resetAppointments] = useLocalStorage(
    "chac_bs_appointments",
    seedAppointments,
  );

  const [form, setForm] = useState({
    client_name: "",
    service_id: seedServices[0].id,
    barber_id: seedBarbers[0].id,
    date: new Date().toISOString().slice(0, 10),
    time: "10:00",
  });

  const add = () => {
    if (!form.client_name.trim()) return;
    const datetime = new Date(`${form.date}T${form.time}:00`).toISOString();
    setAppointments([
      ...appointments,
      {
        id: uid(),
        service_id: form.service_id,
        barber_id: form.barber_id,
        client_name: form.client_name.trim(),
        datetime,
        status: "confirmed",
      },
    ]);
    setForm({ ...form, client_name: "" });
  };

  const cycleStatus = (id) => {
    const order = ["pending", "confirmed", "completed", "cancelled"];
    setAppointments(
      appointments.map((a) => {
        if (a.id !== id) return a;
        return {
          ...a,
          status: order[(order.indexOf(a.status) + 1) % order.length],
        };
      }),
    );
  };

  const remove = (id) =>
    setAppointments(appointments.filter((a) => a.id !== id));

  const grouped = appointments
    .slice()
    .sort((a, b) => new Date(a.datetime) - new Date(b.datetime))
    .reduce((acc, a) => {
      const key = new Date(a.datetime).toLocaleDateString("es-MX", {
        weekday: "long",
        day: "numeric",
        month: "short",
      });
      acc[key] = acc[key] || [];
      acc[key].push(a);
      return acc;
    }, {});

  const serviceById = (id) => services.find((s) => s.id === id);
  const barberById = (id) => barbers.find((b) => b.id === id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <Link to="/" className="text-sm text-slate-500 hover:text-slate-900">
          ← Volver al portafolio
        </Link>
        <button
          onClick={resetAppointments}
          className="text-xs text-slate-400 hover:text-slate-700"
        >
          Reiniciar demo
        </button>
      </div>

      <div className="mb-6">
        <Badge className="mb-2">Demo · Servicios</Badge>
        <h1 className="text-3xl font-bold">BarberShop</h1>
        <p className="text-slate-600 mt-2">
          Agenda clara para el barbero y para el cliente. Puedes agregar y
          cambiar citas.
        </p>
      </div>

      <DemoNotice />

      <Card className="mb-6">
        <CardContent className="p-4 grid sm:grid-cols-6 gap-2">
          <Input
            className="sm:col-span-2"
            placeholder="Cliente"
            value={form.client_name}
            onChange={(e) => setForm({ ...form, client_name: e.target.value })}
          />
          <Select
            value={form.service_id}
            onChange={(e) => setForm({ ...form, service_id: e.target.value })}
          >
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </Select>
          <Select
            value={form.barber_id}
            onChange={(e) => setForm({ ...form, barber_id: e.target.value })}
          >
            {barbers.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </Select>
          <Input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
          <div className="flex gap-2">
            <Input
              type="time"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
            />
            <Button onClick={add}>+</Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {Object.entries(grouped).map(([day, appts]) => (
          <div key={day}>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3 capitalize">
              {day}
            </h2>
            <div className="space-y-2">
              {appts.map((a) => {
                const time = new Date(a.datetime).toLocaleTimeString("es-MX", {
                  hour: "2-digit",
                  minute: "2-digit",
                });
                return (
                  <Card key={a.id}>
                    <CardContent className="p-4 flex items-center justify-between gap-3">
                      <div>
                        <p className="font-medium">{a.client_name}</p>
                        <p className="text-sm text-slate-500">
                          {serviceById(a.service_id)?.name} ·{" "}
                          {barberById(a.barber_id)?.name}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="font-semibold">{time}</p>
                        <button onClick={() => cycleStatus(a.id)}>
                          <Badge variant={statusVariant[a.status]}>
                            {statusLabel[a.status]}
                          </Badge>
                        </button>
                        <button
                          onClick={() => remove(a.id)}
                          className="text-slate-300 hover:text-red-600 text-lg leading-none"
                        >
                          ×
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
        {Object.keys(grouped).length === 0 && (
          <p className="text-slate-400 text-center py-8">
            Sin citas. Agrega una arriba.
          </p>
        )}
      </div>

      <div className="mt-12 p-6 bg-slate-50 rounded-lg border border-slate-200">
        <h2 className="font-semibold mb-2">¿Sigues agendando por WhatsApp?</h2>
        <p className="text-sm text-slate-600 mb-4">
          Una agenda propia reduce el ida y vuelta de mensajes.
        </p>
        <Link to="/#contacto">
          <Button>Hablemos</Button>
        </Link>
      </div>
    </div>
  );
}
