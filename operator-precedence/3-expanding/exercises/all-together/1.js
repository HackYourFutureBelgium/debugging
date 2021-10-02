// #todo

'use strict';

// refactor this function so there's one operation per step
//  re-run the tests every time you make a change (even a tiny change!)
//  practice using tests to pace your development

/**
 * The worlds greatest mystery, will anyone ever know ?!
 *
 * @param {any} a
 * @param {any} b
 * @returns {(number|boolean)}
 */
const mystery = (a, b) => {
  return a % b || !!a;
};

/* --- test cases ---

  which path does each test case follow?
*/

const _1_expect = false;
const _1_actual = mystery(null, 0);
console.assert(Object.is(_1_actual, _1_expect), 'Test 1');

const _2_expect = true;
const _2_actual = mystery(12, 3);
console.assert(Object.is(_2_actual, _2_expect), 'Test 2');

const _3_expect = 3;
const _3_actual = mystery(3, 12);
console.assert(Object.is(_3_actual, _3_expect), 'Test 3');

const _4_expect = 1;
const _4_actual = mystery('6', '5');
console.assert(Object.is(_4_actual, _4_expect), 'Test 4');

const _5_expect = 0.14159265358979312;
const _5_actual = mystery(Math.PI, true);
console.assert(Object.is(_5_actual, _5_expect), 'Test 5');

const _6_expect = true;
const _6_actual = mystery('hello!', 'goodbye :(');
console.assert(Object.is(_6_actual, _6_expect), 'Test 6');
