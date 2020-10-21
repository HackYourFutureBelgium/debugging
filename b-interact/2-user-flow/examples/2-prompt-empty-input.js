'use strict';

/* Prompt: Something or Nothing

  the most basic validation you will need to make:

    did the user input something?

  you can do this by checking for empty strings and null

*/


const promptMessage = 'please input something';
const userInput = prompt(promptMessage);

console.log('userInput:', typeof userInput, userInput);

if (userInput === null || userInput === '') {
  const noInputMessage = 'nothing!  why !!! ??? !!!';
  alert(noInputMessage);

} else {
  const yesInputMessage = 'you inputed: ' + userInput;
  alert(yesInputMessage);
}
