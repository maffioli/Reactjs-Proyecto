"use client";
import { Tabs } from '@/shared'
import { TaskBoard } from '@tasks/components/TaskBoard';
import { TaskListContainer } from './taskManagement';
import { ProyectBoard } from './projectsManagement/components/ProyectBoard';
import { ProyectListContainer } from './projectsManagement';
import { StatisticsDashboard } from './statistics/components/StatisticsDashboard';

export default function Home() {
  return (
    <Tabs defaultTab="board">
      <Tabs.Header>
          <Tabs.Tab id="board">Pizarra</Tabs.Tab>
          <Tabs.Tab id="tasks">Mis Tareas</Tabs.Tab>
          <Tabs.Tab id="projects">Proyectos</Tabs.Tab>
          <Tabs.Tab id="stats">Estadísticas</Tabs.Tab>
        </Tabs.Header>
          <Tabs.Content id="board">
            <TaskBoard />
            <ProyectBoard />
          </Tabs.Content>
          <Tabs.Content id="tasks">
            <TaskListContainer />
          </Tabs.Content>
          <Tabs.Content id="projects">
            <ProyectListContainer />
          </Tabs.Content>
          <Tabs.Content id="stats">
            <StatisticsDashboard />
          </Tabs.Content>
    </Tabs>
  );
}
