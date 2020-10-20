'use strict';

// it's possible to write conditionals paths that can never happen!
//  keep an eye out for this, it can cause bugs and makes your code hard to understand

const impossibleElse = (value) => {
  let result = '';
  if (value || !value) {
    result = 'path 1: truthy or falsy';
  } else {
    result = 'path 2: unreachable!';
  }
  return result;
};

const _1_actual = impossibleElse(1);
const _1_expect = 'path 1: truthy or falsy';
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_actual = impossibleElse('hi!');
const _2_expect = 'path 1: truthy or falsy';
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_actual = impossibleElse(true);
const _3_expect = 'path 1: truthy or falsy';
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_actual = impossibleElse(0);
const _4_expect = 'path 1: truthy or falsy';
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_actual = impossibleElse('');
const _5_expect = 'path 1: truthy or falsy';
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_actual = impossibleElse(false);
const _6_expect = 'path 1: truthy or falsy';
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_actual = impossibleElse(null);
const _7_expect = 'path 1: truthy or falsy';
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_actual = impossibleElse(undefined);
const _8_expect = 'path 1: truthy or falsy';
console.assert(_8_actual === _8_expect, 'Test 8');
