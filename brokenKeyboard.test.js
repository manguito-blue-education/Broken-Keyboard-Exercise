const findBrokenKeys = require("./brokenKeyboard");

test("Test happy birthday", () => {
  expect(findBrokenKeys("happy birthday", "hawwy birthday")).toStrictEqual(["p"]);
});
test("Test starry night", () => {
  expect(findBrokenKeys("starry night", "starrq light")).toStrictEqual(["y", "n"]);
});
test("Test beethoven", () => {
  expect(findBrokenKeys("beethoven", "affthoif5")).toStrictEqual(["b", "e", "v", "n"]);
});
test("Test mozart", () => {
  expect(findBrokenKeys("mozart", "aiwgvx")).toStrictEqual(["m", "o", "z", "a", "r", "t"]);
});
test("Test - It should work for numbers.", () => {
  expect(findBrokenKeys("5678", "4678")).toStrictEqual(["5"]);
});
test("Test - It should work for punctuation.", () => {
  expect(findBrokenKeys("!!??$$", "$$!!??")).toStrictEqual(["!", "?", "$"]);
});
