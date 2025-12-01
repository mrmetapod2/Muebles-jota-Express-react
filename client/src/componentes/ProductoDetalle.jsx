import React, { useEffect, useState } from "react";
import { useLocation,useParams, useNavigate } from "react-router-dom";
import styles from "../css/producto.module.css";
import { fetchProductos } from "../js/fetchProductos";
import { useCart } from "../context/CartContext";

const PORT =process.env.REACT_APP_PORT_BACK;




const formatPrice = (n) =>
  typeof n === "number"
    ? new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(n)
    : n;

const ProductoDetalle = () => {
   const { addToCart } = useCart();
  const { id } = useParams();
  console.log("ProductoDetalle received ID:", id);
  const [producto, setProducto] = useState(null);
  
  const navigate = useNavigate();

   useEffect(() => {

      console.log("ProductoDetalle ID:", id);
      fetchProductos(id)
      .then((data) => {
        setProducto(data);
        console.log("Fetched producto:", data);
      })
      .catch((error) => {
        console.error("Error fetching producto:", error);
      })
      
   }, [id]); 
  
  const handleDelete = async () => {
    if (!window.confirm("¿Estás seguro de que quieres eliminar este producto?")) return;

   
    try {
      const response = await fetch(`${PORT || "http://localhost:5001/api/productos"}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Error al eliminar el producto");

      alert("Producto eliminado correctamente");
      navigate("/"); // 🔁 redirect to home (or change to /admin if needed)
    } catch (error) {
      console.error("Error eliminando producto:", error);
      alert("Ocurrió un error al eliminar el producto");
    } 
  };

  
  if (!producto) return <p>Producto no encontrado</p>;

  const { nombre, descripcion, precio, imagenUrl, stock, detalles } = producto;

  return (
    <main className={styles["producto-detalle"]}>
      <section className={styles["detalle"]}>
        <img
          src={imagenUrl || "/placeholder.png"}
          alt={nombre}
          className={styles["imagen-detalle"]}
        />
        <div className={styles["info-detalle"]}>
          <h1>{nombre}</h1>
          {descripcion && <p className={styles["descripcion"]}>{descripcion}</p>}
          {detalles && (
            <p className={styles["detalles"]}>
              <strong>Detalles:</strong> {detalles}
            </p>
          )}
          {typeof stock === "number" && (
            <p className={styles["stock"]}>
              <strong>Stock:</strong> {stock}
            </p>
          )}
          <p className={styles["precio"]}>Precio: {formatPrice(precio)}</p>

          <button
            className={styles["btn-carrito"]}
            onClick={() => addToCart(producto)}
          >
            Añadir al Carrito
          </button>

          <button
            className={styles["btn-carrito"]}
            onClick={handleDelete}
            
          >
            Eliminar
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProductoDetalle;