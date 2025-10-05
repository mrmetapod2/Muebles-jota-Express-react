// src/pages/ContactPage.jsx
import React from "react";
import ContactForm from "../inc/ContactForm";
import styles from "../css/contacto.module.css"; // <- importamos el module

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Página de Contacto</h1>

      <section className={styles["contacto-section"]}>
        <ContactForm />
      </section>
    </main>
  );
}
