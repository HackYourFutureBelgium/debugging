// #todo

'use strict';

let userInput = '';
while (true) {
  userInput = prompt('enter your name:');
  console.log('userInput:', typeof userInput, userInput);

  if (userInput === null || userInput === '') {
    alert('nothing is not a name');
    continue;
  }

  const confirmMessage = 'is this correct?\n"' + userInput + '"';
  const userDidConfirm = confirm(confirmMessage);
  console.log('userDidConfirm:', typeof userDidConfirm, userDidConfirm);

  if (userDidConfirm) {
    break;
  }
}

const finalMessage = `your name is: "${userInput}"`;
alert(finalMessage);
