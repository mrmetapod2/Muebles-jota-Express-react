// src/inc/ContactForm.jsx
import React, { useState } from "react";
import styles from "../css/contacto.module.css"; // <- reutilizamos CSS viejo

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const onSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!form.name.trim()) {
      setError("Por favor, ingresá tu nombre.");
      setSubmitted(false);
      return;
    }
    if (!form.email.trim() || !validateEmail(form.email)) {
      setError("Por favor, ingresá un correo electrónico válido.");
      setSubmitted(false);
      return;
    }
    if (!form.message.trim()) {
      setError("Por favor, escribí un mensaje.");
      setSubmitted(false);
      return;
    }

    // OK
    console.log("Contacto:", form);
    setError("");
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form className={styles["contacto-form"]} onSubmit={onSubmit} noValidate>
      <label htmlFor="name">Nombre</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Tu nombre"
        value={form.name}
        onChange={onChange}
      />

      <label htmlFor="email">Correo electrónico</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="tu@email.com"
        value={form.email}
        onChange={onChange}
      />

      <label htmlFor="message">Mensaje</label>
      <textarea
        id="message"
        name="message"
        placeholder="Escribí tu mensaje…"
        rows={5}
        value={form.message}
        onChange={onChange}
      />

      <button type="submit">Enviar</button>

      {/* usamos el mismo bloque visual que el "success-message",
          y le agregamos una clase nueva para colorear error */}
      {error && <p className={`${styles["success-message"]} ${styles["error-message"]}`}>{error}</p>}
      {submitted && <p className={styles["success-message"]}>¡Gracias! Te responderemos pronto.</p>}
    </form>
  );
}
