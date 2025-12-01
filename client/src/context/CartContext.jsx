import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const addToCart = (producto) => {
    setCarrito((prev) => {
      const existing = prev.find(p => p._id === producto._id);
      if (existing) {
        return prev.map(p =>
          p._id === producto._id
            ? { ...p, cantidad: (p.cantidad || 1) + 1 }
            : p
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCarrito(prev =>
      prev.map(p =>
        p._id === id
          ? { ...p, cantidad: (p.cantidad || 1) - 1 }
          : p
      ).filter(p => p.cantidad > 0)
    );
  };

  const clearCart = () => setCarrito([]);

  return (
    <CartContext.Provider
      value={{ carrito, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
