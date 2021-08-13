const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
  Name: String,
  Image_url: String,
  Price: Number,
  Description: String,
});

const Food = mongoose.model('Food', FoodSchema);
module.exports = Food;
