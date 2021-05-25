'use strict';
console.log('-- begin --');

// casting to boolean is key to mastering JavaScript
//  it's the heart of TRUTHINESS, a key JS concept
// most values are truthy, meaning they coerce to true
// there are only a few falsy values: https://developer.mozilla.org/en-US/docs/Glossary/Falsy

const _1_toCast = undefined;
const _1_bool = Boolean(_1_toCast);
console.log(1, typeof _1_toCast, _1_toCast, '->', typeof _1_bool, _1_bool);

const _2_toCast = null;
const _2_bool = Boolean(_2_toCast);
console.log(2, typeof _2_toCast, _2_toCast, '->', typeof _2_bool, _2_bool);

const _3_toCast = '';
const _3_bool = Boolean(_3_toCast);
console.log(3, typeof _3_toCast, _3_toCast, '->', typeof _3_bool, _3_bool);

const _4_toCast = '  ';
const _4_bool = Boolean(_4_toCast);
console.log(4, typeof _4_toCast, _4_toCast, '->', typeof _4_bool, _4_bool);

const _5_toCast = 'any other string';
const _5_bool = Boolean(_5_toCast);
console.log(5, typeof _5_toCast, _5_toCast, '->', typeof _5_bool, _5_bool);

const _6_toCast = 0;
const _6_bool = Boolean(_6_toCast);
console.log(6, typeof _6_toCast, _6_toCast, '->', typeof _6_bool, _6_bool);

const _7_toCast = -1;
const _7_bool = Boolean(_7_toCast);
console.log(7, typeof _7_toCast, _7_toCast, '->', typeof _7_bool, _7_bool);

const _8_toCast = 0.5;
const _8_bool = Boolean(_8_toCast);
console.log(8, typeof _8_toCast, _8_toCast, '->', typeof _8_bool, _8_bool);

const _9_toCast = -Infinity;
const _9_bool = Boolean(_9_toCast);
console.log(9, typeof _9_toCast, _9_toCast, '->', typeof _9_bool, _9_bool);

console.log('-- end --');
