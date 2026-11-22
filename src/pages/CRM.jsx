import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "@/lib/useLocalStorage";
import { uid } from "@/lib/utils";
import { seedStages, seedContacts, seedDeals } from "@/data/seedCrm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input, Select } from "@/components/ui/input";
import { Dialog } from "@/components/ui/dialog";
import { DemoNotice } from "@/components/shared/DemoNotice";

export default function CRM() {
  const [stages] = useLocalStorage("chac_crm_stages", seedStages);
  const [contacts] = useLocalStorage("chac_crm_contacts", seedContacts);
  const [deals, setDeals, resetDeals] = useLocalStorage(
    "chac_crm_deals",
    seedDeals,
  );

  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ contact_id: "", title: "", value: "" });

  const openNew = () => {
    setEditing("new");
    setForm({ contact_id: contacts[0]?.id || "", title: "", value: "" });
  };

  const openEdit = (deal) => {
    setEditing(deal.id);
    setForm({
      contact_id: deal.contact_id,
      title: deal.title,
      value: String(deal.value),
    });
  };

  const save = () => {
    if (!form.title.trim()) return;
    if (editing === "new") {
      setDeals([
        ...deals,
        {
          id: uid(),
          contact_id: form.contact_id,
          title: form.title.trim(),
          value: Number(form.value) || 0,
          stage_id: stages[0].id,
        },
      ]);
    } else {
      setDeals(
        deals.map((d) =>
          d.id === editing
            ? {
                ...d,
                contact_id: form.contact_id,
                title: form.title.trim(),
                value: Number(form.value) || 0,
              }
            : d,
        ),
      );
    }
    setEditing(null);
  };

  const move = (deal, direction) => {
    const idx = stages.findIndex((s) => s.id === deal.stage_id);
    const nextIdx = Math.max(0, Math.min(stages.length - 1, idx + direction));
    setDeals(
      deals.map((d) =>
        d.id === deal.id ? { ...d, stage_id: stages[nextIdx].id } : d,
      ),
    );
  };

  const remove = (id) => setDeals(deals.filter((d) => d.id !== id));

  const contactById = (id) => contacts.find((c) => c.id === id);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <Link to="/" className="text-sm text-slate-500 hover:text-slate-900">
          ← Volver al portafolio
        </Link>
        <button
          onClick={resetDeals}
          className="text-xs text-slate-400 hover:text-slate-700"
        >
          Reiniciar demo
        </button>
      </div>

      <div className="mb-6">
        <Badge className="mb-2">Demo · Ventas</Badge>
        <h1 className="text-3xl font-bold">CRM</h1>
        <p className="text-slate-600 mt-2">
          Cada oportunidad tiene una etapa. Muévelas con las flechas o edítalas.
        </p>
      </div>

      <DemoNotice />

      <div className="mb-4">
        <Button onClick={openNew}>+ Nueva oportunidad</Button>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {stages.map((stage) => {
          const stageDeals = deals.filter((d) => d.stage_id === stage.id);
          const total = stageDeals.reduce(
            (sum, d) => sum + Number(d.value || 0),
            0,
          );
          return (
            <div key={stage.id} className="bg-slate-50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-3 px-1">
                <h2 className="font-semibold text-sm uppercase tracking-wide text-slate-700">
                  {stage.name}
                </h2>
                <span className="text-xs text-slate-500">
                  {stageDeals.length}
                </span>
              </div>
              <div className="space-y-2">
                {stageDeals.map((deal) => {
                  const contact = contactById(deal.contact_id);
                  return (
                    <Card key={deal.id}>
                      <CardHeader className="p-3 pb-1">
                        <CardTitle className="text-sm">{deal.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-3 pt-1">
                        <p className="text-xs text-slate-500">
                          {contact?.company || "Sin empresa"}
                        </p>
                        <p className="text-sm font-semibold mt-1">
                          ${Number(deal.value).toLocaleString("es-MX")}
                        </p>
                        <div className="flex items-center gap-1 mt-2">
                          <button
                            onClick={() => move(deal, -1)}
                            className="text-xs text-slate-400 hover:text-slate-800 px-1"
                          >
                            ←
                          </button>
                          <button
                            onClick={() => move(deal, 1)}
                            className="text-xs text-slate-400 hover:text-slate-800 px-1"
                          >
                            →
                          </button>
                          <button
                            onClick={() => openEdit(deal)}
                            className="ml-auto text-xs text-slate-400 hover:text-slate-800"
                          >
                            Editar
                          </button>
                          <button
                            onClick={() => remove(deal.id)}
                            className="text-xs text-slate-300 hover:text-red-600"
                          >
                            ×
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
                {stageDeals.length === 0 && (
                  <p className="text-xs text-slate-400 px-1 py-4 text-center">
                    Sin oportunidades
                  </p>
                )}
              </div>
              <div className="mt-3 px-1 pt-2 border-t border-slate-200 text-xs text-slate-500">
                Total: ${total.toLocaleString("es-MX")}
              </div>
            </div>
          );
        })}
      </div>

      <Dialog
        open={!!editing}
        onClose={() => setEditing(null)}
        title={editing === "new" ? "Nueva oportunidad" : "Editar oportunidad"}
      >
        <div className="space-y-3">
          <Select
            value={form.contact_id}
            onChange={(e) => setForm({ ...form, contact_id: e.target.value })}
          >
            {contacts.map((c) => (
              <option key={c.id} value={c.id}>
                {c.company} — {c.name}
              </option>
            ))}
          </Select>
          <Input
            placeholder="Título"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <Input
            type="number"
            placeholder="Valor"
            value={form.value}
            onChange={(e) => setForm({ ...form, value: e.target.value })}
          />
          <div className="flex gap-2 pt-2">
            <Button onClick={save}>Guardar</Button>
            <Button variant="ghost" onClick={() => setEditing(null)}>
              Cancelar
            </Button>
          </div>
        </div>
      </Dialog>

      <div className="mt-12 p-6 bg-slate-50 rounded-lg border border-slate-200">
        <h2 className="font-semibold mb-2">
          ¿Pierdes oportunidades por falta de seguimiento?
        </h2>
        <p className="text-sm text-slate-600 mb-4">
          Un pipeline claro evita que un cliente potencial se enfríe.
        </p>
        <Link to="/#contacto">
          <Button>Hablemos</Button>
        </Link>
      </div>
    </div>
  );
}
