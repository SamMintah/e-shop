const Order = require('./OrderModel');

exports.getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    next(error);
  }
};

exports.getOrder = async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findById(orderId);
    if (!order) {
      const error = new Error('Order not found');
      error.status = 404;
      throw error;
    }
    res.json(order);
  } catch (error) {
    next(error);
  }
};

exports.createOrder = async (req, res, next) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    next(error);
  }
};

exports.updateOrder = async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const updatedOrder = await Order.findByIdAndUpdate(orderId, req.body, {
      new: true
    });
    if (!updatedOrder) {
      const error = new Error('Order not found');
      error.status = 404;
      throw error;
    }
    res.json(updatedOrder);
  } catch (error) {
    next(error);
  }
};

exports.deleteOrder = async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const deletedOrder = await Order.findByIdAndDelete(orderId);
    if (!deletedOrder) {
      const error = new Error('Order not found');
      error.status = 404;
      throw error;
    }
    res.json(deletedOrder);
  } catch (error) {
    next(error);
  }
};
