# Debugging

> If debugging is the process of removing software bugs, then programming must be the process of putting them in.
>
> - [Donald Knuth](https://en.wikipedia.org/wiki/Donald_Knuth)

[![Debugging Tactics](./assets/faasandfurious-debugging.png)](https://faasandfurious.com/71)

## Contents

- [Getting Started](#getting-started)
- [Study Tips](#study-tips)
- [Learning Objectives](#learning-objectives)
- [Suggested Study](#suggested-study)
- Break-Down
  - [Week 1](#week-1)
  - [Week 2](#week-2)
  - [Week 3](#week-3)
  - [Week 4](#week-4)
- [Class Recordings](#class-recordings)
- [study.hackyourfuture.be](https://study.hackyourfuture.be)
- [home.hackyourfuture.be](https://home.hackyourfuture.be/)

---

## Getting Started

> You will need [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) on your computer to study this material
>
> Using a browser with good DevTools will make your life easier: [Chromium](http://www.chromium.org/getting-involved/download-chromium), [FireFox](https://www.mozilla.org/en-US/firefox/new/), [Edge](https://www.microsoft.com/edge), [Chrome](https://www.google.com/chrome/)

1. Install or update the `study-lenses` package globally
   - `$ npm install -g study-lenses` (if you do not have it already)
   - `$ npm update -g study-lenses` (if you already have it installed)
   - if you're having trouble on Linux or Mac, try running `$ sudo npm ...`
2. Clone this repository
   - `$ git clone git@github.com:HackYourFutureBelgium/debugging.git`
3. `cd` into the repository
   - `$ cd debugging`
4. Open the repository using `study`
   - `$ study`
5. The material will open in your default browser, you're good to go!

> If you have a windows computer and get this error:
>
> - `... /study.ps1 cannot be loaded because running scripts ...`
>
> follow the instructions in [this StackOverflow answer](https://stackoverflow.com/a/63424744), that should take care of it ; )

[TOP](#debugging)

---

## Study Tips

- Don't rush, understand! Programming is hard.
  - The examples and exercises will still be there to study later.
  - It's better to fail tests slowly and learn from your mistakes than to pass tests quickly and not understand why.
- Don't skip the examples! Understanding and experimenting with working code is a very effective way to learn programming.
- Practice Pair Programming: two people, one computer.
- Read the code out loud
- Take a look through the [HYF Study Tips](https://home.hackyourfuture.be/students/study-tips) for more inspiration

### Priorities

If you can't finish all the material in this repository, that's expected! Anything you don't finish now will always be waiting for you to review when you need it. These 3 emoji's will help you prioritize your study time and to measure your progress:

- 🥚 `:egg:` - Understanding this material is required, it covers the base skills you'll need for this module and the next. You do not need to finish all of them but should feel comfortable that you could with enough time.
- 🐣 `:hatching_chick:` - Do your best to start this material. you don't need to master it or finish it but getting the main idea will be helpful for taking the next steps.
- 🐥 `:hatched_chick:` - Have you finished all the 🥚's and started all the 🐣's? push yourself with these challenges.

### Hashtags

There's sooo many examples and exercises in this repository, it's easy to forget of what you still need to finish or what you want to review again. Luckily VSCode is really good at searching through folders of code.

You can write hashtags in your comments while you're studying, then search for those hashtags later so you don't miss anything. Here's some ideas:

- `// #not-done, still a few blanks left` - search for `#not-done` in VScode to find all the exercises you've started and not finished
- `// coercion is confusing, #review this again next week` - search for `#review` to find the files you need to study again
- ... anything goes! Find the hashtags that work for you

[TOP](#debugging)

---

## Learning Objectives

What can you expect to learn in this module?

<details>
<summary>expand/collapse</summary>

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
  - Bugs are when you don't understand what your code is doing, not when your code doesn't understand what you want it to do! The computer is always right :)
  - Identify the line(s) of code that are not doing what you expect
  - Find several other ways of writing that line
  - Replace with the one that works and that you understand best
- Errors:
  - _Syntax vs. Semantic_: Some errors happen because you wrote JavaScript that the interpreter couldn't interpret (syntax), other errors happen when you try to do something that isn't allowed (semantic).
  - _Creation vs. Execution_: Some errors are thrown before the program actually becomes a process (creation phase), others are thrown during program execution when a line of code is reached (execution phase).

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
  - Block Scope
- Functions
  - `() => {}`:
  - Declaring vs. Calling
  - Arguments vs. Parameters
  - Return Values
  - Lexical scope
- Control Flow
  - Conditionals
  - Loops
  - `break`, `continue`
- `prompt`, `alert`, and `confirm`
  - Validating user input
  - Providing helpful feedback

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

### JS Program Life-Cycle:

1. _Source code_: The `.js` text file you write. These are just instructions saved as text in your computer, not a live process (a process is an active instance of a program)!
2. _Creation Phase_: When the JavaScript interpreter first reads your instructions from the program. At this point it will load the program into memory (thus making a process) and check for some types of errors.
3. _Execution Phase_: This is the real deal! The JavaScript interpreter will now step through your instructions _one line at a time_, updating the (process) memory according to your instructions.

### Integrating JavaScript

- Document Life-Cycle
  - `<head>`: Scripts & styles are loaded top to bottom, before the `<body>`
  - `<body>`: Everything is executed/loaded top to bottom
- Event-Driven Programming (Handling user input)
  - HTML `onclick` attribute
  - well-organized source files

</details>
<br>

[TOP](#debugging)

---

## Suggested Study

Helpful resources for this module

<details>
<summary>expand/collapse</summary>
<br>

> [hackyourfuture.github.io/study](https://hackyourfuture.github.io/study)

### Statements vs. Expressions

- [codeexpanse](https://www.youtube.com/watch?v=WVyCrI1cHi8)

### Debugging Tools

- [Errors & Debugging](https://education.launchcode.org/intro-to-professional-web-dev/chapters/errors-and-debugging/index.html)
- [Developer Console](https://javascript.info/devtools)
- [Debugging in Chrome](https://javascript.info/debugging-chrome)
  - [definitive: 2021](https://dev.to/atapas/the-definitive-guide-to-javascript-debugging-2021-edition-116n)
  - [breakpoints](https://developers.google.com/web/tools/chrome-devtools/javascript/reference)
- [Debugging in FireFox](https://developer.mozilla.org/en-US/docs/Tools/Debugger)
- [pythontutor.com](http://pythontutor.com/) -> [JS Tutor](http://pythontutor.com/javascript.html)
- [VSCode](https://code.visualstudio.com/Docs/editor/debugging)

### Tutorials

- [watchAndCode Programming Foundations](https://watchandcode.com/) - sign up for the free Programming Foundations course, it's awesome. You can stop when he starts explaining `this`.

### In this Repo

- 🥚 **[./stepping-through](./stepping-through)**: Take a quick tour of the debugger and JS Tutor, two tools that will help you understand _program memory_ and how JS follows your instructions one step at a time. Learn to use _breakpoints_ and the `debugger` statement to pause your program on specific lines.
- 🥚 **[./describing-errors](./describing-errors)**: JavaScript errors! - get over the initial fear by learning to find and describe errors in your code. Then learn how to pause on errors in the debugger and to read callstack messages.
- 🥚 **[./isolate](./isolate)**: Practice the foundations of JavaScript in isolation. Learn to step through and predict your program's execution using the _debugger_ and _JS Tutor_. These examples and exercises have no user input.
- 🥚 **[./logging](./logging)**: Learn how to create your own trace of a program's execution using `console.log`. Practice tracing different aspects of the same program's execution.
- 🥚 **[./naming-variables](./naming-variables)**: Code should be written for people first, computers second. Learn to give helpful names to your variables that describe what data they store and how they are used in your program.
- 🐣 **[./interact](./interact)**: Learn to work with _primitive types_, _control flow_ and _functions_ by writing small interactive programs. Code in this folder uses `prompt`, `alert`, and `confirm` for handling user interactions, but still have no user interface (HTML/CSS).
- 🐣 **[./using-functions](./using-functions)**: Learn how you can use functions to organize and and reuse your code.
- 🐥 **[./throw-and-catch](./throw-and-catch)**: Go deeper into errors and error handling by throwing and catching your own errors.

### More Examples and Exercises

- HackYourFuture Amsterdam: [JS module](https://github.com/HackYourFuture/JavaScript), [1-JavaScript homework](https://github.com/HackYourFuture/Homework)
- CodeYourFuture JS Core: [week 1](https://github.com/CodeYourFuture/JavaScript-Core-1-Coursework-Week1), [week 2](https://github.com/CodeYourFuture/JavaScript-Core-1-Coursework-Week2), [week 3](https://github.com/CodeYourFuture/JavaScript-Core-1-Coursework-Week3)
- [JavaScript for Everyone](https://github.com/Asabeneh/JavaScript-for-Everyone)
- [30 Days of JavaScript](https://github.com/Asabeneh/30DaysOfJavaScript)
- dinanathsj29: [Tutorial](https://github.com/dinanathsj29/javascript-beginners-tutorial), [Exercises](https://github.com/dinanathsj29/javascript-exercise-beginners)
- [deep-js-foundations](https://github.com/valterex/deep-js-foundations)

### 🐥 Regular Expressions

You can get by without them, but when they're helpful they're very helpful.

- Interactives
  - [regex.guide](https://regex.guide/): learn to build regular expressions one question at a time
  - [regexer.com](https://regexr.com/): realtime regex with a visual breakdown of your regular expression
  - [Regex Crossword](https://regexcrossword.com/): games to learn regular expressions
- References
  - [The Coding Train](https://shiffman.net/a2z/regex/)
  - [javascript.info](https://javascript.info/regular-expressions)
  - [FreeCodeCamp](https://www.youtube.com/watch?v=909NfO1St0A)
  - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

</details>
<br>

[TOP](#debugging)

---

## Week 1

Use debuggers to step through your code one instruction at a time. Along the way you'll learn how to visualize _program memory_ and how to fix errors in your code.

<details>
<summary>expand/collapse</summary>
<br>

### Before Class

#### Coding Prep

You don't need to understand this material perfectly, it's just important you aren't seeing it for the first time in class on Sunday.

- [./stepping-through](./stepping-through)

### During Class

#### Before Break

Practice using the debugger and JS Tutor to step through small programs.

- [./stepping-through](./stepping-through)
- [./interact](./interact): Input/Output Loops

#### After Break

Dig deeper into program execution and the debugger by learning how to describe errors in your program:

- [./describing-errors](./describing-errors)

### After Class

Learning to program with JavaScript is a marathon. This week you can keep working through your favorite tutorials, and be sure make time to get comfortable stepping through and predicting small programs in your debugger. Try starting with:

- 🥚 [./stepping-through](./stepping-through)
- 🥚 [./describing-errors](./describing-errors): until it's _almost_ easy
- 🐣 [./isolate](./isolate): through conditionals
- 🥚 [./logging](./logging): until it starts to make sense, you'll get plenty of time to practice in /interact
- 🐣 [./interact](./interact): through conditionals

Isolate goes in depth on type coercion and primitive operators. You aren't expected to master these topics in one week, it will take lots of practice for this to sink in.

Study together! Working in small groups and taking turns to predict and explain what is happening with the code is a nice way to spend a few hours. Teaching is a great way to learn.

Your class repository has a folder called `/javascript` and a project board for tracking your issues & PRs. Over the next four weeks you and your classmates will start your own JS Study Guide. This is just the start! Learning JS is a never-ending story, you will keep building this study guide for the rest of your time at HYF.

</details>
<br>

[TOP](#debugging)

---

## Week 2

- Numbers and `NaN`
- User numbers
- `for` loops

<details>
<summary>expand/collapse</summary>
<br>

### Before Class

The topics for this Sunday will be `while` and `for` loops, and a little bit of type casting. Got a suggestion for this list? send a PR!

- Type Conversion
  - [javascript.info](https://javascript.info/type-conversions)
  - [./isolate](./isolate): explicit coercion
- Loops
  - [javascript.info](https://javascript.info/while-for)
  - [Mosh](https://www.youtube.com/watch?v=s9wW2PpJsmQ)
  - [./isolate](./isolate): while loops and for loops
- [./interact](./interact): numbers (examples)

### During Class

#### Before Break

- [./isolate](./isolate): explicit coercion

#### After Break

- Practice debugging programs that use numbers
  - [./interact](./interact): numbers

### After Class

- 🥚 [./isolate](./isolate): through Refactoring Loops
- 🐣 [./naming-variables](./naming-variables): until it starts to make sense, you'll get plenty of time to practice in /interact
- 🐣 [./interact](./interact): through Numbers

Keep working your way through your favorite tutorials and the exercises in this repository.

Try make at least one contribution per day to the class `/javascript` study guide. It doesn't need to be anything fancy! Reviewing a PR or adding a new link is helpful.

</details>
<br>

[TOP](#debugging)

---

## Week 3

Learn to trace function execution, and to use function in small programs.

<details>
<summary>expand/collapse</summary>
<br>

### Before Class

The examples and exercises in this repository all use `() => {}` functions, while many resources online cover `function` functions. This repository focuses on arrow functions because:

- the syntax is cleaner and less distracting to read
- `this` and `arguments` are less distracting with arrow functions (more on those things later)
- function expressions are easier to study in the debugger since they are not hoisted

Prep work:

- [Functions in 90 Seconds](https://www.youtube.com/watch?v=UY182o4J5_Y)
- [javascript.info](https://javascript.info/function-basics)
- Coding Train:
  - [Function Basics](https://www.youtube.com/watch?v=wRHAitGzBrg)
  - [Parameters & Arguments](https://www.youtube.com/watch?v=zkc417YapfE)
  - [Functions & Return](https://www.youtube.com/watch?v=qRnUBiTJ66Y)
- Examples
  - [./isolate](./isolate): functions, the basics

### During Class

#### Before Break

- [./isolate](./isolate): functions, the basics

#### After Break

- [./isolate](./isolate): functions, the basics + documenting

### After Class

Keep working your way through your favorite tutorials and the exercises in this repository. If you haven't already, take a look at:

- 🥚 [./isolate](./isolate): through The Callstack
- 🐣 [./using-functions](./using-functions): through Refactor Logic

Try make at least one contribution per day to the class `/javascript` study guide. It doesn't need to be anything fancy! Reviewing a PR or adding a new link is helpful.

</details>
<br>

[TOP](#debugging)

---

## Week 4

Reference vs. Value! This week you will learn about arrays, objects and side-effects.

<details>
<summary>expand/collapse</summary>
<br>

### Before Class

This week's class will focus almost entirely on how arrays/objects are stored in memory, and how to use them as arguments to functions. Take a look through the examples in these folders to be ready for class:

- [./isolate](./isolate): reference vs. value, side-effects

### During Class

#### Before Break

- [./isolate](./isolate): reference vs. value

#### After Break

- [./isolate](./isolate): side-effects

### After Class

- 🥚 [./isolate](./isolate): through Side Effects. Reference vs. Value and Side Effects are another "invisible" thing about JS, you can't see it in the source code! You need to understand how JS program memory works and to learn how debugging tools can help you see this
- 🐣 [./interact](./interact): Arrays
- 🐣 [./using-functions](./using-functions): Avoid Side-Effects

Keep working through your favorite tutorials and the exercises in this repository. It's important to come prepared for the first Sunday of Behavior, Strategy, Implementation so be sure to make time for the prep work!

Try make at least one contribution per day to the class `/javascript` study guide. It doesn't need to be anything fancy! Reviewing a PR or adding a new link is helpful.

</details>
<br>

[TOP](#debugging)

---

## Class Recordings

- **Students**: Here you can find recordings of this module from past classes. Enjoy!
- **Coaches**: When sending your PR's with links please ...
  - Indicate which class you were teaching
  - Which week it was (if the module is more than 1 week)
  - Give your name
  - and a helpful description

### [class-9-10](https://github.com/hackyourfuturebelgium/class-9-10)

> [Maël](https://github.com/maeligg), [Unmesh](https://github.com/unmeshvrije), [Evan](https://github.com/colevandersWands)

1. Week 1:
   1. [Functions, Primitive Types, Coercion](https://vimeo.com/428979153)
   2. [`onclick`, Prompt, Alert, Confirm](https://vimeo.com/428982613)
   3. [Wrap-up & Homework](https://vimeo.com/428992050)
2. Week 2:
   1. [`for` and `while` loops](https://vimeo.com/431703195)
   2. [Shared Script Variables](https://vimeo.com/431703540)
3. Process week:
   - [Sunday Review Call with Unmesh](https://vimeo.com/433635577)

### [Class-11-12](https://github.com/hackyourfuturebelgium/class-11-12)

> [Maël](https://github.com/maeligg), [Nawang](https://github.com/nawatend), [Thibault](https://github.com/ThibaultLesuisse)

1. Week 1:
   - [Part 1](https://vimeo.com/472213092)
   - [Part 2](https://vimeo.com/472190972)
2. Week 2:
   - [Loops, I/O & iterating data](https://meet.openknowledge.be/playback/presentation/2.0/playback.html?meetingId=48966e92bc14f80c53d450f9e59dc77e812b2f8b-1604228270944)
3. Week 3:
   - [functions and structured programs](https://meet.openknowledge.be/playback/presentation/2.0/playback.html?meetingId=48966e92bc14f80c53d450f9e59dc77e812b2f8b-1604832955426)

### [Class-13-14](https://github.com/hackyourfuturebelgium/class-13-14)

> [Maël](https://github.com/maeligg), [Yildiray](https://github.com/yildiraykoyuncu), [Razvan](https://github.com/razvanbrb), [Emilien](https://github.com/EmilienD)

1. Week 1:
   - Stepping Through Code: [part 1](https://vimeo.com/530235541), [part 2](https://vimeo.com/530238311)
   - [Describing Errors](https://vimeo.com/530238051)
2. Week 2:
   - Part 1 hasn't been recorded due to a technical issue. Our apologies.
   - [Part 2](https://vimeo.com/535777690)

3. Week 3:
   - [Part 1](https://vimeo.com/538659747)
   - [Part 2](https://vimeo.com/538671285)
