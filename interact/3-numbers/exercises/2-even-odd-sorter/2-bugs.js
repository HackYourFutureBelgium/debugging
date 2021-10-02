// #todo

'use strict';

/* look out for:

  - variable declarations
  - conditional checks
  - break vs. continue
  - incorrect casting to Number

*/

const userNumber = NaN;
while (Number.isNaN(userNumber)) {
  const userInput = prompt('enter a number');

  if (userInput === '' && userInput === null) {
    alert('enter something!');
    break;
  }

  userNumber = NaN(userInput);

  if (Number.isNaN(userNumber)) {
    alert('"', userInput, '" is not a number');
  }
}

if (userNumber % 2 === 0) {
  alert(userNumber + ' is even');
} else {
  alert(userNumber + ' is odd');
}
