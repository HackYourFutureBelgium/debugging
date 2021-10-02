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
  return (b % (c - a * c)) / b;
};

// --- test cases ---

const _1_expect = NaN;
const _1_actual = doMath(-1, 0, 1);
console.assert(Object.is(_1_actual, _1_expect), 'Test 1');

const _2_expect = 0;
const _2_actual = doMath(3, 2, 1);
console.assert(Object.is(_2_actual, _2_expect), 'Test 2');

const _3_expect = 0.011764705882352821;
const _3_actual = doMath(1.2, 3.4, 5.6);
console.assert(Object.is(_3_actual, _3_expect), 'Test 3');

const _4_expect = 1;
const _4_actual = doMath(0.1, 0.2, 0.3);
console.assert(Object.is(_4_actual, _4_expect), 'Test 4');

const _5_expect = NaN;
const _5_actual = doMath('1', 1e1, true);
console.assert(Object.is(_5_actual, _5_expect), 'Test 5');

const _6_expect = 0;
const _6_actual = doMath('', '4', true);
console.assert(Object.is(_6_actual, _6_expect), 'Test 6');
