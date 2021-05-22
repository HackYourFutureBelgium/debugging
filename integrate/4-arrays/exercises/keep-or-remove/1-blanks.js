'use strict';

/*
  gathers input from a user until they cancel
  then allows the user to filter out the ones they don't want anymore
*/

alert(
  `enter as many inputs as you want.

When you're done entering allInputs press "cancel"`
);

// -- gather user input --

// you can use `const` because the variable is not reassigned
//  the contents of the array will change
//  but the variable will still reference the same array
const allInputs = [];
let donePushing = false;
while (!donePushing) {
  const input = prompt('enter the next phrase or press "cancel"');

  // -- validate the input --
  if (input === _) {
    // -- check if the user is done --
    donePushing = false;
  } else if (input === _) {
    // -- check if the user input nothing --
    alert('nothing is not allowed');
  } else {
    // -- push the input --
    _._(_);
  }
}

// -- allow the user to filter their inputs --
const keepThese = [];
for (let i = _; i < _; _) {
  const keepIt = _(`do you want to keep "${text}"?`);
  if (keepIt) {
    keepThese.push(text);
  }
}

// -- build the final message --
let message = '';
for (const text of _) {
  message += `- "${text}"\n`;
}

// -- alert the final message --
alert(message);

// -- log for the developer --
console.log(allInputs, keepThese);
