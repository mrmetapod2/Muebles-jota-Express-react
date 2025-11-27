import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { apiFetch } from "../utils/api";

const Perfil = () => {
  const { user, token } = useAuth();
  const [serverUser, setServerUser] = useState(user);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!token) return;

      try {
        const data = await apiFetch("/api/auth/profile", { token });
        setServerUser(data.user);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProfile();
  }, [token]);

  if (!serverUser) {
    return <p>Cargando perfil...</p>;
  }

  return (
    <section className="page perfil">
      <h1>Mi Perfil</h1>
      {error && <p className="form-error">{error}</p>}
      <div className="perfil-card">
        <p><strong>Nombre:</strong> {serverUser.nombre || serverUser.name}</p>
        <p><strong>Correo:</strong> {serverUser.email}</p>
        <p><strong>Rol:</strong> {serverUser.role}</p>
      </div>
    </section>
  );
};

export default Perfil;
