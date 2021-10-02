'use strict';

// unary operators (!, +, -) are higher precedence than operators with 2 arguments (+, &&, *, )
//  PS. none of these exercises will have ++ or --
//  those operators modify variables in memory and make things sooo much more complex

const aComputation = (a, b) => {
  // initial expression
  return (a * -(b + b)) / !a;

  // // refactor 1st operator
  // const value1 = b + b;
  // return (a * -value1) / !a;

  // // refactor 2nd operator
  // const value1 = b + b;
  // const value2 = !a;
  // return (a * -value1) / value2;

  // // refactor 3rd operator
  // const value1 = b + b;
  // const value2 = !a;
  // const value3 = -value1;
  // return (a * value3) / value2;

  // // refactor 4th operator
  // const value1 = b + b;
  // const value2 = !a;
  // const value3 = -value1;
  // const value4 = a * value3;
  // return value4 / value2;

  // // refactor 5th operator
  // const value1 = b + b;
  // const value2 = !a;
  // const value3 = -value1;
  // const value4 = a * value3;
  // const value5 = value4 / value2;
  // return value5;
};

// --- test cases ---

const _1_expected = -Infinity;
const _1_actual = aComputation(1, 1);
console.assert(_1_actual === _1_expected, 'Test 1');

const _2_expected = -Infinity;
const _2_actual = aComputation(2, 1);
console.assert(_2_actual === _2_expected, 'Test 2');

const _3_expected = -Infinity;
const _3_actual = aComputation(1, 2);
console.assert(_3_actual === _3_expected, 'Test 3');

const _4_expected = Infinity;
const _4_actual = aComputation(-5, 5);
console.assert(_4_actual === _4_expected, 'Test 4');

const _5_expected = -Infinity;
const _5_actual = aComputation(4, 2);
console.assert(_5_actual === _5_expected, 'Test 5');
