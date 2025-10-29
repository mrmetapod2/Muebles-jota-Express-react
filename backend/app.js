// app.js
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import productosRouter from "./routes/Productos.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = DOTENV.PORT_BACK || 5000;
const MONGOURI = DOTENV.MONGODB_URI;
// Middlewares
app.use(cors());
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Conectar a MongoDB
mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Conectado a MongoDB"))
.catch(err => console.error("❌ Error conectando a MongoDB:", err));

// Rutas
app.use("/api/productos", productosRouter);

// Middleware 404
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Middleware de errores
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || "Error interno del servidor"
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
