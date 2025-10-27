import React from "react";
import { useLocation } from "react-router-dom";
import styles from "../css/producto.module.css";

const ProductoDetalle = ({ addToCart }) => {
  const location = useLocation();
  const producto = location.state; // the product data passed via navigate
  console.log(producto);
  if (!producto) return <p>Producto no encontrado</p>; // fallback

  return (
    <main className={styles["producto-detalle"]}>
      <section className={styles["detalle"]}>
        <img
          src={producto.img}
          alt={producto.nombre}
          className={styles["imagen-detalle"]}
        />
        <div className={styles["info-detalle"]}>
          <h1>{producto.nombre}</h1>
          <p className={styles["descripcion"]}>{producto.descripcion}</p>
          <p className={styles["detalles"]}>
            <strong>Detalles:</strong> {producto.detalles}
          </p>
          <p className={styles["precio"]}>Precio: {producto.precio}</p>

          <button
            className={styles["btn-carrito"]}
            onClick={() => addToCart(producto)}
          >
            Añadir al Carrito
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProductoDetalle;
