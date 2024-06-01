const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Show all users
router.get('/', UserController.getAllUsers);

// Show a single user by _id, with thought and friend data
router.get('/:userId', UserController.getUserById);

// Create a new user by _id
router.post('/', UserController.createUser);

// Update a user by _id
router.put('/:userId', UserController.updateUserById);

// Delete a user by _id
router.delete('/:userId', UserController.deleteUserById);

// Create/add a new friend to a user's friend list
router.post('/:userId/friends/:friendId', UserController.addFriend);

// Delete a friend from a user's friend list
router.delete('/:userId/friends/:friendId', UserController.removeFriend);

module.exports = router;
