// #todo

'use strict';

alert(
  'Remembery, the game of remembering.\n\n' +
    'You will be prompted to enter 3 phrases.\n' +
    'next you will be prompted to remember one of them\n\n' +
    'if you enter it exactly, you win!',
);

let input1 = '';
while (input1 === '' || input1 === null) {
  input1 = prompt('enter your first secret phrase:');
}
let input2 = '';
while (input2 === '' || input2 === null) {
  input2 = prompt('enter your second secret phrase:');
}
let input3 = '';
while (input3 === '' || input3 === null) {
  input3 = prompt('enter your third secret phrase:');
}

alert('all saved! get ready to remember');

const randomPhraseNumber = Math.ceil(Math.random() * 3);

const phraseToGuess =
  randomPhraseNumber === 1
    ? input1
    : randomPhraseNumber === 2
    ? input2
    : randomPhraseNumber === 3
    ? input3
    : 'unreachable!';

const userGuess = prompt('enter phrase number ' + randomPhraseNumber);

const guessIsCorrect = userGuess === phraseToGuess;

if (guessIsCorrect) {
  alert(
    'correct! phrase ' + randomPhraseNumber + ' was "' + phraseToGuess + '"',
  );
} else {
  alert('nope :(');
}
