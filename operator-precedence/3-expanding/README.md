# Refactoring Operators

Refactoring one expression with many operators to many expressions with one
operator each can be a helpful technique for understanding and debugging code.
The goal is to "expand" a complex line of code into many simpler lines, storing
each intermediate value in a separate variable. This will force you to
understand the code and will make it easier to use the debugger because each
variable will store one step of the computation.

This is a skill that will help you while you're learning or debugging but is not
a common practice in real software projects. Practicing this skill now in
isolation will help to _automate_ this skill, meaning that if you practice this
now your mind will _automatically_ step through complex expressions when you
come across them in real programs.

Mastering this skill will help you to:

- feel comfortable working with dense and strange code
- study and understand new code
- track down bugs (expanded expressions are easier to read in the debugger)
- interpret code's strategy
- write your own elegant solutions

---

## Incremental Refactoring

It's very easy to make little mistakes when you are refactoring code. This is
easy to fix if you only make one small change at a time, you can easily undo a
single change but can be confusing to undo many changes at once. In these
exercises you should practice _incremental refactoring_ - making one small
change at a time and re-running your code after each change to make sure it
still works.

Let's see what this looks like with a little example. Notice that each step is
in a separate block, this lets you copy-paste the same variable names without
throwing an error. You can check if your refactor is correct by making sure it
passes the same tests as the original expression:

```js
'use strict';

/*
  study this code block and try commenting/uncommenting each chunk
  all of the pass the same tests!
*/

const aComputation = (x = 0, y = 0) => {
  // initial expression
  return x / (y - x) + 1;

  // // refactor 1st operator
  // const step1 = y - x;
  // return x / step1 + 1;

  // // refactor 2nd operator
  // const step1 = y - x;
  // const step2 = x / step1;
  // return step2 + 1;

  // // refactor 3rd operator
  // const step1 = y - x;
  // const step2 = x / step1;
  // const step3 = step2 + 1;
  // return step3;
};

// --- test cases ----

const _1_expected = Infinity;
const _1_actual = aComputation(1, 1);
console.assert(_1_actual === _1_expected, 'Test 1');

const _2_expected = -1;
const _2_actual = aComputation(2, 1);
console.assert(_2_actual === _2_expected, 'Test 2');

const _3_expected = 2;
const _3_actual = aComputation(1, 2);
console.assert(_3_actual === _3_expected, 'Test 3');

const _4_expected = 0.5;
const _4_actual = aComputation(-5, 5);
console.assert(_4_actual === _4_expected, 'Test 4');

const _5_expected = -1;
const _5_actual = aComputation(4, 2);
console.assert(_5_actual === _5_expected, 'Test 5');
```

---

## Suggested Study

- statements vs. expressions
  - [dev.to](https://dev.to/promhize/javascript-in-depth-all-you-need-to-know-about-expressions-statements-and-expression-statements-5k2)
  - [youtube](https://www.youtube.com/watch?v=WVyCrI1cHi8)
