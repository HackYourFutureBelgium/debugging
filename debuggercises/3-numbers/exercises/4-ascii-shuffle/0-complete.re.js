'use strict';

let userInput = '';
let asciiShift = NaN;
while (true) {
  userInput = prompt('enter a phrase, each character will be shifted by character code:');
  console.log('userInput:', typeof userInput, userInput);

  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }

  const asciiShiftInput = prompt('how many ascii numbers do you want the characters to shift?');
  console.log('asciiShiftInput:', typeof asciiShiftInput, asciiShiftInput);

  asciiShift = Number(asciiShiftInput);
  console.log('asciiShift:', typeof asciiShift, asciiShift);

  if (Number.isNaN(asciiShift)) {
    alert('"' + asciiShiftInput + '" is not a number');
    continue;
  }

  const confirmMessage = 'is this correct?\n\n' + '- "' + userInput + '"\n' + '- ' + asciiShift;
  const confirmation = confirm(confirmMessage);
  if (confirmation) {
    break;
  }
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
