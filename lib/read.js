const fs = require("fs");

function read(fileName) {
  let fileBuffer, fileString;
  fileBuffer = fs.readFileSync(fileName);
  fileString = fileBuffer.toString();
  dataObject = JSON.parse(fileString);

  return dataObject;
}

module.exports = { read };
