'use strict';

/*
  pass the assertion
*/

let pattern = '+';
while (pattern.length < 5) {
  pattern += '-';
}
pattern += '+';
console.assert(pattern === '+----+', 'the string should be "+----+"')



while (pattern.length <= 5) { // distractor

  let pattern === '+'; // distractor

  pattern = '-'; // distractor
  pattern = '+'; // distractor
