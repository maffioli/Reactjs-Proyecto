import { useMemo } from 'react';

export const useProyectDateStatus = (createdAt: string, deadline: string, status: string) => {
  const TODAY = new Date();
  const DELETED = (3 * 24 * 60 * 60 * 1000); // 3 días en milisegundos

  return useMemo(() => {
    const deadlineDate = new Date(deadline);
    const isOverdue = deadlineDate < TODAY && status !== 'done' && status !== 'cancelled';
    const isCloseToDeadline = !isOverdue && 
      (deadlineDate.getTime() - TODAY.getTime()) < DELETED;

    return {
      formattedCreatedAt: createdAt.split('T')[0],
      formattedDeadline: deadline.split('T')[0],
      isOverdue,
      isCloseToDeadline,
      deadlineColor: isOverdue ? '#e11d48' : isCloseToDeadline ? '#f59e0b' : '#94a3b8'
    };
  }, [createdAt, deadline, status]);
};