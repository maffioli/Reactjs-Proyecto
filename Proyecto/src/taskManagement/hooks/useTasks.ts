import { useState, useMemo } from 'react';
import type { Task, TaskStatus } from '../types';
import { fixtures } from '../utils/fixtures';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>(fixtures);

  const updateTaskStatus = (taskId: string, newStatus: TaskStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  // Podríamos agregar filtros por prioridad o proyecto aquí
  const todoTasks = useMemo(() => tasks.filter(t => t.status === 'todo').slice(0, 2), [tasks]);
  const inProgressTasks = useMemo(() => tasks.filter(t => t.status === 'in_progress').slice(0, 2), [tasks]);
  const doneTasks = useMemo(() => tasks.filter(t => t.status === 'done').slice(0, 2), [tasks]);

  return { tasks, updateTaskStatus, todoTasks, inProgressTasks, doneTasks };
};