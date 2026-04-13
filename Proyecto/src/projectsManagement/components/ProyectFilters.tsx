import type { ProyectStatus } from "../types";

type FilterValue = ProyectStatus | "all";

interface FilterOption {
  value     : FilterValue;
  label     : string;
}

const filters: FilterOption[] = [
  { value: "all", label: "Todas" },
  { value: "backlog", label: "Por hacer" },
  { value: "in_progress", label: "En progreso" },
  { value: "In_review", label: "En revisión" },
  { value: "In_test", label: "En pruebas" },
  { value: "cancelled", label: "Cancelado" },
  { value: "completed", label: "Completado" },
];

interface ProyectFiltersProps {
  current: FilterValue;
  onChange: (value: FilterValue) => void;
}

export function ProyectFilters({ current, onChange }: ProyectFiltersProps) {
  return (
    <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
      {filters.map((filt) => (
        <button
          key={filt.value}
          onClick={() => onChange(filt.value)}
          style={{
            padding: "6px 16px",
            borderRadius: "20px",
            border:
              current === filt.value ? "2px solid #3b82f6" : "1px solid #e2e8f0",
            backgroundColor: current === filt.value ? "#eff6ff" : "#fff",
            color: current === filt.value ? "#3b82f6" : "#64748b",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          {filt.label}
        </button>
      ))}
    </div>
  );
}