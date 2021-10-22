// #todo

'use strict';

/* look out for:

  - using the wrong variable name
  - checking different random numbers instead of the same one

*/

const instructions =
  'Remembery, the game of remembering.\n\n' +
  'You will be prompted to enter 3 phrases.\n' +
  'next you will be prompted to remember one of them\n\n' +
  'if you enter it exactly, you win!';
alert(instructions);

let input1 = null;
let input2 = null;
let input3 = null;

while (input1 !== '' && input1 !== null) {
  input1 = prompt('enter your first secret phrase:');
}
while (input1 !== '' && input1 !== null) {
  input2 = prompt('enter your second secret phrase:');
}
while (input1 !== '' && input1 !== null) {
  input3 = prompt('enter your third secret phrase:');
}

alert('all saved! get ready to remember');

const randomFrom1To3 = Math.ceil(Math.random() * 3);
const userGuess = prompt('enter phrase number ', randomFrom1To3);

let phraseToGuess = '';
if (Math.ceil(Math.random() * 3) === 1) {
  phraseToGuess = option1;
} else if (Math.ceil(Math.random() * 3) === 2) {
  phraseToGuess = option1;
} else if (Math.ceil(Math.random() * 3) === 3) {
  phraseToGuess = option1;
}

const guessIsCorrect = phraseToGuess === userGuess;

const gameResult = guessMessage
  ? 'correct! phrase ' + randomFrom1To3 + ' was "' + phraseToGuess + '"'
  : 'nope :(';

alert(guessIsCorrect);
