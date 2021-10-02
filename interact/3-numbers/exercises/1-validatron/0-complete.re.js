// #todo

'use strict';

// get user input as a String
const userString = prompt('enter a number:');
// coerce it to a Number
const userNumber = Number(userString);

// is the number NaN or not?
// this is is there because we want the opposite of Number.isNaN
const inputIsANumber = !Number.isNaN(userNumber);

// does the user think their String becomes a Number?
const confirmMessage =
  'did you really enter a number?\n\n' + 'yes -> "ok"\n' + 'no  -> "cancel"';
const userThinksItsANumber = confirm(confirmMessage);

// does the user think the same thing as JavaScript?
const userIsCorrect = userThinksItsANumber === inputIsANumber;

if (userIsCorrect) {
  alert('correct!');
} else {
  alert('nope :(');
}
