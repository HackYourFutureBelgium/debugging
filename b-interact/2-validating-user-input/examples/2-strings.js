'use strict';

/* Strings

  you can ask users for more specific input

  but then you have to check to make sure they did it!

*/


const promptMessage = 'please enter something with an "a" in it';
const userInput = prompt(promptMessage);

console.log('userInput:', typeof userInput, userInput);

if (userInput === null || userInput === '') {
  const noInputMessage = 'nothing!  why !!! ??? !!!';
  alert(noInputMessage);

} else {

  // curious to learn more about this?
  //  Regular Expressions!
  if (userInput.match('a')) {
    const hasAnAMessage = `"${userInput}" is perfect!`;
    alert(hasAnAMessage);

  } else {
    const noAMessage = `"${userInput}" has no "a" in it`;
    alert(noAMessage);
  }

}
