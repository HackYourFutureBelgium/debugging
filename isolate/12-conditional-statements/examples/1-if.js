'use strict';

/* if

  if (condition) {
    statements1
  }

  a single conditional statement executes it's body if the condition is truthy
  when a conditional is evaluated, there are three steps behind the scenes
  1. evaluate the condition inside the ()
  2. cast the result to a Boolean value
  3. decide which path to take


*/

// try changing this variable's value and see what happens
const value = 123;

let path = '';

// evaluate the comparison behind the scenes
if (typeof value === 'number') {
  console.log(' value is a number (behind the scenes)');
  path = 'if';
}

// show each step that's happening behind the scenes
const valueIsANumber = typeof value === 'number';
const conditionIsTruthy = valueIsANumber === true;
if (conditionIsTruthy) {
  console.log(' value is a number (step-by-step)');
  path = 'if';
}

console.log(path);
