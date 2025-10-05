// src/pages/Producto.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../componentes/header.inc";
import Footer from "../componentes/footer.inc";
import styles from "../css/producto.module.css";
import { fetchProductos } from "../js/fetchProductos";
import ProductoDetalle from "../componentes/ProductoDetalle";

function Producto({ addToCart, producto, navigate }) {   // 👈 recibimos la función desde App
  const { id } = useParams();
  

  /*useEffect(() => {
    fetchProductos(id).then(setProducto);
  }, [id]);*/

  if (!producto) {
    return (
      <>
 
        <main className={styles["producto-detalle"]}>
          <p>Cargando producto...</p>
        </main>
        
      </>
    );
  }

  return (
    <>
      <ProductoDetalle producto={producto} addToCart={addToCart} />
    </>
  );
}

export default Producto;
