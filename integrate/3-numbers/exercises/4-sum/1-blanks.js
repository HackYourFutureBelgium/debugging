// #todo

'use strict';

const instructions =
  'calculate the sum of many numbers:\n\n' +
  '- you must input something\n' +
  '- input a number and it will be added to the sum\n' +
  '- input "done" and the program will finish (case insensitive)\n' +
  '- input anything else and it will be ignored';
alert(instructions);

let sum = 0;

let userInput = '';
while (true) {
  userInput = prompt('enter a number to add, or "done" to finish');
  console.log('userInput:', typeof userInput, userInput);

  // make sure the user input something
  ___;

  // check if the user input is "done", case-insensitive
  if (_) {
    break;
  }

  const nextNumber = Number(userInput);
  console.log('nextNumber:', typeof nextNumber, nextNumber);

  // continue if the input is not a number
  ___;

  // add the new number to the sum
  _;
  console.log('sum:', typeof sum, sum);
}

const sumMessage = 'the sum of your numbers is: ' + sum;
alert(sumMessage);
