//este archivo es el equivalente a index.html
import React, { useEffect } from "react";
import Header from "../inc/header.inc";
import Footer from "../inc/footer.inc";
import styles from "../css/index.module.css";
import ProductosMuestra from "../js/ProductosMuestra";

function Home() {


  return (
    <>


      <main className={styles.main}>
        <section className={styles["hero"]}>
          <div className={styles["hero-content"]}>
            <h1>Bienvenido a Nuestra Tienda</h1>
            <p>Encuentra productos únicos y de calidad premium</p>
            <a href="/productos" className={styles["btn"]}>
              Ver Productos
            </a>
          </div>
        </section>

        <section className={styles["productos"]}>
          <h2>Productos Destacados</h2>
          <div id="productos-container" className={styles["productos-grid"]}>
            <ProductosMuestra randomCount={4} />
          </div>
        </section>
      </main>

     
    </>
  );
}

export default Home;
