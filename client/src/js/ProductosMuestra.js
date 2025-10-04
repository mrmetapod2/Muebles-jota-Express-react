import React, { useEffect, useState } from "react";
import styles from "../css/index.module.css";
import { useNavigate } from "react-router-dom";
import { fetchProductos } from "./fetchProductos"; // tu función ya definida

function ProductCard({ id, nombre, precio, img }) {
  const navigate = useNavigate();

  return (
    <div className={styles["producto-card"]}>
      <div className={styles["producto"]}>
        <h3>{nombre}</h3>
        <img src={img} alt={nombre} />
        <p className={styles["precio"]}>{precio}</p>
        <button onClick={() => navigate(`/producto/${id}`)}>Ver más</button>
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
      .then(all => {
        if (randomCount) {
          const shuffled = [...all].sort(() => 0.5 - Math.random());
          setProductos(shuffled.slice(0, randomCount));
        } else {
          setProductos(all);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [randomCount]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los productos</p>;

  return (
    <div className={styles["productos-grid"]}>
      {productos.map(p => (
        <ProductCard 
          key={p.id} 
          id={p.id} 
          nombre={p.nombre} 
          precio={p.precio} 
          img={p.img} 
        />
      ))}
    </div>
  );
}
