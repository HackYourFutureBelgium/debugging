'use strict';

/* Literals

  literals are actual primitive values, not the variables that hold them
  the first set of exercises asks you to evaluate expressions with literals

*/

const expected = '55';

// the original expression
const step0 = !!undefined || 5 + '5';
console.assert(step0 === expected, 'Step 0');

// evaluate the left side of ||

// coerce undefined to Boolean and reverse it's truthiness
const step1 = !true || 5 + '5';
console.assert(step1 === expected, 'Step 1');

// reverse true to false
const step2 = false || 5 + '5';
console.assert(step2 === expected, 'Step 2');

// move on to evaluate the right side of ||

// coerce the number to a string and concatenate
const step3 = '55';
console.assert(step3 === expected, 'Step 3');


/* remember short-circuiting, all the way back in "Logical Operators"
  the || operator will continue to evaluate the right side if the left is falsy
*/
