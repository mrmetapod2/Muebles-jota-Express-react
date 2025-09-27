//este archivo es el equivalente a index.html
import React, { useEffect } from "react";
import Header from "../inc/header.inc";
import Footer from "../inc/footer.inc";
import styles from "../css/contacto.module.css";

function Home() {

  return (
    <>
      <Header />

      <main className={styles["main"]}>
        <h1 className={styles["h1"]}>Página de Contacto</h1>

        <section className={styles["contacto-section"]}>
            <form className={styles["contacto-form"]} id="contacto-form">
                <label for="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" ></input>

                <label for="email">Correo electrónico</label>
                <input  id="email" name="email" placeholder="tu@email.com" ></input>

                <label for="mensaje">Mensaje</label>
                <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje..." ></textarea>

                <button type="submit">Enviar</button>
                <p id="mensaje-exito" className={styles["oculto"]}></p>
            </form>
        
        </section>
    </main>

      <Footer />
    </>
  );
}

export default Home;
