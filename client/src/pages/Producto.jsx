// src/pages/Producto.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../inc/header.inc";
import Footer from "../inc/footer.inc";
import styles from "../css/producto.module.css";
import { fetchProductos } from "../js/ProductosMuestra";

function Producto({ addToCart }) {   // 👈 recibimos la función desde App
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetchProductos(id).then(setProducto);
  }, [id]);

  if (!producto) {
    return (
      <>
        <Header />
        <main className={styles["producto-detalle"]}>
          <p>Cargando producto...</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

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

      <Footer />
    </>
  );
}

export default Producto;
