//este archivo es el equivalente a index.html
import React, { useEffect } from "react";
import Header from "../inc/header.inc";
import Footer from "../inc/footer.inc";
import "../css/contacto.css";

function Home() {

  return (
    <>
      <Header />

      <main>
        <h1>Página de Contacto</h1>

        <section classname="contacto-section">
            <form classname="contacto-form" id="contacto-form">
                <label for="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" ></input>

                <label for="email">Correo electrónico</label>
                <input  id="email" name="email" placeholder="tu@email.com" ></input>

                <label for="mensaje">Mensaje</label>
                <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje..." ></textarea>

                <button type="submit">Enviar</button>
                <p id="mensaje-exito" classname="oculto"></p>
            </form>
        
        </section>
    </main>

      <Footer />
    </>
  );
}

export default Home;
