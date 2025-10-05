
// src/js/fetchProductos.js
export async function fetchProductos(id = null) {
  try {
    const url = id 
      ? `http://localhost:4000/api/productos/${id}`
      : `http://localhost:4000/api/productos`;

    const response = await fetch(url);
    if (!response.ok) throw new Error("Error al cargar productos");

    const data = await response.json();

    if (id) {
      // single product
      return {
        ...data,
        img: `/${data.img}`
      };
    }

    // multiple products
    return data.map(item => ({
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
      img: `${item.img}`,
      descripcion: item.descripcion,
      detalles: item.detalles,
    }));
  } catch (err) {
    console.error(err);
    return id ? null : [];
  }
}