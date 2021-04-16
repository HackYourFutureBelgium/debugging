'use strict';

/*
  users can input a collection of texts
  then they can input the length of texts they want to keep
  all texts that are not that length will be removed
*/

/* ===== declare functions ===== */

/**
 * creates a new array containing only strings of the correct length
 * @param {strings[]} strings - an array of numbers
 * @param {number} goodLength - the length of string to keep
 * @returns a new array with only strings of `goodLength`
 */
const filterByLength = (strings = [], goodLength = 0) => {
  const result = [];
  for (const string of strings) {
    if (string.length === goodLength) {
      result.push(string);
    }
  }
  return result;
};
{
  const _1_result = filterByLength(['', 'a', 'ab', 'b'], 1);
  const _1_test = deepCompare(_1_result, ['a', 'b']);
  console.assert(_1_test, 'Test 1');

  const _2_result = filterByLength(['a', 'ab', 'abc', 'xyz', '3'], 3);
  const _2_test = deepCompare(_2_result, ['abc', 'xyz']);
  console.assert(_2_test, 'Test 2');

  // tests are in a block scope so `argument` is not global
  const argument = ['x', 'yz', 'abc'];
  filterByLength(argument, 0);
  console.assert(
    deepCompare(argument, ['x', 'yz', 'abc']),
    'Test 3: no side effects'
  );
}

/* ===== main program (use functions) ===== */

alert(
  `enter as many strings as you want

then enter a desired length
-> only strings of this length will be kept`
);

// -- gather numbers --
const allInputs = [];
let notDone = true;
while (notDone) {
  const input = prompt('enter the next text or cancel to finish');

  if (input === null) {
    notDone = false;
  } else {
    allInputs.push(input);
  }
}

// -- get the length to filter --
let lengthToKeep = NaN;
while (true) {
  const input = prompt('what length text do you want to keep?');
  lengthToKeep = Number(input);

  if (input === '' || input === null) {
    alert('enter something');
  } else if (Number.isNaN(lengthToKeep)) {
    alert(`"${input}" is not a number`);
  } else {
    break;
  }
}

// -- add the new value to each number --
// declare a new variable named `filtered`
//  assign it the return value from calling `filterByLength`
_;

// -- generate a message for the user --
let message = '';
for (let i = 0; i < filtered.length; i++) {
  message += `- "${filtered[i]}"\n`;
}

// -- alert the final message --
alert(message);

// -- log for developers --
console.log(allInputs, lengthToKeep, filtered);

/* ========== hoisted testing dependency ========== */

// prettier-ignore
function deepCompare (actual, expect) {  return actual === expect || Object.is(actual, expect)|| (Object(actual) === actual && Object(expect) === expect) && (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))|| Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key])));}
