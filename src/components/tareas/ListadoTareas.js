import { Tarea } from "./Tarea";

export const ListadoTareas = () => {
  const tareasProyecto = [
    { nombre: "Elegir Plataforma", estado: true },
    { nombre: "Elegir Colores", estado: false },
    { nombre: "Elegir Pago", estado: false },
    { nombre: "Elegir Hosting", estado: true },
  ];

  return (
    <div>
      <div className="contenedor-titulo">
        <h2 className="titulo-proyecto">Proyecto: Tienda Virtual</h2>
        <button type="button" className="btn btn-eliminar">
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
