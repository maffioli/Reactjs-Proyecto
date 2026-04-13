import React from "react";

interface BadgeProps {
  children: React.ReactNode;
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