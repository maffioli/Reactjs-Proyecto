import React from "react";

/** Propiedades para el componente de etiqueta (Badge) */
interface BadgeProps {
  /** Contenido de texto o elementos a mostrar dentro de la etiqueta */
  children: React.ReactNode;
  /** Estilos CSS adicionales para personalizar colores o bordes */
  style?: React.CSSProperties;
}

export const Badge = ({ children, style }: BadgeProps) => {
  const badgeStyle: React.CSSProperties = {
    fontSize: "12px",
    padding: "2px 8px",
    borderRadius: "12px",
    backgroundColor: "#f1f5f9",
    display: "inline-block",
    ...style,
  };

  return <span style={badgeStyle}>{children}</span>;
};