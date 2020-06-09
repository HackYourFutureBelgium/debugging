# Debugging

> If debugging is the process of removing software bugs, then programming must be the process of putting them in.
> - [Donald Knuth](https://en.wikipedia.org/wiki/Donald_Knuth)

## Contents

- [Module Summary](#module-summary)
- [Learning Objectives](#learning-objectives)
- [Study Tips](#study-tips)
- [Module Projects](#module-projects)
- Weekly Details:
  - Week 1: [Assignments](./week-1/README.md), [Lesson Plan](https://hackyourfuture.be/debugging/week-1)
  - Week 2: [Assignments](./week-2/README.md), [Lesson Plan](https://hackyourfuture.be/debugging/week-2)
- Study Materials:
  - [Quiz](https://hackyourfuture.be/debugging/quiz)
  - [Isolate](./isolate/README.md) - examples and exercises
  - [Integrate](./integrate/README.md) - projects to study
  - [Class Recordings](./class-recordings.md)
  - [Study Links](https://study.hackyourfuture.be) (external)
- [Curriculum](https://home.hackyourfuture.be/curriculum) (external)
- [HYF Home](https://home.hackyourfuture.be/) (external)

---

## Module Summary

Software Development is a many layered skill. One simple way to break it down is to think of these layers:

1. **Source Code**: _The basic literacy of programming_
    - Learning the key words (_vocabulary_) and syntax (_grammar_) for your programming language
    - Being able to read your code out loud, or write the code that someone else is describing
    - Fixing syntax errors that occur when you try to run your code
    - Writing code that does not have syntax errors, and spotting syntax errors when you do
    - > _The **Debugging** Module will focus on these skills_
1. **Machine Instructions**: _The basic mechanics of programming_
    - Understanding the life-cycle of your program
    - Understand how the computer will interpret your source code to create a running program
    - Understand what about your code matters to the computer, and what matters to people
    - Predicting which lines of code will be executed in which order
    - Predicting how each line of code will change what is stored in program memory
    - Reading error messages & callstacks to fix fix semantic errors that occur when you run your code
    - > _The **Debugging** Module will focus on these skills_
1. **Problem Solving & Algorithms**: _Breaking down large problems to be solved in small steps_
    - Understanding a coding challenge and being able to break it down in different ways
    - Determining which solution strategies are correct for which types of problems
    - Understanding how test cases are used to describe your solution strategy
    - Identifying the best language feature to use with your strategy
    - Reading test cases to understand how code is _supposed to_ behave
    - Using Test Cases to structure your solution design process (Test Driven Development)
    - Identifying and isolating mistakes in your code by reading failing test cases
    - Demonstrating your code does what you think it does by passing test cases
    - > _The **Testing** Module will focus on these skills_
1. **Software Design**: _Organizing smaller pieces of code into full software solutions_
    - All in good time ;)
    - > _Every other module starting with **Separation of Concerns** will focus on these skills_

[TOP](#debugging)

---

## Learning Objectives

### Programming Skills

- [Learning from Code](https://study.hackyourfuture.be/learning/learning-from-code)
  - Reading & understanding source code
  - Making small, incremental experiments
  - Copying & modifying others' code
- Tracing Program Execution
  - Stepping through code with JS Tutor, DevTools & VSC debugger
  - Tracing values manually with pencil & paper
  - Using the `debugger` statement & break points to explore your code
- Using `console.assert` for small inline tests
  - Learn to _predict_ what _will happen_ using `console.assert`
  - Instead of only _describing_ what _did happen_ using `console.log`
- Debugging:
  - Bugs are when you don't understand what your code is doing, not when your code doesn't understand what you want it to do!  The computer is always right :)
  - Identify the line(s) of code that are not doing what you expect
  - Find several other ways of writing that line
  - Replace with the one that works and that you understand best

### Isolating JavaScript

- Primitives Types & Strict Comparison
  - _types_: find the type of a primitive using `typeof`
  - _strict comparison_: compare the type _and_ value of two primitives using `===` & `!==`
  - _explicit coercion_: casting between primitive types
- Explicit Type Coercion
  - `Boolean`, `String`, `Number`
- Operators & Comparisons
  - `===`, `!==`
  - `isNaN` and `Number.isNaN`
  - `>`, `<`, `>=`, `<=`
  - `&&`, `||`, `??`, `!`
  - `x++`, `++x`, `x--`, `--x`
  - `+`, `*`, `/`, `-`, `%`
  - `x ? y : z`
- Variables:
  - `let` & `const`
  - Declaration, Assignment & Re-Assignment.
- Functions:
  - Declaring vs. Calling
  - Arguments vs. Parameters
  - Return Values
  - Lexical scope
  - `function () {}` and `() => {}`
- Control Flow
  - Conditionals
  - Loops
- `prompt`, `alert`, and `confirm`
  - Reading different types from users
- Statements vs. Expressions
- JS Program Life-Cycle:
  1. _Source code_: The `.js` text file you write.  These are just instructions saved as text in your computer, not a live program!
  2. _Creation Phase_: When the JavaScript interpreter first reads your instructions.  At this point it will prepare the program memory and check for some types of errors.
  3. _Execution Phase_: This is the real deal! The JavaScript interpreter will now step through your instructions _one line at at time_, updating program memory according to your instructions.
- Errors:
  - _Syntax vs. Semantic_: Some errors happen because you wrote JavaScript that the interpreter couldn't interpret (syntax), other errors happen when you try to do something that isn't allowed (semantic).
  - _Creation vs. Execution_: Some errors are thrown before the program actually starts (creation phase), others are thrown during program execution when a line of code is reached (execution phase).

### Integrating JavaScript

- Document Life-Cycle
  - `<head>`: Scripts & styles are loaded top to bottom, before the `<body>`
  - `<body>`: Everything is executed/loaded top to bottom
- Event-Driven Programming (Handling user input)
  - HTML `onclick` attribute
  - well-organized click handlers
  - separate functions for logic and click handling

### Debugging Skills

- `console.log`
  - Printing values to understand what _did_ happen in your code
  - _Always print the **type** AND the **value**_
- `console.assert`
  - Asserting values to _predict_ what will happen in your code
  - Practice how to use all comparison operators to assert values in memory
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

## Study Tips

- Don't rush, understand!  Programming is hard.
  - The examples and exercises will still be there to study later.
  - It's better to fail tests slowly and learn from your mistakes than to pass tests quickly and not understand why.
- Practice [Pair Programming](https://study.hackyourfuture.be/collaborating/pair-programming): two people, one computer.
- Don't skip the examples!  Understanding and experimenting with working code is a very effective way to learn programming.
- Take a look through the [Learning From Code](https://study.hackyourfuture.be/learning/learning-from-code) guide for more study tips

[TOP](#debugging)

---

## Module Projects



[TOP](#debugging)
