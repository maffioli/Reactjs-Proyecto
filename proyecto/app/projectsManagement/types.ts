export const PROYECT_STATUSES = {
  Backlog       : "backlog",
  IN_PROGRESS   : "in_progress",
  IN_Review     : "In_review",
  In_Test       : "In_test",
  CANCELLED     : "cancelled",
  COMPLETED     : "completed",
} as const;
export type ProyectStatus   = (typeof PROYECT_STATUSES)[keyof typeof PROYECT_STATUSES];

export const PROYECT_PRIORITIES = {
  LOW           : "low",
  MEDIUM        : "medium",
  HIGH          : "high",
  EMERGENCY     : "emergency",
} as const;
export type ProyectPriority = (typeof PROYECT_PRIORITIES)[keyof typeof PROYECT_PRIORITIES];

export interface Proyect {
  id            : string;
  title         : string;
  description   : string;
  status        : ProyectStatus;
  priority      : ProyectPriority;
  project       : string;
  deadline      : string;
  createdAt     : string;
}