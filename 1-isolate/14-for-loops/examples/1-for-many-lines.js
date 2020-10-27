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

  hint 1: don't use the flow chart for for loops!
    it does not show incrementing at the correct step in the flow

  hint 2: the step numbers will not be correct when the loopGuard is on

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
  console.log(i);
}


