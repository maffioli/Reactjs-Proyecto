import { ProyectBoard } from "./projectsManagement/components/ProyectBoard";
import { ProyectListContainer } from "./projectsManagement/components/ProyectListContainer";
import { Layout } from "./shared/components/Layout";
import Tabs from "./shared/components/Tabs";
import { TaskBoard } from "./taskManagement/components/TaskBoard";
import { TaskListContainer } from "./taskManagement/components/TaskListContainer";

function App() {
  return (
    <Layout>
      <Tabs defaultTab="board">
        <Tabs.List>
          <Tabs.Tab id="board">Pizarra</Tabs.Tab>
          <Tabs.Tab id="tasks">Mis Tareas</Tabs.Tab>
          <Tabs.Tab id="projects">Proyectos</Tabs.Tab>
          <Tabs.Tab id="stats">Estadísticas</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel id="board">
            <h2
              style={{ color: "#94a3b8", textAlign: "center" }}
              >Mis Tareas</h2>
            <TaskBoard />

            <h2
              style={{ color: "#94a3b8", textAlign: "center" }}
              >Mis Proyectos</h2>
            <ProyectBoard />
          </Tabs.Panel>
          <Tabs.Panel id="tasks">
            <TaskListContainer />
          </Tabs.Panel>
          <Tabs.Panel id="projects">
            <ProyectListContainer />
          </Tabs.Panel>
          <Tabs.Panel id="stats">
            <p
              style={{ color: "#94a3b8", padding: "32px", textAlign: "center" }}
            >
              Próximamente: Estadísticas
            </p>
          </Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
    </Layout>
  )
}

export default App
