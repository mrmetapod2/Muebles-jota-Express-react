// app.js
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import productosRouter from "./routes/productRoutes.js";
import authRouter from "./routes/authRoutes.js";
import pedidosRouter from "./routes/pedidoRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT_BACK || 5001;
const FRONTEND_ORIGIN = process.env.PORT_FRONT || "http://localhost:3000";
const MONGOURI = process.env.MONGODB_URI;
// Middlewares

app.use(cors({
  origin: FRONTEND_ORIGIN,
  credentials: true
}));

app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Conectar a MongoDB
if (!MONGOURI) {
  console.error("❌ No se encontró la variable de entorno MONGODB_URI");
  process.exit(1);
}

mongoose.connect(MONGOURI)
.then(() => console.log("✅ Conectado a MongoDB"))
.catch(err => console.error("❌ Error conectando a MongoDB:", err));

// Rutas
app.use("/api/productos", productosRouter);
app.use("/api/auth", authRouter);
app.use("/api/pedidos", pedidosRouter);

// Middleware 404
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Middleware de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || "Error interno del servidor"
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
