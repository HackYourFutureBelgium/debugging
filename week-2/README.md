# Debugging

[<< Week 1](../week-1/README.md) | [Main Page](../README.md)

## Week 2

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

- Comparison Operators
  - `===`, `!==`
  - `>`, `<`, `>=`, `<=`
- Arithmetic Operators
  - `+`, `*`, `/`, `-`, `%`
- Incrementing Operators
  - `x++`, `++x`
  - `x--`, `--x`
- Ternary Operator
  - `x ? y : z`
- Functions
  - `=>`: arrow functions
  - Documentation Strings
- Variables
  - Reassignment
  - `let`
- Block Scope
- Control Flow
  - Conditional Statements
  - For Loops
  - While Loops
- Input/Output
  - Reading different types from users
    - Numbers: cast `prompt` inputs using `Number(x)`

### Integrating JavaScript

- `<script>` tags
- `src` attribute
- `onclick` attribute

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

---
---

## Prep Work

> First things first:
> - [Review the Weekly Assignments guide](https://home.hackyourfuture.be/students/weekly-assignments)
> - [Create your Homework Issue](https://home.hackyourfuture.be/students/homework-submission#homework-issues)

### Breakpoints Stepping

- [Chrome Debugger Reference](https://developers.google.com/web/tools/chrome-devtools/javascript/reference)

### JavaScript Prep Work

- [Prep Work Practice Problems](https://hackyourfuture.be/debugging/week-2/prep)
- javascript.info (articles)
  - [Loops](https://javascript.info/while-for)
- Guo: [Variable Scoping](https://www.youtube.com/watch?v=9O-PCTfT6Rs&list=PLzV58Zm8FuBJFfQN5il3ujx6FDAY8Ds3u&index=3)
- Mosh: (videos)
  - [Conditionals](https://www.youtube.com/watch?v=IsG4Xd6LlsM&list=PLTjRvDozrdlxEIuOBZkMAK5uiqp8rHUax&index=6)
  - [Loops](https://www.youtube.com/watch?v=s9wW2PpJsmQ&list=PLTjRvDozrdlxEIuOBZkMAK5uiqp8rHUax&index=7)

---
---

## Lesson Plan

> during Sunday class
> - [Lesson Plan Slides](https://hackyourfuture.be/debugging/week-2)

Learn how create basic user interaction in your web pages

### About Browsers

During the week we encourage you to experiment with different browsers, but during class we ask you all to use Chrome or Chromium so everyone has the same DevTools.

### Isolate

- While Loops: [examples](../isolate/loops-while/examples), [exercises](../isolate/loops-while/exercises)
- For Loops: [examples](../isolate/loops-for/examples), [exercises](../isolate/loops-for/exercises)

### Integrate

Learn to use shared-script variables inside your handler functions to save data between user interactions.

The project this week is not collaborative.  You work together in your small groups, but should not be working on the same repository.

- [Week 2 in-class project](https://github.com/HackYourFutureBelgium/debugging-integrate-week-2) (starter repo)

Helpful code to study:

- [Set, Display](../integrate/using-shared-script-variables/set-display.html)
- [String Repeater](../integrate/using-shared-script-variables/string-repeater.html)
- [guessing game](../integrate/using-shared-script-variables/guessing-game.html)

[TOP](#debugging)

---
---

## Assignments

> after sunday class

### Suggested Study

#### Writing JSDoc Strings

- [VSCode support](https://code.visualstudio.com/Docs/languages/javascript#_jsdoc-support)

#### Awesome JavaScript Tutorials

- [study.hackyourfuture.be](https://study.hackyourfuture.be/javascript#awesome-tutorials)

#### Study References

- [Errors & Debugging](https://education.launchcode.org/intro-to-professional-web-dev/chapters/errors-and-debugging/index.html)
- [javascript.info: JS Fundamentals](https://javascript.info/first-steps)
- [Just JavaScript](https://github.com/HackYourFutureBelgium/just-javascript)
- [Practical JavaScript](https://shawnr.gitbooks.io/practical-introduction-to-javascript/): 1 -> 7
- [errors & program life-cycle](https://github.com/janke-learning/errors-and-life-cycle)
- More resources at [study.hackyourfuture.be/javascript](https://study.hackyourfuture.be/javascript)

---

### Exercises

- [debuggercises](https://github.com/hackyourfuturebelgium/debuggercises)
  - :egg: 8 -> 10
  - :hatching_chick: 11 -> 17
  - :hatched_chick: 18+
- [using-user-input](https://github.com/HackYourFutureBelgium/using-user-input)
  - :egg: Levels 3 and 4
  - :hatching_chick: Level 5

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

#### `prompt-alert-calculate`

> [Starter Code](https://home.hackyourfuture.be/students/weekly-assignments#projects)

Collaboration!  This project should be completed in groups.  Generate a new repo for your team using [debugging-project-week-1](https://github.com/HackYourFutureBelgium/prompt-alert-calculate) and have at it.

There are is no right or wrong development strategy, and there is no right or wrong user interface!  What matters is that you agree as a team, and that your plan is clearly communicated in your repository.

:shipit:

