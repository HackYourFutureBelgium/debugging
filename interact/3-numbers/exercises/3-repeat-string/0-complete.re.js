// #todo

'use strict';

let userInput = '';
let repetitions = NaN;
while (true) {
  /* gather a string from the user */
  userInput = prompt('enter a phrase to repeat:');
  console.log('userInput:', typeof userInput, userInput);

  /* make sure the user input something */
  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }

  /* ask the user for a number */
  const repetitionsInput = prompt('how many times do you want to repeat it?');
  console.log('repetitionsInput:', typeof repetitionsInput, repetitionsInput);

  /* convert their string to a number */
  repetitions = Number(repetitionsInput);
  console.log('repetitions:', typeof repetitions, repetitions);

  /* make sure the user input a valid number */
  if (Number.isNaN(repetitions)) {
    alert('"' + repetitionsInput + '" is not a number');
    continue;
  }

  /* ask the user to confirm their input */
  const confirmMessage =
    'is this correct?\n\n' + '- "' + userInput + '"\n' + '- ' + repetitions;
  const confirmation = confirm(confirmMessage);
  if (confirmation) {
    break;
  }
}

let repeatedInput = '';

for (let i = 0; i < repetitions; i++) {
  repeatedInput += userInput;
}

console.log('repeatedInput:', typeof repeatedInput, repeatedInput);

const finalMessage = `"${userInput}" -> "${repeatedInput}"`;
alert(finalMessage);
