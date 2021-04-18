'use strict';

/*
  gathers input from a user until they cancel
  then allows the user to filter out the ones they don't want anymore
*/

alert(
  `enter as many inputs as you want.

When you're done entering strings press "cancel"`
);

// -- gather user input --

// you can use `const` because the variable is not reassigned
//  the contents of the array will change
//  but the variable will still reference the same array
const strings = [];
while (true) {
  const input = prompt('enter the next phrase or press "cancel"');

  // -- validate the input --
  if (input === null) {
    // -- check if the user is done --
    break;
  } else if (input === '') {
    // -- check if the user input nothing --
    alert('nothing is not allowed');
  } else {
    // -- push the input --
    strings.push(input);
  }
}

// -- allow the user to filter their inputs --
const saved = [];
/* == BEGIN: a loop for the user to filter their inputs == */

/* == END == */

// -- build the final message --
let message = '';
/* == BEGIN: a loop to build the final message == */

/* == END == */

// -- alert the final message --
alert(message);

// -- log for the developer --
console.log(strings, filtered);
