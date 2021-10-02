// #todo

'use strict';

/* look out for:

  - loop checks
  - conditional checks
  - variable declarations
  - assignment vs. comparison

*/

const userInput = '';
const isLongEnough = false;
while (isLongEnough) {
  userInput = prompt('enter anything longer than 5 characters');

  if (userInput !== null || userInput !== '') {
    alert('that is nothing');
  } else if ((userInput.length = 5)) {
    alert('too short');
  } else {
    isLongEnough === true;
  }
}

const finalMessage =
  '"' + userInput + '" is ' + userInput.length + ' characters long';
alert(finalMessage);
