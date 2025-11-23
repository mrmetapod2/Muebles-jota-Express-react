// src/inc/Navbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar({ cartCount, resetCart }) {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

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

        {typeof resetCart === "function" && (
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
        )}

        {isAuthenticated ? (
          <div className="auth-links">
            <span className="auth-user">Hola, {user?.name || "Usuario"}</span>
            <a onClick={() => navigate("/perfil")}>Mi Perfil</a>
            <a onClick={() => navigate("/mis-pedidos")}>Mis pedidos</a>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <a onClick={() => navigate("/login")}>Login</a>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
