"use client";
import type { Task, TaskStatus, TaskPriority } from "../types";
import { useTaskDateStatus } from "@/taskManagement/hooks/useTaskDateStatus";
import { Card } from "@/shared";

const priorityColors: Record<TaskPriority, string> = {
  high          : "#ce1515ab",
  medium        : "#daa13ea1",
  low           : "#22af56be",
};

const statusLabels: Record<TaskStatus, string> = {
  todo          : "Por hacer",
  in_progress   : "En progreso",
  paused        : "Pausada",
  done          : "Completada",
  cancelled     : "Cancelada",
};

/** Propiedades necesarias para renderizar la tarjeta de una Tarea */
interface TaskCardProps {
  task: Task;
  onDelete?: () => void;
  onUpdate?: (fields: Partial<Task>) => void;
  onMarkComplete?: () => void;
}

import { Button } from "@/shared";

export function TaskCard({ task, onDelete, onUpdate, onMarkComplete }: TaskCardProps) {
  const { 
    formattedCreatedAt, 
    formattedDeadline, 
    deadlineColor 
  } = useTaskDateStatus(task);

  return (
    <Card
      title={task.title}
      description={task.description}
      accentColor={priorityColors[task.priority]}
      badge={statusLabels[task.status]}
      footerLeft={<span>{task.project.title}</span>}
      footerRight={
        <>
          <span><strong>Creado:</strong> {formattedCreatedAt}</span>
          <span style={{ color: deadlineColor }}>
            <strong>Límite:</strong> {formattedDeadline}
          </span>
        </>
      }
    >
      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        {onMarkComplete && task.status !== "done" && (
          <Button size="sm" variant="success" onClick={onMarkComplete}>
            Marcar completada
          </Button>
        )}
        {onUpdate && (
          <Button
            size="sm"
            variant="secondary"
            onClick={() => {
              const newTitle = prompt("Nuevo título", task.title) || task.title;
              const newDescription = prompt("Nueva descripción", task.description) || task.description;
              onUpdate({ title: newTitle, description: newDescription });
            }}
          >
            Editar
          </Button>
        )}
        {onDelete && (
          <Button size="sm" variant="danger" onClick={onDelete}>
            Eliminar
          </Button>
        )}
      </div>
    </Card>
  );
}