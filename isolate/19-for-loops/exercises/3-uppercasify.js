'use strict';
console.log('-- begin --');

/* Uppercaseify

  you can use for loops to do some logic for each element in a string

  this loop should create a new string with each character upper-cased

*/

const lowerCaseString = 'abcde';
console.log('lowerCaseString:', lowerCaseString);

let upperCaseString = '';

for (_; _; _) {
  const nextLetter = lowerCaseString[_];
  const letterUpperCased = _._();
  upperCaseString = _;

  console.log(_); // your stepper variable
  console.log('upperCaseString:', upperCaseString);
}

console.assert(
  upperCaseString === 'ABCDE',
  'upper case string is all upper case'
);


console.log('-- end --');