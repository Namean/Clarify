const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
var http = require("http");
var https = require("https");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

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

app.get("/employees", cors(), (req, res) => {
  let successMessage, failureMessage;
  successMessage = "success!";
  failureMessage = "something went wrong";

  db.all(query, (err, row) => {
    try {
      res.send(row);
    } catch (error) {
      console.error(failureMessage, error);
    }
  });
});

app.post("/query", cors(), (req, res) => {
  console.log(`REQ::body -> ${Object.keys(req.body)}`);
  // Object destructuring
  const { name, email } = req.body; // makes me feel like a big boy developer!!
  console.log(name, email);
  logger.post();

  res.send({ msg: "POST: /query -> message received! " });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
