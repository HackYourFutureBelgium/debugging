'use strict';

// a <= b
// if both args are strings, compare the unicode characters
// otherwise convert both values to Number and compare as numbers

const lessThanOrEqualTo = (left, right) => left <= right;

const _1_a = '1';
const _1_b = 1;
const _1_expect = _;
const _1_native = lessThanOrEqualTo(_1_a, _1_b);
console.assert(_1_expect === _1_native, 'Test 1');

const _2_a = _;
const _2_b = null;
const _2_expect = true;
const _2_native = lessThanOrEqualTo(_2_a, _2_b);
console.assert(_2_expect === _2_native, 'Test 2');

const _3_a = _;
const _3_b = null;
const _3_expect = false;
const _3_native = lessThanOrEqualTo(_3_a, _3_b);
console.assert(_3_expect === _3_native, 'Test 3');

const _4_a = '0.0';
const _4_b = false;
const _4_expect = _;
const _4_native = lessThanOrEqualTo(_4_a, _4_b);
console.assert(_4_expect === _4_native, 'Test 4');

const _5_a = false;
const _5_b = true;
const _5_expect = _;
const _5_native = lessThanOrEqualTo(_5_a, _5_b);
console.assert(_5_expect === _5_native, 'Test 5');

const _6_a = '13';
const _6_b = true;
const _6_expect = _;
const _6_native = lessThanOrEqualTo(_6_a, _6_b);
console.assert(_6_expect === _6_native, 'Test 6');

const _7_a = 'aa';
const _7_b = 'ab';
const _7_expect = _;
const _7_native = lessThanOrEqualTo(_7_a, _7_b);
console.assert(_7_expect === _7_native, 'Test 7');

const _8_a = 'aa';
const _8_b = 'aa';
const _8_expect = _;
const _8_native = lessThanOrEqualTo(_8_a, _8_b);
console.assert(_8_expect === _8_native, 'Test 8');

const _9_a = 0;
const _9_b = '';
const _9_expect = _;
const _9_native = lessThanOrEqualTo(_9_a, _9_b);
console.assert(_9_expect === _9_native, 'Test 9');
