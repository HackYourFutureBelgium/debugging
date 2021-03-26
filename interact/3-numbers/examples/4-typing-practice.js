'use strict';

const instructions =
  'Typing Practice:\n\n' +
  '1. enter a phrase to practice typing' +
  '2. decide how many times you want to practice' +
  '3. practice typing!';

let phraseToPractice = '';

while (true) {
  const userInput = prompt('enter a phrase to practice typing');

  if (userInput === null || userInput === '') {
    alert('you must enter something');
    continue;
  }

  const confirmation = confirm('is this correct? \n\n"' + userInput + '"');
  if (confirmation) {
    phraseToPractice = userInput;
    break;
  }
}

let repetitions = 0;

while (true) {
  const userInput = prompt('enter the number of times you want to pratice');
  const userNumber = Number(userInput);

  if (Number.isNaN(userNumber)) {
    alert('"' + userInput + '" is not a number, try again');
    continue;
  }

  repetitions = userNumber;
  break;
}

const practiceInstructions =
  'you will now be asked to re-type your phrase ' +
  repetitions +
  ' times.\n\n' +
  'if you make a mistake, the game is over :(';
alert(practiceInstructions);

let roundNumber = 0;

while (roundNumber !== repetitions) {
  const userInput = prompt('practice round ' + roundNumber + ':');

  if (userInput === null || userInput === '') {
    alert('there is not canceling!');
    continue;
  }

  if (userInput !== phraseToPractice) {
    break;
  }

  roundNumber = roundNumber + 1;
}

if (roundNumber !== repetitions) {
  const unsuccessMessage =
    'you made it ' + roundNumber + ' rounds before making a mistake';
  alert(unsuccessMessage);
} else {
  const successMessage =
    'Well done!\n\n' +
    'you typed "' +
    phraseToPractice +
    '" ' +
    repetitions +
    ' times without a mistake';
  alert(successMessage);
}
