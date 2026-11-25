const express = require('express');
const router = express.Router();
const postRoutes = require('./postRoutes');

// Health endpoint
router.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

// Register post routes
router.use('/posts', postRoutes);

module.exports = router;