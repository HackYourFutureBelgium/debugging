// #todo

'use strict';

/* Iterating User Data

  now that you know how to gather valid input with I/O loops

  let's do something with that data!

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

for (let i = 0; i < userInput.length; i++) {
  const nextLetter = userInput[i];
  alert('"' + nextLetter + '"');
}
