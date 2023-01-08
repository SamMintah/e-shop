const router = require("express").Router;
const { createCheckout } = require("./checkoutcontroller");

const checkoutRouter = router();

checkoutRouter.route("/checkout").post(createCheckout);

module.exports = { checkoutRouter };
