import express from "express";
import Producto from "../models/Producto.js";

const router = express.Router();

const forwardMongooseError = (err, next) => {
  if (err.name === "CastError") {
    err.status = 400;
    err.message = "ID de producto inválido";
  }

  if (err.name === "ValidationError") {
    err.status = 400;
  }

  next(err);
};

router.get("/", async (req, res, next) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (err) {
    forwardMongooseError(err, next);
  }
});

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
    forwardMongooseError(err, next);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const nuevoProducto = new Producto(req.body);
    const productoGuardado = await nuevoProducto.save();
    res.status(201).json(productoGuardado);
  } catch (err) {
    forwardMongooseError(err, next);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const productoActualizado = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!productoActualizado) {
      const error = new Error("Producto no encontrado");
      error.status = 404;
      return next(error);
    }

    res.json(productoActualizado);
  } catch (err) {
    forwardMongooseError(err, next);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const productoEliminado = await Producto.findByIdAndDelete(req.params.id);

    if (!productoEliminado) {
      const error = new Error("Producto no encontrado");
      error.status = 404;
      return next(error);
    }

    res.status(204).send();
  } catch (err) {
    forwardMongooseError(err, next);
  }
});

export default router;
