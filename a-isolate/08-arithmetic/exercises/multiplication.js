'use strict';

// a * b
// cast both values to Number and do multiplication

const multiply = (left, right) => left * right;

const _1_a = '1';
const _1_b = 1;
const _1_expect = _;
const _1_native = multiply(_1_a, _1_b);
console.assert(Object.is(_1_expect, _1_native), 'Test 1');

const _2_a = _;
const _2_b = null;
const _2_expect = 0;
const _2_native = multiply(_2_a, _2_b);
console.assert(Object.is(_2_expect, _2_native), 'Test 2');

const _3_a = false;
const _3_b = null;
const _3_expect = _;
const _3_native = multiply(_3_a, _3_b);
console.assert(Object.is(_3_expect, _3_native), 'Test 3');

const _4_a = '0.0';
const _4_b = false;
const _4_expect = _;
const _4_native = multiply(_4_a, _4_b);
console.assert(Object.is(_4_expect, _4_native), 'Test 4');

const _5_a = false;
const _5_b = true;
const _5_expect = _;
const _5_native = multiply(_5_a, _5_b);
console.assert(Object.is(_5_expect, _5_native), 'Test 5');

const _6_a = '13';
const _6_b = true;
const _6_expect = _;
const _6_native = multiply(_6_a, _6_b);
console.assert(Object.is(_6_expect, _6_native), 'Test 6');

const _7_a = 'aa';
const _7_b = '18';
const _7_expect = _;
const _7_native = multiply(_7_a, _7_b);
console.assert(Object.is(_7_expect, _7_native), 'Test 7');

const _8_a = 'aa';
const _8_b = 'aa';
const _8_expect = _;
const _8_native = multiply(_8_a, _8_b);
console.assert(Object.is(_8_expect, _8_native), 'Test 8');

const _9_a = undefined;
const _9_b = 'hellow';
const _9_expect = _;
const _9_native = multiply(_9_a, _9_b);
console.assert(Object.is(_9_expect, _9_native), 'Test 9');
