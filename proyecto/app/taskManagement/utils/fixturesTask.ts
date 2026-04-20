import type { Task } from "@tasks/types";
import { fixturesProyects as projectFixtures } from "../../projectsManagement/utils/fixturesProyect";

export const fixturesTasks: Task[] = [
  {
    id          : "1",
    title       : "Diseño de niveles - Bosque Inicial",
    description : "Crear el layout básico del primer nivel, incluyendo zonas de spawn y triggers de tutorial.",
    status      : "todo",
    priority    : "high",
    project     : projectFixtures[0], // Starship Odyssey
    deadline    : "2026-05-15T23:59:59Z",
    createdAt   : "2026-04-10T09:00:00Z",
  },
  {
    id          : "2",
    title       : "Implementar mecánicas de salto",
    description : "Ajustar la curva de salto y la gravedad para que el movimiento se sienta fluido.",
    status      : "in_progress",
    priority    : "high",
    project     : projectFixtures[1], // Shadow Protocol
    deadline    : "2026-04-30T18:00:00Z",
    createdAt   : "2026-04-11T10:30:00Z",
  },
  {
    id          : "3",
    title       : "Modelado 3D del protagonista",
    description : "Finalizar el modelo de alta poligonización y preparar el rig para animación.",
    status      : "paused",
    priority    : "medium",
    project     : projectFixtures[3], // Deep Space Terror
    deadline    : "2026-05-20T12:00:00Z",
    createdAt   : "2026-04-05T14:20:00Z",
  },
  {
    id          : "4",
    title       : "Optimización de texturas",
    description : "Reducir el tamaño de las texturas de entorno para mejorar el rendimiento en consolas.",
    status      : "done",
    priority    : "low",
    project     : projectFixtures[8], // Super Bit Land
    deadline    : "2026-04-10T17:00:00Z",
    createdAt   : "2026-03-25T11:00:00Z",
  },
  {
    id          : "5",
    title       : "Soporte para Realidad Virtual",
    description : "Investigación preliminar para añadir soporte a Oculus Quest 2.",
    status      : "cancelled",
    priority    : "low",
    project     : projectFixtures[4], // Asphalt Kings
    deadline    : "2026-05-01T09:00:00Z",
    createdAt   : "2026-04-01T16:45:00Z",
  },
  {
    id          : "6",
    title       : "Grabación de efectos de sonido (SFX)",
    description : "Grabar sonidos de pasos sobre diferentes superficies (hierba, madera, metal).",
    status      : "todo",
    priority    : "medium",
    project     : projectFixtures[11], // Beat Runner
    deadline    : "2026-05-10T16:00:00Z",
    createdAt   : "2026-04-12T08:15:00Z",
  },
  {
    id          : "7",
    title       : "IA de Enemigos Básicos",
    description : "Programar la máquina de estados para patrulla y persecución de los enemigos comunes.",
    status      : "in_progress",
    priority    : "high",
    project     : projectFixtures[6], // Global Front
    deadline    : "2026-05-05T23:59:59Z",
    createdAt   : "2026-04-12T13:00:00Z",
  },
  {
    id          : "8",
    title       : "Traducción al japonés",
    description : "Localización de los diálogos principales del primer acto.",
    status      : "paused",
    priority    : "low",
    project     : projectFixtures[5], // Legends of Mana
    deadline    : "2026-06-15T10:00:00Z",
    createdAt   : "2026-04-08T10:00:00Z",
  },
  {
    id          : "9",
    title       : "Corregir bug de colisión en menús",
    description : "El cursor desaparece al entrar en el submenú de opciones de audio.",
    status      : "done",
    priority    : "high",
    project     : projectFixtures[9], // Quantum Chess
    deadline    : "2026-04-12T14:00:00Z",
    createdAt   : "2026-04-09T17:30:00Z",
  },
  {
    id          : "10",
    title       : "Modo Multijugador Local",
    description : "Implementación de pantalla dividida para 2 jugadores.",
    status      : "cancelled",
    priority    : "medium",
    project     : projectFixtures[10], // Outlaw Trails
    deadline    : "2026-04-28T23:59:59Z",
    createdAt   : "2026-04-04T09:00:00Z",
  },
];
