const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  category: { 
    type: String, 
    required: true,
    enum: ['men', 'women', 'boys', 'girls', 'baby-boys', 'baby-girls']
  },
  subcategory: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number, default: null },
  images: [{ type: String, required: true }],
  description: { type: String, required: true },
  features: [{ type: String }],
  sizes: [{ type: String, required: true }],
  colors: [{ type: String, required: true }],
  sku: { type: String, required: true, unique: true },
  stock: { type: Number, default: 25 },
  rating: { type: Number, default: 4.8 },
  reviewsCount: { type: Number, default: 12 },
  isNewArrival: { type: Boolean, default: false },
  isBestSeller: { type: Boolean, default: false },
  isSale: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);