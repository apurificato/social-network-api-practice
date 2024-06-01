const User = require('../models/User');

// Controller function to GET all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to GET a single user by _id, with thought and friend data
exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId).populate('thoughts').populate('friends');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to Create a new user
exports.createUser = async (req, res) => {
    try {
      const { username, email } = req.body;
      const user = new User({ username, email });
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Controller function to Update a user by _id
  exports.updateUserById = async (req, res) => {
    try {
      const userId = req.params.userId;
      const updates = req.body;
      const options = { new: true };
      const updatedUser = await User.findByIdAndUpdate(userId, updates, options);
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Controller function to Delete a user by _id
exports.deleteUserById = async (req, res) => {
    try {
      const userId = req.params.userId;
      const deletedUser = await User.findByIdAndDelete(userId);
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      // Remove the user's associated thoughts
      await Thought.deleteMany({ username: deletedUser.username });
      res.json({ message: 'User and associated thoughts deleted successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

// Controller function to add a new friend to a user's friend list
exports.addFriend = async (req, res) => {
    try {
      const userId = req.params.userId;
      const friendId = req.params.friendId;
  
      // Retrieve the user by userId
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Check if friendId exists in the database
      const friend = await User.findById(friendId);
      if (!friend) {
        return res.status(404).json({ message: 'Friend not found' });
      }
  
      // Check if friendId is already in the user's friend list
      if (user.friends.includes(friendId)) {
        return res.status(400).json({ message: 'Friend already exists in the user\'s friend list' });
      }
  
      // Add friendId to the user's friend list
      user.friends.push(friendId);
      await user.save();
  
      res.json({ message: 'Friend added successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Controller function to remove a friend from a user's friend list
  exports.removeFriend = async (req, res) => {
    try {
      const userId = req.params.userId;
      const friendId = req.params.friendId;
  
      // Retrieve the user by userId
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Check if friendId is in the user's friend list
      if (!user.friends.includes(friendId)) {
        return res.status(400).json({ message: 'Friend not found in the user\'s friend list' });
      }
  
      // Remove friendId from the user's friend list
      user.friends = user.friends.filter(id => id.toString() !== friendId);
      await user.save();
  
      res.json({ message: 'Friend removed successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };