// 1: use strict
'use strict';
console.log('-- begin --');

/* anatomy of a for loop: https://javascript.info/while-for#the-for-loop

  for (begin; condition; step) {
    // ... loop body ...
  }

  hint 1: don't use the flow chart for for loops!
    it does not show incrementing at the correct step in the flow

  hint 2: the step numbers will not be correct when the loopGuard is on

*/

// 2: declare and assign i
// 3, 6, 7, 11: evaluate the condition
// 5, 10, 11, 13: increment i
for (let step = 0; step < 3; step++) {
  // 4, 7, 10: evaluate the body
  console.log(step);
}

console.log('-- end --');
