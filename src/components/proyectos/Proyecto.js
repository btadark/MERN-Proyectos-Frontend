import { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

export const Proyecto = ({ proyecto }) => {
  // Obtener state de proyectos
  const { proyectoActual } = useContext(proyectoContext);

  // Obtener state de tareas
  const { obtenerTareas } = useContext(tareaContext);

  // Funciom para agregar el proyecto actual
  const seleccionarProyecto = (id) => {
    proyectoActual(id); // Fijar un proyecto actual
    obtenerTareas(id);
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};
