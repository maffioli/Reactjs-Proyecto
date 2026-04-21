"use client";
import React, { createContext, useReducer, useContext, ReactNode, Dispatch } from 'react';
import { fixturesTasks } from '../utils/fixturesTask';
import type { Task } from '../types';

// Actions
type Action =
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'DELETE_TASK'; payload: string }
  | { type: 'UPDATE_TASK'; payload: { id: string; updatedFields: Partial<Task> } }
  | { type: 'MARK_COMPLETE'; payload: string };

// Reducer
function taskReducer(state: Task[], action: Action): Task[] {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'DELETE_TASK':
      return state.filter((t) => t.id !== action.payload);
    case 'UPDATE_TASK':
      return state.map((t) =>
        t.id === action.payload.id ? { ...t, ...action.payload.updatedFields } : t
      );
    case 'MARK_COMPLETE':
      return state.map((t) => (t.id === action.payload ? { ...t, status: 'done' } : t));
    default:
      return state;
  }
}

// Context
const TaskStateContext = createContext<Task[] | undefined>(undefined);
const TaskDispatchContext = createContext<Dispatch<Action> | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(taskReducer, fixturesTasks);
  return (
    <TaskStateContext.Provider value={state}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskStateContext.Provider>
  );
}

export function useTaskState() {
  const context = useContext(TaskStateContext);
  if (context === undefined) {
    throw new Error('useTaskState must be used within a TaskProvider');
  }
  return context;
}

export function useTaskDispatch() {
  const context = useContext(TaskDispatchContext);
  if (context === undefined) {
    throw new Error('useTaskDispatch must be used within a TaskProvider');
  }
  return context;
}
