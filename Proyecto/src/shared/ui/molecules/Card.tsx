import React from "react";
import { Badge } from "@/shared/ui/atoms/Badge";

/** Propiedades para la tarjeta reutilizable del sistema */
interface CardProps {
  /** Título descriptivo de la tarjeta */
  title: string;
  /** Elemento que se muestra como etiqueta (usualmente un Badge) */
  badge: React.ReactNode;
  /** Texto principal que explica el contenido de la tarjeta */
  description: string;
  /** Color hexadecimal para la barra lateral izquierda (ej: para prioridades) */
  accentColor?: string;
  /** Contenido a mostrar en la esquina inferior izquierda */
  footerLeft?: React.ReactNode;
  /** Contenido a mostrar en la esquina inferior derecha */
  footerRight?: React.ReactNode;
}

export const Card = ({
  title,
  badge,
  description,
  accentColor = "#e2e8f0",
  footerLeft,
  footerRight,
}: CardProps) => {
  return (
    <div
      style={{
        border: "1px solid #e2e8f0",
        borderLeft: `4px solid ${accentColor}`,
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
        <h3 style={{ margin: 0, fontSize: "16px" }}>{title}</h3>
        <Badge>{badge}</Badge>
      </div>
      <p style={{ color: "#64748b", fontSize: "14px", margin: "8px 0" }}>
        {description}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "12px",
          color: "#94a3b8",
        }}
      >
        <div>{footerLeft}</div>
        <div style={{ display: "flex", gap: "12px" }}>
          {footerRight}
        </div>
      </div>
    </div>
  );
};