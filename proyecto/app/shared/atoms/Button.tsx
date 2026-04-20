import React from "react";

/** Propiedades para el botón básico del sistema (átomo) */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Indica si el botón debe mostrarse con el estilo de 'seleccionado' */
  isActive?: boolean;
  /** Variante visual del botón */
  variant?: "primary" | "secondary";
  /** Tamaño del botón */
  size?: "sm" | "md" | "lg";
  /** Texto o elementos que van dentro del botón */
  children?: React.ReactNode;
}

export const Button = ({
  isActive,
  variant = "secondary",
  size = "md",
  children,
  style,
  ...props
}: ButtonProps) => {
  // Estilos por variante
  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: isActive ? "#3b82f6" : "#2563eb",
      color: "#fff",
      border: isActive ? "2px solid #1d4ed8" : "1px solid #2563eb",
    },
    secondary: {
      backgroundColor: isActive ? "#eff6ff" : "#fff",
      color: isActive ? "#3b82f6" : "#64748b",
      border: isActive ? "2px solid #3b82f6" : "1px solid #e2e8f0",
    },
  };

  // Estilos por tamaño
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: {
      padding: "4px 10px",
      fontSize: "12px",
    },
    md: {
      padding: "6px 16px",
      fontSize: "14px",
    },
    lg: {
      padding: "10px 24px",
      fontSize: "16px",
    },
  };

  const buttonStyle: React.CSSProperties = {
    borderRadius: "20px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...style,
  };

  return (
    <button {...props} style={buttonStyle}>
      {children}
    </button>
  );
};