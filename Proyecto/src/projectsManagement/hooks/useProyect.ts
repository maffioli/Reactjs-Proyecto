import { useState, useMemo } from 'react';
import type { Proyect, ProyectStatus } from '@projects/types';
import { fixturesProyects } from '../utils/fixturesProyect';

export const useProyect = () => {
  const [proyects, setProyects] = useState<Proyect[]>(fixturesProyects);

  const updateProyectStatus = (proyectId: string, newStatus: ProyectStatus) => {
    setProyects((prevProyects) =>
      prevProyects.map((proyect) =>
        proyect.id === proyectId ? { ...proyect, status: newStatus } : proyect
      )
    );
  };

  const todoProyects = useMemo(() => proyects.filter(t => t.status === 'backlog' as ProyectStatus).slice(0, 2), [proyects]);
  const inProgressProyects = useMemo(() => proyects.filter(t => t.status === 'in_progress' as ProyectStatus).slice(0, 2), [proyects]);
  const doneProyects = useMemo(() => proyects.filter(t => t.status === 'completed' as ProyectStatus).slice(0, 2), [proyects]);

  return { proyects, updateProyectStatus, todoProyects, inProgressProyects, doneProyects };
};