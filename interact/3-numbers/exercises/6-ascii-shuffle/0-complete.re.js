'use strict';

let userInput = '';
let asciiShift = NaN;

let userConfirmed = false;
while (!userConfirmed) {
  /* gather a string from the user */
  userInput = prompt(
    'enter a phrase, each character will be shifted by character code:'
  );
  console.log('userInput:', typeof userInput, userInput);

  /* make sure the user input something */
  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }

  /* ask the user for a number */
  while (true) {
    const asciiShiftInput = prompt(
      'how many ascii numbers do you want the characters to shift?'
    );
    console.log('asciiShiftInput:', typeof asciiShiftInput, asciiShiftInput);

    /* make sure the user input something */
    if (asciiShiftInput === null || asciiShiftInput === '') {
      alert('enter something');
      continue;
    }

    /* convert their string to a number */
    asciiShift = Number(asciiShiftInput);
    console.log('asciiShift:', typeof asciiShift, asciiShift);

    /* make sure the user input a valid number */
    if (Number.isNaN(asciiShift)) {
      alert('"' + asciiShiftInput + '" is not a number');
    } else {
      break;
    }
  }
  const confirmMessage =
    'is this correct?\n\n' + '- "' + userInput + '"\n' + '- ' + asciiShift;
  userConfirmed = confirm(confirmMessage);
}

let encodedString = '';

for (const character of userInput) {
  const characterCode = character.charCodeAt();
  const newCharCode = characterCode + asciiShift;
  const encodedCharacter = String.fromCharCode(newCharCode);
  encodedString += encodedCharacter;
}

console.log('encodedString:', typeof encodedString, encodedString);

const finalMessage = `"${userInput}" -> "${encodedString}"`;
alert(finalMessage);
