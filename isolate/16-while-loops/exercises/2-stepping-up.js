'use strict';
console.log('-- begin --');

/* Stepping Up

  Stepper Variables change systematically,
    going through a series of values for control flow

  "Stepper" describes how you are using a variable
    this term is not a JavaScript thing
    it's a general programming concept


  fill in the loop condition and update the stepper variable

*/

const toRepeat = 'howdy';
const totalRepetitions = 4;

let repeatedString = '';

/* declare and assign stepper variable
  used to count the number of times the string has been repeated
*/
let currentRepetitions = 0;
while (_) {
  repeatedString = _;
  _; // currentRepetitions should grow by 1
  console.log(repeatedString);
}

console.assert(
  repeatedString === 'howdyhowdyhowdyhowdy',
  '"howdy" should be repeated 4 times'
);


console.log('-- end --');