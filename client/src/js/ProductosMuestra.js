import React, { useEffect, useState } from "react";
import styles from "../css/index.module.css";
import { fetchProductos } from "./fetchProductos";
import { useNavigate } from "react-router-dom";

const formatPrice = (n) =>
  typeof n === "number"
    ? new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(n)
    : n;

function ProductCard({ id, nombre, precio, imagenUrl, descripcion, stock, detalles }) {
  const navigate = useNavigate();

  return (
    <div className={styles["producto-card"]}>
      <div className={styles["producto"]}>
        <h3>{nombre}</h3>
        <img src={imagenUrl || "/placeholder.png"} alt={nombre} />
        <p className={styles["precio"]}>{formatPrice(precio)}</p>
        {typeof stock === "number" && <p>Stock: {stock}</p>}
        <button
          onClick={() =>
            navigate(`/producto/${id}`, {
              state: { id, nombre, precio, imagenUrl, descripcion, stock, detalles },
            })
          }
          className={styles["btn"]}
        >
          Ver más
        </button>
      </div>
    </div>
  );
}

export default function Productos({ randomCount }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchProductos()
      .then((all) => {
        const list = Array.isArray(all) ? all : [];
        if (randomCount) {
          const shuffled = [...list].sort(() => 0.5 - Math.random());
          setProductos(shuffled.slice(0, randomCount));
        } else {
          setProductos(list);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [randomCount]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los productos</p>;

  return (
    <div className={styles["productos-grid"]}>
      {productos.map((p) => (
        <ProductCard
          key={p.id}
          id={p.id}
          nombre={p.nombre}
          precio={p.precio}
          imagenUrl={p.imagenUrl}
          descripcion={p.descripcion}
          stock={p.stock}
          detalles={p.detalles}
        />
      ))}
    </div>
  );
}
