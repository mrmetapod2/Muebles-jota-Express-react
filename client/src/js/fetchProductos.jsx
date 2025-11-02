// src/js/fetchProductos.jsx
const PORT = process.env.REACT_APP_PORT_BACK || "http://localhost:5000/api/productos";

export async function fetchProductos(id = null) {
  try {
    const url = id 
      ? `${PORT}/${id}`
      : `${PORT}`;

    const response = await fetch(url);
    if (!response.ok) throw new Error("Error al cargar productos");

    const data = await response.json();

    if (id) {
      // Producto individual
      return {
        ...data,
        imagenUrl: data.imagenUrl ? `/${data.imagenUrl}` : null
      };
    }

    // Lista de productos
    return data.map(item => ({
      id: item._id,
      nombre: item.nombre,
      descripcion: item.descripcion,
      precio: item.precio,
      stock: item.stock,
      imagenUrl: item.imagenUrl ? `${item.imagenUrl}` : null,
      detalles: item.detalles
    }));
  } catch (err) {
    console.error("Error en fetchProductos:", err);
    return id ? null : [];
  }
}
