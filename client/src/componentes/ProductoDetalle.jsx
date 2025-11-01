import React from "react";
import { useLocation } from "react-router-dom";
import styles from "../css/producto.module.css";

const formatPrice = (n) =>
  typeof n === "number"
    ? new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(n)
    : n;

const ProductoDetalle = ({ addToCart }) => {
  const { state: producto } = useLocation();

  if (!producto) return <p>Producto no encontrado</p>;

  const { nombre, descripcion, precio, imagenUrl, stock, detalles } = producto;

  return (
    <main className={styles["producto-detalle"]}>
      <section className={styles["detalle"]}>
        <img
          src={imagenUrl || "/placeholder.png"}
          alt={nombre}
          className={styles["imagen-detalle"]}
        />
        <div className={styles["info-detalle"]}>
          <h1>{nombre}</h1>
          {descripcion && <p className={styles["descripcion"]}>{descripcion}</p>}
          {detalles && (
            <p className={styles["detalles"]}>
              <strong>Detalles:</strong> {detalles}
            </p>
          )}
          {typeof stock === "number" && (
            <p className={styles["stock"]}><strong>Stock:</strong> {stock}</p>
          )}
          <p className={styles["precio"]}>Precio: {formatPrice(precio)}</p>

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
