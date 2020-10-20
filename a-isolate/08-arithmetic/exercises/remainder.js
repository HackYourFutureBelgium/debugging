'use strict';

// a % b
// cast both values to Number and return the remainder when x is divided by y
//  what happens when you use Infinity?
//  what happens when you use 0?
//  what happens when you use NaN?

const remainder = (left, right) => left % right;

const _1_a = '8';
const _1_b = 2;
const _1_expect = _;
const _1_native = remainder(_1_a, _1_b);
console.assert(Object.is(_1_expect, _1_native), 'Test 1');

const _2_a = '2';
const _2_b = 8;
const _2_expect = _;
const _2_native = remainder(_2_a, _2_b);
console.assert(Object.is(_2_expect, _2_native), 'Test 2');

const _3_a = _;
const _3_b = '5';
const _3_expect = 3;
const _3_native = remainder(_3_a, _3_b);
console.assert(Object.is(_3_expect, _3_native), 'Test 3');

const _4_a = _; // find a different value than above
const _4_b = '5';
const _4_expect = 3;
const _4_native = remainder(_4_a, _4_b);
console.assert(Object.is(_4_expect, _4_native), 'Test 4');

const _5_a = _; // find a different value than above
const _5_b = '5';
const _5_expect = 3;
const _5_native = remainder(_5_a, _5_b);
console.assert(Object.is(_5_expect, _5_native), 'Test 5');

const _6_a = 8;
const _6_b = null;
const _6_expect = _;
const _6_native = remainder(_6_a, _6_b);
console.assert(Object.is(_6_expect, _6_native), 'Test 6');

const _7_a = 0;
const _7_b = 8;
const _7_expect = _;
const _7_native = remainder(_7_a, _7_b);
console.assert(Object.is(_7_expect, _7_native), 'Test 7');

const _8_a = Infinity;
const _8_b = 8;
const _8_expect = _;
const _8_native = remainder(_8_a, _8_b);
console.assert(Object.is(_8_expect, _8_native), 'Test 8');

const _9_a = undefined;
const _9_b = '4';
const _9_expect = _;
const _9_native = remainder(_9_a, _9_b);
console.assert(Object.is(_9_expect, _9_native), 'Test 9');
