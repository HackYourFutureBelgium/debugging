'use strict';
console.log('-- begin --');

/* Boolean Flag Variable

  this exercise contains a variable used as a Boolean Flag

  a Boolean Flag is a variable used to keep track of some important condition
  it will written in one place to signal something about the program
    the if condition updates it's value if the paddedString is long enough
  it will be read in another place to make a decision
    the while loop condition uses it to check if the looping is finished

  complete the loop condition and the loop body to pass the assertion

*/

// constant variables used throughout the script
const longEnough = 14;
const padding = '.:.';

// accumulator variable, collecting the final result
let paddedString = 'hi';

// boolean flag variable
let isLongEnough = false;
while (_) {
  paddedString = _;
  console.log(paddedString);
  if (_) {
    _;
  }
}

console.assert(
  paddedString === 'hi.:..:..:..:.',
  '"hi" should have 12 padding characters'
);


console.log('-- end --');