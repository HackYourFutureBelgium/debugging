// #todo

'use strict';

/* while, break, continue

  create a while loop that is always true

  then use break & continue in the loop body for control flow

*/

while (true) {
  const userInput = prompt('enter something to leave this loop');

  if (userInput !== null && userInput !== '') {
    break;
  }
}
