// src/pages/Carrito.jsx
import { useState } from "react";
import styles from "../css/carrito.module.css";

// Utilities to check authentication
const getToken = () => localStorage.getItem("token");
const isLogged = () => !!localStorage.getItem("token");

export default function Carrito({
  carrito,
  addToCart,
  eliminarDelCarrito,
  vaciarCarrito,
}) {
  const [mensaje, setMensaje] = useState("");

  const total = carrito.reduce(
    (acc, prod) => acc + prod.precio * (prod.cantidad || 1),
    0
  );

  const finalizarCompra = async () => {
    if (!isLogged()) {
      setMensaje("Debes iniciar sesión para finalizar la compra.");
      return;
    }

    const token = getToken();

    try {
      const res = await fetch("https://tu-backend.com/api/pedidos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productos: carrito.map((p) => ({
            id: p._id,
            cantidad: p.cantidad || 1,
          })),
          total,
        }),
      });

      if (!res.ok) throw new Error("Hubo un error al crear el pedido");

      setMensaje("Compra realizada con éxito ✔");

      vaciarCarrito(); // limpiar carrito después del pedido
    } catch (err) {
      console.error(err);
      setMensaje("Error al procesar la compra.");
    }
  };

  return (
    <main className={styles.carritoContainer}>
      <h1>Carrito de Compras</h1>

      {mensaje && <p className={styles.mensaje}>{mensaje}</p>}

      <div className={styles.carritoLista}>
        {carrito.map((prod) => (
          <div className={styles.carritoItem} key={prod._id}>
            <img src={prod.imagenUrl} className={styles.carritoImg} />

            <div className={styles.carritoInfo}>
              <h3>{prod.nombre}</h3>
              <p>Precio: ${prod.precio}</p>

              <div className={styles.cantidadBox}>
                <button
                  className={styles.btnCant}
                  onClick={() => addToCart(prod)}
                >
                  +
                </button>

                <span>{prod.cantidad ?? 1}</span>

                <button
                  className={styles.btnCant}
                  onClick={() => eliminarDelCarrito(prod._id)}
                >
                  -
                </button>
              </div>

              <button
                className={styles.btnEliminar}
                onClick={() => eliminarDelCarrito(prod._id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className={styles.total}>Total: ${total}</h2>

      <button
        className={styles.btnFinalizar}
        disabled={carrito.length === 0}
        onClick={finalizarCompra}
      >
        Finalizar Compra
      </button>
    </main>
  );
}
