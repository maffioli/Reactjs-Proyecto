import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TaskCard } from '../TaskCard';
import type { Task } from '../../types';

const mockTask: Task = {
  id: '1',
  title: 'Test Task',
  description: 'Description',
  status: 'todo',
  priority: 'medium',
  project: { title: 'Project X' },
  deadline: '2026-12-31T23:59:59Z',
  createdAt: '2026-01-01T00:00:00Z',
};

describe('TaskCard', () => {
  it('renders task title and description', () => {
    render(<TaskCard task={mockTask} />);
    expect(screen.getByText('Test Task')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  it('calls onDelete when delete button is clicked', () => {
    const onDelete = vi.fn();
    render(<TaskCard task={mockTask} onDelete={onDelete} />);
    fireEvent.click(screen.getByText(/eliminar/i));
    expect(onDelete).toHaveBeenCalled();
  });
});
