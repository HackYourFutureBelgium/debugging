'use strict';

/* Infinite While Loops

  JavaScript does not have a built-in protection against infinite loops
  this is why if you ever run one in your browser it freezes and you have to close the tab
    it's just doing the same thing over and over, without a chance to move on!

  however, `study` has some protections against infinite loops
  you have an option called loopGuard, when it's active (checked)
    `study` will modify your code to avoid infinite loops before running it
  using regular expressions, it will declare a new variable before each loop
    each time your loop executes, the variable will increment by 1
  if the variable becomes greater the the max number of iterations
    JavaScript will throw an error and the program will stop


  below are three example loops
  can you explain why each one behaves like it does?

*/

// never executes
let a = 0;
console.log('- a, before:', typeof a, a);
while (1 < a) {
  a = a + 1;
  console.log('a, looping:', typeof a, a);
}
console.log('- a, after:', typeof a, a, '\n');

// does finish
let b = 0;
console.log('- b, before:', typeof b, b);
while (b < 8) {
  b = b + 1;
  console.log('b, looping:', typeof b, b);
}
console.log('- b, after:', typeof b, b, '\n');

// infinite
let c = 0;
console.log('- c, before:', typeof c, c);
while (-1 < c) {
  c = c + 1;
  console.log('c, looping:', typeof c, c);
}
console.log('- c, after:', typeof c, c);
