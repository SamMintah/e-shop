const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'Customer'
  },
  products: [
    {
      productId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Product'
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ],
  totalCost: {
    type: Number,
    required: true
  },
  shippingAddress: {
    type: String,
  },
  billingAddress: {
    type: String,
  },
  status: {
    type: String,
    enum: ['pending', 'shipped', 'delivered']
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
