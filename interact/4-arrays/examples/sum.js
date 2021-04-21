'use strict';

/*
  gather numbers from a user until they enter "done"
  then sum the numbers and display the result
*/

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

  // -- validate the input --
  if (input === null || input === '') {
    // -- check if the user input nothing --
    alert('nothing is not allowed');
  } else if (input === 'done') {
    // -- check if the user is done --
    notDone = false;
  } else {
    // -- push the input if it was a number --
    const nextNumber = Number(input);
    if (Number.isNaN(nextNumber)) {
      alert(`"${input}" is not a number`);
    } else {
      numbers.push(nextNumber);
    }
  }
}

// -- calculate the sum --
let sum = 0;
for (const number of numbers) {
  sum += number;
}

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
