import { useAuth } from "../context/AuthContext";

const MisPedidos = () => {
  const { user } = useAuth();

  return (
    <section className="page pedidos">
      <h1>Mis pedidos</h1>
      <p>Hola {user?.name || ""}, aún no tienes pedidos registrados.</p>
      <p>Cuando realices compras, podrás consultarlas aquí.</p>
    </section>
  );
};

export default MisPedidos;
