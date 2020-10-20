'use strict';

// write the expected values


// Boolean then Number
const _1_expect = _;
const _1_boolean = Boolean(undefined)
const _1_number = Number(_1_boolean);
console.assert(_1_number === _1_expect, 'Test 1');

const _2_expect = _;
const _1_boolean = Boolean(null);
const _2_number = Number(_1_boolean);
console.assert(_2_number === _2_expect, 'Test 2');

const _3_expect = _;
const _3_boolean = Boolean('false');
const _3_number = Number(_3_boolean);
console.assert(_3_number === _3_expect, 'Test 3');


// Number then Boolean
const _4_expect = _;
const _4_number = Number('');
const _4_boolean = Boolean(_4_number);
console.assert(_4_number === _4_expect, 'Test 4');

const _5_expect = _;
const _5_number = Number(null);
const _5_boolean = Boolean(_5_number);
console.assert(_5_number === _5_expect, 'Test 5');

const _6_expect = _;
const _6_number = Number('  ');
const _6_boolean = Boolean(_6_number);
console.assert(_6_number === _6_expect, 'Test 6');


// String then Number
const _7_expect = _;
const _7_string = String(-1);
const _7_number = Number(_7_string);
console.assert(_7_number === _7_expect, 'Test 7');

const _8_expect = _;
const _8_string = String('true');
const _8_number = Number(_8_string);
console.assert(_8_number === _8_expect, 'Test 8');

const _9_expect = _;
const _9_string = String(Infinity);
const _9_number = Number(_9_string);
console.assert(_9_number === _9_expect, 'Test 9');

