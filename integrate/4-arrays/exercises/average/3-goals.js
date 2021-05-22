'use strict';

/*
  gather numbers from a user until they enter "done"
  then average the numbers and display the result
*/

alert(
  `enter as many numbers as you want.

When you're done entering numbers enter "done"
-> your numbers will be averaged`
);

// you can use `const` because the variable is not reassigned
//  the contents of the array will change
//  but the variable will still reference the same array
const numbers = [];
/* -- BEGIN: gather users numbers -- */

/* -- END: gather users numbers -- */

let sum = 0;
/* -- BEGIN: add the numbers together -- */

/* -- END: add the numbers together -- */

const average = sum / numbers.length;

let message = `numbers: `;
for (const number of numbers) {
  message += `${number}, `;
}
message += `\naverage: ${average}`;

alert(message);
