const sendConfirmationEmail = (order) => {
    const { email, products } = order;
  
    // Generate the email content
    const emailContent = `
      Thank you for your order!
  
      Order Summary:
      ${products.map((product) => `- ${product.name}`).join("\n")}
  
      Total: $${order.total}
  
      Thank you for shopping with us!
    `;
  
    // Send the email
    sendEmail(email, "Order Confirmation", emailContent);
  };
  
  module.exports = {
    sendConfirmationEmail,
  };