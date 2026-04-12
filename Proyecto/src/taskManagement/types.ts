export const TASK_STATUSES = {
  TODO          : "todo",
  IN_PROGRESS   : "in_progress",
  PAUSED        : "paused",
  DONE          : "done",
  CANCELLED     : "cancelled",
} as const;

export const TASK_PRIORITIES = {
  LOW           : "low",
  MEDIUM        : "medium",
  HIGH          : "high",
} as const;

// Tipos derivados de las constantes — así evitamos duplicar definiciones
export type TaskStatus    = (typeof TASK_STATUSES)[keyof typeof TASK_STATUSES];
export type TaskPriority  = (typeof TASK_PRIORITIES)[keyof typeof TASK_PRIORITIES];

export interface Task {
  id            : string;
  title         : string;
  description   : string;
  status        : TaskStatus;
  priority      : TaskPriority;
  project       : string;
  deadline      : string;
  createdAt     : string;
}