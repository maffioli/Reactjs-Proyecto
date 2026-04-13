import { useProyectDateStatus } from "../hooks/useProyectDateStatus";
import type { Proyect, ProyectPriority, ProyectStatus } from "../types";
import { Card } from "../../shared/ui/molecules/Card";

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
    <Card
      title={proyect.title}
      description={proyect.description}
      accentColor={priorityColors[proyect.priority]}
      badge={statusLabels[proyect.status]}
      footerLeft={<span>{proyect.project}</span>}
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