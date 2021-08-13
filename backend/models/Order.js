const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  name: String,
  price: Number,
  ownerId: { type: Schema.Types.ObjectId },
  completed: { type: Boolean, default: false },
});

const Order = model("Order", orderSchema);

module.exports = Order;
