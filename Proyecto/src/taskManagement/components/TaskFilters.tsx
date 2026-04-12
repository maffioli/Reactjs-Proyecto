import type { TaskStatus } from "../types";

type FilterValue = TaskStatus | "all";

interface FilterOption {
  value     : FilterValue;
  label     : string;
}

const filters: FilterOption[] = [
  { value: "all", label: "Todas" },
  { value: "todo", label: "Por hacer" },
  { value: "in_progress", label: "En progreso" },
  { value: "paused", label: "Pausadas" },
  { value: "done", label: "Completadas" },
  { value: "cancelled", label: "Canceladas" }
];

interface TaskFiltersProps {
  current: FilterValue;
  onChange: (value: FilterValue) => void;
}

export function TaskFilters({ current, onChange }: TaskFiltersProps) {
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