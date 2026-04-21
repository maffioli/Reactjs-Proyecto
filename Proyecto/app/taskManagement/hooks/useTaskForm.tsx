import { useState } from 'react';
import { useTaskDispatch } from '../context/TaskContext';
import { fixturesProyects } from '../../projectsManagement/utils/fixturesProyect';
import { TASK_STATUSES, TASK_PRIORITIES } from '../types';
import type { Task, TaskStatus, TaskPriority } from '../types';

export function useTaskForm() {
  const dispatch = useTaskDispatch();
  const [form, setForm] = useState<{
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    projectId: string;
    deadline: string;
  }>({
    title: '',
    description: '',
    status: TASK_STATUSES.TODO,
    priority: TASK_PRIORITIES.LOW,
    projectId: fixturesProyects[0]?.id || '',
    deadline: '',
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.description.trim() || !form.deadline) {
      setError('Todos los campos son obligatorios');
      return;
    }
    const project = fixturesProyects.find(p => p.id === form.projectId);
    if (!project) {
      setError('Proyecto inválido');
      return;
    }
    const newTask: Task = {
      id: Math.random().toString(36).slice(2),
      title: form.title,
      description: form.description,
      status: form.status,
      priority: form.priority,
      project,
      deadline: form.deadline,
      createdAt: new Date().toISOString(),
    };
    dispatch({ type: 'ADD_TASK', payload: newTask });
    setForm({
      title: '',
      description: '',
      status: TASK_STATUSES.TODO,
      priority: TASK_PRIORITIES.LOW,
      projectId: fixturesProyects[0]?.id || '',
      deadline: '',
    });
    setError(null);
  };

  return {
    form,
    error,
    handleChange,
    handleSubmit,
    projects: fixturesProyects,
    statuses: Object.values(TASK_STATUSES),
    priorities: Object.values(TASK_PRIORITIES),
  };
}
