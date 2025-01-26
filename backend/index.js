const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const cors = require("cors");

const app = express();


// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// MongoDB connection using Mongoose
const mongoURI = "mongodb+srv://gurunandmourya:CijbeNuTDeyAm3RV@cluster0.cihi6.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));


// Routes
app.get("/", (req, res) => {
  res.send("Hello guru 1");
});

app.use("/api/users", userRoutes);

// Dynamic port for deployment
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
