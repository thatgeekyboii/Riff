const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
// creating express instance
const app = express();
const port = process.env.PORT;

connectDB();

app.get("/", (req, res) => {
  res.send("heythere");
});

app.listen(port, () => {
  console.log(`server connected on: ${port}`);
});
