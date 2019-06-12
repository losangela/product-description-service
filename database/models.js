const mongoose = require('mongoose');
const db = require('./index');

// Product Description Schema
const productDescriptionSchema = new mongoose.Schema({

  // original

  // productName: String,
  // designer: String,
  // price: Number,
  // stars: Number,
  // reviews: Number,
  // description: String,
  // fit: String,
  // sizes: Array,
  // colors: Array,
  // imageUrlsColor1: Array,
  // imageUrlsColor2: Array

  productName: String,
  designer: String,
  price: Number,
  stars: Number,
  reviews: Number,
  description: String,
  fit: String,
  sizes: String,
  colors: String,
  imageUrlsColor1: String,
  imageUrlsColor2: String,
  productID: { type: Number, index: true }
});

// Connecting the Product Descriptions Schema to the database
const ProductDescription = mongoose.model('ProductDescription', productDescriptionSchema);

module.exports = ProductDescription;