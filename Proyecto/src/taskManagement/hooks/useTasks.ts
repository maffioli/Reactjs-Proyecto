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
  const todoTasks = useMemo(() => tasks.filter(t => t.status === 'todo'), [tasks]);
  const inProgressTasks = useMemo(() => tasks.filter(t => t.status === 'in_progress'), [tasks]);
  const doneTasks = useMemo(() => tasks.filter(t => t.status === 'done'), [tasks]);

  return { tasks, updateTaskStatus, todoTasks, inProgressTasks, doneTasks };
};