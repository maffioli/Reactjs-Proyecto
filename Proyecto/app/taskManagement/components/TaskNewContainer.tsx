"use client";
import { useTaskForm } from "@tasks/hooks/useTaskForm";

export function TaskNewContainer() {
  const {
    form,
    error,
    handleChange,
    handleSubmit,
    projects,
    statuses,
    priorities
  } = useTaskForm();

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: '0 auto 32px', background: '#fff', padding: 24, borderRadius: 12, boxShadow: '0 2px 8px #0002', display: 'flex', flexDirection: 'column', gap: 20 }}>
      <h2 style={{ color: '#2053a5', margin: 0, marginBottom: 8, fontWeight: 700, fontSize: 22 }}>Crear nueva tarea</h2>
      <div style={{ display: 'flex', gap: 16 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <label style={{ fontWeight: 500 }}>Título
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Título"
              style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #cbd5e1', marginTop: 4 }}
              required
            />
          </label>
          <label style={{ fontWeight: 500 }}>Descripción
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Descripción"
              style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #cbd5e1', minHeight: 60, marginTop: 4 }}
              required
            />
          </label>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <label style={{ fontWeight: 500 }}>Proyecto
            <select name="projectId" value={form.projectId} onChange={handleChange} required style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #cbd5e1', marginTop: 4 }}>
              {projects.map(p => (
                <option key={p.id} value={p.id}>{p.title}</option>
              ))}
            </select>
          </label>
          <label style={{ fontWeight: 500 }}>Estado
            <select name="status" value={form.status} onChange={handleChange} required style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #cbd5e1', marginTop: 4 }}>
              {statuses.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </label>
          <label style={{ fontWeight: 500 }}>Prioridad
            <select name="priority" value={form.priority} onChange={handleChange} required style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #cbd5e1', marginTop: 4 }}>
              {priorities.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </label>
          <label style={{ fontWeight: 500 }}>Fecha límite
            <input
              type="date"
              name="deadline"
              value={form.deadline}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #cbd5e1', marginTop: 4 }}
            />
          </label>
        </div>
      </div>
      <button type="submit" style={{ padding: '12px 0', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 6, fontWeight: 600, fontSize: 16, marginTop: 8, cursor: 'pointer', transition: 'background 0.2s' }}>
        Crear tarea
      </button>
      {error && <div style={{ color: '#e11d48', marginTop: 8, fontWeight: 500 }}>{error}</div>}
    </form>
  );
}
