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

const value = 123;
let path = '';

// implicitly behind the scenes
if (typeof value === 'number') {
  console.log(' value is a number (implicit)');
  path = 'if';
}

// behind the scenes it's something like this:
const valueIsANumber = typeof value === 'number';
const conditionIsTruthy = valueIsANumber === true;
if (conditionIsTruthy) {
  console.log(' value is a number (explicit)');
  path = 'if';
}

console.log(path);
