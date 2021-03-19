'use strict';

let userInput = '';
let repetitions = NaN;
while (true) {
  /* gather a string from the user */
  userInput = prompt('enter a phrase, each character will be repeated:');
  console.log('userInput:', typeof userInput, userInput);

  /* make sure the user input something */
  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }

  /* ask the user for a number */
  const repetitionsInput = prompt('how many times do you want to repeat each character?');
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
  const confirmMessage = 'is this correct?\n\n' + '- "' + userInput + '"\n' + '- ' + repetitions;
  const confirmation = confirm(confirmMessage);
  if (confirmation) {
    break;
  }
}

let withRepeatedCharacters = '';

/* iterate through each character in the user input */
for (const character of userInput) {
  /* append each character multiple times to the new string */
  for (let i = 0; i < repetitions; i++) {
    withRepeatedCharacters += character;
  }
}

console.log('withRepeatedCharacters:', typeof withRepeatedCharacters, withRepeatedCharacters);

const finalMessage = `"${userInput}" -> "${withRepeatedCharacters}"`;
alert(finalMessage);
