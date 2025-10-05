import React from "react";
import styles from "../css/productos.module.css";

const SearchBar = () => {
  return (
    <div>
      <div className={styles["header-busqueda"]}>
        <input type="text" id="busqueda-productos" placeholder="Buscar productos..." />
        <button id="btn-buscar">🔍</button>
      </div>
    </div>
  );
};

export default SearchBar;
