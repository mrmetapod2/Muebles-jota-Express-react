// Este archivo se dedica a mandar los productos en formato json sea como producto individual o la lista completa
import express from "express";

import productos from "./routes/ProductosLista.js";
const router = express.Router();


// GET /api/productos → lista completa
router.get("/", (req, res) => {
  res.json(productos);//simplemente manda todo
});

// GET /api/productos/(id) → producto por id
router.get("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);//recive id de los parametros
  const producto = productos.find(p => p.id === id);// se encuentra la misma id en la lista de productos

  if (!producto) {
    const error = new Error("Producto no encontrado");// si no se encuentra manda mensaje
    error.status = 404;
    return next(error);
  }

  res.json(producto);//y si el producto existe lo manda como un json
});

module.exports = router;
