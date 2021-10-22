// #todo

'use strict';

/* Boolean Flag Variable

  Declare a variable with a boolean value and check it's value in the loop head
  You can update the flag variable inside your while loop based on the user's input

*/

let flag = true;

while (flag) {
  const userInput = prompt('enter something to leave this loop');
  console.log('userInput:', typeof userInput, userInput);

  if (userInput !== null && userInput !== '') {
    flag = false;
    console.log('flag:', typeof flag, flag);
  }
}
