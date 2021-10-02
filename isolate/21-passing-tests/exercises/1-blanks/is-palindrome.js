// #todo

'use strict';
console.log('-- begin --');

/**
 * Checks if a string is a palindrome.
 * Palindrome: a string that is the same forwards or backwards.
 *
 * @param {string} [toCheck=''] - The string that might be a palindrome.
 * @returns {boolean} Is the string a palindrome?
 */
const isPalindrome = (toCheck = '') => {
  let itIs = _;
  for (let i = 0; i <= toCheck.length / 2; i++) {
    const left = toCheck[i];
    const right = toCheck[toCheck.length - 1 - i];
    if (_) {
      itIs = _;
      break;
    }
  }
  return itIs;
};

const _1_expect = false;
const _1_actual = isPalindrome('Racecar');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = false;
const _2_actual = isPalindrome('apple');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = true;
const _3_actual = isPalindrome('racecar');
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = true;
const _4_actual = isPalindrome('hannah');
console.assert(_4_actual === _4_expect, 'Test 4');

// test the default parameters
const _5_expect = true;
const _5_actual = isPalindrome();
console.assert(_5_actual === _5_expect, 'Test 5: default parameter');

console.log('-- end --');
