import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const redirectPath = location.state?.from?.pathname || "/perfil";

  if (isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    if (!formValues.email || !formValues.password) {
      setError("Completa correo y contraseña");
      return;
    }

    try {
      // TODO: reemplazar por request real al backend cuando exista endpoint de auth
      const fakeToken = `token-${Date.now()}`;
      const fakeUser = {
        name: formValues.email.split("@")[0] || "Usuario",
        email: formValues.email
      };

      login({ token: fakeToken, user: fakeUser });
      navigate(redirectPath, { replace: true });
    } catch (err) {
      setError("No se pudo iniciar sesión. Intenta nuevamente.");
    }
  };

  return (
    <section className="page login">
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Correo electrónico
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Contraseña
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
        </label>

        {error && <p className="form-error">{error}</p>}

        <button type="submit">Ingresar</button>
      </form>
    </section>
  );
};

export default Login;
