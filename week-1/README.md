# Debugging

[Main Page](../README.md) | [Week 2 >>](../week-2/README.md)

## Week 1

- [Learning Objectives](#learning-objectives)
- [Prep Work](#prep-work)
- [Lesson Plan](#lesson-plan)
  - [Isolate](#isolate)
  - [Integrate](#integrate)
- [Assignments](#assignments)
  - [Suggested Study](#suggested-study)
  - [Exercises](#exercises)
  - [Project](#project)

---
---

## Learning Objectives

The topics you should focus on during your study this week.

### Isolating JavaScript

- `console`
  - `.log` for describing what _did_ happen in your program
  - `.assert` for writing the expectation of what  _should_ happen in your program
- Variables
  - Declaration, Assignment, Reassignment
  - `const`, `let`
- Primitive Types
  - `"string"`
  - `"number"`
  - `"boolean"`
  - `"undefined"`
  - `"object"` (`null`!)
- Explicit Type Coercion
  - `String(x)`
  - `Number(x)`
  - `Boolean(x)`
- Logical Operators
  - Truthiness
  - `&&`, `||`, `??`, `!`
- Strict Comparison
  - `===`
  - `Object.is(x, y)`
  - `isNaN` and `Number.isNaN`
- Functions
  - Arguments, Parameters, Return Values
  - Lexical Scope
  - `function` functions
- Block Scope
- Control Flow
  - `if`, `else if`, `else` Statements
- Input/Output
  - `prompt`, `alert`, `confirm`
  - Reading different types from users
    - Booleans: `confirm`
    - Strings: `prompt` - _ok_ or _enter_
    - Null value: `prompt` - _cancel_ or _escape_
  - structured handler functions
- Program Life-Cycle
  1. Source Code
  1. Creation Phase
  1. Execution Phase
- Errors
  - Syntax Errors
  - Semantic Errors
  - Reading Callstacks

### Integrating JavaScript

- `<script>` tags
- `src` attribute
- `onclick` attribute

### Debugging Skills

- `console.log`
  - Printing values to understand what _did_ happen in your code
  - _Always print the **type** AND the **value**_
- `console.assert`
  - Asserting values to _expect_ what _should_ happen in your code
  - Understand how to use `===` to assert values in memory
- Stepping through code execution
  - Using debugging tools to execute your code one step at a time
  - Predict which line of code will execute next
  - Explain and understand how each line of code changes what is in memory
  - Predict what will change in memory after each step of execution
- The `debugger` statement
- Using professional JS debugging tools
  - Browser Debugger
  - VSCode Debugger
- Using learning-focused debugging tools
  - JS Tutor

[TOP](#debugging)

---
---

## Prep Work

> before Sunday class:
> - [Review the Weekly Assignments guide](https://home.hackyourfuture.be/students/weekly-assignments)
> - [Create your Homework Issue](https://home.hackyourfuture.be/students/homework-issues)

### What is JavaScript?

- [Andrew Mosh](https://www.youtube.com/watch?v=upDLs1sn7g4)
- [Code School](https://www.youtube.com/watch?v=nItSSTwBvSU)
- [MDN: First Steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- [javascript.info](https://javascript.info/intro)
- [Danielle Thé](https://www.youtube.com/watch?v=gT0Lh1eYk78)

### Debugging Tools

- [Developer Console](https://javascript.info/devtools)
- [Debugging in Chrome](https://javascript.info/debugging-chrome)
- [Debugging in FireFox](https://developer.mozilla.org/en-US/docs/Tools/Debugger)
- [pythontutor.com](http://pythontutor.com/) -> [JS Tutor](http://pythontutor.com/javascript.html)

### JavaScript Prep Work

- [Prep Work Practice Problems](https://hackyourfuture.be/debugging/week-1/prep)
- [Just JavaScript](https://github.com/HackYourFutureBelgium/just-javascript): 1 - 4
- javascript.info
  - [An introduction](https://javascript.info/getting-started)
  - [JavaScript Fundamentals](https://javascript.info/first-steps): 1 -> 11
  - [Function Basics](https://javascript.info/function-basics)
  - [Code Quality](https://javascript.info/code-quality): 1 -> 3
  - [Strict Mode](https://javascript.info/strict-mode)
- JS Tutor Video: [Variables & Values of Primitive Types](https://www.youtube.com/watch?v=pHt_tKYUgbo&list=PLzV58Zm8FuBJFfQN5il3ujx6FDAY8Ds3u&index=2)

## VSCode Extensions

- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - [instructions](http://shripalsoni.com/blog/configure-eslint-in-visual-studio-code/)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) (if you haven't installed it yet)
- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer) (if you haven't installed it yet)
- [Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

[TOP](#debugging)

---
---

## Lesson Plan

> during Sunday class
> - [Lesson Plan Slides](https://hackyourfuture.be/debugging/week-1)

Learn how create basic user interaction in your web pages

### About Browsers

During the week we encourage you to experiment with different browsers, but during class we ask you all to use Chrome or Chromium so everyone has the same DevTools.

### Isolate

- Functions: [examples](../isolate/functions/examples), [exercises](../isolate/functions/exercises)
- Explicit Coercion: [examples](../isolate/explicit-coercion/examples), [exercises](../isolate/explicit-coercion/exercises)
- Logical Operators: [examples](../isolate/logical-operators/examples), [exercises](../isolate/logical-operators/exercises)

### Integrate

The project this week is not collaborative.  You work together in your small groups, but should not be working on the same repository.

- [Week 1 in-class project](https://github.com/HackYourFutureBelgium/debugging-integrate-week-1) (starter repo)

Helpful code to study:

- [`onclick` attribute](../integrate/onclick-attribute/examples)
- [capturing user input: primitives](../integrate/capturing-user-input/primitive-types.html)

[TOP](#debugging)

---
---

## Assignments

> after Sunday class

### Suggested Study

#### Debugging with VSCode

- [Hello World 1](https://www.youtube.com/watch?v=DsH-fizHkcY)
- [Hello World 2](https://www.youtube.com/watch?v=dvXEAs-00AA)
- [The Docs](https://code.visualstudio.com/Docs/editor/debugging)

#### JavaScript Tutorials

- [study.hackyourfuture.be](https://study.hackyourfuture.be/javascript#awesome-tutorials)

#### Study References

- [Errors & Debugging](https://education.launchcode.org/intro-to-professional-web-dev/chapters/errors-and-debugging/index.html)
- [javascript.info](https://javascript.info)
  - [Ninja Code](https://javascript.info/ninja-code)
  - [Function Basics](https://javascript.info/function-basics)
  - [Type Conversions](https://javascript.info/type-conversions)
  - [Logical Operators](https://javascript.info/logical-operators)
  - [Nullish Operator](https://javascript.info/nullish-coalescing-operator)
- [Just JavaScript](https://github.com/HackYourFutureBelgium/just-javascript)
- [Practical JavaScript](https://shawnr.gitbooks.io/practical-introduction-to-javascript/): 1 -> 5
- More resources at [study.hackyourfuture.be/javascript](https://study.hackyourfuture.be/javascript)

---

### Exercises

- [debuggercises](https://github.com/hackyourfuturebelgium/debuggercises)
  - :egg: 1 -> 6
  - :hatching_chick: 7 -> 9
  - :hatched_chick: 10+
- [using-user-input](https://github.com/HackYourFutureBelgium/using-user-input)
  - :egg: 1, 2
  - :hatching_chick: 3
  - :hatched_chick: 4

---

### Project

#### Checklist

```md
- [ ] [repo](https://github.com/user-name/project-name)
- [ ] [live](https://user-name.github.io/project-name)
- [ ] [development-strategy](https://github.com/user-name/project-name/tree/master/development-strategy.md)
- [ ] [One branch per step in `development-strategy.md`](https://github.com/user-name/repo-name/network)
- [ ] [One closed Issue per step in `development-strategy.md`](https://github.com/user-name/repo-name/issues?q=is%3Aissue+is%3Aclosed)
- [ ] [One closed PR per step in `development-strategy.md`](https://github.com/user-name/repo-name/pulls?q=is%3Apr+is%3Aclosed)
- [ ] [A project board](https://github.com/user-name/repo-name/projects/X) with all issues moved to "Done"
- [ ] A complete README
```

#### `debugging-project-week-1`

> [Starter Code](https://home.hackyourfuture.be/students/weekly-assignments#projects)

Collaboration!  This project should be completed in groups.  Generate a new repo for your team using [debugging-project-week-1](https://github.com/HackYourFutureBelgium/debugging-project-week-1) and have at it.

Some things to think about when writing your development strategy:

- Is one challenge one step? ie.
  1. _Convert to F_: HTML, CSS, JS
  2. _Reverse a String_: HTML, CSS, JS
  3. ...
- Or are there longer phases to development (milestones)?
  1. _Finish the entire UI_
  2. _Pass all the tests_: convert to c, convert to f, ...
  3. _Write all the handlers_: convert to c, convert to f, ...
- How much work should go on each issue?
- How do you want to divide the work?
  - Does one person write the entire UI?
  - Does each person write the UI for their challenge?
  - Does one person pass all the tests, and another writes the handlers?

There are no wrong answers!  What matters is that you agree as a team, and that your plan is clear in the `development-strategy`.

:shipit:

