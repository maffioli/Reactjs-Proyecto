import { ProyectBoard } from "./projectsManagement/components/ProyectBoard";
import { ProyectListContainer } from "./projectsManagement/components/ProyectListContainer";
import { Layout } from "@/shared/components/Layout";
import { Tabs } from "@/shared/ui";
import { TaskBoard } from "@/taskManagement/components/TaskBoard";
import { TaskListContainer } from "@/taskManagement/components/TaskListContainer";
import { StatisticsDashboard } from "@/statistics/components/StatisticsDashboard";

function App() {
  return (
    <Layout>
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
    </Layout>
  )
}

export default App
