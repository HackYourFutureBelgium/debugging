'use strict';

/* Iterating a User Number

  now that you know how to gather valid input with I/O loops

  let's do something with that data

*/


let userNumber = NaN;
let inputIsNumber = false;
while (!inputIsNumber) {

  const userInput = prompt('count from 0 to ...');
  console.log('userInput:', typeof userInput, userInput);

  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }

  userNumber = Number(userInput);
  console.log('userNumber:', typeof userNumber, userNumber);

  if (Number.isNaN(userNumber)) {
    alert('"' + userInput + '" is not a number');
  } else {
    inputIsNumber = true;
  }

}


for (let numberToAlert = 0; numberToAlert <= userNumber; numberToAlert++) {
  alert(numberToAlert);
}
