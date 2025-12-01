import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

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
import Register from "./pages/Registrar";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/producto/:id" element={<ProductDetail />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/admin/crear-producto" element={<AdminCreateProduct />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
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
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
