"use client";
import React from "react";
import { Badge } from '@/shared'

interface CardProps {
  title: string;
  badge: React.ReactNode;
  description: string;
  accentColor?: string;
  footerLeft?: React.ReactNode;
  footerRight?: React.ReactNode;
  children?: React.ReactNode;
}

export const Card = ({
  title,
  badge,
  description,
  accentColor = "#e2e8f0",
  footerLeft,
  footerRight,
  children,
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
      <p style={{ color: "#22223b", fontSize: "14px", margin: "8px 0" }}>
        {description}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "12px",
          color: "#22223b",
        }}
      >
        <div>{footerLeft}</div>
        <div style={{ display: "flex", gap: "12px" }}>
          {footerRight}
        </div>
      </div>
      {children && <div style={{ marginTop: 12 }}>{children}</div>}
    </div>
  );
};