import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import proyectoContext from "../../context/proyectos/proyectoContext";

export const NuevoProyecto = () => {
  // Obtener el state del formulario
  const {
    formulario,
    errorformulario,
    mostrarFormulario,
    agregarProyecto,
    mostrarError,
  } = useContext(proyectoContext);

  const [proyecto, inputOnChange, reset] = useForm({
    nombre: "",
  });

  // Extraemos el nombre del proyecto
  const { nombre } = proyecto;

  // Cuando el usuario envia un proyecto
  const onSubmitProyecto = (e) => {
    e.preventDefault();

    // Validar el Proyecto
    if (nombre.trim() === "") {
      mostrarError();
      return;
    }

    // Agregar al state
    agregarProyecto(proyecto);
    // Reiniciar el form
    reset();
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => mostrarFormulario()}
      >
        Nuevo Proyecto
      </button>

      {formulario && (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            value={nombre}
            onChange={inputOnChange}
            autoComplete="off"
          />

          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      )}

      {errorformulario && (
        <p className="mensaje error">El nombre del Proyecto es obligatorio</p>
      )}
    </>
  );
};
