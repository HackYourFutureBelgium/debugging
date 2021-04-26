"use strict";

/**
 * add together all the digits in a number
 * if the number is negative, the sum will be negative
 * @param {number} toSum - the number who's digits will be summed
 * @returns {number} the sum of all digits in toSum
 */
const sumOfDigits = (toSum = 0) => {
  const isNegative = toSum < 0;

  const stringed = _(toSum);
  const _ = _.replace(/[^0-9]/g, "");
  let sum = 0;
  for (const character of onlyNumers) {
    const digit = _(character);
    __;
  }

  return isNegative ? -sum : sum;
};

const _1_expect = 6;
const _1_actual = sumOfDigits(123);
console.assert(_1_actual === _1_expect, "Test 1");

const _2_expect = 6;
const _2_actual = sumOfDigits(1.5);
console.assert(_2_actual === _2_expect, "Test 2");

const _3_expect = -2;
const _3_actual = sumOfDigits(-11);
console.assert(_3_actual === _3_expect, "Test 3");

const _4_expect = 0;
const _4_actual = sumOfDigits(0);
console.assert(_4_actual === _4_expect, "Test 4");

const _5_expect = 1;
const _5_actual = sumOfDigits(100000);
console.assert(_5_actual === _5_expect, "Test 5");

const _6_expect = -10;
const _6_actual = sumOfDigits(-5.5);
console.assert(_6_actual === _6_expect, "Test 6");

// test the default parameters
const _7_expect = 0;
const _7_actual = sumOfDigits();
console.assert(_7_actual === _7_expect, "Test 7: default parameter");


console.log('-- end --');