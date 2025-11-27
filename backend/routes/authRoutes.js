import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
dotenv.config();

const { JWT_EXPIRES_IN = "7d" } = process.env;

const ensureJwtSecret = () => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET no está configurado");
  }

  return process.env.JWT_SECRET;
};

const signToken = (user) =>
  jwt.sign(
    {
      sub: user._id,
      role: user.role
    },
    ensureJwtSecret(),
    { expiresIn: JWT_EXPIRES_IN }
  );

const formatUserResponse = (user) => ({
  id: user._id,
  nombre: user.nombre,
  email: user.email,
  role: user.role
});

router.post("/register", async (req, res, next) => {
  try {
    const { nombre, email, password } = req.body;

    if (!nombre || !email || !password) {
      return res.status(400).json({ error: "Nombre, email y password son obligatorios" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ error: "Ya existe un usuario con ese email" });
    }

    const user = await User.create({ nombre, email, password });
    const token = signToken(user);

    return res.status(201).json({ token, user: formatUserResponse(user) });
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email y password son obligatorios" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const isValidPassword = await user.validatePassword(password);

    if (!isValidPassword) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const token = signToken(user);

    return res.json({ token, user: formatUserResponse(user) });
  } catch (err) {
    next(err);
  }
});

router.get("/profile", authenticate, (req, res) => {
  return res.json({ user: formatUserResponse(req.user) });
});

export default router;
