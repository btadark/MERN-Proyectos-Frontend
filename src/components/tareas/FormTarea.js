import { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

export const FormTarea = () => {
  // Extraer el proyecto activo
  const { proyecto } = useContext(proyectoContext);

  // Si no hay proyecto seleccionado
  if (!proyecto) return null;

  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea"
            name="nombre"
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Agregar Tarea"
          />
        </div>
      </form>
    </div>
  );
};
