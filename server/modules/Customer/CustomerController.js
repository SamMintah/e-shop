const Customer = require("./CustomerModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//genrenate token
const generateToken = (user) => {
  const token = jwt.sign(
    { id: user._id, email: user.email },
    "4b94f55522497239f8de28f52a4e5dfb163937ab196b6d4b422298dbe4ffaec6",
    {
      expiresIn: "1h",
    }
  );
  return {
    token,
    user,
  };
};

exports.getCustomers = async (req, res, next) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    next(error);
  }
};

exports.getCustomer = async (req, res, next) => {
  try {
    const customerId = req.params.customerId;
    console.log(customerId)
    const customer = await Customer.findById(customerId);
    if (!customer) {
      const error = new Error("Customer not found");
      error.status = 404;
      throw error;
    }
    res.json(customer);
  } catch (error) {
    next(error);
  }
};

exports.createCustomer = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const isExist = await Customer.findOne({ email: email });

    if (isExist) {
      return res.status(400).json({ error: "user already exist" });
    }

    //hash password
    const hashedPassword = await bcrypt.hash(password, 12);
    const newCustomer = await Customer.create({
      ...req.body,
      password: hashedPassword,
    });
    await newCustomer.save();

    //genrenate token
    const token = generateToken(newCustomer);
    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

exports.updateCustomer = async (req, res, next) => {
  const { password } = req.body;

  try {
    const customerId = req.params.customerId;
    const hashedPassword = await bcrypt.hash(password, 12);
    const updatedCustomer = await Customer.findByIdAndUpdate(
      customerId,
      { ...req.body, password: hashedPassword },
      {
        new: true,
      }
    );
    if (!updatedCustomer) {
      const error = new Error("Customer not found");
      error.status = 404;
      throw error;
    }
    res.json(updatedCustomer);
  } catch (error) {
    next(error);
  }
};

exports.deleteCustomer = async (req, res, next) => {
  try {
    const customerId = req.params.customerId;
    const deletedCustomer = await Customer.findByIdAndDelete(customerId);
    if (!deletedCustomer  ) {
      const error = new Error("Customer not found");
      error.status = 404;
      throw error;
    }
    res.json(deletedCustomer);
  } catch (error) {
    next(error);
  }
};
