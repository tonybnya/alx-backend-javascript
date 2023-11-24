const assert = require('assert');
const calculateNumber = require('./1-calcul');

const testCases = {
  SUM: [
    { a: 2.0, b: 2.0, expected: 4 },
    { a: 2.3, b: 1.8, expected: 4 },
    { a: -2.0, b: -2.0, expected: -4 },
    { a: -2.3, b: -1.8, expected: -4 },
    { a: -2.0, b: 2.0, expected: 0 },
    { a: 2.0, b: -2.0, expected: 0 },
    { a: 0.0, b: 0.0, expected: 0 }
  ],
  SUBTRACT: [
    { a: 2.0, b: 2.0, expected: 0 },
    { a: 2.3, b: 1.8, expected: 0 },
    { a: -2.0, b: -2.0, expected: 0 },
    { a: -2.3, b: -1.8, expected: 0 },
    { a: -2.0, b: 2.0, expected: -4 },
    { a: 2.0, b: -2.0, expected: 4 },
    { a: 0.0, b: 0.0, expected: 0 }
  ],
  DIVIDE: [
    { a: 2.0, b: 2.0, expected: 1 },
    { a: 2.3, b: 1.8, expected: 1 },
    { a: -2.0, b: -2.0, expected: 1 },
    { a: -2.3, b: -1.8, expected: 1 },
    { a: -2.0, b: 2.0, expected: -1 },
    { a: 2.0, b: -2.0, expected: -1 },
    { a: -7.0, b: -2.0, expected: 3.5 },
    { a: 2.6, b: 3.0, expected: 1 },
    { a: 0.0, b: -5.0, expected: -0 },
    { a: 0.0, b: 0.0, expected: 'Error' },
    { a: 5.0, b: 0, expected: 'Error' },
    { a: -5.0, b: 0.0, expected: 'Error' },
    { a: 5.0, b: 0.2, expected: 'Error' },
    { a: 5.0, b: -0.2, expected: 'Error' }
  ]
};

for (const type in testCases) {
  describe('calculateNumber', () => {
    describe(`Type: ${type}`, () => {
      const tests = testCases[type];

        for (let i = 0; i < tests.length; i++) {
          it(`Test ${i + 1}`, () => {
            const a = tests[i]['a'];
            const b = tests[i]['b'];
            const expectedValue = tests[i]['expected'];

            const gotValue = calculateNumber(type, a, b);

            assert.strictEqual(gotValue, expectedValue);
          });
        }
    });
  });
}
