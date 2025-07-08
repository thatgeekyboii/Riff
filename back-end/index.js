const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
// creating express instance
const app = express();

const port = process.env.PORT;
console.log('portval', port)

app.get("/", (req, res) => {
  res.send("heythere");
});

app.listen(port, () => {
  console.log(`server connected on: ${port}`);
});
