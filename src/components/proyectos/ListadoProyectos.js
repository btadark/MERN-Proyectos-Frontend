import { useContext, useEffect } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import { Proyecto } from "./Proyecto";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const ListadoProyectos = () => {
  // Extraer los proyectos
  const { proyectos, obtenerProyectos } = useContext(proyectoContext);

  useEffect(() => {
    obtenerProyectos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Revisar si los proyectos tiene contenido
  if (proyectos.length === 0) {
    return <p>Aun no tienes ningun proyecto, comienza creando uno :D</p>;
  }

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {proyectos.map((proyecto) => (
          <CSSTransition key={proyecto.id} timeout={200} classNames="proyecto">
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};
