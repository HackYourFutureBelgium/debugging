// 1: use strict
'use strict';

/* anatomy of a while loop: https://javascript.info/while-for#the-while-loop
  while (condition) {
    // ... loop body ...
  }

  hint: the step numbers will not be correct when the loopGuard is on
*/

// 2: declare and assign a
let a = 0;

// 3, 5, 7, 9, 11: evaluate the condition
while (a < 4) {
  // 4, 6, 8, 10: increment a
  a = a + 1;
  console.log(a);
}

// 12: assert a
console.assert(a === 4, 'a should be 4');

/* variables analysis:

  a: accumulator, number, strategy
    a also holds the final result
    it accumulates b/4
    declared in global scope
    reassigned in the while loop
    read in the assertion
  b: constant, number, strategy
    it's value is used to create the final result
    it's also read in the loop while condition
    declared in global scope
    read in while body

  this is a simple analysis, what would you want to add?
*/
