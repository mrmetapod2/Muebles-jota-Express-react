import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { apiFetch } from "../utils/api";

const MisPedidos = () => {
  const { user, token } = useAuth();
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPedidos = async () => {
      if (!token) return;

      try {
        const data = await apiFetch("/api/pedidos", { token });
        setPedidos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPedidos();
  }, [token]);

  return (
    <section className="page pedidos">
      <h1>Mis pedidos</h1>
      <p>Hola {user?.nombre || user?.name || ""}</p>
      {error && <p className="form-error">{error}</p>}
      {loading ? (
        <p>Cargando pedidos...</p>
      ) : pedidos.length === 0 ? (
        <p>Aún no tienes pedidos registrados.</p>
      ) : (
        <ul>
          {pedidos.map((pedido) => (
            <li key={pedido._id}>
              <strong>#{pedido._id}</strong> - ${pedido.total} - {pedido.estado}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default MisPedidos;
