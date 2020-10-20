'use strict';

/* a single conditional statement executes it's body if the condition is truthy

  if (condition) {
    statements1
  }

*/

const truthinessDecides = (value) => {
  let result = '';
  if (value) {
    result = 'path: truthy';
  }
  return result;
};

const _1_expect = 'path: truthy';
const _1_actual = truthinessDecides(1);
console.assert(_1_actual === _1_expect, 'Test 1: path');

const _2_expect = 'path: truthy';
const _2_actual = truthinessDecides('hi!');
console.assert(_2_actual === _2_expect, 'Test 2: path');

const _3_expect = 'path: truthy';
const _3_actual = truthinessDecides(true);
console.assert(_3_actual === _3_expect, 'Test 3: path');

const _4_expect = '';
const _4_actual = truthinessDecides(0);
console.assert(_4_actual === _4_expect, 'Test 4: path 2');

const _5_expect = '';
const _5_actual = truthinessDecides('');
console.assert(_5_actual === _5_expect, 'Test 5: path 2');

const _6_expect = '';
const _6_actual = truthinessDecides(false);
console.assert(_6_actual === _6_expect, 'Test 6: path 2');

