// #todo

'use strict';

// refactor this function so there's one operation per step
//  re-run the tests every time you make a change (even a tiny change!)
//  practice using tests to pace your development

/**
 * The worlds greatest mystery, will anyone ever know ?!
 *
 * @param {any} a
 * @returns {boolean}
 */
const mystery = (a) => {
  return typeof a === 'number' + a;
};

// --- test cases ---

const _1_expect = false;
const _1_actual = mystery('number');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = false;
const _2_actual = mystery('string');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = false;
const _3_actual = mystery(23);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = false;
const _4_actual = mystery(NaN);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = false;
const _5_actual = mystery(null);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = false;
const _6_actual = mystery(undefined);
console.assert(_6_actual === _6_expect, 'Test 6');
