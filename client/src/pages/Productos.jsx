import React from "react";
import Header from "../componentes/header.inc";
import Footer from "../componentes/footer.inc";
import styles from "../css/productos.module.css";
import ProductosMuestra from "../js/ProductosMuestra";
import SearchBar from "../componentes/SearchBar";

function Productos(navigate) {
  

  return (
    <>

    <main className={styles.main}>
        
        <SearchBar />
        <ProductosMuestra  />
    </main>

    
   
    </>
  );
}

export default Productos;
