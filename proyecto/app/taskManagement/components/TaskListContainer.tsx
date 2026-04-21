"use client";
import { useState, useMemo } from "react";
import type { Task } from "@tasks/types";
import { TaskCard } from "./TaskCard";
import { TaskFilters } from "./TaskFilters";
import { useTaskState, useTaskDispatch } from "@tasks/context/TaskContext";
import { TaskNewContainer } from "@tasks/components/TaskNewContainer";

type FilterValue = "all" | Task["status"];

export function TaskListContainer() {
  const tasks = useTaskState();
  const dispatch = useTaskDispatch();
  const [filter, setFilter] = useState<FilterValue>("all");

  const addTask = (task: Task) => {
    dispatch({ type: "ADD_TASK", payload: task });
  };

  const deleteTask = (taskId: string) => {
    dispatch({ type: "DELETE_TASK", payload: taskId });
  };

  const updateTask = (taskId: string, updatedFields: Partial<Task>) => {
    dispatch({ type: "UPDATE_TASK", payload: { id: taskId, updatedFields } });
  };

  const markComplete = (taskId: string) => {
    dispatch({ type: "MARK_COMPLETE", payload: taskId });
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
      <TaskNewContainer />
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