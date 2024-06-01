const express = require('express');
const router = express.Router();

// Routes
const userRoutes = require('./user_routes');
const thoughtRoutes = require('./thought_routes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

// // Routes
// app.use('/api/users', user_routes);
// app.use('/api/thoughts', thought_routes);

module.exports = router;