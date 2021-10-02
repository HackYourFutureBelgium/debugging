'use strict';

const aComputation = (a, b) => {
  // initial expression
  return a + -b || a + 2 * b;

  // // refactor 1st operator
  // const value1  = -b
  // return a + value1 || a + 2 * b;

  // // refactor 2nd operator
  // const value1  = -b
  // const value2 = a + value1
  // return value2 || a + 2 * b;

  // // refactor 3rd operator
  // const value1 = -b;
  // const value2 = a + value1;
  // // value3: ||
  // if (value2) {
  //   return value2;
  // } else {
  //   return a + 2 * b;
  // }

  // // refactor 4th operator
  // const value1 = -b;
  // const value2 = a + value1;
  // // value3: ||
  // if (value2) {
  //   return value2;
  // } else {
  //   const value4 = 2 * b;
  //   return a + value4;
  // }

  // // refactor 5th operator
  // const value1 = -b;
  // const value2 = a + value1;
  // // value3: ||
  // if (value2) {
  //   return value2;
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

const _2_expected = 1;
const _2_actual = aComputation(2, 1);
console.assert(_2_actual === _2_expected, 'Test 2');

const _3_expected = -1;
const _3_actual = aComputation(1, 2);
console.assert(_3_actual === _3_expected, 'Test 3');

const _4_expected = -10;
const _4_actual = aComputation(-5, 5);
console.assert(_4_actual === _4_expected, 'Test 4');

const _5_expected = 21;
const _5_actual = aComputation(7, 7);
console.assert(_5_actual === _5_expected, 'Test 5');
