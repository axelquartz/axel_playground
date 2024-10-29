const { default: TestRunner } = require("jest-runner");
let sumNums = require("./script.js");

test("return the adition of 2 numbers", () => {
  expect(sumNums).toBeDefined();
});
