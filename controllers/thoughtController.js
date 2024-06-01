const Thought = require('../models/Thought');
const User = require('../models/User');

// Controller function to GET all thoughts
exports.getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to GET a single thought by _id
exports.getThoughtById = async (req, res) => {
  try {
    const thoughtId = req.params.thoughtId;
    const thought = await Thought.findById(thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(thought);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to Create a new thought
exports.createThought = async (req, res) => {
  try {
    const { thoughtText, username } = req.body;
    const thought = new Thought({ thoughtText, username });
    const savedThought = await thought.save();
    // Push the created thought's _id to the associated user's thoughts array field
    await User.findOneAndUpdate({ username }, { $push: { thoughts: savedThought._id } });
    res.status(201).json(savedThought);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to Update a thought by _id
exports.updateThoughtById = async (req, res) => {
  try {
    const thoughtId = req.params.thoughtId;
    const updates = req.body;
    const options = { new: true };
    const updatedThought = await Thought.findByIdAndUpdate(thoughtId, updates, options);
    if (!updatedThought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(updatedThought);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to Delete a thought by _id
exports.deleteThoughtById = async (req, res) => {
  try {
    const thoughtId = req.params.thoughtId;
    const deletedThought = await Thought.findByIdAndDelete(thoughtId);
    if (!deletedThought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json({ message: 'Thought deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to create a reaction stored in a single thought's reactions array field
exports.createReaction = async (req, res) => {
  try {
    const thoughtId = req.params.thoughtId;
    const { reactionBody, username } = req.body;
    const thought = await Thought.findById(thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    thought.reactions.push({ reactionBody, username });
    await thought.save();
    res.status(201).json(thought.reactions);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to pull and remove a reaction by the reaction's reactionId value
exports.deleteReaction = async (req, res) => {
  try {
    const thoughtId = req.params.thoughtId;
    const reactionId = req.params.reactionId;
    const thought = await Thought.findById(thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    const reactionIndex = thought.reactions.findIndex(reaction => reaction._id == reactionId);
    if (reactionIndex === -1) {
      return res.status(404).json({ message: 'Reaction not found' });
    }
    thought.reactions.pull({ _id: reactionId });
    await thought.save();

    res.json({ message: 'Reaction removed successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

