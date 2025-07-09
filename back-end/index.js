const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const router = require("./routes");
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT;

// API routes
app.use("/api", router);

// Connect to the database
connectDB();

// Test route
app.get("/", (req, res) => {
  res.send("heythere");
});

// Start server
app.listen(port, () => {
  console.log(`Server connected on port: ${port}`);
});
