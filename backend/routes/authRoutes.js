const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../db"); // Import database connection (create `db.js` for modularity)

const router = express.Router();

// Register Route
router.post("/register", async (req, res) => {
    const { username, email, phone, dob, pan, aadhar, bank_account, experience, investment_pref, password } = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const sql = `INSERT INTO users (username, email, phone, dob, pan, aadhar, bank_account, experience, investment_pref, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        db.query(sql, [username, email, phone, dob, pan, aadhar, bank_account, experience, investment_pref, hashedPassword], (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: "✅ User registered successfully!" });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Login Route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const sql = "SELECT * FROM users WHERE email = ?";
        db.query(sql, [email], async (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            if (results.length === 0) return res.status(400).json({ message: "❌ User not found!" });

            const user = results[0];
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(401).json({ message: "❌ Invalid password!" });

            res.json({ 
                message: "✅ Login successful!", 
                userId: user.id  // Assuming `id` is the primary key
            });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
