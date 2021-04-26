'use strict';
console.log('-- begin --');

// a >= b
// if both args are strings, compare the unicode characters
// otherwise convert both values to Number and compare as numbers

// fill in the blanks to pass the assertions
//  there may be more than one correct answer!

const _1_expect = _;
const _1_actual = '1' >= 1;
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = true;
const _2_actual = _ >= null;
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = false;
const _3_actual = _ >= false;
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = _;
const _4_actual = '0.0' >= false;
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = _;
const _5_actual = false >= true;
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = _;
const _6_actual = '13' >= true;
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = _;
const _7_actual = 'aa' >= 'ab';
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = _;
const _8_actual = 'aa' >= 'aa';
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = _;
const _9_actual = 0 >= '';
console.assert(_9_actual === _9_expect, 'Test 9');


console.log('-- end --');