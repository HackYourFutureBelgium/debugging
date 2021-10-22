// #todo

'use strict';

const instructions =
  'calculate the average of many numbers:\n\n' +
  '- you must input something\n' +
  '- input a number and it will be added to the sum\n' +
  '- input "done" and the program will finish (case insensitive)\n' +
  '- input anything else and it will be ignored\n\n' +
  'when you have finished inputting numbers, the average will be displayed';
alert(instructions);

let sum = 0;
let inputCount = 0;

let stillEnteringNumbers = true;
while (stillEnteringNumbers) {
  const userInput = prompt('enter a number to add, or "done" to finish');
  console.log('userInput:', typeof userInput, userInput);

  if (userInput === '' || userInput === null) {
    alert('nothing is not allowed');
    continue;
  }

  if (userInput.toLowerCase() === 'done') {
    stillEnteringNumbers = false;
    continue;
  }

  const nextNumber = Number(userInput);
  console.log('nextNumber:', typeof nextNumber, nextNumber);

  if (Number.isNaN(nextNumber)) {
    alert('"' + userInput + '" is not a number, it has been ignored');
    continue;
  }

  sum = sum + nextNumber;
  console.log('sum:', typeof sum, sum);

  inputCount = inputCount + 1;
  console.log('inputCount:', typeof inputCount, inputCount);
}

const average = sum / inputCount;
console.log('average:', typeof average, average);

const averageMessage = 'the average of your numbers is: ' + average;
alert(averageMessage);
