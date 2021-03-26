'use strict';

/* Comparing Strings

  when comparing strings JavaScript will do two steps behind the scenes:
  1. convert the character to it's unicode value
  2. compare the unicode values

*/


// this is equivalent to writing:  97 > 65
const _1_compareImplicit = 'a' > 'A';
const _1_compareExplicit = 'a'.charCodeAt() > 'A'.charCodeAt();
console.log('_1_compareImplicit:', typeof _1_compareImplicit, _1_compareImplicit);
console.log('_1_compareExplicit:', typeof _1_compareExplicit, _1_compareExplicit);


// this is equivalent to writing:  46 < 33
const _2_compareImplicit = '.' < '!';
const _2_compareExplicit = '.'.charCodeAt() < '!'.charCodeAt();
console.log('_2_compareImplicit:', typeof _2_compareImplicit, _2_compareImplicit);
console.log('_2_compareExplicit:', typeof _2_compareExplicit, _2_compareExplicit);


// this is equivalent to writing:  55356 >= 55358
const _3_compareImplicit = '🎃' >= '🧂';
const _3_compareExplicit = '🎃'.charCodeAt() >= '🧂'.charCodeAt();
console.log('_3_compareImplicit:', typeof _3_compareImplicit, _3_compareImplicit);
console.log('_3_compareExplicit:', typeof _3_compareExplicit, _3_compareExplicit);


// this is equivalent to writing:  34 <= 96
const _4_compareImplicit = '"' <= '`';
const _4_compareExplicit = '"'.charCodeAt() <= '`'.charCodeAt();
console.log('_4_compareImplicit:', typeof _4_compareImplicit, _4_compareImplicit);
console.log('_4_compareExplicit:', typeof _4_compareExplicit, _4_compareExplicit);
