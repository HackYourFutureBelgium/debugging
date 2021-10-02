// #todo

'use strict';

// refactor this function so there's one operation per step
//  re-run the tests every time you make a change (even a tiny change!)
//  practice using tests to pace your development

/**
 * Does something (il)logical.
 *
 * @param {any} a
 * @param {any} b
 * @returns {any}
 */
const illogic = (a, b) => {
  return a || (b && (b || a));
};

/* --- test cases ---

  which path does each test case follow?
*/

const _1_expect = 1;
const _1_actual = illogic(null, 1);
console.assert(Object.is(_1_actual, _1_expect), 'Test 1');

const _2_expect = '...';
const _2_actual = illogic('...', false);
console.assert(Object.is(_2_actual, _2_expect), 'Test 2');

const _3_expect = '100';
const _3_actual = illogic('100', 100);
console.assert(Object.is(_3_actual, _3_expect), 'Test 3');

const _4_expect = true;
const _4_actual = illogic(true, false);
console.assert(Object.is(_4_actual, _4_expect), 'Test 4');

const _5_expect = false;
const _5_actual = illogic(0, false);
console.assert(Object.is(_5_actual, _5_expect), 'Test 5');

const _6_expect = null;
const _6_actual = illogic('', null);
console.assert(Object.is(_6_actual, _6_expect), 'Test 6');
