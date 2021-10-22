// #todo

'use strict';

/* look out for:

  - an incorrect way to check for NaN
  - incorrect interaction function
  - comparison vs. assignment

*/

const userString = prompt('enter a number:');
const userNumber = Number(userString);

const inputIsANumber = !Number(userNumber);

const confirmMessage =
  'did you really enter a number?\n\n' + 'yes -> "ok"\n' + 'no  -> "cancel"';
const userThinksItsANumber = alert(confirmMessage);

const userIsCorrect = (userThinksItsANumber = inputIsANumber);

alert(userIsCorrect ? 'correct!' : 'nope :(');
