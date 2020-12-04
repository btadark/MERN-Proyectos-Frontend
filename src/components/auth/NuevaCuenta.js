import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import alertaContext from "../../context/alertas/alertasContext";
import authContext from "../../context/autenticacion/authContext";
import { useForm } from "../../hooks/useForm";

export const NuevaCuenta = ({ history }) => {
  const [usuario, inputOnChange] = useForm({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });

  const { mensaje, autenticado, registrarUsuario } = useContext(authContext);
  const { alerta, mostrarAlerta } = useContext(alertaContext);

  // En caso del usuario se haya autenticado o registrado o sea un registro duplicado
  useEffect(() => {
    if (autenticado) {
      history.push("/proyectos");
    }

    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mensaje, autenticado, history]);

  // Extraer de Usuario
  const { nombre, email, password, confirmar } = usuario;

  // Cuando el usuario quiere iniciar sesion
  const onSubmit = (e) => {
    e.preventDefault();

    // Validacion
    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmar.trim() === ""
    ) {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
      return;
    }

    // Password minimo de 6 Caracteres
    if (password.length < 6) {
      mostrarAlerta("El password debe ser minimo 6 caracteres", "alerta-error");
      return;
    }

    // Los 2 password sean iguales
    if (password !== confirmar) {
      mostrarAlerta("Los passwords no son iguales", "alerta-error");
      return;
    }

    // Pasarlo al action
    registrarUsuario({
      nombre,
      email,
      password,
    });
  };

  return (
    <div className="form-usuario">
      {alerta && (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      )}
      <div className="contenedor-form sombra-dark">
        <h1>Crear Cuenta</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre"
              autoComplete="off"
              value={nombre}
              onChange={inputOnChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email:</label>
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
            <label htmlFor="password">Password:</label>
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
            <label htmlFor="confirmar">Confirmar Password:</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="Repite tu Password"
              autoComplete="off"
              value={confirmar}
              onChange={inputOnChange}
            />
          </div>

          <div className="campo-form">
            <button className="btn btn-primario btn-block">Registrarme</button>
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};
