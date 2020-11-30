import { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import { Tarea } from "./Tarea";

export const ListadoTareas = () => {
  // Obtener proyecto
  const { proyecto, eliminarProyecto } = useContext(proyectoContext);

  // Si no hay proyecto seleccionado
  if (!proyecto) return <h2>Seleccion un Proyecto</h2>;

  const tareasProyecto = [
    { nombre: "Elegir Plataforma", estado: true },
    { nombre: "Elegir Colores", estado: false },
    { nombre: "Elegir Pago", estado: false },
    { nombre: "Elegir Hosting", estado: true },
  ];

  // Eliminar un proyecto
  const onClickEliminarProyecto = () => {
    eliminarProyecto(proyecto.id);
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
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea, index) => (
            <Tarea key={index} tarea={tarea} />
          ))
        )}
      </ul>
    </div>
  );
};
