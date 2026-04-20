"use client";
import { useState, useMemo } from "react";
import { fixturesTasks } from "@tasks/utils/fixturesTask";
import type { Task } from "@tasks/types";
import { TaskCard } from "./TaskCard";
import { TaskFilters } from "./TaskFilters";

type FilterValue = "all" | Task["status"];

export function TaskListContainer() {
  const [tasks, setTasks] = useState<Task[]>(fixturesTasks);
  const [filter, setFilter] = useState<FilterValue>("all");

  const addTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  const deleteTask = (taskId: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
  };

  const updateTask = (taskId: string, updatedFields: Partial<Task>) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId
          ? {
              ...t,
              ...updatedFields,
              description:
                updatedFields.description !== undefined
                  ? updatedFields.description
                  : t.description,
            }
          : t
      )
    );
  };

  const markComplete = (taskId: string) => {
    setTasks((prev) => prev.map((t) => t.id === taskId ? { ...t, status: "done" } : t));
  };


  const pendingTasks = useMemo(() => tasks.filter((t) => t.status !== "done"), [tasks]);

  const filteredTasks = useMemo(
    () => (filter === "all" ? tasks : tasks.filter((t) => t.status === filter)),
    [filter, tasks],
  );

  const totalCount = useMemo(() => tasks.length, [tasks]);
  const filteredCount = useMemo(() => filteredTasks.length, [filteredTasks]);

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
        <h2 style={{ margin: 0, color: "#2053a5" }}>
          Tareas ({filteredCount}/{totalCount})
        </h2>
      </div>
      <TaskFilters current={filter} onChange={setFilter} />
      {filteredTasks.length === 0 ? (
        <p style={{ color: "#94a3b8", textAlign: "center", padding: "32px" }}>
          No hay tareas con este filtro.
        </p>
      ) : (
        filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={() => deleteTask(task.id)}
            onUpdate={(fields) => updateTask(task.id, fields)}
            onMarkComplete={() => markComplete(task.id)}
          />
        ))
      )}
    </div>
  );
}