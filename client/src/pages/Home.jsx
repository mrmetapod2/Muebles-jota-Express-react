//este archivo es el equivalente a index.html
import React from "react";
import Header from "../componentes/header.inc";
import Footer from "../componentes/footer.inc";
import styles from "../css/index.module.css";
import ProductosMuestra from "../js/ProductosMuestra";
import HeroBanner from "../componentes/HeroBanner";
import ProductosDestacados from "../componentes/productos";

function Home(navigate) {


  return (
    <>

      <main className={styles.main}>
        <HeroBanner />

        <ProductosDestacados navigate={navigate} />
      </main>

     
    </>
  );
}

export default Home;
