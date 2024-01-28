const { read } = require("../lib/read");
const { spawn } = require("node:child_process");

const touch = spawn("touch", ["emptyArray.test.json"]);
const rm = spawn("rm");

const fileName = "data.test.json";

function touch() {}

beforeAll(() => {});

describe("tests: read -> A wrapper for fs", () => {
  test("reads JSON file from file system", () => {
    expect(read("data/data.json")).toEqual([]);
  });
});
