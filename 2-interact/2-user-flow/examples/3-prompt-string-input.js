'use strict';

/* Prompting for Strings

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

  // search will return the index of your search value in the string
  //  if the search value does not exist, it returns -1
  // here we are checking to make sure 'a' is in the user input
  if (userInput.search('a') !== -1) {
    const hasAnAMessage = `"${userInput}" is perfect!`;
    alert(hasAnAMessage);

  } else {
    const noAMessage = `"${userInput}" has no "a" in it`;
    alert(noAMessage);
  }

}
