'use strict';

const aComputation = (a, b) => {
  // initial expression
  return typeof a === 'boolean' ? a || b : a && b;

  // // refactor 1st operator
  // const value1 = typeof a;
  // return value1 === "boolean" ? a || b : a && b;

  // // refactor 2st operator
  // const value1 = typeof a;
  // const value2 = value1 === "boolean";
  // return value2 ? a || b : a && b;

  // // refactor 3rd operator
  // const value1 = typeof a;
  // const value2 = value1 === "boolean";
  // // value3: ternary
  // if (value2) {
  //   return a || b;
  // } else {
  //   return a && b;
  // }

  // // refactor 4th operators
  // const value1 = typeof a;
  // const value2 = value1 === "boolean";
  // // value3: ternary
  // if (value2) {
  //   // value4: ||
  //   if (a) {
  //     return a;
  //   } else {
  //     return b;
  //   }
  // } else {
  //   // value4: &&
  //   if (a) {
  //     return b;
  //   } else {
  //     return a;
  //   }
  // }
};

/* --- test cases ---

  which path does each test case follow?
*/

const _1_expected = true;
const _1_actual = aComputation(true, 1);
console.assert(_1_actual === _1_expected, 'Test 1');

const _2_expected = false;
const _2_actual = aComputation(1, false);
console.assert(_2_actual === _2_expected, 'Test 2');

const _3_expected = 0;
const _3_actual = aComputation(false, 0);
console.assert(_3_actual === _3_expected, 'Test 3');

const _4_expected = '';
const _4_actual = aComputation('', 'good bye');
console.assert(_4_actual === _4_expected, 'Test 4');

const _5_expected = 0;
const _5_actual = aComputation(0, 'hello');
console.assert(_5_actual === _5_expected, 'Test 5');
