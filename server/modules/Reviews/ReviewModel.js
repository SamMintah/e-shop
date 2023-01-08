const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'Customer'
  },
  productId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'Product'
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  review: {
    type: String,
    required: true
  }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
