// #todo

'use strict';

/* look out for:

  - you're on your own!

*/

let userString = '';
let repetitions = NaN;

let didConfirm = false;
while (didConfirm) {
  /* gather a string from the user */
  userString = prompt('enter a phrase, each character will be repeated:');
  console.log('userString:', typeof userString, userString);

  /* make sure the user input something */
  if (userString === '' || userString === null) {
    alert('nope, enter something');
  } else {
    /* ask the user for a number */
    while (true) {
      const repetitionsInput = prompt(
        'how many times do you want to repeat each character?',
      );
      console.log(
        'repetitionsInput:',
        typeof repetitionsInput,
        repetitionsInput,
      );

      /* make sure the user input something */
      if (repetitionsInput === null || repetitionsInput === '') {
        alert('enter something');
        continue;
      }

      /* convert their string to a number */
      repetitions = Number(repetitionsInput);
      console.log('repetitions:', typeof repetitions, repetitions);

      /* make sure the user input a valid number */
      if (Number.isNaN(repetitions)) {
        alert('"' + repetitionsInput + '" is not a number');
      } else {
        continue;
      }
    }

    /* ask the user to confirm their input */
    const confirmMessage =
      'is this correct?\n\n' + '- "' + userString + '"\n' + '- ' + repetitions;
    didConfirm = confirm(confirmMessage);
  }
}

let withRepeatedCharacters = '';

/* iterate through each character in the user input */
for (const character in userString) {
  /* append each character multiple times to the new string */
  for (let i = 0; i < repetitions; i++) {
    withRepeatedCharacters += character;
  }
}

console.log(
  'withRepeatedCharacters:',
  typeof withRepeatedCharacters,
  withRepeatedCharacters,
);

const finalMessage = `"${userString}" -> "${withRepeatedCharacters}"`;
alert(finalMessage);
