"use client";
import { useState, useMemo } from "react";
import type { Proyect } from "@projects/types";
import { ProyectCard } from "./ProyectCard";
import { ProyectFilters } from "./ProyectFilters";
import { fixturesProyects } from "../utils/fixturesProyect";

type FilterValue = "all" | Proyect["status"];

export function ProyectListContainer() {
  const [proyects] = useState<Proyect[]>(fixturesProyects);
  const [filter, setFilter] = useState<FilterValue>("all");

  const filteredProyects = useMemo(
    () => (filter === "all" ? proyects : proyects.filter((t) => t.status === filter)),
    [filter, proyects],
  );

  const totalCount = useMemo(() => proyects.length, [proyects]);
  const filteredCount = useMemo(() => filteredProyects.length, [filteredProyects]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <h2 style={{ margin: 0, color: "#a01a52" }}>
          Tareas ({filteredCount}/{totalCount})
        </h2>
      </div>
      <ProyectFilters current={filter} onChange={setFilter} />
      {filteredProyects.length === 0 ? (
        <p style={{ color: "#94a3b8", textAlign: "center", padding: "32px" }}>
          No hay tareas con este filtro.
        </p>
      ) : (
        filteredProyects.map((proyect) => <ProyectCard key={proyect.id} proyect={proyect} />)
      )}
    </div>
  );
}