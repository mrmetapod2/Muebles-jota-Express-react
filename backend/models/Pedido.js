import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    items: [
      {
        producto: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Producto"
        },
        nombre: String,
        cantidad: { type: Number, default: 1 },
        precio: { type: Number, default: 0 }
      }
    ],
    total: { type: Number, default: 0 },
    estado: {
      type: String,
      enum: ["pendiente", "pagado", "enviado"],
      default: "pendiente"
    }
  },
  { timestamps: true }
);

const Pedido = mongoose.model("Pedido", pedidoSchema);

export default Pedido;
