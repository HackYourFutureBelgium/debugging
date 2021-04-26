'use strict';
console.log('-- begin --');

/**
 * searches for a specific character in a string
 *  if the string exists it returns the index
 *  otherwise it returns -1
 * @param {string} toSearch - the text to search
 * @param {string} toFind - the character to search for
 *  if this is longer than 1, the search returns -1. why?
 * @returns {number} the index or -1
 */
const indexOf = () => {};

const _1_expect = -1;
const _1_actual = indexOf('qwerty', 'a');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 0;
const _2_actual = indexOf('qwerty', 'q');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 1;
const _3_actual = indexOf('abbbbb', 'b');
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 4;
const _4_actual = indexOf('abcde', 'e');
console.assert(_4_actual === _4_expect, 'Test 4');

// test the default parameters
const _5_expect = -1;
const _5_actual = indexOf('hello');
console.assert(_5_actual === _5_expect, 'Test 5: second default parameter');

const _6_expect = -1;
const _6_actual = indexOf();
console.assert(_6_actual === _6_expect, 'Test 6: both default parameters');


console.log('-- end --');