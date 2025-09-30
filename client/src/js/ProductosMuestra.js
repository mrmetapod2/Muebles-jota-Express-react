import React, { useEffect, useState } from "react";
import styles from "../css/index.module.css";
import { useNavigate } from "react-router-dom";

// src/js/fetchProductos.js
export async function fetchProductos(id = null) {
  try {
    const url = id 
      ? `http://localhost:5000/api/productos/${id}`
      : `http://localhost:5000/api/productos`;

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

export default function Productos({ randomCount }) {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchProductos().then(all => {
      if (randomCount) {
        // shuffle + take randomCount
        const shuffled = [...all].sort(() => 0.5 - Math.random());
        setProductos(shuffled.slice(0, randomCount));
      } else {
        setProductos(all);
      }
    });
  }, [randomCount]);

  return (
    
     
    <div className={styles["productos-grid"]}>
      
      {productos.map(p => (
        <div className={styles["producto-card"]}>
          <div key={p.id} className={styles["producto"]} >
            <h3>{p.nombre}</h3>
            <img src={p.img} alt={p.nombre}  />
            <p className={styles["precio"]}>{p.precio}</p>
            <button key={p.id}
            onClick={() => navigate(`/producto/${p.id}`)}
          > Ver más </button>
            
          </div>
        </div>
      ))}
    </div>
  );
}
