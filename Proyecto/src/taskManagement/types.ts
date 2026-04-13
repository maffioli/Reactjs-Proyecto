import type { Proyect } from "../projectsManagement/types";

export const TASK_STATUSES = {
  TODO          : "todo",
  IN_PROGRESS   : "in_progress",
  PAUSED        : "paused",
  DONE          : "done",
  CANCELLED     : "cancelled",
} as const;
export type TaskPriority    = (typeof TASK_PRIORITIES)[keyof typeof TASK_PRIORITIES];

export const TASK_PRIORITIES = {
  LOW           : "low",
  MEDIUM        : "medium",
  HIGH          : "high",
} as const;
export type TaskStatus      = (typeof TASK_STATUSES)[keyof typeof TASK_STATUSES];


export interface Task {
  id            : string;
  title         : string;
  description   : string;
  status        : TaskStatus;
  priority      : TaskPriority;
  project       : Proyect;
  deadline      : string;
  createdAt     : string;
}