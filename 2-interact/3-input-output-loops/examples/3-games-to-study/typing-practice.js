'use strict';

// write your own comments ;)


const instructions = 'Typing Practice:\n\n'
  + '1. enter a phrase to practice typing'
  + '2. decide how many times you want to practice'
  + '3. practice typing!';


let phraseToPractice = '';

while (true) {

  const userInput = prompt('enter a phrase to practice typing');

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


const practiceInstructions = 'you will now be asked to re-type your phrase ' + repetitions + ' times.\n\n'
  + 'if you make a mistake, the game is over :(';
alert(practiceInstructions);

let remainingRounds = repetitions;

while (remainingRounds !== 0) {

  const userInput = prompt('practice round ' + remainingRounds + ':');

  if (userInput === null) {
    alert('there is not canceling!');
    continue;
  }

  if (userInput !== phraseToPractice) {
    break;
  }

  remainingRounds = remainingRounds - 1;

}


if (remainingRounds !== 0) {
  const correctAttempts = repetitions - remainingRounds;
  const unsuccessMessage = 'you made it ' + correctAttempts + ' rounds before making a mistake';
  alert(unsuccessMessage);

} else {
  const successMessage = 'Well done!\n\n'
    + 'you practiced "' + phraseToPractice + '" ' + repetitions + ' times';
  alert(successMessage);
}
