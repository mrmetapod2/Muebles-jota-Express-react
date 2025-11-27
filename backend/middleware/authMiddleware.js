import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

export const authenticate = async (req, res, next) => {
  const { JWT_SECRET } = process.env;

  if (!JWT_SECRET) {
    return res.status(500).json({ error: "JWT_SECRET no está configurado" });
  }
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Token no provisto" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(payload.sub).select("-password");

    if (!user) {
      return res.status(401).json({ error: "Usuario no encontrado" });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error("Error autenticando token", err);
    return res.status(401).json({ error: "Token inválido o expirado" });
  }
};

export const requireRole = (roles = []) => {
  const allowed = Array.isArray(roles) ? roles : [roles];

  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: "No autenticado" });
    }

    if (!allowed.length || allowed.includes(req.user?.role)) {
      return next();
    }

    return res.status(403).json({ error: "No tienes permisos para esta acción" });
  };
};
