// #todo

'use strict';

let validInput = '';

let index = 0;
while (validInput === '') {
  index = _ + 1;

  const userInput = prompt(
    `enter anything with "e" or "E" as the ${index}th letter`,
  );

  if (userInput === null || userInput === '') {
    alert('that is nothing');
  } else if (userInput.length < _) {
    alert('too short');
  } else if (userInput[_] === 'e' || userInput[_] === 'E') {
    _ = userInput;
  } else {
    alert(_);
  }
}

alert('done: "' + validInput + '"');
