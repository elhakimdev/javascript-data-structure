import { factorize } from "../../../src/Algorithm/Factorial/factorial.js";

test('factorize -1 must equal -1', () => {
  expect(factorize(-1).tobe(-1));
});
