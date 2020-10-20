// 1: use strict
'use strict';

// 2: declare and assign result
let result = 0;

for (
  // 3: declare and assign i
  let i = 0; // begin

  // 4, 7, 10, 13, 16: check the condition
  i < 4; // condition

  // 6, 9, 12, 15: increment i
  i++ // step
) {

  // 5, 8, 11, 14: run the body
  result += i;
}

// step: 17
console.assert(result === 6, 'Test 1');


/* anatomy of a for loop: https://javascript.info/while-for#the-for-loop

  for (begin; condition; step) {
    // ... loop body ...
  }

*/
