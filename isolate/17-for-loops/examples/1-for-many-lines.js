// #todo

// 1: use strict
'use strict';

// 2: log "begin"
console.log('-- begin --');

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
  // 3: declare and assign the `step` variable
  let step = 0; // begin
  // 4, 7, 10, 113: check if `step` is less than 3
  step < 3; // condition
  // 6, 9, 12: add 1 to `step`
  step++ // step
) {
  // 5, 8, 11: log the current value of `step`
  console.log(step);
}

// 12: log "end"
console.log('-- end --');
