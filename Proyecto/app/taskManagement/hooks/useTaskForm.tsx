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
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!form.title.trim() || !form.description.trim() || !form.deadline) {
      setError('Todos los campos son obligatorios');
      setIsSubmitting(false);
      return;
    }
    const project = fixturesProyects.find(p => p.id === form.projectId);
    if (!project) {
      setError('Proyecto inválido');
      setIsSubmitting(false);
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
    setIsSubmitting(false);
  };

  // Validaciones por campo
  const errors: Partial<typeof form> = {};
  if (touched.title && !form.title.trim()) errors.title = 'El título es obligatorio';
  if (touched.description && !form.description.trim()) errors.description = 'La descripción es obligatoria';
  if (touched.deadline && !form.deadline) errors.deadline = 'La fecha límite es obligatoria';
  if (touched.projectId && !form.projectId) errors.projectId = 'El proyecto es obligatorio';

  return {
    form,
    error,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    projects: fixturesProyects,
    statuses: Object.values(TASK_STATUSES),
    priorities: Object.values(TASK_PRIORITIES),
  };
}
