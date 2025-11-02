import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/adminCreateProduct.module.css";


const PORT =process.env.REACT_APP_PORT_BACK|| "http://localhost:5001/api/productos";

const initialProduct = {
  nombre: "",
  descripcion: "",
  precio: "",
  categoria: "",
  imagenUrl: "",
  stock: "",
};

function AdminCreateProduct() {
  const [producto, setProducto] = useState(initialProduct);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const respuesta = await fetch(PORT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...producto,
          precio: parseFloat(producto.precio),
          stock: parseInt(producto.stock, 10),
        }),
      });

      if (!respuesta.ok) {
        throw new Error("No se pudo crear el producto");
      }

      const nuevoProducto = await respuesta.json();
      console.log("Producto creado:", nuevoProducto);
      navigate(`/producto/${nuevoProducto._id}`.replace(/\/$/, "") );
    } catch (err) {
      setError(err.message);
    }
  };

  return (
  <main className={styles.main}>
      <section className={styles.adminCreateProduct}>
        <h1 className={styles.title}>Crear nuevo producto</h1>

        {error && <p className={styles.error}>{error}</p>}

        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.field}>
            Nombre
            <input
              name="nombre"
              value={producto.nombre}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </label>

          <label className={styles.field}>
            Descripción
            <textarea
              name="descripcion"
              value={producto.descripcion}
              onChange={handleChange}
              required
              className={styles.textarea}
            />
          </label>

          <label className={styles.field}>
            Precio
            <input
              type="number"
              step="0.01"
              name="precio"
              value={producto.precio}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </label>

          <label className={styles.field}>
            Detalles
            <input
              name="Detalles"
              value={producto.detalles}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </label>

          <label className={styles.field}>
            URL de imagen
            <input
              name="imagenUrl"
              value={producto.imagenUrl}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </label>

          <label className={styles.field}>
            Stock
            <input
              type="number"
              name="stock"
              value={producto.stock}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </label>

          <button type="submit" className={styles.button}>
            Crear producto
          </button>
        </form>
      </section>
    </main>
  );
}

export default AdminCreateProduct;
