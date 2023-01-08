const checkout = require("./checkout");

  exports.createCheckout = async (req, res) => {
    try {
      checkout.handleCheckout(req.body);
      res.sendStatus(200);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };