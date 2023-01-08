const { sendConfirmationEmail } = require("../../utils/email");
const { calculateShippingCost, validateOrder } = require("../../utils/payment");


const calculateTotal = (order) => {
    const { products, shippingCost } = order;
    let total = 0;
  
    for (const product of products) {
      total += product.price;
    }
  
    total += shippingCost;
  
    return total;
  };
  
  const processPayment = (order) => {
    const { paymentMethod, total } = order;
  
    if (paymentMethod === "credit_card") {
      // Charge the credit card
      return chargeCreditCard(order.creditCard, total);
    } else if (paymentMethod === "paypal") {
      // Process the payment through PayPal
      return processPaymentThroughPayPal(order.paypalId, total);
    } else {
      throw new Error("Invalid payment method");
    }
  };
  
 const handleCheckout = (order) => {
    const { email, products, shippingMethod } = order;
  
    // Validate the order
    const validationResult = validateOrder(order);
    if (!validationResult.success) {
      throw new Error(validationResult.message);
    }
  
    // Calculate the shipping cost
    order.shippingCost = calculateShippingCost(order);
  
    // Calculate the total cost of the order
    order.total = calculateTotal(order);
  
    // Process the payment
    const paymentResult = processPayment(order);
    if (!paymentResult.success) {
      throw new Error(paymentResult.message);
    }
  
    // Save the order to the database
    saveOrderToDatabase(order);
  
    // Send a confirmation email
    sendConfirmationEmail(order);
  };
  

  module.exports = {
    handleCheckout,
  };