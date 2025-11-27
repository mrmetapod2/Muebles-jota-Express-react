import express from "express";
import Pedido from "../models/Pedido.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(authenticate);

router.get("/", async (req, res, next) => {
  try {
    const pedidos = await Pedido.find({ usuario: req.user._id }).sort({ createdAt: -1 });
    res.json(pedidos);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { items = [], total = 0 } = req.body;
    const pedido = await Pedido.create({ usuario: req.user._id, items, total });
    res.status(201).json(pedido);
  } catch (err) {
    next(err);
  }
});

export default router;
