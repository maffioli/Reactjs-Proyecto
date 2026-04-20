import type { TaskStatus } from "@tasks/types";
import { Button } from "@/shared";

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
        <Button size="md" variant="secondary"
          key={filt.value}
          onClick={() => onChange(filt.value)}
          isActive={current === filt.value}
        >
          {filt.label}
        </Button>
      ))}
    </div>
  );
}