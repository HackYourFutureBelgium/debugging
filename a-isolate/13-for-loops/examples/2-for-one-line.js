// 1: use strict
'use strict';

// 2: declare and assign result
let result = 0;

/* anatomy of a for loop: https://javascript.info/while-for#the-for-loop

  for (begin; condition; step) {
    // ... loop body ...
  }

  hint: the step numbers will not be correct when the loopGuard is on

*/

// 3: declare and assign i
// 4, 7, 8, 12: evaluate the condition
// 6, 9, 12, 14: increment i
for (let i = 0; i < 3; i++) {
  // 5, 8, 11: evaluate the body
  result = result + 1;
}

// step: 1
console.assert(result === 3, 'Test 1');


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
