const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const PORT = 5001;

// Load environment variables
dotenv.config();

// Middleware to parse JSON data
app.use(express.json());

// MongoDB URI from the .env file (no need to modify this if your URI points to the correct cluster)
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB with the specific database (new_db)
mongoose.connect(`${MONGODB_URI}/new_db`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB (new_db)'))
  .catch((error) => console.log('Error connecting to MongoDB:', error));

// Define a schema for user data
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

// Create a model for the 'api_data' collection in the 'new_db' database
const User = mongoose.model('User', userSchema, 'api_data'); // 'api_data' is the collection name

// API route to save username and email
app.post('/save-user', async (req, res) => {
  const { username, email } = req.body;

  if (!username || !email) {
    return res.status(400).json({ error: 'Username and email are required' });
  }

  try {
    const newUser = new User({ username, email });
    await newUser.save();
    res.status(201).json({ message: 'User saved successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ error: 'Error saving user data', details: error });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
