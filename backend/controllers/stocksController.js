// backend/controllers/stocksController.js
const db = require('../config/db');

// Get all stocks
exports.getAllStocks = async (req, res) => {
  try {
    const [stocks] = await db.query('SELECT * FROM stocks');
    
    // If user is authenticated, mark which stocks are in their watchlist
    if (req.user) {
      const [watchlist] = await db.query(
        'SELECT stock_id FROM user_watchlist WHERE user_id = ?',
        [req.user.id]
      );
      
      const watchlistIds = watchlist.map(item => item.stock_id);
      
      stocks.forEach(stock => {
        stock.isInWatchlist = watchlistIds.includes(stock.id);
      });
    }
    
    res.json(stocks);
  } catch (error) {
    console.error('Error fetching stocks:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get single stock by ID
exports.getStockById = async (req, res) => {
  try {
    const [stock] = await db.query(
      'SELECT * FROM stocks WHERE id = ?',
      [req.params.id]
    );
    
    if (stock.length === 0) {
      return res.status(404).json({ msg: 'Stock not found' });
    }
    
    res.json(stock[0]);
  } catch (error) {
    console.error('Error fetching stock:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
