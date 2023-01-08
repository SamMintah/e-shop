const products = [
    { id: 1, name: "Product 1", price: 19.99, weight: 1 },
    { id: 2, name: "Product 2", price: 29.99, weight: 3 },
    { id: 3, name: "Product 3", price: 39.99, weight: 10 }
  ];
  
const calculateShippingCost = (order) => {
    const { shippingMethod, products } = order;
    let cost = 0;
  
    // Calculate the cost of shipping based on the weight of the products
    // and the selected shipping method
    for (const product of products) {
      cost += product.weight * SHIPPING_RATES[shippingMethod];
    }
  
    return cost;
  };

  

  const validateOrder = (order) => {
    const { email, paymentMethod, products } = order;
  
    // Validate the email address
    if (!isValidEmail(email)) {
      return { success: false, message: "Invalid email address" };
    }
  
    // Validate that a payment method was selected
    if (!paymentMethod) {
      return { success: false, message: "Please select a payment method" };
    }
  
    // Validate that the order includes at least one product
    if (products.length === 0) {
      return { success: false, message: "Your cart is empty" };
    }
  
    return { success: true };
  };
  
  module.exports = {
    calculateShippingCost,
    validateOrder
  };
