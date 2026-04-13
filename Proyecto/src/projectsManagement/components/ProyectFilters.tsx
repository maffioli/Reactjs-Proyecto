import type { ProyectStatus } from "@projects/types";
import { Button } from "@/shared/ui//atoms/Button";

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

/** Propiedades para el selector de filtros de proyectos */
interface ProyectFiltersProps {
  /** El valor del filtro que está seleccionado actualmente */
  current: FilterValue;
  /** Función que recibe el nuevo filtro seleccionado */
  onChange: (value: FilterValue) => void;
}

export function ProyectFilters({ current, onChange }: ProyectFiltersProps) {
  return (
    <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
      {filters.map((filt) => (
        <Button
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