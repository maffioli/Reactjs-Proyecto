import { useTasks } from "../hooks/useTasks";
import { TaskCard } from "./TaskCard";

export const TaskBoard = () => {
  const { todoTasks, inProgressTasks, doneTasks } = useTasks();

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <section>
        <h2>Por hacer ({todoTasks.length})</h2>
        {todoTasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </section>

      <section>
        <h2>En progreso ({inProgressTasks.length})</h2>
        {inProgressTasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </section>

      <section>
        <h2>Completadas ({doneTasks.length})</h2>
        {doneTasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </section>
    </div>
  );
};