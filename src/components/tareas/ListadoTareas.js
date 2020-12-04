import { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";
import { Tarea } from "./Tarea";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const ListadoTareas = () => {
  // Obtener state de proyecto
  const { proyecto, eliminarProyecto } = useContext(proyectoContext);

  // Obtener state de tareas
  const { tareasproyecto } = useContext(tareaContext);

  // Si no hay proyecto seleccionado
  if (!proyecto) return <h2>Seleccion un Proyecto</h2>;

  // Eliminar un proyecto
  const onClickEliminarProyecto = () => {
    eliminarProyecto(proyecto._id);
  };

  return (
    <div>
      <div className="contenedor-titulo">
        <h2 className="titulo-proyecto">Proyecto: {proyecto.nombre}</h2>
        <button
          type="button"
          className="btn btn-eliminar"
          onClick={onClickEliminarProyecto}
        >
          Eliminar Proyecto &times;
        </button>
      </div>
      <ul className="listado-tareas">
        {tareasproyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          <TransitionGroup>
            {tareasproyecto.map((tarea) => (
              <CSSTransition key={tarea.id} timeout={200} classNames="tarea">
                <Tarea tarea={tarea} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>
    </div>
  );
};
