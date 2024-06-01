const express = require('express');
const router = express.Router();
const ThoughtController = require('../controllers/thoughtController');

// Display all thoughts
router.get('/thoughts', ThoughtController.getAllThoughts);

// Display a single thought by _id
router.get('/thoughts/:thoughtId', ThoughtController.getThoughtById);

// Create a new thought
router.post('/thoughts', ThoughtController.createThought);

// Update a thought by _id
router.put('/thoughts/:thoughtId', ThoughtController.updateThoughtById);

// Delete a thought by _id
router.delete('/thoughts/:thoughtId', ThoughtController.deleteThoughtById);

// Create a reaction stored in a single thought's reactions array field
router.post('/thoughts/:thoughtId/reactions', ThoughtController.createReaction);

// Delete a reaction by reactionID
router.delete('/thoughts/:thoughtId/reactions/:reactionId', ThoughtController.deleteReaction);

module.exports = router;