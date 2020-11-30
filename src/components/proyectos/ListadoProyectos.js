import { useContext, useEffect } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import { Proyecto } from "./Proyecto";

export const ListadoProyectos = () => {
  // Extraer los proyectos
  const { proyectos, obtenerProyectos } = useContext(proyectoContext);

  useEffect(() => {
    obtenerProyectos();
  }, []);

  // Revisar si los proyectos tiene contenido
  if (proyectos.length === 0) {
    return <p>Aun no tienes ningun proyecto, comienza creando uno :D</p>;
  }

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto key={proyecto.id} proyecto={proyecto} />
      ))}
    </ul>
  );
};
