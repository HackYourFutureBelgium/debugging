'use strict';

/* Operator Precedence

  if you remember the school days of math, you might recognize this:
  - PEMDAS
  - Please excuse my dear aunt sally.
  - parenthesis, exponent, multiplication, division, addition, subtraction
  this is the order of operations for basic mathematical operations
  in JavaScript, these rules exist too!  and then some ...

  the following examples and exercises will help you internalize JS operator precedence
  looking at a long expression and see it as a series of single steps will change your life

  in these exercises you will study strange and meaningless expressions
  they will use all the primitive types and do all sorts of ugly coercions
  keep in mind that none of this is good habits!
  the goal of these exercises is to understand how JavaScript
  NOT to learn how to write good code

  helpful links
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
    https://www.dummies.com/web-design-development/javascript-operator-precedence/
    http://www.scriptingmaster.com/javascript/operator-precedence.asp
*/


const expected = 13;

// the original expression
const step0 = (3 - 2) + (6 / 2) * 4;
console.assert(step0 === expected, 'Step 0');

// evaluate inside the parenthesis
const step1 = (1) + (6 / 2) * 4;
console.assert(step1 === expected, 'Step 1');

// evaluate inside the parenthesis
const step2 = 1 + (3) * 4;
console.assert(step2 === expected, 'Step 2');

// multiplication
const step3 = 1 + 12;
console.assert(step3 === expected, 'Step 3');

// addition
const step4 = 13;
console.assert(step4 === expected, 'Step 4');
