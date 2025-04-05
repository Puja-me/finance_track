// db.js
const mysql = require('mysql2/promise');

const createDbConnection = async () => {
  try {
    const pool = mysql.createPool({
      host: "mysql-170206-dbms-cs252.f.aivencloud.com",
      port: 28111,
      user: "avnadmin",
      password: "Puja",
      database: "defaultdb",
      ssl: false,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      connectTimeout: 60000
    });
    
    // Test the connection
    const connection = await pool.getConnection();
    console.log('✅ Database connection successful');
    connection.release();
    
    return pool;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    // Maybe retry or exit
    throw error;
  }
};

module.exports = { createDbConnection };
