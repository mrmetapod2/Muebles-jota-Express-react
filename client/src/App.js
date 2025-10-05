
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import ProductDetail from "./pages/Producto";
import Contacto from "./pages/Contacto";
import Navbar from "./componentes/Navbar.inc";
import Footer from "./componentes/footer.inc";

function App() {
  // Estado global del carrito
  const [carrito, setCarrito] = useState([]);

  // Estado para manejar "navegación"
  const [pagina, setPagina] = useState("home");

  // Si quieres mostrar un producto específico
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const addToCart = (producto) => {
    setCarrito([...carrito, producto]);
  };

  // Función de navegación
  const navigate = (paginaDestino, producto = null) => {
    setPagina(paginaDestino);
    console.log(producto);
    setProductoSeleccionado(producto);
    console.log(productoSeleccionado);
  };
  

  return (
    <>
      {/* Navbar recibe navigate y cantidad del carrito */}
      <Navbar cartCount={carrito.length} navigate={navigate} />

      {/* Renderizado condicional */}
      {pagina === "home" && <Home navigate={navigate} />}
      {pagina === "productos" && <Productos navigate={navigate} />}
      {pagina === "producto" && (
        <ProductDetail
          producto={productoSeleccionado}
          addToCart={addToCart}
          navigate={navigate}
          
        />
      )}
      {pagina === "contacto" && <Contacto />}

      <Footer />
    </>
  );
}

export default App;