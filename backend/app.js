// app.js
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import productosRouter from "./routes/productRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT_BACK ||  5001;
const PORT_FRONT = process.env.PORT_FRONT || `http://localhost:3000`;
const FRONTEND_ORIGIN = `http://localhost:${PORT_FRONT}`;
const MONGOURI = process.env.MONGODB_URI;
// Middlewares

const allowedOrigins = [
  `${PORT_FRONT}`
  
];

app.use(cors({
  origin: process.env.PORT_FRONT,
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
