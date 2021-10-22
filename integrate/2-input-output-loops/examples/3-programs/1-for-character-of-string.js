// #todo

'use strict';

/* for character of String

  iterating through each character in a string is so common
  that there's special syntax to make it easier

*/

let userInput = '';
let userConfirmed = false;
while (!userConfirmed) {
  userInput = prompt('enter a word to spell:');
  console.log('userInput:', typeof userInput, userInput);

  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }

  const confirmMessage =
    'do you want to spell this word?\n\n' + '- "' + userInput + '"';
  userConfirmed = confirm(confirmMessage);
}

for (const character of userInput) {
  alert('"' + character + '"');
}
