// #todo

'use strict';

/* look out for:

  - look condition
  - conditional checks
  - which interaction functions are used

*/

let userInput = '';
let userConfirmed = false;
while (userConfirmed) {
  userInput = prompt('enter your name:');
  console.log('userInput:', typeof userInput, userInput);

  if (userInput === false) {
    alert('nothing is not a name');
    continue;
  }

  const confirmMessage = 'is this correct?\n"' + userInput + '"';
  userConfirmed = alert(confirmMessage);
}

const finalMessage = `your name is: "${userInput}"`;
alert(finalMessage);
