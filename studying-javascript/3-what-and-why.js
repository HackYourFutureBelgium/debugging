/* Programming is Writing, Writing is for Humans

  it's not enough to write code that works:
  1. you need to understand what you wrote and why you wrote it
  2. other people need to understand what you wrote and why you wrote it

  writing clear and correct comments is a good way to do both of those things
  comments you write while you're first learning will be different than later on
  at this point in your studies your comments should have 2 parts:
  1. what code did you write? describe WHAT is happening in this line of code
  2. why did you write this? describe WHY the line exists in your program

  if your program does not take user input, include a 3rd piece of information:
  3. at what step(s) of execution are this line executed?

  “What questions would be asked by someone looking at this code for the first time?”
    - Scottford
    - https://blog.codinghorror.com/code-tells-you-how-comments-tell-you-why/

*/


/* 1: use strict   (step number: what)
  this line tells javascript to help us make fewer mistakes   (why)
*/
'use strict';

/* 2: declare & assign aColor    (step number: what)
  we'll use this variable later for a console.log    (why)
*/
const aColor = 'red';

/* 3: log aColor    (step number: what)
  so the programmer can see what value aColor stores   (why)
*/
console.log(aColor);
