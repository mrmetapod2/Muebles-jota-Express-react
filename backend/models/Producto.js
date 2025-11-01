import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  precio: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  imagenUrl: { type: String },
  detalles: { type: String }
}, { timestamps: true });

export default mongoose.model("Producto", productoSchema);
