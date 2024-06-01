const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Import routes
const routes = require('./routes');

// Create Express app
const app = express();
const PORT = process.env.PORT || 6969;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
  process.exit(1); // Exit the process if unable to connect to MongoDB
});

// Set up session middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    client: mongoose.connection.getClient()
  })
}));

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api', routes);

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (error, promise) => {
  console.error('Unhandled Rejection:', error);
  // Close server and exit process
  server.close(() => process.exit(1));
});
