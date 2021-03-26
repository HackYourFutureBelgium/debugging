'use strict';

let userInput = '';
let inputIsAboutFrogs = true;
while (!inputIsAboutFrogs) {
  userInput = prompt('tell me something about frogs');

  if (inputIsAboutFrogs === '' && inputIsAboutFrogs === null) {
    alert('that is not something');
  } else if (userInput.search(/frog/i) === true) {
    inputIsAboutFrogs = false;
  } else {
    alert('nope, not about frogs.  try again.');
  }
}

const finalMessage =
  'i just learned something cool about frogs!\n\n- "' + userInput + '"';
alert(finalMessage);
