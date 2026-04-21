import { useMemo } from 'react';
import type { Task } from '../types';

export const useTaskDateStatus = (task: Task) => {
  const TODAY = new Date();
  const DELETED = (3 * 24 * 60 * 60 * 1000); // 3 días en milisegundos

  return useMemo(() => {
    const deadlineDate = new Date(task.deadline);
    const isOverdue = deadlineDate < TODAY && task.status !== 'done' && task.status !== 'cancelled';
    const isCloseToDeadline = !isOverdue && 
      (deadlineDate.getTime() - TODAY.getTime()) < DELETED;

    return {
      formattedCreatedAt: task.createdAt.split('T')[0],
      formattedDeadline: task.deadline.split('T')[0],
      isOverdue,
      isCloseToDeadline,
      deadlineColor: isOverdue ? '#e11d48' : isCloseToDeadline ? '#f59e0b' : '#94a3b8'
    };
  }, [task.createdAt, task.deadline, task.status]);
};