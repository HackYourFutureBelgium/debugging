'use strict';

/* Operator Precedence

  In JavaScript you will come across long operations written on one line.
  these will become less mysterious when you understand how Operator Precedence works in JS

  the following examples and exercises will help you internalize JS operator precedence
  looking at a long expression and see it as a series of single steps will change your life

  in these exercises you will study strange and meaningless expressions
  they will use all the primitive types and do all sorts of ugly coercions
  keep in mind that none of this is good habits!
  the goal of these exercises is to practice understanding difficult JavaScript
  NOT to learn how to write good code

  helpful links
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
    https://www.dummies.com/web-design-development/javascript-operator-precedence/
    http://www.scriptingmaster.com/javascript/operator-precedence.asp
*/

const expected = 13;

// the original expression
const step0 = 3 - 2 + (6 / 2) * 4;
console.assert(step0 === expected, 'Step 0');

// evaluate inside the parenthesis
const step1 = 3 - 2 + 3 * 4;
console.assert(step1 === expected, 'Step 1');

// multiplication
const step2 = 3 - 2 + 12;
console.assert(step2 === expected, 'Step 2');

// subtraction and addition (left to right)
const step3 = 1 + 12;
console.assert(step3 === expected, 'Step 3');

// subtraction and addition (left to right)
const step4 = 13;
console.assert(step4 === expected, 'Step 4');
