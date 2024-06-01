const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Show all users
router.get('/users', UserController.getAllUsers);

// Show a single user by _id, with thought and friend data
router.get('/users/:userId', UserController.getUserById);

// Create a new user by _id
router.post('/users', UserController.createUser);

// Update a user by _id
router.put('/users/:userId', UserController.updateUserById);

// Delete a user by _id
router.delete('/users/:userId', UserController.deleteUserById);

// Create/add a new friend to a user's friend list
router.post('/users/:userId/friends/:friendId', UserController.addFriend);

// Delete a friend from a user's friend list
router.delete('/users/:userId/friends/:friendId', UserController.removeFriend);

module.exports = router;
