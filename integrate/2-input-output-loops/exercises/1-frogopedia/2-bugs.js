// #todo

'use strict';

/* look out for:

  - logical operators
  - boolean flag values

*/

let userInput = '';
let inputIsAboutFrogs = true;
while (!inputIsAboutFrogs) {
  userInput = prompt('tell me something about frogs');

  if (inputIsAboutFrogs === '' && inputIsAboutFrogs === null) {
    alert('that is not something');
  }
  // regular expression: this works!
  else if (/frog/i.test(userInput) === true) {
    inputIsAboutFrogs = false;
  } else {
    alert('nope, not about frogs.  try again.');
  }
}

const finalMessage =
  'i just learned something cool about frogs!\n\n- "' + userInput + '"';
alert(finalMessage);
