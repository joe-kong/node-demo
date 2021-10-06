require("dotenv").config();
const express = require("express");
const app = express();
var  port = process.env.HTTP_PORT ;
app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(port, () => {
  console.log(`app is listening at port : ${port}`);
});