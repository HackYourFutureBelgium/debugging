'use strict';

/* Prompting for Numbers

  asking users to input numbers is a bit more complicated

  because input from prompt is always a string,
  you will need to coerce it to the Number type

  careful!  now you need to validate for NaN as well

*/

const promptMessage = 'please enter a number greater than 10';
const userInput = prompt(promptMessage);

console.log('userInput:', typeof userInput, userInput);

if (userInput === null || userInput === '') {
  const noInputMessage = 'nothing!  why !!! ??? !!!';
  alert(noInputMessage);

} else {

  const userNumber = Number(userInput);

  if (Number.isNaN(userNumber)) {
    const isNaNMessage = '"' + userInput + '" is not a number';
    alert(isNaNMessage);

  } else if (userNumber <= 10) {
    const tooSmallMessage = userNumber + ' is less than 10';
    alert(tooSmallMessage);

  } else {
    const perfectMessage = userNumber + ' is perfect!';
    alert(perfectMessage);
  }

}
