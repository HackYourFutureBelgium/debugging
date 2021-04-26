'use strict';
console.log('-- begin --');

/* fill in the blanks to pass the assertions */

const oneDozen = _;
const twoMore = _;
let numberOfEggs = 0;

while (numberOfEggs !== oneDozen) {
  numberOfEggs = numberOfEggs + twoMore;
  console.log('numberOfEggs:', typeof numberOfEggs, numberOfEggs);
}

console.assert(numberOfEggs === 12, 'there should be a dozen eggs');


console.log('-- end --');