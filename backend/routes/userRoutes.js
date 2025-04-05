const express = require("express");
const pool = require("../db"); // Import the database pool

const router = express.Router();

// GET user profile by ID
router.get("/profile/:id", async (req, res) => {
    const userId = req.params.id; // Get user ID from URL parameter

    try {
        const [rows] = await pool.promise().query(
            "SELECT id, username, email, phone, dob, pan, aadhar, bank_account, experience, investment_pref FROM users WHERE id = ?",
            [userId]
        );

        if (rows.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json(rows[0]); // Send user profile data
    } catch (error) {
        console.error("Error fetching user profile:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.put("/profile/:id", async (req, res) => {
    const userId = req.params.id;
    const { username, email } = req.body;

    try {
        const [result] = await pool.promise().query(
            "UPDATE users SET username = ?, email = ? WHERE id = ?",
            [username, email, userId]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({ message: "Profile updated successfully" });
    } catch (error) {
        console.error("Error updating profile:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


module.exports = router;
