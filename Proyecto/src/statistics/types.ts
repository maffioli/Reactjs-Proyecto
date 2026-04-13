export interface ProjectStats {
  total: number;
  byStatus: Record<string, number>;
  completionRate: number;
}

export interface TaskStats {
  total: number;
  byStatus: Record<string, number>;
  byPriority: Record<string, number>;
  overdueCount: number;
}

export interface GlobalStatistics {
  projects: ProjectStats;
  tasks: TaskStats;
  overallProgress: number;
}