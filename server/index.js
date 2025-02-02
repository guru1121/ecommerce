const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

// Load environment variables
dotenv.config();

// Middleware to parse JSON data
app.use(express.json());
app.use(cors()); // Enable Cross-Origin Resource Sharing

// MongoDB URI from the .env file
// const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_URI ='mongodb+srv://guru:OmLmlN739U7p5Bks@guru0.2veuy.mongodb.net/new_db?retryWrites=true&w=majority&appName=guru0';


// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Define a schema for user data
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: {type: String, required:true }
});

// Create a model for the 'api_data' collection in MongoDB
const User = mongoose.model('User', userSchema, 'api_data');

// Default route for testing
app.get('/', (req, res) => {
  res.send('Hello Guru');
});

// API route to save username and email
app.post('/save-user', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Username and email are required' });
  }

  try {
    const newUser = new User({ username, email , password });
    await newUser.save();
    res.status(201).json({ message: 'User saved successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ error: 'Error saving user data', details: error });
  }
});

// Dynamic port for deployment
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Export the app for Vercel
module.exports = app;
