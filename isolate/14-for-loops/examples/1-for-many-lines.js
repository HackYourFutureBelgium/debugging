// 1: use strict
'use strict';

/*

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

  anatomy of a for loop: https://javascript.info/while-for#the-for-loop

*/

for (
  // 2: declare and assign `step`
  let step = 0; // begin

  // 3, 6, 9, 12: check the condition
  step < 3; // condition

  // 5, 8, 11: increment i
  step++ // step
) {

  // 4, 7, 10: run the body
  console.log(step);
}


