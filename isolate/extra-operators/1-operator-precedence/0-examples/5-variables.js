'use strict';

/* Variables

  the same exercises, but with the expression values read from  variables
  leave the variables in the expressions until you evaluate them!

*/

const x = null;
const y = 100;

const expected = false;

// the original expression
const step0 = !!x && !!y;
console.assert(step0 === expected, 'Step 0');

// begin evaluating the left side of ||

// coerce null to Boolean and reverse it's truthiness
const step1 = !true && !!y;
console.assert(step1 === expected, 'Step 1');

// reverse true to false
const step2 = false && !!y;
console.assert(step2 === expected, 'Step 2');

// short-circuit (skip) the right side of &&, no need to evaluate it!
const step3 = false;
console.assert(step3 === expected, 'Step 3');


/* remember short-circuiting, all the way back in "Logical Operators"
  because the left side of && is falsy, the right side will not be executed
  so we can clear out the && without doing any extra steps
*/
