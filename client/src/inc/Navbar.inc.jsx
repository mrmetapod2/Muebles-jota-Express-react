// src/inc/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#eee" }}>
      <div>
        <Link to="/">Muebles Jota Express</Link>
      </div>

      <ul style={{ listStyle: "none", display: "flex", gap: "15px" }}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>

      <div>
        🛒 Carrito: <span>{cartCount}</span>
      </div>
    </nav>
  );
}

export default Navbar;
