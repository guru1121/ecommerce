const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Import User model for user validation

// Middleware to protect routes
const protect = async (req, res, next) => {
  console.log('Protect middleware called');
  let token;

  try {
    // Check if the token is provided in the Authorization header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1]; // Extract the token

      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find the user based on the decoded token ID
      req.user = await User.findById(decoded.id).select('-password'); // Exclude password
      next(); // Continue to the next middleware or route handler
    } else {
      res.status(401).json({ message: 'Not authorized, no token' });
    }
  } catch (error) {
    res.status(401).json({ message: 'Not authorized, token failed' });
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};


module.exports = protect;
