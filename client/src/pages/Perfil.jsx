import { useAuth } from "../context/AuthContext";

const Perfil = () => {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <section className="page perfil">
      <h1>Mi Perfil</h1>
      <div className="perfil-card">
        <p><strong>Nombre:</strong> {user.name}</p>
        <p><strong>Correo:</strong> {user.email}</p>
      </div>
    </section>
  );
};

export default Perfil;
