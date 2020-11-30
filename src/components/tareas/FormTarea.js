import { useContext, useEffect } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";
import { useForm } from "../../hooks/useForm";

export const FormTarea = () => {
  // Extraer el proyecto activo
  const { proyecto } = useContext(proyectoContext);

  // Obtener state de tareas
  const {
    tareaseleccionada,
    agregarTarea,
    errortarea,
    validarTarea,
    obtenerTareas,
    actualizarTarea,
    limpiarTarea,
  } = useContext(tareaContext);

  // Leer los valores del formulario
  const [tarea, inputOnChange, reset, guardarTarea] = useForm({
    nombre: "",
  });
  // Effect que detecta si hay una tarea seleccionada
  useEffect(() => {
    if (tareaseleccionada !== null) {
      guardarTarea(tareaseleccionada);
    } else {
      guardarTarea({
        nombre: "",
      });
    }
  }, [tareaseleccionada]);

  // Extraer el nombre del proyecto
  const { nombre } = tarea;

  // Si no hay proyecto seleccionado
  if (!proyecto) return null;

  const onSubmit = (e) => {
    e.preventDefault();

    //Validar
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }

    // Revisar si es edicion o si es nueva tarea
    if (tareaseleccionada === null) {
      // Agregar la nueva tarea al state de tareas
      tarea.id = tarea.proyectoId = proyecto.id;
      tarea.estado = false;

      agregarTarea(tarea);
    } else {
      // actualizar tarea existente
      actualizarTarea(tarea);
      limpiarTarea();
    }

    // Obtener y filtrar las tareas del proyecto actual
    obtenerTareas(proyecto.id);

    // Reiniciar el form
    reset();
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea"
            name="nombre"
            value={nombre}
            onChange={inputOnChange}
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={tareaseleccionada ? "Editar Tarea" : "Agregar Tarea"}
          />
        </div>
      </form>
      {errortarea && (
        <p className="mensaje error">El nombre de la Tarea es Obligatorio</p>
      )}
    </div>
  );
};
