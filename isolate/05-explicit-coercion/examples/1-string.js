'use strict';

// casting to string is the simplest coercion
//  it's (almost ;) as simple as putting quotes around the previous value

const _1_toCast = undefined;
const _1_string = String(_1_toCast);
console.log(1, typeof _1_toCast, _1_toCast, '->', typeof _1_string, _1_string);

const _2_toCast = null;
const _2_string = String(_2_toCast);
console.log(2, typeof _2_toCast, _2_toCast, '->', typeof _2_string, _2_string);

const _3_toCast = true;
const _3_string = String(_3_toCast);
console.log(3, typeof _3_toCast, _3_toCast, '->', typeof _3_string, _3_string);

const _4_toCast = false;
const _4_string = String(_4_toCast);
console.log(4, typeof _4_toCast, _4_toCast, '->', typeof _4_string, _4_string);

const _5_toCast = 3;
const _5_string = String(_5_toCast);
console.log(5, typeof _5_toCast, _5_toCast, '->', typeof _5_string, _5_string);

const _6_toCast = 1.0;
const _6_string = String(_6_toCast);
console.log(6, typeof _6_toCast, _6_toCast, '->', typeof _6_string, _6_string);

const _7_toCast = -2;
const _7_string = String(_7_toCast);
console.log(7, typeof _7_toCast, _7_toCast, '->', typeof _7_string, _7_string);

const _8_toCast = 12.3;
const _8_string = String(_8_toCast);
console.log(8, typeof _8_toCast, _8_toCast, '->', typeof _8_string, _8_string);

const _9_toCast = NaN;
const _9_string = String(_9_toCast);
console.log(9, typeof _9_toCast, _9_toCast, '->', typeof _9_string, _9_string);
