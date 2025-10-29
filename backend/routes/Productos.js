// routes/Productos.js
import express from "express";
import Producto from "../models/Producto.js";

const router = express.Router();

// GET /api/productos → lista completa
router.get("/", async (req, res, next) => {
  try {
    const productos = await Producto.find();  // SELECT * FROM productos
    res.json(productos);
  } catch (err) {
    next(err);
  }
});

// GET /api/productos/:id → producto por id de Mongo
router.get("/:id", async (req, res, next) => {
  try {
    const producto = await Producto.findById(req.params.id);

    if (!producto) {
      const error = new Error("Producto no encontrado");
      error.status = 404;
      return next(error);
    }

    res.json(producto);
  } catch (err) {
    next(err);
  }
});

export default router;
