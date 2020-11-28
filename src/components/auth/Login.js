import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export const Login = () => {
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

    // Pasarlo al action
  };

  return (
    <div className="form-usuario">
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
