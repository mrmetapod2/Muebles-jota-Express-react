// src/inc/Navbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ cartCount, resetCart }) {
  const navigate = useNavigate();

  return (
    <header className="site-header">
      {/* Logo */}
      <button
        onClick={() => navigate("/")}
        className="logo-link"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <img src="/img/logo.svg" alt="Logo" className="logo" />
      </button>

      {/* Navigation */}
      <nav>
        <a onClick={() => navigate("/")}>Inicio</a>
        <a onClick={() => navigate("/productos")}>Productos</a>
        <a onClick={() => navigate("/contacto")}>Contacto</a>

        {/* Carrito */}
        <a onClick={() => navigate("/carrito")} className="cart-link">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{cartCount}</span>
        </a>

        <button
          id="reset-cart"
          title="Vaciar carrito"
          onClick={resetCart}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            marginLeft: "5px",
          }}
        >
          &#x2716;
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
