
//este codigo se dedica a armar una pagina base para las llamadas del backend 
//localhost:5000 nunca va a tener algo siempre va a ser llamado atraves de http://localhost:5000/api/productos
import express from "express";
import cors from "cors";
import productosRouter from "./routes/Productos.js";
const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());//para parsear json's

// Middleware global de logging: imprime método y URL de cada petición
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


// Importar rutas
const productosRouter = require("./routes/Productos.js");
app.use("/api/productos", productosRouter);//aqui se conecta la ruta de Productos.js a localhost:5000/api/productos 

// Middleware 404
app.use((req, res, next) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Middleware de errores centralizado
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || "Error interno del servidor" //mensaje error si el servidor falla
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`); //mensaje cuando inicias el backend
});
