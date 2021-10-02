'use strict';

// initial expression
const aComputation = (a) => {
  // initial expression
  return Number(Boolean(a) === true);

  // // refactor 1st operator
  // const value1 = Boolean(a);
  // return Number(value1 === true);

  // // refactor 2nd operator
  // const value1 = Boolean(a);
  // const value2 = value1 === true;
  // return Number(value2);

  // // refactor 3rd operator
  // const value1 = Boolean(a);
  // const value2 = value1 === true;
  // const value3 = Number(value2);
  // return value3;
};

// --- test cases ---

const _1_expected = 0;
const _1_actual = aComputation(0);
console.assert(_1_actual === _1_expected, 'Test 1');

const _2_expected = 1;
const _2_actual = aComputation(1);
console.assert(_2_actual === _2_expected, 'Test 2');

const _3_expected = 0;
const _3_actual = aComputation('');
console.assert(_3_actual === _3_expected, 'Test 3');

const _4_expected = 1;
const _4_actual = aComputation('hello');
console.assert(_4_actual === _4_expected, 'Test 4');

const _5_expected = 0;
const _5_actual = aComputation(null);
console.assert(_5_actual === _5_expected, 'Test 5');
