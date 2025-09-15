
//este codigo se dedica a armar una pagina base para las llamadas del backend 
//localhost:5000 nunca va a tener algo siempre va a ser llamado atraves de http://localhost:5000/api/productos
const express = require("express");
const cors = require("cors"); // para permitir peticiones desde React
const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());//para parsear json's

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
