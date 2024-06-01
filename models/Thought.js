const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  reactionId: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
  reactionBody: { type: String, required: true, maxlength: 280 },
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

reactionSchema.path('createdAt').get(function(value) {
  return formatDate(value);
});

function formatDate(date) {
  return date.toLocaleString();
}

const thoughtSchema = new mongoose.Schema({
  thoughtText: { 
    type: String, 
    required: true, 
    minlength: 1, 
    maxlength: 280 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  username: { 
    type: String, 
    required: true 
  },
  reactions: [reactionSchema]
});

thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

thoughtSchema.path('createdAt').get(function(value) {
  return formatDate(value);
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
