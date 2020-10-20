'use strict';

/* nesting conditionals is also possible
  there are four possible paths
  and 3 conditional statements, but only 2 will ever execute!

  if (condition1)
    statement1
  else
    if (condition2)
      statement2
    else
      if (condition3)
  ...

*/

const nestedConditionals = (a, b, c) => {
  let result = '';

  if (a) {
    if (b) {
      result = 'a: truthy, b: truthy';
    } else {
      result = 'a: truthy, b: falsy';
    }
  } else {
    if (c) {
      result = 'a: falsy, c: truthy';
    } else {
      result = 'a: falsy, c: falsy';
    }
  }

  return result;
};


const _1_expect = 'a: truthy, b: truthy';
const _1_actual = nestedConditionals(true, true, true);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'a: truthy, b: truthy';
const _2_actual = nestedConditionals(true, true, false);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'a: truthy, b: falsy';
const _3_actual = nestedConditionals(true, false, true);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'a: truthy, b: falsy';
const _4_actual = nestedConditionals(true, false, false);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 'a: falsy, c: truthy';
const _5_actual = nestedConditionals(false, true, true);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'a: falsy, c: truthy';
const _6_actual = nestedConditionals(false, false, true);
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = 'a: falsy, c: falsy';
const _7_actual = nestedConditionals(false, true, false);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 'a: falsy, c: falsy';
const _8_actual = nestedConditionals(false, false, false);
console.assert(_8_actual === _8_expect, 'Test 8');
