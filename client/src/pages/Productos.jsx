import React, { useEffect } from "react";
import Header from "../inc/header.inc";
import Footer from "../inc/footer.inc";
import styles from "../css/productos.module.css";
import ProductosMuestra from "../js/ProductosMuestra";


function Productos() {
  

  return (
    <>
    <Header />

    <main className={styles.main}>
        
        <div>
            <div className={styles["header-busqueda"]}>
              <input type="text" id="busqueda-productos" placeholder="Buscar productos..."></input>
              <button id="btn-buscar">🔍</button>
            </div>
        </div>
        <div id="productos-container" className={styles["productos-grid"]}>
          <ProductosMuestra/>
        </div>
    </main>

    
    <Footer />
    </>
  );
}

export default Productos;
