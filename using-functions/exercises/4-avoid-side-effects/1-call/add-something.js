'use strict';

/*
  users can input a collection of numbers
  then they can input a new number that will be added to each array entry
*/

/* ===== declare functions ===== */

/**
 * creates a new array with the same length as the argument
 * `toAdd` has been added to each element in the new array
 * @param {number[]} numbers - an array of numbers
 * @param {number} toAdd - the number to add to each array item
 * @returns a new array with one entry per `numbers`
 */
const addToNumbers = (numbers = [], toAdd = 0) => {
  const result = [];
  for (const number of numbers) {
    const nextNumber = number + toAdd;
    result.push(nextNumber);
  }
  return result;
};
{
  const _1_result = addToNumbers([1, 2, 3], -1);
  const _1_test = deepCompare(_1_result, [0, 1, 2]);
  console.assert(_1_test, 'Test 1');

  const _2_result = addToNumbers([-1, 2, 0, 1, -2], 3);
  const _2_test = deepCompare(_2_result, [2, 5, 3, 4, 1]);
  console.assert(_2_test, 'Test 2');

  // tests are in a block scope so `argument` is not global
  const argument = [1, 2, 3];
  addToNumbers(argument, 0);
  console.assert(deepCompare(argument, [1, 2, 3]), 'Test 3: no side effects');
}

/* ===== main program (use functions) ===== */

alert(
  `enter as many numbers as you want

then enter another number
-> your new number will be added to each entry`
);

// -- gather numbers --
const original = [];
let notDone = true;
while (notDone) {
  const input = prompt('enter the next number or "done"');

  if (input === null || input === '') {
    alert('nothing is not allowed');
  } else if (input === 'done') {
    notDone = false;
  } else {
    const nextNumber = Number(input);
    if (Number.isNaN(nextNumber)) {
      alert(`"${input}" is not a number`);
    } else {
      original.push(nextNumber);
    }
  }
}

// -- get the length to filter --
let numberToAdd = NaN;
while (true) {
  const input = prompt('what number should be added to each entry?');
  numberToAdd = Number(input);

  if (input === '' || input === null) {
    alert('enter something');
  } else if (Number.isNaN(numberToAdd)) {
    alert(`"${input}" is not a number`);
  } else {
    break;
  }
}

// -- add the new value to each number --
// declare a new variable named `addified`
//  assign it the return value from calling `addToNumbers`
_;

// -- generate a message for the user --
let before = 'before: ';
let after = 'after: ';
for (let i = 0; i < original.length; i++) {
  before += `${original[i]}, `;
  after += `${addified[i]}, `;
}
const message = `${before}\n${after}`;

// -- alert the final message --
alert(message);

// -- log for developers --
console.log(original, numberToAdd, addified);

/* ========== hoisted testing dependency ========== */

// prettier-ignore
function deepCompare (actual, expect) {  return actual === expect || Object.is(actual, expect)|| (Object(actual) === actual && Object(expect) === expect) && (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))|| Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key])));}
