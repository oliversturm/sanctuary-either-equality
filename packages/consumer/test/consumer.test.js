const S = require("sanctuary");

const { consumerGetEither } = require("../");

test("either", () => {
  const res = consumerGetEither();
  const expected = S.Right("value");

  // this doesn't work
  //expect(res).toEqual(expected);

  // this works
  expect(res["fantasy-land/equals"](expected)).toBe(true);
});
