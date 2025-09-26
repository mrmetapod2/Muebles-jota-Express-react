export function resetCartCount() {
  localStorage.removeItem('cartCount');
  contador = 0;
  const cartCount = document.querySelector(".cart-count");
  if (cartCount) {
    cartCount.textContent = contador;
  }
}
