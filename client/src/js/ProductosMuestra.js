import React, { useEffect, useState } from "react";
import styles from "../css/index.module.css";
import { fetchProductos } from "./fetchProductos"; // tu función ya definida

function ProductCard({ id, nombre, precio, img,descripcion,detalles, navigate }) {
  console.log(navigate);
  return (
    <div className={styles["producto-card"]}>
      <div className={styles["producto"]}>
        <h3>{nombre}</h3>
        <img src={img} alt={nombre} />
        <p className={styles["precio"]}>{precio}</p>
        <button onClick={() => navigate.navigate("producto", { id, nombre, precio, img,descripcion,detalles })} className={styles["btn"]}>
          Ver más
        </button>
      </div>
    </div>
  );
}

export default function Productos({ randomCount, navigate }) {
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
          descripcion= {p.descripcion}
          detalles= {p.detalles}
          navigate={navigate}
        />
      ))}
    </div>
  );
}
