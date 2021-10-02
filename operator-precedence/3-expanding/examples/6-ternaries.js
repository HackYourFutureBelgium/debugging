'use strict';

const aComputation = (a, b) => {
  // initial expression
  return a === b + 1 ? a * -b : a + 2 * b;

  // // refactor 1st operator
  // const value1 = b + 1;
  // return a === value1 ? a * -b : a + 2 * b;

  // // refactor 2nd operator
  // const value1 = b + 1;
  // const value2 = a === value1;
  // return value2 ? a * -b : a + 2 * b;

  // // refactor 3nd operator (ternary)
  // const value1 = b + 1;
  // const value2 = a === value1;
  // // value3: ternary
  // if (value2) {
  //   return a * -b;
  // } else {
  //   return a + 2 * b;
  // }

  // // refactor 4th operators
  // //   notice: there are two 4th operators! one for each path
  // const value1 = b + 1;
  // const value2 = a === value1;
  // // value3: ternary
  // if (value2) {
  //   const value4 = -b;
  //   return a * value4;
  // } else {
  //   const value4 = 2 * b;
  //   return a + value4;
  // }

  // // refactor 5th operators
  // const value1 = b + 1;
  // const value2 = a === value1;
  // // value3: ternary
  // if (value2) {
  //   const value4 = -b;
  //   const value5 = a * value4;
  //   return value5;
  // } else {
  //   const value4 = 2 * b;
  //   const value5 = a + value4;
  //   return value5;
  // }
};

/* --- test cases ---

  which path does each test case follow?
*/

const _1_expected = 3;
const _1_actual = aComputation(1, 1);
console.assert(_1_actual === _1_expected, 'Test 1');

const _2_expected = -2;
const _2_actual = aComputation(2, 1);
console.assert(_2_actual === _2_expected, 'Test 2');

const _3_expected = 5;
const _3_actual = aComputation(1, 2);
console.assert(_3_actual === _3_expected, 'Test 3');

const _4_expected = -30;
const _4_actual = aComputation(-5, -6);
console.assert(_4_actual === _4_expected, 'Test 4');

const _5_expected = 8;
const _5_actual = aComputation(4, 2);
console.assert(_5_actual === _5_expected, 'Test 5');
