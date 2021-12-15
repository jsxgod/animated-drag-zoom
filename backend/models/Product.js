const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  product_type: {
    type: String,
    enum: ["SkateBoard", "Deck", "Wheels", "Truck", "Hardware"],
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    min: 0,
    required: true,
  },
  images: {
    type: Object,
    required: true,
  },
  details: {
    type: [],
    required: false,
  },
  available_sizes: {
    type: [],
    required: false,
  },
  truck_sizing: {
    type: Object,
    required: false,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
