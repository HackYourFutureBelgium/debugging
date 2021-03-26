'use strict';

/* Comparing Booleans

  comparing booleans happens in two steps:
  1. cast the boolean to a number
  2. compare the numbers

  the following examples are equivalent
  in part a, the booleans are being coerced behind the scenes
    implicit coercion
  in part b, the coercion is happening explicitly with Number(x)
    explicit coercion
  in each case, the final comparison is the same

*/


// this is equivalent to writing:  1 > 0
const _1_a_compareImplicit = true > false;
const _1_b_compareExplicit = Number(true) > Number(false);
console.log('_1_a_compareImplicit:', typeof _1_a_compareImplicit, _1_a_compareImplicit);
console.log('_1_b_compareExplicit:', typeof _1_b_compareExplicit, _1_b_compareExplicit);


// this is equivalent to writing:  0 < 0
const _2_a_compareImplicit = false < false;
const _2_b_compareExplicit = Number(false) < Number(false);
console.log('_2_a_compareImplicit:', typeof _2_a_compareImplicit, _2_a_compareImplicit);
console.log('_2_b_compareExplicit:', typeof _2_b_compareExplicit, _2_b_compareExplicit);


// this is equivalent to writing:  0 >= 1
const _3_a_compareImplicit = false >= true;
const _3_b_compareExplicit = Number(false) >= Number(true);
console.log('_3_a_compareImplicit:', typeof _3_a_compareImplicit, _3_a_compareImplicit);
console.log('_3_b_compareExplicit:', typeof _3_b_compareExplicit, _3_b_compareExplicit);


// this is equivalent to writing:  1 <= 1
const _4_a_compareImplicit = true <= true;
const _4_b_compareExplicit = Number(true) <= Number(true);
console.log('_4_a_compareImplicit:', typeof _4_a_compareImplicit, _4_a_compareImplicit);
console.log('_4_b_compareExplicit:', typeof _4_b_compareExplicit, _4_b_compareExplicit);
