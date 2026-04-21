"use client";
import { useTaskForm } from "@tasks/hooks/useTaskForm";

export function TaskNewContainer() {
  const {
    form,
    error,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    projects,
    statuses,
    priorities
  } = useTaskForm();

  // Máscaras legibles para los estados
  const STATUS_LABELS: Record<string, string> = {
    in_progress: "En progreso",
    paused: "Pausada",
    done: "Completada",
    cancelled: "Cancelada"
  };

  // Máscaras legibles para prioridades
  const PRIORITY_LABELS: Record<string, string> = {
    low: "Baja",
    medium: "Media",
    high: "Alta"
  };

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
              onBlur={handleBlur}
              aria-invalid={!!errors.title}
              aria-describedby={errors.title ? 'title-error' : undefined}
            />
          </label>
          {touched.title && errors.title && (
            <span id="title-error" style={{ color: '#e11d48', fontSize: 13, marginTop: 2 }}>{errors.title}</span>
          )}
          <label style={{ fontWeight: 500 }}>Descripción
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Descripción"
              style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #cbd5e1', minHeight: 60, marginTop: 4 }}
              required
              onBlur={handleBlur}
              aria-invalid={!!errors.description}
              aria-describedby={errors.description ? 'description-error' : undefined}
            />
          </label>
          {touched.description && errors.description && (
            <span id="description-error" style={{ color: '#e11d48', fontSize: 13, marginTop: 2 }}>{errors.description}</span>
          )}
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <label style={{ fontWeight: 500 }}>Proyecto
            <select name="projectId" value={form.projectId} onChange={handleChange} required style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #cbd5e1', marginTop: 4 }}>
              {projects.map(p => (
                <option key={p.id} value={p.id}>{p.title}</option>
              ))}
            </select>
          </label>
          {touched.projectId && errors.projectId && (
            <span id="project-error" style={{ color: '#e11d48', fontSize: 13, marginTop: 2 }}>{errors.projectId}</span>
          )}
          <label style={{ fontWeight: 500 }}>Estado
            <select name="status" value={form.status} onChange={handleChange} required style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #cbd5e1', marginTop: 4 }}>
              {statuses.filter(s => s !== 'todo').map(s => (
                <option key={s} value={s}>{STATUS_LABELS[s] || s}</option>
              ))}
            </select>
          </label>
          <label style={{ fontWeight: 500 }}>Prioridad
            <select name="priority" value={form.priority} onChange={handleChange} required style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #cbd5e1', marginTop: 4 }}>
              {priorities.map(p => (
                <option key={p} value={p}>{PRIORITY_LABELS[p] || p}</option>
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
              onBlur={handleBlur}
              aria-invalid={!!errors.deadline}
              aria-describedby={errors.deadline ? 'deadline-error' : undefined}
            />
          </label>
          {touched.deadline && errors.deadline && (
            <span id="deadline-error" style={{ color: '#e11d48', fontSize: 13, marginTop: 2 }}>{errors.deadline}</span>
          )}
        </div>
      </div>
      <button type="submit" disabled={isSubmitting} style={{ padding: '12px 0', background: isSubmitting ? '#94a3b8' : '#2563eb', color: '#fff', border: 'none', borderRadius: 6, fontWeight: 600, fontSize: 16, marginTop: 8, cursor: isSubmitting ? 'not-allowed' : 'pointer', transition: 'background 0.2s' }}>
        {isSubmitting ? 'Creando...' : 'Crear tarea'}
      </button>
      {error && <div style={{ color: '#e11d48', marginTop: 8, fontWeight: 500 }}>{error}</div>}
      {errors && touched && (Object.keys(errors) as Array<keyof typeof form>).map(key => (
        <div key={key} style={{ color: '#e11d48', marginTop: 8, fontWeight: 500 }}>{errors[key] as string}</div>
      ))}
    </form>
  );
}