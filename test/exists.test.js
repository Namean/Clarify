// const { exists, fileNotExistsError } = require("../lib/exists");

// describe("/lib/exists.js", () => {
//   test("it should throw an error if file does not exist", () => {
//     expect(exists("")).toThrow(fileNotExistsError);
//   });
// });

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
