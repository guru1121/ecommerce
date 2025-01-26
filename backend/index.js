const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// MongoDB connection using Mongoose
const mongoURI = "mongodb+srv://gurunandmourya:CijbeNuTDeyAm3RV@cluster0.cihi6.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect()
  .then(() => {
    console.log("Connected to MongoDB!");

    // Store the dbClient in app.locals
    app.locals.dbClient = client;

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process if connection fails
  });

// Routes
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/api/users", userRoutes);

module.exports = app;
