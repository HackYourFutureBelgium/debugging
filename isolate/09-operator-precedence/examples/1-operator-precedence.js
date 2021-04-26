'use strict';
console.log('-- begin --');

/* Operator Precedence

  try using the 'trace' button to see how the operators are executed in order

*/

const expected = 13;

const actual = 3 - 2 + (6 / 2) * 4;
console.assert(actual === expected, 'it should be 13');


console.log('-- end --');