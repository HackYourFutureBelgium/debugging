'use strict';

/* if / else if / else

  if (condition1) {
    statement1
  } else if (condition2) {
    statement2
  } else if (condition3) {
    statement3
  ...
  } else {
    statementN
  }

  multiple options, something will happen no matter what
  if no condition is truthy
  the else statement will be evaluated

*/


const value = null;
let path = '';

if (typeof value === 'number') {
  console.log('value is a number');
  path = 'if';

} else if (typeof value === 'boolean') {
  console.log('value is a boolean');
  path = 'else if 1';

} else if (typeof value === 'string') {
  console.log('value is a string');
  path = 'else if 2';

} else if (typeof value === 'undefined') {
  console.log('value is undefined');
  path = 'else if 3';

} else {
  console.log('value is an object');
  path = 'else';
}

console.log(path);

