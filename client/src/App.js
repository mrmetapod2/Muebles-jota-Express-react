import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Productos from "./pages/Productos";
import ProductDetail from "./pages/Producto";
import Contacto from "./pages/Contacto";
import AdminCreateProduct from "./pages/AdminCreateProduct";
import Navbar from "./componentes/Navbar.inc";
import Footer from "./componentes/footer.inc";

function App() {
  const [carrito, setCarrito] = useState([]);

  const addToCart = (producto) => {
    setCarrito((prev) => [...prev, producto]);
  };

  return (
    <Router>
      <Navbar cartCount={carrito.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route
          path="/producto/:id"
          element={<ProductDetail addToCart={addToCart} />}
        />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/admin/crear-producto" element={<AdminCreateProduct />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
