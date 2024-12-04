const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();
const cors = require("cors");

const app = express();
// const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection using MongoClient
const uri = "mongodb+srv://gurunandmourya:CijbeNuTDeyAm3RV@cluster0.cihi6.mongodb.net/user_db?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});


async function connectToDatabase() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB!");

    // Pass the MongoDB client to routes if needed
    app.locals.dbClient = client;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process if connection fails
  }
}

// Connect to MongoDB before starting the server
connectToDatabase().then(() => {

  app.get("/", (req, res)=>{
    res.json("hello world")
  });
  // Routes
  app.use("/api/users", userRoutes);

  // Start the server
  app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
  );
});
module.exports = (req, res) => app(req, res);