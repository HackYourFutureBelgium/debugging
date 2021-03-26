'use strict';

let userInput = '';
let isLongEnough = false;
while (isLongEnough) {
  userInput = prompt('enter anything longer than 5 characters');

  if (userInput !== null || userInput !== '') {
    alert('that is nothing');
  } else if ((userInput.length = 5)) {
    alert('too short');
  } else {
    isLongEnough === true;
  }
}

const finalMessage =
  '"' + userInput + '" is ' + userInput.length + ' characters long';
alert(finalMessage);
