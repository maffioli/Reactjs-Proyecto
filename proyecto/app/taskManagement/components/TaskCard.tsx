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
  /** El objeto completo con la información de la Tarea */
  task          : Task;
  /** Función opcional que se dispara al cambiar el estado de la tarea */
  onStatusChange?: (taskId: string, newStatus: TaskStatus) => void;
}

export function TaskCard({ task }: TaskCardProps) {
  const { 
    formattedCreatedAt, 
    formattedDeadline, 
    deadlineColor 
  } = useTaskDateStatus(task.createdAt, task.deadline, task.status);

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
        />
  );
}