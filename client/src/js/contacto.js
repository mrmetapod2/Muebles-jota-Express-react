document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contacto-form");
  const mensajeExito = document.getElementById("mensaje-exito");
  console.log(form);
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Validar los campos vacíos
    if (nombre === "" || email === "" || mensaje === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Validar el formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, ingresa un correo válido.");
      return;
    }

    // Mostrar mensaje de éxito en la página
    mensajeExito.textContent = "✅ Tu mensaje fue enviado con éxito. Gracias por contactarnos.";
    mensajeExito.classList.remove("oculto");
    mensajeExito.classList.add("exito");

    // Resetear el formulario
    form.reset();
  });
});
