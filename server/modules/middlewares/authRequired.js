const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  // Get the token from the request header
  const token = req.header('Authorization');

  // Check if the token is present
  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.customer = decoded;
    next();
  } catch (error) {
    return res.status(400).json({ message: 'Invalid token' });
  }
};

module.exports = verifyToken;
