const router = require("express").Router;
const {
  createOrder,
  getOrder,
  getOrders,
  updateOrder,
  deleteOrder,
} = require("./OrderController");

const orderRouter = router();

orderRouter.route("/").get(getOrders).post(createOrder);

orderRouter
  .route("/:orderId")
  .patch(updateOrder)
  .delete(deleteOrder)
  .get(getOrder);

module.exports = { orderRouter };
