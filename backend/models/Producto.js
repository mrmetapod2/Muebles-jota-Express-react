// models/Producto.js
import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: String, required: true },
  img: { type: String, required: true },
  descripcion: { type: String, required: true },
  detalles: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model("Producto", productoSchema);
