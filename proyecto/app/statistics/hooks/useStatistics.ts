
import { useMemo } from 'react';
import { useTaskState } from '../../taskManagement/context/TaskContext';
import { fixturesProyects as projectFixtures } from '../../projectsManagement/utils/fixturesProyect';
import type { GlobalStatistics } from '@statistics/types';

export const useStatistics = (): GlobalStatistics => {
  const TODAY = new Date("2026-04-12T00:00:00Z");
  const tasks = useTaskState();

  return useMemo(() => {
    // Estadísticas de Proyectos
    const projectStats = {
      total: projectFixtures.length,
      byStatus: projectFixtures.reduce((acc, p) => {
        acc[p.status] = (acc[p.status] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      completionRate: Math.round(
        (projectFixtures.filter(p => p.status === 'completed').length / projectFixtures.length) * 100
      )
    };

    // Estadísticas de Tareas
    const taskStats = {
      total: tasks.length,
      byStatus: tasks.reduce((acc, t) => {
        acc[t.status] = (acc[t.status] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byPriority: tasks.reduce((acc, t) => {
        acc[t.priority] = (acc[t.priority] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      overdueCount: tasks.filter(t => 
        new Date(t.deadline) < TODAY && t.status !== 'done' && t.status !== 'cancelled'
      ).length
    };

    // Progreso Global (Tareas terminadas vs total)
    const overallProgress = tasks.length === 0 ? 0 : Math.round(
      (tasks.filter(t => t.status === 'done').length / tasks.length) * 100
    );

    return {
      projects: projectStats,
      tasks: taskStats,
      overallProgress
    };
  }, [tasks]);
};