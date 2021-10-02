// #todo

'use strict';

// refactor this function so there's one operation per step
//  re-run the tests every time you make a change (even a tiny change!)
//  practice using tests to pace your development

/**
 * Determines if both values are falsy.
 *
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 */
const bothAreFalsy = (a, b) => {
  return !a && !b;
};

/* --- test cases ---

  which path does each test case follow?
*/

const _1_expect = true;
const _1_actual = bothAreFalsy(null, 0);
console.assert(Object.is(_1_actual, _1_expect), 'Test 1');

const _2_expect = true;
const _2_actual = bothAreFalsy('', false);
console.assert(Object.is(_2_actual, _2_expect), 'Test 2');

const _3_expect = true;
const _3_actual = bothAreFalsy(undefined, NaN);
console.assert(Object.is(_3_actual, _3_expect), 'Test 3');

const _4_expect = false;
const _4_actual = bothAreFalsy(0.1, 0.2);
console.assert(Object.is(_4_actual, _4_expect), 'Test 4');

const _5_expect = false;
const _5_actual = bothAreFalsy('1', true);
console.assert(Object.is(_5_actual, _5_expect), 'Test 5');

const _6_expect = false;
const _6_actual = bothAreFalsy('hello!', 'goodbye :(');
console.assert(Object.is(_6_actual, _6_expect), 'Test 6');
