import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { useState } from "react";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Producto from "./pages/Producto";
import Contacto from "./pages/Contacto";
import Navbar from "./inc/Navbar.inc";


function App() {
  // 1) Estado global del carrito en App
  const [carrito, setCarrito] = useState([]);

  // 2) Función para añadir producto al carrito
  const addToCart = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <Router>
      {/* 3) Navbar recibe la cantidad de productos */}
      <Navbar cartCount={carrito.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        {/* Le pasamos addToCart a Producto */}
        <Route path="/producto/:id" element={<Producto addToCart={addToCart} />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;