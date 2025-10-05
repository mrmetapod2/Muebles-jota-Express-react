import React from "react";
import styles from "../css/producto.module.css";

const ProductoDetalle = ({ producto, addToCart }) => {
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

          {/* Botón que añade el producto al carrito */}
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
