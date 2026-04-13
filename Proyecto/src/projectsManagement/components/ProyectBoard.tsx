import { useProyect } from "../hooks/useProyect";
import { ProyectCard } from "./ProyectCard";


export const ProyectBoard = () => {
  const { todoProyects, inProgressProyects, doneProyects } = useProyect();

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <section>
        <h2>Por hacer ({todoProyects.length})</h2>
        {todoProyects.map(proyect => (
          <ProyectCard key={proyect.id} proyect={proyect} />
        ))}
      </section>

      <section>
        <h2>En progreso ({inProgressProyects.length})</h2>
        {inProgressProyects.map(proyect => (
          <ProyectCard key={proyect.id} proyect={proyect} />
        ))}
      </section>

      <section>
        <h2>Completadas ({doneProyects.length})</h2>
        {doneProyects.map(proyect => (
          <ProyectCard key={proyect.id} proyect={proyect} />
        ))}
      </section>
    </div>
  );
};