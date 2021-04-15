'use strict';

// fill in the blanks to pass the assertions
// fill in the documentation to describe the function

/**
 * _
 * @param {*} param1
 * @param {*} param2
 * @param {*} param3
 * @returns
 */
const scramble = (param1 = '', param2 = '', param3 = '') => {
  const result = `${param3}${param1}${param2}`;
  return result;
};

const _1_expect = _;
const _1_actual = scramble('a', 'c', 'b');
const _1_test = _1_actual === _1_expect;
console.assert(_1_test, 'Test 1');

const _2_expect = _;
const _2_actual = scramble('a', 'b', 'c');
const _2_test = _2_actual === _2_expect;
console.assert(_2_test, 'Test 2');

const _3_expect = _;
const _3_actual = scramble('c', 'b', 'a');
const _3_test = _3_actual === _3_expect;
console.assert(_3_test, 'Test 3');

const _4_expect = _;
const _4_actual = scramble('b', 'a', 'c');
const _4_test = _4_actual === _4_expect;
console.assert(_4_test, 'Test 4');

const _5_expect = _;
const _5_actual = scramble('b', 'c', 'a');
const _5_test = _5_actual === _5_expect;
console.assert(_5_test, 'Test 5');

const _6_expect = _;
const _6_actual = scramble('c', 'a', 'b');
const _6_test = _6_actual === _6_expect;
console.assert(_6_test, 'Test 6');
