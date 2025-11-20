import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Productos from "./pages/Productos";
import ProductDetail from "./pages/Producto";
import Contacto from "./pages/Contacto";
import AdminCreateProduct from "./pages/AdminCreateProduct";
import Carrito from "./pages/Carrito";
import Navbar from "./componentes/Navbar.inc";
import Footer from "./componentes/footer.inc";


function App() {
  const [carrito, setCarrito] = useState([]);

  const addToCart = (producto) => {
   
    setCarrito((prev) => [...prev, producto]);
    console.log(carrito);
  };
  
  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((p) => p._id !== id));
  };

  const vaciarCarrito = () => setCarrito([]);

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
        <Route path="/carrito" element={<Carrito addToCart={addToCart} eliminarDelCarrito={eliminarDelCarrito} vaciarCarrito={vaciarCarrito}  carrito={carrito}/>}/>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
