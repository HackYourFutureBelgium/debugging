# Refactoring Operators

Refactoring one expression with many operators to many expressions with one operator each can be a powerful technique for understanding and debugging code. The goal is to "expand" a complex line of code into many simpler lines, each with a separate variable. This will force you to understand the code and will make it easier to understand in the debugger because each variable will store one step of the computation.

This is a skill that will help you while you're learning or debugging but is not a common practice in real software projects. Practicing this skill now in isolation will help to _automate_ this skill, meaning that if you practice this now your mind will _automatically_ step through complex expressions when you come across them in real programs.

Mastering this skill will help you to:

- feel comfortable working with dense and strange code
- study and understand new code
- track down bugs (expanded expressions are easier to read in the debugger)
- interpret code's strategy
- write your own elegant solutions

These exercises are challenging, you are not expected to master this skill before moving on in `/isolate`. You can keep returning to these exercises every few days until it is internalized.

---

## Incremental Refactoring

It's very easy to make little mistakes when you are refactoring code. This is easy to fix if you only make one small change at a time, you can easily undo a single change but can be confusing to undo many changes at once. In these exercises you should practice _incremental refactoring_ - making one small change at a time and re-running your code after each change to make sure it still works.

Let's see what this looks like with a little example. Notice that each step is in a separate block, this lets you copy-paste the same variable names without throwing an error. You can check if your refactor is correct by making sure it logs the same value as the original expression:

```js
'use strict';

// original expression
const result = 5 / (10 - 5) + 1;
console.log(result);

{
  // refactor 1st operation
  const step1 = 10 - 5;
  const result = 5 / step1 + 1;
  console.log(result);
}

{
  // refactor 2nd operation
  const step1 = 10 - 5;
  const step2 = 5 / step1;
  const result = step2 + 1;
  console.log(result);
}

{
  // refactor 2nd operation
  const step1 = 10 - 5;
  const step2 = 5 / step1;
  const step3 = step2 + 1;
  const result = step3;
  console.log(result);
}
```

---

## Suggested Study

- statements vs. expressions
  - [dev.to](https://dev.to/promhize/javascript-in-depth-all-you-need-to-know-about-expressions-statements-and-expression-statements-5k2)
  - [youtube](https://www.youtube.com/watch?v=WVyCrI1cHi8)
