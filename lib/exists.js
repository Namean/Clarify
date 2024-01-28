const fs = require("fs");

const fileNotExistsError = new Error("FileNotExistsError: ");

function exists(fileName) {
  let result = fs.existsSync(fileName);
  if (!result) throw fileNotExistsError;
  return result;
}

module.exports = { exists, fileNotExistsError };
