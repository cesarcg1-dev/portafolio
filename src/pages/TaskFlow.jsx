import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "@/lib/useLocalStorage";
import { uid } from "@/lib/utils";
import { seedProjects, seedTasks, seedSubtasks } from "@/data/seedTaskflow";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input, Select } from "@/components/ui/input";
import { Dialog } from "@/components/ui/dialog";
import { DemoNotice } from "@/components/shared/DemoNotice";

const statusLabel = {
  pending: "Pendiente",
  in_progress: "En progreso",
  done: "Hecho",
};
const statusVariant = {
  pending: "pending",
  in_progress: "progress",
  done: "done",
};

export default function TaskFlow() {
  const [projects, setProjects, resetProjects] = useLocalStorage(
    "chac_tf_projects",
    seedProjects,
  );
  const [tasks, setTasks, resetTasks] = useLocalStorage(
    "chac_tf_tasks",
    seedTasks,
  );
  const [subtasks, setSubtasks, resetSubtasks] = useLocalStorage(
    "chac_tf_subtasks",
    seedSubtasks,
  );

  const [expandedTask, setExpandedTask] = useState(null);
  const [newTaskFor, setNewTaskFor] = useState(null);
  const [taskForm, setTaskForm] = useState({ title: "", assignee_name: "" });
  const [subtaskForm, setSubtaskForm] = useState({ task_id: null, title: "" });

  const resetAll = () => {
    resetProjects();
    resetTasks();
    resetSubtasks();
  };

  const addTask = (projectId) => {
    if (!taskForm.title.trim()) return;
    setTasks([
      ...tasks,
      {
        id: uid(),
        project_id: projectId,
        title: taskForm.title.trim(),
        status: "pending",
        assignee_name: taskForm.assignee_name.trim() || "Sin asignar",
        due_date: null,
      },
    ]);
    setTaskForm({ title: "", assignee_name: "" });
    setNewTaskFor(null);
  };

  const cycleStatus = (taskId) => {
    const order = ["pending", "in_progress", "done"];
    setTasks(
      tasks.map((t) => {
        if (t.id !== taskId) return t;
        const next = order[(order.indexOf(t.status) + 1) % order.length];
        return { ...t, status: next };
      }),
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
    setSubtasks(subtasks.filter((s) => s.task_id !== taskId));
  };

  const toggleSubtask = (subId) => {
    setSubtasks(
      subtasks.map((s) => (s.id === subId ? { ...s, done: !s.done } : s)),
    );
  };

  const addSubtask = () => {
    if (!subtaskForm.title.trim() || !subtaskForm.task_id) return;
    setSubtasks([
      ...subtasks,
      {
        id: uid(),
        task_id: subtaskForm.task_id,
        title: subtaskForm.title.trim(),
        done: false,
      },
    ]);
    setSubtaskForm({ task_id: null, title: "" });
  };

  const deleteSubtask = (subId) => {
    setSubtasks(subtasks.filter((s) => s.id !== subId));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <Link to="/" className="text-sm text-slate-500 hover:text-slate-900">
          ← Volver al portafolio
        </Link>
        <button
          onClick={resetAll}
          className="text-xs text-slate-400 hover:text-slate-700"
        >
          Reiniciar demo
        </button>
      </div>

      <div className="mb-6">
        <Badge className="mb-2">Demo · Operaciones</Badge>
        <h1 className="text-3xl font-bold">TaskFlow</h1>
        <p className="text-slate-600 mt-2">
          Proyectos, tareas y subtareas en un solo lugar. Todo es editable.
        </p>
      </div>

      <DemoNotice />

      <div className="space-y-6">
        {projects.map((project) => {
          const projectTasks = tasks.filter((t) => t.project_id === project.id);
          return (
            <Card key={project.id}>
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="divide-y divide-slate-100">
                  {projectTasks.map((task) => (
                    <li key={task.id} className="py-3">
                      <div className="flex items-center justify-between gap-3">
                        <button
                          onClick={() =>
                            setExpandedTask(
                              expandedTask === task.id ? null : task.id,
                            )
                          }
                          className="text-left flex-1"
                        >
                          <p className="font-medium">{task.title}</p>
                          <p className="text-sm text-slate-500">
                            {task.assignee_name}
                          </p>
                        </button>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => cycleStatus(task.id)}
                            title="Cambiar estado"
                          >
                            <Badge variant={statusVariant[task.status]}>
                              {statusLabel[task.status]}
                            </Badge>
                          </button>
                          <button
                            onClick={() => deleteTask(task.id)}
                            className="text-slate-300 hover:text-red-600 text-lg leading-none"
                          >
                            ×
                          </button>
                        </div>
                      </div>

                      {expandedTask === task.id && (
                        <div className="mt-3 pl-4 border-l-2 border-slate-200">
                          <ul className="space-y-1 mb-2">
                            {subtasks
                              .filter((s) => s.task_id === task.id)
                              .map((st) => (
                                <li
                                  key={st.id}
                                  className="flex items-center gap-2 text-sm"
                                >
                                  <button
                                    onClick={() => toggleSubtask(st.id)}
                                    className={
                                      st.done
                                        ? "text-emerald-600"
                                        : "text-slate-400"
                                    }
                                  >
                                    {st.done ? "✓" : "○"}
                                  </button>
                                  <span
                                    className={
                                      st.done
                                        ? "line-through text-slate-400"
                                        : "text-slate-700"
                                    }
                                  >
                                    {st.title}
                                  </span>
                                  <button
                                    onClick={() => deleteSubtask(st.id)}
                                    className="ml-auto text-slate-300 hover:text-red-600"
                                  >
                                    ×
                                  </button>
                                </li>
                              ))}
                          </ul>
                          <div className="flex gap-2 mt-2">
                            <Input
                              placeholder="Nueva subtarea"
                              value={
                                subtaskForm.task_id === task.id
                                  ? subtaskForm.title
                                  : ""
                              }
                              onChange={(e) =>
                                setSubtaskForm({
                                  task_id: task.id,
                                  title: e.target.value,
                                })
                              }
                              onKeyDown={(e) =>
                                e.key === "Enter" && addSubtask()
                              }
                            />
                            <Button size="sm" onClick={addSubtask}>
                              Añadir
                            </Button>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>

                {newTaskFor === project.id ? (
                  <div className="mt-4 p-3 bg-slate-50 rounded-md space-y-2">
                    <Input
                      placeholder="Título de la tarea"
                      value={taskForm.title}
                      onChange={(e) =>
                        setTaskForm({ ...taskForm, title: e.target.value })
                      }
                    />
                    <Input
                      placeholder="Responsable"
                      value={taskForm.assignee_name}
                      onChange={(e) =>
                        setTaskForm({
                          ...taskForm,
                          assignee_name: e.target.value,
                        })
                      }
                    />
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => addTask(project.id)}>
                        Guardar
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setNewTaskFor(null)}
                      >
                        Cancelar
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Button
                    size="sm"
                    variant="outline"
                    className="mt-3"
                    onClick={() => setNewTaskFor(project.id)}
                  >
                    + Nueva tarea
                  </Button>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-12 p-6 bg-slate-50 rounded-lg border border-slate-200">
        <h2 className="font-semibold mb-2">¿Te suena familiar?</h2>
        <p className="text-sm text-slate-600 mb-4">
          Si tu equipo pierde tiempo buscando qué le tocaba a quién, podemos
          construir algo así para tu negocio.
        </p>
        <Link to="/#contacto">
          <Button>Hablemos</Button>
        </Link>
      </div>
    </div>
  );
}
