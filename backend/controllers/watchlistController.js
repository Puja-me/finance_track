// backend/controllers/watchlistController.js
const db = require('../config/db');

// Add stock to user's watchlist
exports.addToWatchlist = async (req, res) => {
  const { stockId } = req.body;
  const userId = req.user.id; // Assuming req.user is set by auth middleware

  try {
    // Check if stock is already in watchlist
    const [existing] = await db.query(
      'SELECT * FROM user_watchlist WHERE user_id = ? AND stock_id = ?',
      [userId, stockId]
    );

    if (existing.length > 0) {
      return res.status(400).json({ msg: 'Stock already in watchlist' });
    }

    // Add to watchlist
    await db.query(
      'INSERT INTO user_watchlist (user_id, stock_id) VALUES (?, ?)',
      [userId, stockId]
    );

    res.status(201).json({ msg: 'Stock added to watchlist' });
  } catch (error) {
    console.error('Error adding to watchlist:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Remove stock from user's watchlist
exports.removeFromWatchlist = async (req, res) => {
  const { stockId } = req.params;
  const userId = req.user.id;

  try {
    await db.query(
      'DELETE FROM user_watchlist WHERE user_id = ? AND stock_id = ?',
      [userId, stockId]
    );

    res.json({ msg: 'Stock removed from watchlist' });
  } catch (error) {
    console.error('Error removing from watchlist:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get user's watchlist
exports.getUserWatchlist = async (req, res) => {
  const userId = req.user.id;

  try {
    const [watchlist] = await db.query(
      `SELECT s.id, s.symbol, s.company, s.price, s.change_percent, s.market_cap 
       FROM stocks s
       JOIN user_watchlist w ON s.id = w.stock_id
       WHERE w.user_id = ?`,
      [userId]
    );

    res.json(watchlist);
  } catch (error) {
    console.error('Error getting watchlist:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
