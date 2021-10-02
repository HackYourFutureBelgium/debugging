// #todo

'use strict';

let userInput = '';
let repetitions = NaN;
while (_) {
  /* gather a string from the user */
  userInput = prompt('enter a phrase to repeat:');

  /* make sure the user input something */
  if (_) {
    alert('nope, enter something');
    continue;
  }

  /* ask the user for a number */
  const repetitionsInput = prompt('how many times do you want to repeat it?');

  /* convert their string to a number */
  repetitions = Number(repetitionsInput);

  /* make sure the user input a valid number */
  if (_) {
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

/* repeat the user input `repetitions` number of times */
for (_; _; _) {
  repeatedInput = _;
}

const finalMessage = `"${userInput}" -> "${repeatedInput}"`;
alert(finalMessage);
