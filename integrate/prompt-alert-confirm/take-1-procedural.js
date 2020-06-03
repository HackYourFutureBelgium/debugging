const input = prompt('give a word');

const lengthGuessStr = prompt('guess the length');
const lengthGuess = Number(lengthGuessStr);

let isCorrect = input.length === lengthGuess;

console.assert(isCorrect, 'your guess is correct');

if (isCorrect) {
  alert('congrats! ' + input + ' is ' + lengthGuess + ' long');
} else {
  alert('sad :( ' + input + ' is not ' + lengthGuess + ' long');
}
