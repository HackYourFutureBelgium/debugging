'use strict';
console.log('-- begin --');

/**
 * adds two numbers together
 * @param {number} x - the left left
 * @param {number} y - the right number
 * @returns {number} the sum of x and y
 */
const add = () => {};

const _1_expect = 2;
const _1_actual = add(1, 1);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 0;
const _2_actual = add(-1, 1);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 12;
const _3_actual = add(13, -1);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 0;
const _4_actual = add(0, 0);
console.assert(_4_actual === _4_expect, 'Test 4');

// test the default parameters
const _5_expect = 18;
const _5_actual = add(18);
console.assert(_5_actual === _5_expect, 'Test 5: second default parameter');

const _6_expect = 0;
const _6_actual = add();
console.assert(_6_actual === _6_expect, 'Test 6: both default parameters');


console.log('-- end --');