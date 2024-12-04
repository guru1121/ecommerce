// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const userRoutes = require("./routes/userRoutes");
// require("dotenv").config();
// const cors = require("cors");

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log("MongoDB connection error:", err));

// // Routes
// app.use("/api/users", userRoutes);

// // Start Server
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
