'use strict';

let userInput = '';
let inputIsAboutFrogs = false;
while (!inputIsAboutFrogs) {
  userInput = prompt('tell me something about frogs');
  console.log('userInput:', typeof userInput, userInput);

  if (userInput === '' || userInput === null) {
    alert('that is not something');
    continue;
  }

  if (userInput.search(/frog/i) > -1) {
    inputIsAboutFrogs = true;
    continue;
  }

  alert('nope, not about frogs.  try again.');
}

const finalMessage = 'i just learned something cool about frogs!\n\n- "' + userInput + '"';
alert(finalMessage);
