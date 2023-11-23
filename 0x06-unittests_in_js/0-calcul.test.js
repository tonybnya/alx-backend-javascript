// const assert = require('assert');
// const calculateNumber = require('./0-calcul');
//
// const num = 4;
//
// describe('calculateNumber', () => {
//   it(`Test ${num - 3}: 1.0 + 2.0 = 3`, () => {
//     assert.strictEqual(calculateNumber(1.0, 2.0), 3);
//   });
//
//   it(`Test ${num - 2}: 1 + 3.7 = 5`, () => {
//     assert.strictEqual(calculateNumber(1, 3.7), 5);
//   });
//
//   it(`Test ${num - 1}: 1.2 + 3.7 = 5`, () => {
//     assert.strictEqual(calculateNumber(1.2, 3.7), 5);
//   });
//
//   it(`Test ${num - 0}: 1.5 + 3.7 = 6`, () => {
//     assert.strictEqual(calculateNumber(1.5, 3.7), 6);
//   });
// });
const assert = require('assert');
const calculateNumber = require('./0-calcul');

const numTestCases = 10;

describe('calculateNumber', () => {
  for (let i = 0; i < numTestCases; i++) {
    const num = i % numTestCases + 1;

    it(`Test ${num}`, () => {
      switch (num) {
        case 1:
          assert.strictEqual(calculateNumber(1.0, 2.0), 3);
          break;
        case 2:
          assert.strictEqual(calculateNumber(1.0, 2.4), 3);
          break;
        case 3:
          assert.strictEqual(calculateNumber(1.2, 3.7), 5);
          break;
        case 4:
          assert.strictEqual(calculateNumber(1.5, 3.7), 6);
          break;
        case 5:
          assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
          break;
        case 6:
          assert.strictEqual(calculateNumber(1.4, 2.4), 3);
          break;
        case 7:
          assert.strictEqual(calculateNumber(1.4, 2.0), 3);
          break;
        case 8:
          assert.strictEqual(calculateNumber(1.0, 2.5), 4);
          break;
        case 9:
          assert.strictEqual(calculateNumber(2.6, 2.5), 6);
          break;
        case 10:
          assert.strictEqual(calculateNumber(2.6, 2.0), 5);
          break;
        default:
          throw new Error(`Unexpected test case: ${num}`);
      }
    });
  }
});
