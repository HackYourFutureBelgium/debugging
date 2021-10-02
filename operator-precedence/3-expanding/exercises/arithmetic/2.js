// #todo

'use strict';

// refactor this function so there's one operation per step
//  re-run the tests every time you make a change (even a tiny change!)
//  practice using tests to pace your development

/**
 * Does math.
 *
 * @param {any} a
 * @param {any} b
 * @returns {number}
 */
const doMath = (a, b, c) => {
  return (-a / b) * +c;
};

// --- test cases ---

const _1_expect = Infinity;
const _1_actual = doMath(-1, 0, 1);
console.assert(Object.is(_1_actual, _1_expect), 'Test 1');

const _2_expect = -1.5;
const _2_actual = doMath(3, 2, 1);
console.assert(Object.is(_2_actual, _2_expect), 'Test 2');

const _3_expect = -1.9764705882352942;
const _3_actual = doMath(1.2, 3.4, 5.6);
console.assert(Object.is(_3_actual, _3_expect), 'Test 3');

const _4_expect = NaN;
const _4_actual = doMath('a', 'b', 'c');
console.assert(Object.is(_4_actual, _4_expect), 'Test 4');

const _5_expect = -0.1;
const _5_actual = doMath('1', 1e1, true);
console.assert(Object.is(_5_actual, _5_expect), 'Test 5');

const _6_expect = NaN;
const _6_actual = doMath(Infinity, '4', false);
console.assert(Object.is(_6_actual, _6_expect), 'Test 6');
