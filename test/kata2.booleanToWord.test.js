const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("Returns Yes when passed True", () => {
    expect(booleanToWord(true)).toBe('yes')
  })

  test("Returns No when passed false", () => {
    expect(booleanToWord(false)).toBe('no')
  })
});
