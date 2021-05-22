'use strict';

/*
  only keep words that are the right length
*/

alert(
  `enter as many words as you want

then enter a length
-> only words of the right length will remain`
);

// -- gather words --

// you can use `const` because the variable is not reassigned
//  the contents of the array will change
//  but the variable will still reference the same array
const words = [];

while (_) {
  /* == BEGIN: gather words until the user cancels == */
  /* == END == */
}

// -- get the length to filter --
let lengthToKeep = NaN;

while (_) {
  /* == BEGIN: a number from the user == */
  /* == END == */
}

// -- keep only words with the right length --
const keepThese = [];
/* == BEGIN: filter out words that are not the correct length == */
/* == END == */

// -- generate a message for the user --
let message = `length: ${lengthToKeep}\nwords: `;
for (const word of keepThese) {
  message += `${word}, `;
}

// -- alert the final message --
alert(message);

// -- log for developers --
console.log(words, lengthToKeep, keepThese);
