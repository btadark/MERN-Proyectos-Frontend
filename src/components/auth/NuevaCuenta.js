import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export const NuevaCuenta = () => {
  const [usuario, inputOnChange] = useForm({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });

  // Extraer de Usuario
  const { nombre, email, password, confirmar } = usuario;

  // Cuando el usuario quiere iniciar sesion
  const onSubmit = (e) => {
    e.preventDefault();

    // Validacion

    // Password minimo de 6 Caracteres

    // Los 2 password sean iguales

    // Pasarlo al action
  };

  return (
    <div className="form-usuario">
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
