'use strict';

/* Iterating User Data

  now that you know how to gather valid input with I/O loops

  let's do something with that data!

*/


let userInput = '';
while (true) {

  userInput = prompt('enter a word to spell:');
  console.log('userInput:', typeof userInput, userInput);

  const confirmMessage = 'do you want to spell this word?\n\n'
    + '- "' + userInput + '"';
  const userConfirmed = confirm(confirmMessage);

  if (userConfirmed) {
    break;
  }

}


for (let i = 0; i < userInput.length; i++) {
  const nextLetter = userInput[i];
  alert('"' + nextLetter + '"');
}
