const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const router = require("./routes");
dotenv.config();
// creating express instance
const app = express();
const port = process.env.PORT;
app.use(router);

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("heythere");
});

app.listen(port, () => {
  console.log(`server connected on: ${port}`);
});
