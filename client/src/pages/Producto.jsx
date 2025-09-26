//este archivo es el equivalente a index.html
import React, { useEffect } from "react";
import Header from "../inc/header.inc";
import Footer from "../inc/footer.inc";
import "../css/producto.css";

function Producto() {
  

  return (
    <>
      <Header />

      <main class="producto-detalle">
        <section class="detalle">
        <img src="/img/ejemplo-mueble.jpg" alt="Nombre del Producto" className="imagen-detalle"> </img>
        <div class="info-detalle">
            <h1>Nombre del Producto</h1>
            <p class="descripcion"></p>
            <p class="detalles"><strong></strong> </p>
            <p class="precio">Precio: $45.000</p>
            <button class="btn-carrito">Añadir al Carrito</button>
        </div>
        </section>
    </main>

      <Footer />
    </>
  );
}

export default Producto;
