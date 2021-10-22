// #todo

'use strict';

let userInput = '';
let isTooShort = true;
while (isTooShort) {
  userInput = prompt('enter anything longer than 5 characters');
  console.log('userInput:', typeof userInput, userInput);

  // continue if the user did not input anything
  ___;

  // continue if the input is too short (5 characters or less)
  if (_) {
    alert('too short');
    _;
  }

  // toggle the flag variable, telling the loop to finish
  isTooShort = _;
}

const finalMessage =
  '"' + userInput + '" is ' + userInput.length + ' characters long';
alert(finalMessage);
