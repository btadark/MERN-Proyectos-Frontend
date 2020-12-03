import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import alertaContext from "../../context/alertas/alertasContext";
import authContext from "../../context/autenticacion/authContext";
import { useForm } from "../../hooks/useForm";

export const Login = ({ history }) => {
  // Extraemos los valores del context
  const { mensaje, autenticado, iniciarSesion } = useContext(authContext);
  const { alerta, mostrarAlerta } = useContext(alertaContext);

  // En caso de que el usuario o el password no exista
  useEffect(() => {
    if (autenticado) {
      history.push("/proyectos");
    }

    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
  }, [mensaje, autenticado, history]);

  const [usuario, inputOnChange] = useForm({
    email: "",
    password: "",
  });

  // Extraer de Usuario
  const { email, password } = usuario;

  // Cuando el usuario quiere iniciar sesion
  const onSubmit = (e) => {
    e.preventDefault();

    // Validacion
    if (email.trim() === "" || password.trim() === "") {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
    }

    // Pasarlo al action
    iniciarSesion({ email, password });
  };

  return (
    <div className="form-usuario">
      {alerta && (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      )}
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              autoComplete="off"
              value={email}
              onChange={inputOnChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu password"
              autoComplete="off"
              value={password}
              onChange={inputOnChange}
            />
          </div>

          <div className="campo-form">
            <button className="btn btn-primario btn-block">
              Iniciar Sesión
            </button>
          </div>
        </form>
        <Link to={"/nueva-cuenta"} className="enlace-cuenta">
          Obtener Cuenta
        </Link>
      </div>
    </div>
  );
};
