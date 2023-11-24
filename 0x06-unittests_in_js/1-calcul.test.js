const assert = require('assert');
const calculateNumber = require('./1-calcul');

const testsSUM = [
  { a: 2.0, b: 2.0, expected: 4 },
  { a: 2.3, b: 1.8, expected: 4 },
  { a: -2.0, b: -2.0, expected: -4 },
  { a: -2.3, b: -1.8, expected: -4 },
  { a: -2.0, b: 2.0, expected: 0 },
  { a: 2.0, b: -2.0, expected: 0 },
  { a: 0.0, b: 0.0, expected: 0 }
];

const testsSUBTRACT = [
  { a: 2.0, b: 2.0, expected: 0 },
  { a: 2.3, b: 1.8, expected: 0 },
  { a: -2.0, b: -2.0, expected: 0 },
  { a: -2.3, b: -1.8, expected: 0 },
  { a: -2.0, b: 2.0, expected: -4 },
  { a: 2.0, b: -2.0, expected: 4 },
  { a: 0.0, b: 0.0, expected: 0 }
];

const testsDIVIDE = [
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
];

describe('calculateNumber', () => {
  const type = 'SUM';

  describe(`Type: ${type}`, () => {
    for (let i = 0; i < testsSUM.length; i++) {
      it(`Test ${i + 1}`, () => {
        const a = testsSUM[i]['a'];
        const b = testsSUM[i]['b'];

        const gotValue = calculateNumber(type, a, b);
        const expectedValue = testsSUM[i]['expected'];

        assert.strictEqual(gotValue, expectedValue);
      });
    }
  });
});

describe('calculateNumber', () => {
  const type = 'SUBTRACT';

  describe(`Type: ${type}`, () => {
    for (let i = 0; i < testsSUBTRACT.length; i++) {
      it(`Test ${i + 1}`, () => {
        const a = testsSUBTRACT[i]['a'];
        const b = testsSUBTRACT[i]['b'];

        const gotValue = calculateNumber(type, a, b);
        const expectedValue = testsSUBTRACT[i]['expected'];

        assert.strictEqual(gotValue, expectedValue);
      });
    }
  });
});

describe('calculateNumber', () => {
  const type = 'DIVIDE';

  describe(`Type: ${type}`, () => {
    for (let i = 0; i < testsDIVIDE.length; i++) {
      it(`Test ${i + 1}`, () => {
        const a = testsDIVIDE[i]['a'];
        const b = testsDIVIDE[i]['b'];

        const gotValue = calculateNumber(type, a, b);
        const expectedValue = testsDIVIDE[i]['expected'];

        assert.strictEqual(gotValue, expectedValue);
      });
    }
  });
});
