import React from "react";
import styles from "../css/productos.module.css";
import ProductosMuestra from "../js/ProductosMuestra";

const ProductosDestacados = ({ navigate }) => {
  return (
    <section className={styles["productos"]}>
      <h2>Productos Destacados</h2>
      <div id="productos-container" className={styles["productos-grid"]}>
        <ProductosMuestra randomCount={4} navigate={navigate} />
      </div>
    </section>
  );
};

export default ProductosDestacados;
