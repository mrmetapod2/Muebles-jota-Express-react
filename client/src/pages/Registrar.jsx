import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../utils/api";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [mensaje, setMensaje] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");

    try {
      const data = await apiFetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ nombre, email, password }),
      });

      // Se loguea igual que en login
      login(data.token, data.user);

      navigate("/perfil");
    } catch (err) {
      setMensaje(err.message || "Error al registrarse");
      console.error(err);
    }
  };

  return (
    <main className="login-container">
      <h1>Crear Cuenta</h1>

      {mensaje && <p className="mensaje-error">{mensaje}</p>}

      <form className="login-form" onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          minLength={6}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn-primary">
          Registrarse
        </button>
      </form>

      <p>
        ¿Ya tenés cuenta?{" "}
        <a style={{ cursor: "pointer" }} onClick={() => navigate("/login")}>
          Iniciar sesión
        </a>
      </p>
    </main>
  );
}
