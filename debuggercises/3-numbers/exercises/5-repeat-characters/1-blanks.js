'use strict';

/* repeat each character in a string

  nested for loops!

*/


let userInput = '';
let repetitions = NaN;
while (true) {

  userInput = prompt('enter a phrase, each character will be repeated:');
  console.log('userInput:', typeof userInput, userInput);

  if (_) {
    alert('nope, enter something');
    _;
  }

  const repetitionsInput = prompt('how many times do you want to repeat each character?');
  console.log('repetitionsInput:', typeof repetitionsInput, repetitionsInput);

  repetitions = Number(repetitionsInput);
  console.log('repetitions:', typeof repetitions, repetitions);

  if (_) {
    alert('"' + repetitionsInput + '" is not a number');
    _;
  }


  const confirmMessage = 'is this correct?\n\n'
    + '- "' + userInput + '"\n'
    + '- ' + repetitions;
  const confirmation = confirm(confirmMessage)
  if (confirmation) {
    _;
  }

}


let withRepeatedCharacters = '';

// loop through each character in the user input
for (_) {
  // append each character multiple times to withRepeatedCharacters
  for (_) {
    _;
  }
}

console.log('withRepeatedCharacters:', typeof withRepeatedCharacters, withRepeatedCharacters);


const finalMessage = `"${userInput}" -> "${withRepeatedCharacters}"`;
alert(finalMessage);
