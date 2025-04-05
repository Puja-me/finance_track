// backend/middleware/auth.js
const jwt = require('jsonwebtoken');
const db = require('../config/db');

module.exports = async (req, res, next) => {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if no token
  if (!token) {
    // For some routes, we might want to allow unauthenticated access
    req.user = null;
    return next();
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Check if user exists
    const [user] = await db.query('SELECT id, name, email FROM users WHERE id = ?', [decoded.user.id]);
    
    if (user.length === 0) {
      return res.status(401).json({ msg: 'Token is not valid' });
    }
    
    req.user = user[0];
    next();
  } catch (err) {
    console.error('Auth middleware error:', err);
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
