  // const express = require('express');
  // const User = require('../models/User');
  // const router = express.Router();
  // const jwt = require('jsonwebtoken');
  // const  protect  = require('../middleware/authMiddleware');


  // const bcrypt = require('bcryptjs');

  // const generateToken = (id) => {
  //   return jwt.sign({ id }, process.env.JWT_SECRET, {
  //     expiresIn: '1h', // Token expires in 1 hour
  //   });
  // };


  // // Register User
  // router.post('/register', async (req, res) => {
  //   try {
  //     const { username, email, password } = req.body;

  //     if (!username || !email || !password) {
  //       return res.status(400).json({ message: 'All fields are required' });
  //     }

  //     const existingUser = await User.findOne({ email });
  //     if (existingUser) {
  //       return res.status(400).json({ message: 'Email already registered' });
  //     }

  //     const newUser = new User({ username, email, password });
  //     await newUser.save();

  //     const token = generateToken(newUser._id);
  //     res.status(201).json({ message: 'User registered successfully', token });
  //   } catch (error) {
  //     res.status(500).json({ message: 'Server error', error: error.message });
  //   }
  // });


  // // Login User
  // router.post('/login', async (req, res) => {
  //   try {
  //     const { email, password } = req.body;

  //     if (!email || !password) {
  //       return res.status(400).json({ message: 'All fields are required' });
  //     }

  //     const user = await User.findOne({ email });
  //     if (!user) {
  //       return res.status(400).json({ message: 'Invalid credentials' });
  //     }

  //     const isMatch = await bcrypt.compare(password, user.password);
  //     if (!isMatch) {
  //       return res.status(400).json({ message: 'Invalid credentials' });
  //     }

  //     const token = generateToken(user._id);
  //     res.status(200).json({ 
  //       message: 'Login successful', 
  //       token,
  //       user: { 
  //         id: user._id, 
  //         username: user.username, 
  //         email: user.email 
  //       } 
      
  //     });
  //   } catch (error) {
  //     res.status(500).json({ message: 'Server error', error: error.message });
  //   }
  // });
  // console.log('Defining /profile route');
  // router.get('/profile', protect, async (req, res) => {
  //   console.log('Profile route hit');
  //   try {
  //     const user = req.user;
  //     res.status(200).json(user);
  //   } catch (error) {
  //     res.status(500).json({ message: 'Server error', error: error.message });
  //   }
  // });

  // console.log('Protect middleware:', protect); // Should print the middleware function

  // module.exports = router;


  const express = require("express");
  const jwt = require("jsonwebtoken");
  const bcrypt = require("bcryptjs");
  const { ObjectId } = require("mongodb"); // Import ObjectId for MongoDB operations
  const router = express.Router();
  
  const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  };
  
  router.post("/register", async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      // Ensure the password is a string
      const passwordString = password.toString(); 
  
      const db = req.app.locals.dbClient.db("user_db"); // Database name
      const usersCollection = db.collection("user"); // Collection name
  
      const existingUser = await usersCollection.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already registered" });
      }
  
      const hashedPassword = await bcrypt.hash(passwordString, 10); // Hash the password as a string
      const newUser = { username, email, password: hashedPassword };
      const result = await usersCollection.insertOne(newUser);
  
      const token = generateToken(result.insertedId.toString());
      res.status(201).json({ message: "User registered successfully", token });
    } catch (error) {
      console.error(error);  // Log error for debugging
      res.status(500).json({ message: "Server error", error: error.message });
    }
  });
  // Login User
  router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      const db = req.app.locals.dbClient.db("user_db"); // Database name
      const usersCollection = db.collection("user"); // Collection name
  
      const user = await usersCollection.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      const token = generateToken(user._id.toString());
      res.status(200).json({
        message: "Login successful",
        token,
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
        },
      });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  });
  
// Profile Route (Protected)
router.get("/profile", async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    // Decode the token and log the output for debugging
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded); // Log decoded token

    const db = req.app.locals.dbClient.db("user_db"); // Database name
    const usersCollection = db.collection("user"); // Collection name

    // Ensure decoded.id is a valid string before using ObjectId
    if (!decoded.id || typeof decoded.id !== 'string') {
      throw new Error("Invalid user ID in token");
    }

    // Use ObjectId to convert string to MongoDB ObjectId
    const user = await usersCollection.findOne({ _id: new ObjectId(decoded.id) });
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      id: user._id,
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(401).json({ message: "Not authorized, token failed", error: error.message });
  }
});
  
  
  module.exports = router;