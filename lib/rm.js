const { spawn } = require("node:child_process");
const fs = require("fs");
const exists = require("./exists");

const fileNotExistsError = new Error(`FileNotExistsError: `);
function rm(fileName) {
  try {
    if (!exists(fileName)) {
      throw fileNotExistsError();
    } else {
      // remove file here...
      console.log("Removing file");
      spawn("rm", [fileName]);
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = rm;
