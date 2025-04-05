const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const app = express();
const PORT = 4000;

// Enable CORS for frontend
app.use(cors({ origin: 'http://localhost:3000' }));

// Middleware
app.use(express.json());

// MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'avnadmin',
  password: 'Puja',
  database: 'default db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Stocks API route
app.get('/api/stocks', async (req, res) => {
  try {
    const [stocks] = await pool.query('SELECT * FROM stocks');

    const fixedStocks = stocks.map(stock => ({
      id: stock.id,
      symbol: stock.symbol,
      company: stock.company || 'Unknown',
      price: parseFloat(stock.price) || 0,
      change_percentage: stock.change_percentage !== null ? stock.change_percentage : 0,
      market_cap: stock.market_cap || 'N/A'
    }));

    res.json({ message: 'Success', data: fixedStocks });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ message: 'Failed to fetch stocks' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
