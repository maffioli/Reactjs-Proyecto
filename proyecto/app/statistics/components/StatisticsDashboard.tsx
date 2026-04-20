"use client";
import { useStatistics } from "@/statistics/hooks/useStatistics";

export const StatisticsDashboard = () => {
  const { projects, tasks, overallProgress } = useStatistics();

  const cardStyle: React.CSSProperties = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    flex: 1
  };

  return (
    <div style={{ padding: "24px", backgroundColor: "#f8fafc" }}>
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        {/* Card de Proyectos */}
        <div style={cardStyle}>
          <h3 style={{ color: "#64748b", fontSize: "14px", margin: "0 0 10px 0" }}>PROYECTOS</h3>
          <div style={{ fontSize: "28px", fontWeight: "bold" }}>{projects.total}</div>
          <p style={{ fontSize: "12px", color: "#10b981" }}>
            {projects.completionRate}% Tasa de finalización
          </p>
        </div>

        {/* Card de Tareas */}
        <div style={cardStyle}>
          <h3 style={{ color: "#64748b", fontSize: "14px", margin: "0 0 10px 0" }}>TAREAS ACTIVAS</h3>
          <div style={{ fontSize: "28px", fontWeight: "bold" }}>
            {(tasks.byStatus['todo'] || 0) + (tasks.byStatus['in_progress'] || 0)}
          </div>
          <p style={{ fontSize: "12px", color: tasks.overdueCount > 0 ? "#ef4444" : "#64748b" }}>
            {tasks.overdueCount} tareas vencidas
          </p>
        </div>

        {/* Card de Progreso Global */}
        <div style={cardStyle}>
          <h3 style={{ color: "#64748b", fontSize: "14px", margin: "0 0 10px 0" }}>PROGRESO TOTAL</h3>
          <div style={{ fontSize: "28px", fontWeight: "bold" }}>{overallProgress}%</div>
          <div style={{ 
            width: "100%", 
            backgroundColor: "#e2e8f0", 
            height: "8px", 
            borderRadius: "4px", 
            marginTop: "10px" 
          }}>
            <div style={{ 
              width: `${overallProgress}%`, 
              backgroundColor: "#3b82f6", 
              height: "100%", 
              borderRadius: "4px" 
            }} />
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ ...cardStyle, flex: 2 }}>
          <h4>Distribución de Prioridades en Tareas</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {Object.entries(tasks.byPriority).map(([priority, count]) => (
              <li key={priority} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #f1f5f9" }}>
                <span style={{ textTransform: "capitalize" }}>{priority}</span>
                <span style={{ fontWeight: "bold" }}>{count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};