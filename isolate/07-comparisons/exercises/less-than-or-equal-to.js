'use strict';
console.log('-- begin --');

// a <= b
// if both args are strings, compare the unicode characters
// otherwise convert both values to Number and compare as numbers

// fill in the blanks to pass the assertions
// there may be more than one correct answer!

const _1_expect = _;
const _1_native = '1' <= 1;
console.assert(_1_expect === _1_native, 'Test 1');

const _2_expect = true;
const _2_native = _ <= null;
console.assert(_2_expect === _2_native, 'Test 2');

const _3_expect = false;
const _3_native = _ <= null;
console.assert(_3_expect === _3_native, 'Test 3');

const _4_expect = _;
const _4_native = '0.0' <= false;
console.assert(_4_expect === _4_native, 'Test 4');

const _5_expect = _;
const _5_native = false <= true;
console.assert(_5_expect === _5_native, 'Test 5');

const _6_expect = _;
const _6_native = '13' <= true;
console.assert(_6_expect === _6_native, 'Test 6');

const _7_expect = _;
const _7_native = 'aa' <= 'ab';
console.assert(_7_expect === _7_native, 'Test 7');

const _8_expect = _;
const _8_native = 'aa' <= 'aa';
console.assert(_8_expect === _8_native, 'Test 8');

const _9_expect = _;
const _9_native = 0 <= '';
console.assert(_9_expect === _9_native, 'Test 9');


console.log('-- end --');