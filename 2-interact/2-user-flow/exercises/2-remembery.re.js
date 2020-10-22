'use strict';

const instructions = 'Remembery, the game of remembering.\n\n'
  + 'You will be prompted to enter 3 phrases.\n'
  + 'next you will be prompted to remember one of them\n\n'
  + 'if you enter it exactly, you win!';
alert(instructions);


// gather all user phrases
const input1 = prompt('enter your first secret phrase:');
console.log('input1:', typeof input1, input1);

const input2 = prompt('enter your second secret phrase:');
console.log('input2:', typeof input2, input2);

const input3 = prompt('enter your third secret phrase:');
console.log('input3:', typeof input3, input3);


alert('all saved! get ready to remember');


// generate a random number: 1, 2 or 3
const randomDecimal = Math.random();
const decimalTimes3 = randomDecimal * 3;
const randomPhraseNumber = Math.ceil(decimalTimes3);

console.log('randomPhraseNumber:', typeof randomPhraseNumber, randomPhraseNumber);


// assign the randomly selected phrase to a new variable
//  this variable will be used to compare with the user's guess
let phraseToGuess = '';
if (randomPhraseNumber === 1) {
  phraseToGuess = input1;

} else if (randomPhraseNumber === 2) {
  phraseToGuess = input2;

} else if (randomPhraseNumber === 3) {
  phraseToGuess = input3;

} else {
  console.log('unreachable!');
  console.log('the number always be 1, 2 or 3');
}


// prompt the user for their guess
const guessMessage = 'enter phrase number ' + randomPhraseNumber;
const userGuess = prompt(guessMessage);
console.log('userGuess:', typeof userGuess, userGuess);

// compare their guess to the acutal random phrase
const guessIsCorrect = userGuess === phraseToGuess;
console.log('guessMessage:', typeof guessMessage, guessMessage);

// let them know how they did
if (guessMessage) {
  const successMessage = 'correct! phrase '
    + randomPhraseNumber
    + ' was "' + phraseToGuess + '"';
  alert(successMessage);
} else {
  const unsuccessMessage = 'nope :(';
  alert(unsuccessMessage);
}
