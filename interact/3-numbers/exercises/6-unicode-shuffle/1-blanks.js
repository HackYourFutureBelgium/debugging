// #todo

'use strict';

let userInput = '';
let unicodeShift = NaN;

let userConfirmed = false;
while (_) {
  userInput = prompt(
    'enter a phrase, each character will be shifted by character code:',
  );

  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }

  while (_) {
    const unicodeShiftInput = prompt(
      'how many unicode numbers do you want the characters to shift?',
    );

    if (unicodeShiftInput === null || unicodeShiftInput === '') {
      alert('enter something');
      continue;
    }

    _ = Number(unicodeShiftInput);

    if (_) {
      alert('"' + unicodeShiftInput + '" is not a number');
    } else {
      break;
    }
  }
  const confirmMessage =
    'is this correct?\n\n' + '- "' + userInput + '"\n' + '- ' + unicodeShift;
  _ = confirm(confirmMessage);
}

let encodedString = '';

for (const character of userInput) {
  const characterCode = character._();
  const newCharCode = characterCode + unicodeShift;
  const encodedCharacter = String._(newCharCode);
  encodedString += encodedCharacter;
}

const finalMessage = `"${userInput}" -> "${encodedString}"`;
alert(finalMessage);
