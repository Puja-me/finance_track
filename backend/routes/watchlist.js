// backend/routes/watchlist.js
const express = require('express');
const router = express.Router();
const watchlistController = require('../controllers/watchlistController');
const auth = require('../middleware/auth');

// All routes require authentication
router.use(auth);

// Add stock to watchlist
router.post('/', watchlistController.addToWatchlist);

// Remove stock from watchlist
router.delete('/:stockId', watchlistController.removeFromWatchlist);

// Get user's watchlist
router.get('/', watchlistController.getUserWatchlist);

module.exports = router;
