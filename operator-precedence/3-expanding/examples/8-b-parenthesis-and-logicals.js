'use strict';

const aComputation = (a, b, c) => {
  // initial expression
  return (c && b) || a;

  // // refactor 1st operator
  // let value1; // &&
  // if (c) {
  //   value1 = b;
  // } else {
  //   value1 = c;
  // }
  // return value1 || a;

  // // refactor 2nd operator
  // let value1; // &&
  // if (c) {
  //   value1 = b;
  // } else {
  //   value1 = c;
  // }
  // // value2: ||
  // if (value1) {
  //   return value1;
  // } else {
  //   return a;
  // }
};

/* --- test cases ---

  which path does each test case follow?
*/

const _1_expected = true;
const _1_actual = aComputation(true, 1, '');
console.assert(_1_actual === _1_expected, 'Test 1');

const _2_expected = 1;
const _2_actual = aComputation(1, false, 'hi');
console.assert(_2_actual === _2_expected, 'Test 2');

const _3_expected = false;
const _3_actual = aComputation(false, 0, 12);
console.assert(_3_actual === _3_expected, 'Test 3');

const _4_expected = '';
const _4_actual = aComputation('', 'good bye', null);
console.assert(_4_actual === _4_expected, 'Test 4');

const _5_expected = 'hello';
const _5_actual = aComputation(0, 'hello', -3);
console.assert(_5_actual === _5_expected, 'Test 5');
