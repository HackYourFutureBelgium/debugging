'use strict';

const aComputation = (a, b) => {
  // initial expression
  return (a * (b + b)) / a;

  // // refactor 1st operator
  // const value1 = b + b;
  // return (a * value1) / a;

  // // refactor 2nd operator
  // const value1 = b + b;
  // const value2 = a * value1;
  // return value2 / a;

  // // refactor 3rd operator
  // const value1 = b + b;
  // const value2 = a * value1;
  // const value3 = value2 / a;
  // return value3;
};

// --- test cases ---

const _1_expected = 2;
const _1_actual = aComputation(1, 1);
console.assert(_1_actual === _1_expected, 'Test 1');

const _2_expected = 2;
const _2_actual = aComputation(2, 1);
console.assert(_2_actual === _2_expected, 'Test 2');

const _3_expected = 4;
const _3_actual = aComputation(1, 2);
console.assert(_3_actual === _3_expected, 'Test 3');

const _4_expected = 10;
const _4_actual = aComputation(-5, 5);
console.assert(_4_actual === _4_expected, 'Test 4');

const _5_expected = 4;
const _5_actual = aComputation(4, 2);
console.assert(_5_actual === _5_expected, 'Test 5');
