'use strict';

/* Variables

  the same exercises, but with the expression values read from  variables
  leave the variables in the expressions until you evaluate them!

*/

const x = null;
const y = 5;
const z = '5';

const expected = '55';

// the original expression
const step0 = !!x || y + z;
console.assert(step0 === expected, 'Step 0');

// evaluate the left side of ||

// coerce null to Boolean with ! 
const step1 = !true || y + z;
console.assert(step1 === expected, 'Step 1');

// reverse true to false with !
const step2 = false || y + z
console.assert(step2 === expected, 'Step 2');

// move on to evaluate the right side of ||

// coerce the number to a string and concatenate
const step3 = '55';
console.assert(step3 === expected, 'Step 3');


/* remember short-circuiting, all the way back in "Logical Operators"
  the || operator will continue to evaluate the right side if the left is falsy
*/
