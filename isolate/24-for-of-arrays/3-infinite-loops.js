'use strict';

/*

  careful! you can still get an infinite loop with for...of loops

*/

const allNumbers = [0];
for (const number of allNumbers) {
  allNumbers.push(number + 1);
  console.log(allNumbers);
}
