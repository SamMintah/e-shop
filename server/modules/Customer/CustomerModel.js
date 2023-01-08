const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  shippingAddress: {
    type: String,
    required: true
  },
  billingAddress: {
    type: String,
    required: true
  }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
