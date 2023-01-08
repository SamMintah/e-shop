const router = require("express").Router;
const {createCustomer,getCustomer,deleteCustomer,getCustomers,updateCustomer} = require("./CustomerController");

const customerRouter = router();

customerRouter.route("/").get(getCustomers).post(createCustomer);

customerRouter.route("/:customerId").patch(updateCustomer).delete(deleteCustomer).get(getCustomer);

module.exports = {customerRouter};

