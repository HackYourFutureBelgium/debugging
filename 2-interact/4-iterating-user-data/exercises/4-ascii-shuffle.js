'use strict';


let userInput = '';
let asciiShift = NaN;
while (_) {

  userInput = prompt('enter a phrase, each character will be shifted by character code:');
  console.log('userInput:', typeof userInput, userInput);

  if (_) {
    alert('nope, enter something');
    continue;
  }

  const asciiShiftInput = prompt('how many ascii numbers do you want the characters to shift?');
  console.log('asciiShiftInput:', typeof asciiShiftInput, asciiShiftInput);

  asciiShift = Number(asciiShiftInput);
  console.log('asciiShift:', typeof asciiShift, asciiShift);

  if (_) {
    alert('"' + asciiShiftInput + '" is not a number');
    continue;
  }


  const confirmMessage = 'is this correct?\n\n'
    + '- "' + userInput + '"\n'
    + '- ' + asciiShift;
  const confirmation = confirm(confirmMessage)
  if (_) {
    break;
  }

}


let encodedString = '';

// iterate through each character in the user input
for (_) {
  // find the charCode for the current character
  _;
  // add asciiShift to the character code
  _;
  // convert the new character code to a string
  _;
  // add the new character to the encoded string
  _;
}

console.log('encodedString:', typeof encodedString, encodedString);


const finalMessage = `"${userInput}" -> "${encodedString}"`;
alert(finalMessage);
