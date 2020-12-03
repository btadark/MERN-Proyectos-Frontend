import { useContext, useEffect } from "react";
import authContext from "../../context/autenticacion/authContext";

export const Barra = () => {
  // Extraer la informacion de autenticacion
  const { usuario, usuarioAutenticado, cerrarSesion } = useContext(authContext);

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  return (
    <header className="app-header">
      {usuario && (
        <p className="nombre-usuario">
          Hola <span>{usuario.nombre}</span>
        </p>
      )}

      <nav className="nav-principal">
        <button
          className="btn btn-blank cerrar-sesion"
          onClick={() => cerrarSesion()}
        >
          Cerrar Sesión
        </button>
      </nav>
    </header>
  );
};
