const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
var http = require("http");
var https = require("https");
app.use(express.static("public"));

const logger = {
  get: () => {
    console.log(`GET request: ${new Date().toLocaleTimeString()}`);
  },
  post: () => {
    console.log(`[POST] received!: ${new Date().toLocaleTimeString()}`);
  },
};

app.get("/", cors(), (req, res, next) => {
  logger.get();
  //   res.send("Hello World!");
  res.sendFile("http://localhost:3000/index.html");
  next();
});

app.post("/query", cors(), (req, res, next) => {
  logger.post();
  res.send({ msg: "POST: /query -> message received! " });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
