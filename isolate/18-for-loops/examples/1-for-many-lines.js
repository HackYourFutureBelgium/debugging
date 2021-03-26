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
  // 2: declare and assign the `step` variable
  let step = 0; // begin
  // 3, 6, 9, 12: check if `step` is less than 3
  step < 3; // condition
  // 5, 8, 11: add 1 to `step`
  step++ // step
) {
  // 4, 7, 10: log the current value of `step`
  console.log(step);
}
