'use strict';

/* conditionals decide which path to execute based on truthiness

  if (condition) {
    statements1
  } else {
    statements2
  }

*/

const truthinessDecides = (value) => {
  let result = '';
  if (value) {
    result = 'path 1: truthy';
  } else {
    result = 'path 2: falsy';
  }
  return result;
};

const _1_expect = 'path 1: truthy';
const _1_actual = truthinessDecides(1);
console.assert(_1_actual === _1_expect, 'Test 1: path 1');

const _2_expect = 'path 1: truthy';
const _2_actual = truthinessDecides('hi!');
console.assert(_2_actual === _2_expect, 'Test 2: path 1');

const _3_expect = 'path 1: truthy';
const _3_actual = truthinessDecides(true);
console.assert(_3_actual === _3_expect, 'Test 3: path 1');

const _4_expect = 'path 2: falsy';
const _4_actual = truthinessDecides(0);
console.assert(_4_actual === _4_expect, 'Test 4: path 2');

const _5_expect = 'path 2: falsy';
const _5_actual = truthinessDecides('');
console.assert(_5_actual === _5_expect, 'Test 5: path 2');

const _6_expect = 'path 2: falsy';
const _6_actual = truthinessDecides(false);
console.assert(_6_actual === _6_expect, 'Test 6: path 2');

const _7_expect = 'path 2: falsy';
const _7_actual = truthinessDecides(null);
console.assert(_7_actual === _7_expect, 'Test 7: path 2');

const _8_expect = 'path 2: falsy';
const _8_actual = truthinessDecides(undefined);
console.assert(_8_actual === _8_expect, 'Test 8: path 2');
