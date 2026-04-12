import type { Task, TaskStatus, TaskPriority } from "../types";
import { useTaskDateStatus } from "../hooks/useTaskDateStatus";


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

interface TaskCardProps {
  task          : Task;
  onStatusChange?: (taskId: string, newStatus: TaskStatus) => void;
}

// export function TaskCard({ task, onStatusChange }: TaskCardProps) {
export function TaskCard({ task }: TaskCardProps) {
  const { 
    formattedCreatedAt, 
    formattedDeadline, 
    deadlineColor 
  } = useTaskDateStatus(task.createdAt, task.deadline, task.status);

  return (
    <div
      style={{
        border: "1px solid #e2e8f0",
        borderLeft: `4px solid ${priorityColors[task.priority]}`,
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "8px",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <h3 style={{ margin: 0, fontSize: "16px" }}>{task.title}</h3>
        <span
          style={{
            fontSize: "12px",
            padding: "2px 8px",
            borderRadius: "12px",
            backgroundColor: "#f1f5f9",
          }}
        >
          {statusLabels[task.status]}
        </span>
      </div>
      <p style={{ color: "#64748b", fontSize: "14px", margin: "8px 0" }}>
        {task.description}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "12px",
          color: "#94a3b8",
        }}
      >
        <span>{task.project}</span>
        <div style={{ display: "flex", gap: "12px" }}>
          <span><strong>Creado:</strong> {formattedCreatedAt}</span>
          <span style={{ color: deadlineColor }}>
            <strong>Límite:</strong> {formattedDeadline}
          </span>
        </div>
      </div>
    </div>
  );
}
