import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      const respuesta = await fetch("/api/productos", {
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
      navigate(`/producto/${nuevoProducto.id ?? ""}`.replace(/\/$/, "") || "/productos");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="admin-create-product">
      <h1>Crear nuevo producto</h1>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Nombre
          <input
            name="nombre"
            value={producto.nombre}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Descripción
          <textarea
            name="descripcion"
            value={producto.descripcion}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Precio
          <input
            type="number"
            step="0.01"
            name="precio"
            value={producto.precio}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Categoría
          <input
            name="categoria"
            value={producto.categoria}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          URL de imagen
          <input
            name="imagenUrl"
            value={producto.imagenUrl}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Stock
          <input
            type="number"
            name="stock"
            value={producto.stock}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Crear producto</button>
      </form>
    </section>
  );
}

export default AdminCreateProduct;