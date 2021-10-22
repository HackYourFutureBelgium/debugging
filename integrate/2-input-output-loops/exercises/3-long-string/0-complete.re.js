// #todo

'use strict';

let userInput = '';
let isTooShort = true;
while (isTooShort) {
  userInput = prompt('enter anything longer than 5 characters');
  console.log('userInput:', typeof userInput, userInput);

  // make sure the user entered something
  if (userInput === null || userInput === '') {
    alert('that is nothing');
    continue;
  }

  // make sure the input is long enough
  if (userInput.length <= 5) {
    alert('too short');
    continue;
  }

  isTooShort = false;
}

const finalMessage =
  '"' + userInput + '" is ' + userInput.length + ' characters long';
alert(finalMessage);
