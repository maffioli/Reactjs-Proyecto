import { useMemo } from 'react';
import type { Task, TaskStatus } from '@tasks/types';
import { useTaskState, useTaskDispatch } from '../context/TaskContext';

export const useTasks = () => {
  const tasks = useTaskState();
  const dispatch = useTaskDispatch();

  const updateTaskStatus = (taskId: string, newStatus: TaskStatus) => {
    dispatch({ type: 'UPDATE_TASK', payload: { id: taskId, updatedFields: { status: newStatus } } });
  };

  // Podríamos agregar filtros por prioridad o proyecto aquí
  const todoTasks = useMemo(() => tasks.filter(t => t.status === 'todo').slice(0, 2), [tasks]);
  const inProgressTasks = useMemo(() => tasks.filter(t => t.status === 'in_progress').slice(0, 2), [tasks]);
  const doneTasks = useMemo(() => tasks.filter(t => t.status === 'done').slice(0, 2), [tasks]);

  return { tasks, updateTaskStatus, todoTasks, inProgressTasks, doneTasks, dispatch };
};