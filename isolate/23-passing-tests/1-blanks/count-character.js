"use strict";

/**
 * counts how many times a specific character appears in a text
 * @param {string} text - the text to search
 * @param {string} toCount - the character to count, must have length 1
 * @returns {number} how many times the character appears in the text
 */
const countCharacter = (text = "", toCount = "") => {
  let count = _;
  if (_._ === _) {
    count++;
    for (const character of text) {
      if (character === _) {
        count++;
      }
    }
  }
  return count;
};

const _1_expect = 1;
const _1_actual = countCharacter("aA", "a");
console.assert(_1_actual === _1_expect, "Test 1");

const _2_expect = 0;
const _2_actual = countCharacter("Banana", "A");
console.assert(_2_actual === _2_expect, "Test 2");

const _3_expect = 3;
const _3_actual = countCharacter("BANANA", "A");
console.assert(_3_actual === _3_expect, "Test 3");

const _4_expect = -1;
const _4_actual = countCharacter("apple", "ap");
console.assert(_4_actual === _4_expect, "Test 4");

// test the default parameters
const _5_expect = -1;
const _5_actual = countCharacter("hello");
console.assert(_5_actual === _5_expect, "Test 5: second default parameter");

const _6_expect = -1;
const _6_actual = countCharacter();
console.assert(_6_actual === _6_expect, "Test 6: both default parameters");


console.log('-- end --');