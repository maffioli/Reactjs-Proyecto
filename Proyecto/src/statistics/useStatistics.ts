import { useMemo } from 'react';
import { fixturesTasks } from '@/taskManagement/utils/fixturesTask';
import { fixturesProyects as projectFixtures } from '@projects/utils/fixturesProyect';
import type { GlobalStatistics } from '@statistics/types';

export const useStatistics = (): GlobalStatistics => {
  const TODAY = new Date("2026-04-12T00:00:00Z");

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
      total: fixturesTasks.length,
      byStatus: fixturesTasks.reduce((acc, t) => {
        acc[t.status] = (acc[t.status] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byPriority: fixturesTasks.reduce((acc, t) => {
        acc[t.priority] = (acc[t.priority] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      overdueCount: fixturesTasks.filter(t => 
        new Date(t.deadline) < TODAY && t.status !== 'done' && t.status !== 'cancelled'
      ).length
    };

    // Progreso Global (Tareas terminadas vs total)
    const overallProgress = Math.round(
      (fixturesTasks.filter(t => t.status === 'done').length / fixturesTasks.length) * 100
    );

    return {
      projects: projectStats,
      tasks: taskStats,
      overallProgress
    };
  }, []);
};