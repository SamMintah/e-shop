const router = require("express").Router;
const {createProduct,getProduct,getProducts,updateProduct,deleteProduct} = require("./ProductController");

const productRouter = router();

productRouter.route("/").get(getProducts).post(createProduct);

productRouter.route("/:productId").patch(updateProduct).delete(deleteProduct).get(getProduct);

module.exports = {productRouter};

