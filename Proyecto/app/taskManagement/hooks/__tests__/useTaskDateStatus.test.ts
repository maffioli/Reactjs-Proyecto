import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useTaskDateStatus } from '../useTaskDateStatus';
import type { Task } from '../../types';

const task: Task = {
  id: '1',
  title: 'Test',
  description: 'desc',
  status: 'todo',
  priority: 'medium',
  project: { title: 'Project X' },
  deadline: '2026-01-10T00:00:00Z',
  createdAt: '2026-01-01T00:00:00Z',
};

describe('useTaskDateStatus', () => {
  it('returns formatted dates', () => {
    const { result } = renderHook(() => useTaskDateStatus(task));
    expect(result.current.formattedCreatedAt).toBe('2026-01-01');
    expect(result.current.formattedDeadline).toBe('2026-01-10');
  });
});
