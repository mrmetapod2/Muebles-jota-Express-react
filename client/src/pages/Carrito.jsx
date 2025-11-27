// src/pages/Carrito.jsx
import { useState } from "react";
import styles from "../css/carrito.module.css";
import { useAuth } from "../context/AuthContext";
import { apiFetch } from "../utils/api";

export default function Carrito({
  carrito,
  addToCart,
  eliminarDelCarrito,
  vaciarCarrito,
}) {
  const [mensaje, setMensaje] = useState("");
  const { isAuthenticated, token } = useAuth();

  const total = carrito.reduce(
    (acc, prod) => acc + prod.precio * (prod.cantidad || 1),
    0
  );

  const finalizarCompra = async () => {
    if (!isAuthenticated) {
      setMensaje("Debes iniciar sesión para finalizar la compra.");
      return;
    }

    try {
      await apiFetch("/api/pedidos", {
        method: "POST",
        token,
        body: JSON.stringify({
          items: carrito.map((p) => ({
            producto: p._id,
            nombre: p.nombre,
            cantidad: p.cantidad || 1,
            precio: Number(p.precio) || 0,
          })),
          total,
        }),
      });

      setMensaje("Compra realizada con éxito ✔");

      vaciarCarrito(); // limpiar carrito después del pedido
    } catch (err) {
      console.error(err);
      setMensaje(err.message || "Error al procesar la compra.");
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
