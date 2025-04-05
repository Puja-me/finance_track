const express = require("express");
const router = express.Router();
const mysql = require("mysql2/promise");

// Create connection pool for stock routes
const pool = mysql.createPool({
  host: "mysql-170206-dbms-cs252.f.aivencloud.com",
  port: 28111,
  user: "avnadmin",
  password: "Puja",
  database: "defaultdb",
  ssl: false,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Get all stocks
router.get("/stocks", async (req, res) => {
  try {
    const [stocks] = await pool.query("SELECT * FROM stocks");
    
    if (!stocks || stocks.length === 0) {
      return res.status(404).json({ error: "No stocks found" });
    }

    res.json({ message: "Success", data: stocks });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Failed to fetch stocks" });
  }
});

// Get user profile with stock data (modify as needed for your specific use case)
router.get("/userprofile/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    
    // First get user information
    const [userRows] = await pool.query(
      "SELECT * FROM users WHERE id = ?", 
      [userId]
    );
    
    if (!userRows || userRows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    
    const user = userRows[0];
    
    // Then get user's stocks (assuming you have a user_stocks table)
    // Modify this query based on your actual database schema
    const [stockRows] = await pool.query(
      `SELECT s.* 
       FROM stocks s
       JOIN user_stocks us ON s.id = us.stock_id
       WHERE us.user_id = ?`,
      [userId]
    );
    
    // Return combined user profile with stocks
    res.json({
      message: "Success",
      data: {
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          // Add any other user fields you want to include
        },
        stocks: stockRows
      }
    });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Failed to fetch user profile" });
  }
});

module.exports = router;
