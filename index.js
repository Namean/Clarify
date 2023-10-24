const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
var http = require("http");
var https = require("https");
app.use(express.static("public"));

app.get("/", cors(), (req, res, next) => {
  console.log(`GET request: ${new Date().toLocaleTimeString()}`);
  //   res.send("Hello World!");
  res.sendFile("http://localhost:3000/index.html");
  next();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
