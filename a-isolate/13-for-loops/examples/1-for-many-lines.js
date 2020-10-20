// 1: use strict
'use strict';

/* anatomy of a for loop: https://javascript.info/while-for#the-for-loop

  for (
    begin;
    condition;
    step
  ) {
    // ... loop body ...
  }

  hint: the step numbers will not be correct when the loopGuard is on

*/

// 2: declare and assign result
let result = 0;

for (
  // 3: declare and assign i
  let i = 0; // begin

  // 4, 7, 10, 13: check the condition
  i < 3; // condition

  // 6, 9, 12: increment i
  i++ // step
) {

  // 5, 8, 11: run the body
  result = result + 1;
}

// step: 14
console.assert(result === 3, 'result should be 3');


