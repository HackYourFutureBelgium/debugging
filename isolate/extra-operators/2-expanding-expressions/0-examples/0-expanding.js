'use strict';

/* Expanding

  expanding is a special refactoring technique (rewriting code without changing it's behavior)
  the goal is to "expand" dense expressions until there is only one operation per line.
  this is a skill designed for learning, it's not a common professional practice

  at first expanding will feel like more work than help, but keep at it!
  learning to expand complex expressions will help you to
  - feel comfortable working with dense and strange code
  - study and understand new code
  - track down bugs (expanded expressions are easier to read in the debugger)
  - interpret code's strategy
  - write your own code

  these exercises are quite challenging and abstract
  if you feel like you aren't making any progress with them, that's understandable
  move on to something else for a while and come back to these another day, or week,   or month :)

*/

/* Learning Objectives

  - not being intimidated by long and dense expressions
  - breaking down dense code into small, understandable pieces
  - gaining confidence when refactoring and working with code
  - working code without completely understanding it ... in order to understand it
  - being able to mentally step through complex expressions
  - refactoring code to be understandable and debuggable
  - statements vs. expressions
    https://dev.to/promhize/javascript-in-depth-all-you-need-to-know-about-expressions-statements-and-expression-statements-5k2
    https://www.youtube.com/watch?v=WVyCrI1cHi8
*/

/* Incremental Refactoring

  It's very easy to make little mistakes when you are refactoring code.
  This isn't so bad if you only made one or two changes,
    it's not too hard to revisit the couple lines you changed and find where you messed up.
  That's a whole different story if you're making a bunch of changes.
  It can be nearly impossible to find and fix your mistakes without returning to your original code!

  To avoid this it's good to practice incremental refactoring:
    Making one small change at a time and re-running your tests after each change.

*/


// a basic example with arithmetic

{ // original expression
  const result = 5 / (12 % 7);
  console.log('0:', result);
}

{ // refactor 1st operation
  // 4 + 5 / (12 % 7);
  const step1 = 12 % 7;
  const result = 5 / step1;
  console.log('1:', result);
}

{ // refactor 2nd operation
  // 4 + 5 / (12 % 7);
  const step1 = 12 % 7;
  const step2 = 5 / step1;
  const result = step2;
  console.log('2:', result);
}
