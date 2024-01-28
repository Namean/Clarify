const { exists, fileNotExistsError } = require("../lib/exists");

describe("/lib/exists.js", () => {
  test("it should throw an error if file does not exist", () => {
    expect(exists("")).toThrow(fileNotExistsError);
  });
});
