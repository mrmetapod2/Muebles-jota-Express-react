import React, { useEffect } from "react";
import Header from "../inc/header.inc";
import Footer from "../inc/footer.inc";
import "../css/productos.css";


function Productos() {
  useEffect(() => {
    if (window.renderizarProductos) {
      window.renderizarProductos();
    }
  }, []);

  return (
    <>
    <Header />

    <main>
        
        <div>
            <div className="header-busqueda">
              <input type="text" id="busqueda-productos" placeholder="Buscar productos..."></input>
              <button id="btn-buscar">🔍</button>
            </div>
        </div>
        <div id="productos-container" className="productos-grid"></div>
    </main>

    
    <Footer />
    </>
  );
}

export default Productos;
