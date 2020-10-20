'use strict';

/* writing one conditional after another will evaluate both conditionals
  there are four possible paths
  both conditionals will always execute

  if (condition)
    statement1A
  [else
    statement2A]

  if (condition)
    statement1B
  [else
    statement2B]

*/

const describeIt = (value) => {
  let result = '';

  if (value) {
    result += 'truthy';
  } else {
    result += 'falsy';
  }

  if (typeof value === 'number') {
    result += ' number';
  } else {
    result += ' not-number';
  }

  return result;
};

const _1_expect = 'truthy number';
const _1_actual = describeIt(1);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'truthy number';
const _2_actual = describeIt(-1);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'truthy not-number';
const _3_actual = describeIt(true);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'truthy not-number';
const _4_actual = describeIt('hello');
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 'falsy number';
const _5_actual = describeIt(0);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'falsy number';
const _6_actual = describeIt(NaN);
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = 'falsy not-number';
const _7_actual = describeIt(null);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 'falsy not-number';
const _8_actual = describeIt(false);
console.assert(_8_actual === _8_expect, 'Test 8');
