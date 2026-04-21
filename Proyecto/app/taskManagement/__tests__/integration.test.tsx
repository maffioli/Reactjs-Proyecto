import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TaskProvider } from '../context/TaskContext';
import { TaskListContainer } from '../components/TaskListContainer';

// Integration: render TaskListContainer and add a task

describe('TaskListContainer integration', () => {
  it('can add a new task and display it', () => {
    render(
      <TaskProvider>
        <TaskListContainer />
      </TaskProvider>
    );
    // Llenar el formulario
    fireEvent.change(screen.getByPlaceholderText(/título/i), { target: { value: 'Nueva tarea' } });
    fireEvent.change(screen.getByPlaceholderText(/descripción/i), { target: { value: 'Descripción de prueba' } });
    fireEvent.change(screen.getByLabelText(/fecha límite/i), { target: { value: '2026-12-31' } });
    fireEvent.click(screen.getByRole('button', { name: /crear tarea/i }));
    // Verificar que la tarea aparece
    expect(screen.getByText('Nueva tarea')).toBeInTheDocument();
    expect(screen.getByText('Descripción de prueba')).toBeInTheDocument();
  });
});
