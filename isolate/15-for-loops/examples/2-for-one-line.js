// 1: use strict
'use strict';


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

/* variables analysis:

  result: accumulator, number, strategy
    this is the final result of the program
    it accumulates all of i's values using addition
    declared in global scope
    reassigned in the while loop
    read in the assertion
  i: stepper, number, strategy
    it's value is used to create the final result
    it's reassigned incremental values in the for loop declaration
    declared in for loop, not available in global scope
    read in the for loop ...
      to accumulate the result
      to check if the loop has stepped enough times

  this is a simple analysis, what would you want to add?
*/
