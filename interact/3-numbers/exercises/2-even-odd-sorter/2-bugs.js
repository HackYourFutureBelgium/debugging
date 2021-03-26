'use strict';

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
