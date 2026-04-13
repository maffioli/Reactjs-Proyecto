import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  children: React.ReactNode;
}

export const Button = ({ isActive, children, style, ...props }: ButtonProps) => {
  const buttonStyle: React.CSSProperties = {
    padding: "6px 16px",
    borderRadius: "20px",
    border: isActive ? "2px solid #3b82f6" : "1px solid #e2e8f0",
    backgroundColor: isActive ? "#eff6ff" : "#fff",
    color: isActive ? "#3b82f6" : "#64748b",
    cursor: "pointer",
    fontSize: "14px",
    transition: "all 0.2s ease",
    ...style,
  };

  return (
    <button {...props} style={buttonStyle}>
      {children}
    </button>
  );
};