'use strict';

// exercise --->  write the function

/*
  gather numbers from a user until they enter "done"
  then sum the numbers and display the result
*/

/* ===== declare functions ===== */

/**
 * sums all numbers in an array of numbers
 *  an empty array should sum to 0
 *  the function has no side-effects
 * @param {number[]} manyNumbers - an array of numbers to add together
 * @returns {number} the sum of all the numbers in the array
 */
const addNumbers = () => {};
{
  console.assert(addNumbers([1, 2, 3]) === 6, 'Test 1');
  console.assert(addNumbers([-2, 2]) === 0, 'Test 2');
  console.assert(addNumbers([-1, -2, -3]) === -6, 'Test 3');

  console.assert(addNumbers([]) === 0, 'Test 4: an empty array sums to 0');

  // tests are in a block scope so `argument` is not global
  const argument = [1, 2, 3];
  addNumbers(argument);
  console.assert(deepCompare(argument, [1, 2, 3]), 'Test 5: no side effects');
}

/* ===== main program (use functions) ===== */

alert(
  `enter as many numbers as you want.

When you're done entering numbers enter "done"
-> your numbers will be added together`
);

// you can use `const` because the variable is not reassigned
//  the contents of the array will change
//  but the variable will still reference the same array
const numbers = [];

// -- gather user input --
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
      numbers.push(nextNumber);
    }
  }
}

// -- calculate the sum --
const sum = addNumbers(numbers);

// -- build the final message --
let message = `nubers: `;
for (const number of numbers) {
  message += `${number}, `;
}
message += `\nsum: ${sum}`;

// -- alert the final message --
alert(message);

// -- log for the developer --
console.log(sum, numbers);

/* ========== hoisted testing dependency ========== */

// prettier-ignore
function deepCompare (actual, expect) {  return actual === expect || Object.is(actual, expect)|| (Object(actual) === actual && Object(expect) === expect) && (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))|| Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key])));}
