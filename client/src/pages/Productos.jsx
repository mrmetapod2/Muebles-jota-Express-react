import React from "react";
import Header from "../componentes/header.inc";
import Footer from "../componentes/footer.inc";
import styles from "../css/productos.module.css";
import ProductosDestacados from "../componentes/productos";
import SearchBar from "../componentes/SearchBar";

function Productos(navigate) {
  

  return (
    <>

    <main className={styles.main}>
        
        <SearchBar />
        <ProductosDestacados navigate={navigate} />
    </main>

    
   
    </>
  );
}

export default Productos;
