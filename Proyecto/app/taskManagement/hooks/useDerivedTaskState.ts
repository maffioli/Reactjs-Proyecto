import { useMemo } from 'react';
import { useTaskState } from '../context/TaskContext';
import type { Task, TaskStatus, TaskPriority } from '../types';

export function useDerivedTaskState() {
  const tasks = useTaskState();

  const completedCount = useMemo(() =>
    tasks.filter(t => t.status === 'done').length
  , [tasks]);

  const pendingTasks = useMemo(() =>
    tasks.filter(t => t.status !== 'done' && t.status !== 'cancelled')
  , [tasks]);

  const filterResults = useMemo(() => {
    return (filters: {
      status?: TaskStatus | 'all',
      priority?: TaskPriority | 'all',
      search?: string
    }) => {
      return tasks.filter(task => {
        const statusMatch = !filters.status || filters.status === 'all' || task.status === filters.status;
        const priorityMatch = !filters.priority || filters.priority === 'all' || task.priority === filters.priority;
        const searchMatch = !filters.search || task.title.toLowerCase().includes(filters.search.toLowerCase());
        return statusMatch && priorityMatch && searchMatch;
      });
    };
  }, [tasks]);

  return {
    completedCount,
    pendingTasks,
    filterResults
  };
}
