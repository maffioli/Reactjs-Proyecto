import { useProyectDateStatus } from "../hooks/useProyectDateStatus";
import type { Proyect, ProyectPriority, ProyectStatus } from "../types";

const priorityColors: Record<ProyectPriority, string> = {
  emergency     : "#ce1515ab",
  high          : "#daa13ea1",
  medium        : "#22af56be",
  low           : "#1563c9be",
};

const statusLabels: Record<ProyectStatus, string> = {
  backlog       : "Backlog",
  in_progress   : "En progreso",
  In_review     : "En revisión",
  In_test       : "En pruebas",
  cancelled     : "Cancelado",
  completed     : "Completado",
};

interface ProyectCardProps {
  proyect       : Proyect;
  onStatusChange?: (proyectId: string, newStatus: ProyectStatus) => void;
}

export function ProyectCard({ proyect }: ProyectCardProps) {
  const { 
    formattedCreatedAt, 
    formattedDeadline, 
    deadlineColor 
  } = useProyectDateStatus(proyect.createdAt, proyect.deadline, proyect.status);

  return (
    <div
      style={{
        border: "1px solid #e2e8f0",
        borderLeft: `4px solid ${priorityColors[proyect.priority]}`,
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
        <h3 style={{ margin: 0, fontSize: "16px" }}>{proyect.title}</h3>
        <span
          style={{
            fontSize: "12px",
            padding: "2px 8px",
            borderRadius: "12px",
            backgroundColor: "#f1f5f9",
          }}
        >
          {statusLabels[proyect.status]}
        </span>
      </div>
      <p style={{ color: "#64748b", fontSize: "14px", margin: "8px 0" }}>
        {proyect.description}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "12px",
          color: "#94a3b8",
        }}
      >
        <span>{proyect.project}</span>
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