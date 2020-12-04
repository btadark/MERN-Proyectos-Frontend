import { useContext, useEffect } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import { Proyecto } from "./Proyecto";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import alertaContext from "../../context/alertas/alertasContext";

export const ListadoProyectos = () => {
  // Extraer los proyectos
  const { proyectos, mensaje, obtenerProyectos } = useContext(proyectoContext);
  const { alerta, mostrarAlerta } = useContext(alertaContext);

  useEffect(() => {
    // Si hay un error
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }

    obtenerProyectos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mensaje]);

  // Revisar si los proyectos tiene contenido
  if (proyectos.length === 0) {
    return <p>Aun no tienes ningun proyecto, comienza creando uno :D</p>;
  }

  return (
    <ul className="listado-proyectos">
      {alerta && (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      )}

      <TransitionGroup>
        {proyectos.map((proyecto) => (
          <CSSTransition key={proyecto._id} timeout={200} classNames="proyecto">
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};
