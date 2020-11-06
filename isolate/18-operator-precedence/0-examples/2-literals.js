'use strict';

/* Literals

  literals are actual primitive values, not the store that hold them
  the first set of exercises asks you to evaluate expressions with literals

*/

const expected = true;

// the original expression
const step0 = typeof true === typeof !NaN;
console.assert(step0 === expected, 'Step 0');

// evaluate the left side of the comparison

// evaluate the typeof true
const step1 = 'boolean' === typeof !NaN;
console.assert(step1 === expected, 'Step 1');

// evaluate the right side of the comparison

// cast NaN to boolean and revers the value
const step2 = 'boolean' === typeof true;
console.assert(step2 === expected, 'Step 2');

// evaluate the typeof true
const step3 = 'boolean' === 'boolean';
console.assert(step3 === expected, 'Step 3');

// evaluate the comparison
const step4 = true;
console.assert(step4 === expected, 'Step 4');
