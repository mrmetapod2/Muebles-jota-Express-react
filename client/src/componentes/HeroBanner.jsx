import React from "react";
import styles from "../css/index.module.css";

const HeroBanner = () => {
  return (
    <section className={styles["hero"]}>
      <div className={styles["hero-content"]}>
        <h1>Bienvenido a Nuestra Tienda</h1>
        <p>Encuentra productos únicos y de calidad premium</p>
        <a href="/productos" className={styles["btn"]}>
          Ver Productos
        </a>
      </div>
    </section>
  );
};

export default HeroBanner;
