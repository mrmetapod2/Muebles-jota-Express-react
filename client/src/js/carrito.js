let contador = 0;

function initCarrito() {
  // Elemento contador en el header
  const cartCount = document.querySelector(".cart-count");
  if (cartCount) {
    cartCount.textContent = contador;
  }

  // Todos los botones "Añadir al Carrito"
  const botonesCarrito = document.querySelectorAll(".btn-carrito");

  botonesCarrito.forEach(boton => {
    boton.addEventListener("click", () => {
      contador++;
      if (cartCount) {
        cartCount.textContent = contador;
      }
      // Guardar el contador en localStorage para persistencia
      localStorage.setItem('cartCount', contador);
    });
  });
}

// Inicializar contador desde localStorage al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  contador = parseInt(localStorage.getItem('cartCount')) || 0;
  const cartCount = document.querySelector(".cart-count");
  if (cartCount) {
    cartCount.textContent = contador;
  }
});
