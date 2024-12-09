require("dotenv").config(); // Load environment variables
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const taskRoutes = require("./routes/tasks");

const app = express(); // Initialize express app

const PORT = process.env.PORT || 3000; // Get the port from environment variables or default to 3000

// MongoDB URI configuration
const MONGO_URI = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@mongodb:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?authSource=admin`;

const path = require("path");

// Serve the home page (index.html)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Middleware setup
app.use(bodyParser.json());
app.use(express.static("public"));

// Routes
app.use("/tasks", taskRoutes);

// MongoDB connection and server start
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected.");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("Database connection error:", err));
