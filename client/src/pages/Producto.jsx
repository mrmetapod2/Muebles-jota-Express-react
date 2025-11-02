// src/pages/Producto.jsx
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "../css/producto.module.css";
import ProductoDetalle from "../componentes/ProductoDetalle";

function Producto({ addToCart }) {
  const location = useLocation();
  const producto = location.state; // producto passed via navigate
  const { id } = useParams(); // optional, if you want to fetch later by id
  console.log("Producto page received producto:", id);
  if (!id) {
    return (
      <main className={styles["producto-detalle"]}>
        <p>Producto no encontrado o cargando...</p>
      </main>
    );
  }

  return <ProductoDetalle id={id} addToCart={addToCart} />;
}

export default Producto;
