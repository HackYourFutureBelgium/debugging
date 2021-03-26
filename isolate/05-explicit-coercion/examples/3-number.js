'use strict';

// casting to number is the most complicated coercion
//  but it's understandable!  you'll just need to learn a few rules

const _1_toCast = undefined;
const _1_number = Number(_1_toCast);
console.log(1, typeof _1_toCast, _1_toCast, '->', typeof _1_number, _1_number);

const _2_toCast = null;
const _2_number = Number(_2_toCast);
console.log(2, typeof _2_toCast, _2_toCast, '->', typeof _2_number, _2_number);

const _3_toCast = true;
const _3_number = Number(_3_toCast);
console.log(3, typeof _3_toCast, _3_toCast, '->', typeof _3_number, _3_number);

const _4_toCast = false;
const _4_number = Number(_4_toCast);
console.log(4, typeof _4_toCast, _4_toCast, '->', typeof _4_number, _4_number);

const _5_toCast = '';
const _5_number = Number(_5_toCast);
console.log(5, typeof _5_toCast, _5_toCast, '->', typeof _5_number, _5_number);

const _6_toCast = '   ';
const _6_number = Number(_6_toCast);
console.log(6, typeof _6_toCast, _6_toCast, '->', typeof _6_number, _6_number);

const _7_toCast = '12.3';
const _7_number = Number(_7_toCast);
console.log(7, typeof _7_toCast, _7_toCast, '->', typeof _7_number, _7_number);

const _8_toCast = '-0.0';
const _8_number = Number(_8_toCast);
console.log(8, typeof _8_toCast, _8_toCast, '->', typeof _8_number, _8_number);

const _9_toCast = 'four';
const _9_number = Number(_9_toCast);
console.log(9, typeof _9_toCast, _9_toCast, '->', typeof _9_number, _9_number);
