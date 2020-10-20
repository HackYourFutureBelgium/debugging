'use strict';

/* create more than 2 possible paths

  it's impossible to execute more than one of these paths

  if (condition1)
    statement1
  else if (condition2)
    statement2
  else if (condition3)
    statement3
  ...
  else
    statementN

*/
const sameness = (val1, val2) => {
  let result = '';
  if (val1 === val2) {
    result = 'strictly equal';
  } else if (typeof val1 === typeof val2) {
    result = 'same type';
  } else {
    result = 'totally different';
  }
  return result;
};

const _1_expect = 'strictly equal';
const _1_actual = sameness(1, 1);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'strictly equal';
const _2_actual = sameness('hello', 'hello');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'strictly equal';
const _3_actual = sameness(null, null);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'same type';
const _4_actual = sameness(12, 21);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 'same type';
const _5_actual = sameness(true, false);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'same type';
const _6_actual = sameness('hello', 'goodbye');
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = 'totally different';
const _7_actual = sameness(null, true);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 'totally different';
const _8_actual = sameness(':(', 0);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = 'totally different';
const _9_actual = sameness(false, -1);
console.assert(_9_actual === _9_expect, 'Test 9');
