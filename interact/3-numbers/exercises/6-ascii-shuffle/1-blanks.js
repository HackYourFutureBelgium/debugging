'use strict';

let userInput = '';
let asciiShift = NaN;

let userConfirmed = false;
while (_) {
  userInput = prompt(
    'enter a phrase, each character will be shifted by character code:'
  );

  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }

  while (_) {
    const asciiShiftInput = prompt(
      'how many ascii numbers do you want the characters to shift?'
    );

    if (asciiShiftInput === null || asciiShiftInput === '') {
      alert('enter something');
      continue;
    }

    _ = Number(asciiShiftInput);

    if (_) {
      alert('"' + asciiShiftInput + '" is not a number');
    } else {
      break;
    }
  }
  const confirmMessage =
    'is this correct?\n\n' + '- "' + userInput + '"\n' + '- ' + asciiShift;
  _ = confirm(confirmMessage);
}

let encodedString = '';

for (const character of userInput) {
  const characterCode = character._();
  const newCharCode = characterCode + asciiShift;
  const encodedCharacter = String._(newCharCode);
  encodedString += encodedCharacter;
}

const finalMessage = `"${userInput}" -> "${encodedString}"`;
alert(finalMessage);
