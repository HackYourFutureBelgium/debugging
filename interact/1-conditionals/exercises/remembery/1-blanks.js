'use strict';

/*
  - put the correct text in the correct interactions
  - store the randomly selected phrase input for later
  - compare the user input to the random phrase
*/

const instructions =
  'Remembery, the game of remembering.\n\n' +
  'You will be prompted to enter 3 phrases.\n' +
  'next you will be prompted to remember one of them\n\n' +
  'if you enter it exactly, you win!';
alert(instructions);

let input1 = null;
while (input1 === '' || input1 === null) {
  input1 = prompt('enter your first secret phrase:');
  console.log('input1:', typeof input1, input1);
}
let input2 = null;
while (input2 === '' || input2 === null) {
  input2 = prompt('enter your second secret phrase:');
  console.log('input2:', typeof input2, input2);
}
let input3 = null;
while (input3 === '' || input3 === null) {
  input3 = prompt('enter your third secret phrase:');
  console.log('input3:', typeof input3, input3);
}

alert('all saved! get ready to remember');

// generate a random number: 1, 2 or 3
const randomDecimal = Math.random();
const decimalTimes3 = randomDecimal * _;
const randomFrom1To3 = Math.ceil(decimalTimes3);

console.log('randomFrom1To3:', typeof randomFrom1To3, randomFrom1To3);

// assign the randomly selected input to a new variable
// this variable will be used later for comparing
let phraseToGuess = '';
if (randomFrom1To3 === 3) {
  _;
} else if (randomFrom1To3 === 2) {
  _;
} else if (randomFrom1To3 === 1) {
  _;
} else {
  console.log('unreachable!');
  console.log('the number will always be 1, 2 or 3');
}

const guessMessage = '_ ' + randomFrom1To3;
const userGuess = prompt(guessMessage);
console.log('userGuess:', typeof userGuess, userGuess);

// does the user's guess exactly match the random phrase?
const guessIsCorrect = _;
console.log('guessMessage:', typeof guessMessage, guessMessage);

if (guessMessage) {
  const successMessage = 'correct! phrase ' + randomFrom1To3 + ' was "' + phraseToGuess + '"';
  alert(successMessage);
} else {
  const unsuccessMessage = 'nope :(';
  alert(unsuccessMessage);
}
