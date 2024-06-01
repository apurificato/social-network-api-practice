const express = require('express');
const router = express.Router();
const ThoughtController = require('../controllers/thoughtController');

// Display all thoughts
router.get('/', ThoughtController.getAllThoughts);

// Display a single thought by _id
router.get('/:thoughtId', ThoughtController.getThoughtById);

// Create a new thought
router.post('/', ThoughtController.createThought);

// Update a thought by _id
router.put('/:thoughtId', ThoughtController.updateThoughtById);

// Delete a thought by _id
router.delete('/:thoughtId', ThoughtController.deleteThoughtById);

// Create a reaction stored in a single thought's reactions array field
router.post('/:thoughtId/reactions', ThoughtController.createReaction);

// Delete a reaction by reactionID
router.delete('/:thoughtId/reactions/:reactionId', ThoughtController.deleteReaction);

module.exports = router;