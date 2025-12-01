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
      <div className="pedidos-card">
        <p className="pedidos-greeting">
          Hola {user?.nombre || user?.name || ""}
        </p>
        {error && <p className="form-error">{error}</p>}
        {loading ? (
          <p className="pedidos-placeholder">Cargando pedidos...</p>
        ) : pedidos.length === 0 ? (
          <p className="pedidos-placeholder">
            Aún no tienes pedidos registrados.
          </p>
        ) : (
          <ul className="pedidos-list">
            {pedidos.map((pedido) => (
              <li key={pedido._id} className="pedidos-item">
                <div>
                  <span className="pedido-id">#{pedido._id}</span>
                  <span className="pedido-estado">{pedido.estado}</span>
                </div>
                <span className="pedido-total">${pedido.total}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default MisPedidos;
