//este archivo es el equivalente a index.html
import React, { useEffect } from "react";
import Header from "../inc/header.inc";
import Footer from "../inc/footer.inc";
import styles from "../css/producto.module.css";

function Producto() {
  

  return (
    <>
      <Header />

      <main className={styles["producto-detalle"]}>
        <section className={styles["detalle"]}>
        <img src="/img/ejemplo-mueble.jpg" alt="Nombre del Producto" className={styles["imagen-detalle"]}> </img>
        <div className={styles["info-detalle"]}>
            <h1>Nombre del Producto</h1>
            <p className={styles["descripcion"]}></p>
            <p className={styles["detalles"]}><strong></strong> </p>
            <p className={styles["precio"]}>Precio: $45.000</p>
            <button className={styles["btn-carrito"]}>Añadir al Carrito</button>
        </div>
        </section>
    </main>

      <Footer />
    </>
  );
}

export default Producto;
