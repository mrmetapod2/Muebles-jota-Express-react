import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Productos from "./pages/Productos";
import ProductDetail from "./pages/Producto";
import Contacto from "./pages/Contacto";
import AdminCreateProduct from "./pages/AdminCreateProduct";
import Carrito from "./pages/Carrito";
import Navbar from "./componentes/Navbar.inc";
import Footer from "./componentes/footer.inc";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import MisPedidos from "./pages/MisPedidos";
import ProtectedRoute from "./componentes/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";


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
    <AuthProvider>
      <Router>
        <Navbar cartCount={carrito.length} resetCart={vaciarCarrito} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route
            path="/producto/:id"
            element={<ProductDetail addToCart={addToCart} />}
          />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/admin/crear-producto" element={<AdminCreateProduct />} />
          <Route
            path="/carrito"
            element={
              <Carrito
                addToCart={addToCart}
                eliminarDelCarrito={eliminarDelCarrito}
                vaciarCarrito={vaciarCarrito}
                carrito={carrito}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/perfil"
            element={
              <ProtectedRoute>
                <Perfil />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mis-pedidos"
            element={
              <ProtectedRoute>
                <MisPedidos />
              </ProtectedRoute>
            }
          />
        </Routes>

        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
