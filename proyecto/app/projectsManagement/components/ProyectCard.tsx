"use client";
import { useProyectDateStatus } from "../hooks/useProyectDateStatus";
import type { Proyect, ProyectPriority, ProyectStatus } from "@projects/types";
import { Card } from "@/shared";
import React from "react";

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

/** Propiedades necesarias para renderizar la tarjeta de un Proyecto */
interface ProyectCardProps {
  /** El objeto completo con la información del Proyecto */
  proyect       : Proyect;
  /** Función opcional que se dispara al cambiar el estado del proyecto */
  onStatusChange?: (proyectId: string, newStatus: ProyectStatus) => void;
}

export const ProyectCard = React.memo(function ProyectCard({ proyect }: ProyectCardProps) {
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
});