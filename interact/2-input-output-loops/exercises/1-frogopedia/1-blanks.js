// #todo

'use strict';

let userInput = '';
let inputIsAboutFrogs = _;
while (!inputIsAboutFrogs) {
  userInput = prompt('tell me something about frogs');
  console.log('userInput:', typeof userInput, userInput);

  // check if the user entered nothing, or clicked cancel
  if (_) {
    alert('that is not something');
    continue;
  }

  // search the user input for "frog", upper or lower case
  if (_) {
    inputIsAboutFrogs = _;
    continue;
  }

  alert('nope, not about frogs.  try again.');
}

const finalMessage =
  'i just learned something cool about frogs!\n\n- "' + userInput + '"';
alert(finalMessage);
