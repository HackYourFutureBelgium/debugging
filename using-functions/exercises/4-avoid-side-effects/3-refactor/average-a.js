'use strict';

// exercise --->  refactor the logic & write the docs

/*
  gather numbers from a user until they enter "done"
  then average the numbers and display the result
*/

/* ===== declare functions ===== */

/**
 *
 */
const computeAverage = (toAverage = []) => {};
{
  console.assert(computeAverage([1, 2, 3]) === 2, 'Test 1');
  console.assert(computeAverage([-2, 2]) === 0, 'Test 2');
  console.assert(computeAverage([-1, -2, -3]) === -2, 'Test 3');

  console.assert(computeAverage([]) === 0, 'Test 4: an empty array returns 0');

  // tests are in a block scope so `argument` is not global
  const argument = [1, 2, 3];
  computeAverage(argument);
  console.assert(deepCompare(argument, [1, 2, 3]), 'Test 5: no side effects');
}

/* ===== main program (use functions) ===== */

alert(
  `enter as many numbers as you want.

When you're done entering numbers enter "done"
-> your numbers will be averaged`
);

// -- gather user input --
const numbers = [];
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

// -- calculate the average --
/* == BEGIN: refactor the averaging logic == */
let sum = 0;
for (const number of numbers) {
  sum += number;
}
const average = sum / numbers.length;
/* == END: == */

// -- build the final message --
let message = `numbers: `;
for (const number of numbers) {
  message += `${number}, `;
}
message += `\naverage: ${average}`;

// -- alert the final message --
alert(message);

// -- log for developers --
console.log(average, numbers);

/* ========== hoisted testing dependency ========== */

// prettier-ignore
function deepCompare (actual, expect) {  return actual === expect || Object.is(actual, expect)|| (Object(actual) === actual && Object(expect) === expect) && (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))|| Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key])));}
