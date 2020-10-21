'use strict';

/* Fill in the text

  Study remembery.re.js to fill in the blanks:

  - put the correct text in the correct interactions
  - store the randomly selected phrase input for later
  - compare the user input to the random phrase

*/

const instructions = 'Remembery, the game of remembering.\n\n'
  + 'You will be prompted to enter 3 phrases.\n'
  + 'next you will be prompted to remember one of them\n\n'
  + 'if you enter it exactly, you win!';
alert(instructions);

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


// assign the randomly selected input to a new variable
// this variable will be used later for comparing
let phraseToGuess = '';
if (randomPhraseNumber === 1) {
  _;

} else if (randomPhraseNumber === 2) {
  _;

} else if (randomPhraseNumber === 3) {
  _;

} else {
  console.log('unreachable!');
  console.log('the number always be 1, 2 or 3');
}


const guessMessage = '_ ' + randomPhraseNumber;
const userGuess = prompt(guessMessage);
console.log('userGuess:', typeof userGuess, userGuess);

// does the user's guess exactly match the random phrase?
const guessIsCorrect = _;
console.log('guessMessage:', typeof guessMessage, guessMessage);

if (guessMessage) {
  const successMessage = 'correct! phrase '
    + randomPhraseNumber
    + ' was "' + phraseToGuess + '"';
  alert(successMessage);
} else {
  const unsuccessMessage = 'nope :(';
  alert(unsuccessMessage);
}
