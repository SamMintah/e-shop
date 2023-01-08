const Product = require('./ProductModel');


exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.productId);  
     if (!product) {
      const error = new Error('Product not found');
      error.status = 404;
      throw error;
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
};

exports.createProduct = async (req, res, next) => {
  const { name} = req.body;
  try {
    const isExist = await Product.findOne({ name: name });
    if (isExist) {
      return res.status(400).json({ error: "Product already exist" });
    }
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
     const productId = req.params.productId 
      const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, {
      new: true
    });
    if (!updatedProduct) {
      const error = new Error('Product not found');
      error.status = 404;
      throw error;
    }
    res.json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      const error = new Error('Product not found');
      error.status = 404;
      throw error;
    }
    res.json(deletedProduct);
  } catch (error) {
    next(error);
  }
};
