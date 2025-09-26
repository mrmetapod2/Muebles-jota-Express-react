//este archivo es el equivalente a index.html
import React, { useEffect } from "react";
import Header from "../inc/header.inc";
import Footer from "../inc/footer.inc";
import "../css/index.css";

function Home() {
  useEffect(() => {
    if (window.renderizarProductos) {
      window.renderizarProductos(4);
    }
  }, []);

  return (
    <>
      <Header />

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Bienvenido a Nuestra Tienda</h1>
            <p>Encuentra productos únicos y de calidad premium</p>
            <a href="/productos" className="btn">
              Ver Productos
            </a>
          </div>
        </section>

        <section className="productos">
          <h2>Productos Destacados</h2>
          <div id="productos-container" className="productos-grid"></div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
