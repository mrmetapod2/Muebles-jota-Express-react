import React from "react";
import { Link } from "react-router-dom";
import "../css/header.inc.css"; // adjust path if needed

function Header() {
  return (
    <header className="site-header">
      {/* Logo */}
      <Link to="/" className="logo-link">
        <img src="/img/logo.svg" alt="Logo" className="logo" />
      </Link>

      {/* Navigation */}
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/contacto">Contacto</Link>

        {/* Carrito */}
        <Link to="/carrito" className="cart-link">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">0</span>
        </Link>
        <button
          id="reset-cart"
          title="Vaciar carrito"
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

export default Header;
