# Debugging

> If debugging is the process of removing software bugs, then programming must be the process of putting them in.
>
> - [Donald Knuth](https://en.wikipedia.org/wiki/Donald_Knuth)

[![Debugging Tactics](./faasandfurious-debugging.png)](https://faasandfurious.com/71)

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

If you can't finish all the material in this repository, that's expected! Anything you don't finish now will always be waiting for you to review when you need it. These 3 emoji's will help you prioritize your study time and to measure your progress:

- 🥚 `:egg:` - Understanding this material is required, it covers the base skills you'll need for this module. You do not need to finish all of them but should feel comfortable that you could with enough time.
- 🐣 `:hatching_chick:` - Do your best to start this material. you don't need to master it or finish it but getting the main idea will be helpful for taking the next steps.
- 🐥 `:hatched_chick:` - Have you finished all the 🥚's and started all the 🐣's? push yourself with these challenges.

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
  - `var` and hoisting
- Functions
  - `() => {}`:
  - Declaring vs. Calling
  - Arguments vs. Parameters
  - Return Values
  - Lexical scope
  - `function`: hoisting, `arguments`
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

> [study.hackyourfuture.be/javascript](https://study.hackyourfuture.be/javascript)

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

### Examples and Exercises

There are 5 directories of examples & exercises in this repo. Each directory has a bunch of chapters that should be studied in order (ie. `/isolate/01-variables` before `/isolate/02-value-swaps`). However you can study the main directories at the same time, for example `/debuggercises/01-prompt-alert-confirm` builds on top of only the first few chapters in `/isolate`.

Many of these exercises will come with a solution, for example: `exercise.js` & `exercise.re.js`. The `.re.` stands for _**reverse engineering**_, the practice of rebuilding a program by studying it's behavior (user experience) without reading the source code. Your aren't expected to write the same code as the solution, there are many right answers! When you open one of these `.re.` files from the table of contents, their code will be minified and unreadable. Instead of reading the code you should run the script and examine the flowchart to understand how your solution should behave.

- **[./isolate](./isolate)**: Practice the foundations of JavaScript in isolation. Learn to step through and predict your program's execution using the _debugger_ and _JS Tutor_. These examples and exercises have no user input and have no HTML/CSS.
- **[./debuggercises](./debuggercises)**: Learn to work with _primitive types_ and _control flow_ by writing debuggercisesive scripts. Code in this folder uses `prompt`, `alert`, and `confirm` for handling user interactions, but still have no user interface (HTML/CSS).
- **[./parsons-practice](./parsons-practice)**: A collection of Parsons Problems to practice constructing solutions without the headache of syntax errors and needing to remember each and every JS keyword. Careful, there will be extra lines of code!
- **[./errors-and-program-life-cycle](./errors-and-program-life-cycle)**: JavaScript errors - get over the initial fear by learning to identify errors in your code. Then learn how to pause on errors in the debugger, to read callstack messages, to throw your own Errors and to handle errors with `try`/`catch`.

### More Examples and Exercises

<!-- TODO, get some more links to here -->

- [using-user-input](https://github.com/HackYourFutureBelgium/using-user-input)
- [deep-js-foundations](https://github.com/valterex/deep-js-foundations)

### Regular Expressions

You can get by without them, but when you need them they'll save your life.

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

Learn to create basic scripts that accept user input, check the type, perform conditional logic, and alert the result back to the user.

<details>
<summary>expand/collapse</summary>
<br>

### Before Class

#### Software Installations

You **_must_** have these softwares installed for class on Sunday

- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Node.js](https://nodejs.org/en/download/)
- the `study` CLI tool: `$ npm install -g study-lenses`

#### Coding Prep

You don't need to understand this material perfectly, it's just important you aren't seeing it for the first time in class on Sunday.

- Read through [./studying-javascript](./studying-javascript?hyf)
- Spend ~30 minutes playing [compute-it.toxicode](http://compute-it.toxicode.fr/)
- [./isolate](./isolate?hyf) (examples only)
  - 1: Variables
  - 3: Primitive Types
  - 4: Comparing and Asserting
  - 5: Explicit Coercion
  - 7: Block Scope
- [./debuggercises](./debuggercises?hyf) (examples only)
  - 1: Prompt, Alert, Confirm
  - 2: Validating User Input

### During Class

Write scripts that check and coerce the type of user input.

#### Before Break

Your coach will present the examples for the following chapters of `./isolate`, then you will break into small groups and work on the exercises

- [./isolate](./isolate?hyf)
  - 4: Comparing and Asserting
  - 5: Explicit coercion
    - `Boolean(x)` is truthiness!
    - Will not cover `about-nan`, that's for home study
  - 8: Conditionals

#### After Break

These exercises each have a solution, for example: `exercise.js` & `exercise.re.js`. The `.re.` stands for _**reverse engineering**_, the practice of rebuilding a program by studying it's behavior (user experience) without reading the source code. Your aren't expected to write the same code as the solution, there are many right answers! When you open one of these `.re.` files from the table of contents, their code will be minified and unreadable. Instead of reading the code you should run the script and examine the flowchart to understand how your solution (in the file without `.re.`) should behave.

- [./isolate/05-explicit-coercion](./isolate/05-explicit-coercion?hyf) `Number`
- [./debuggercises/02-user-flow](./debuggercises/02-user-flow?hyf)

### After Class

No project this week!

Continue working on your portfolio from the UX/UI module and have as many group study sessions as possible. It's important that you start out comfortable and confident in these first weeks of JS.

</details>
<br>

[TOP](#debugging)

---

## Week 2

Use _iteration_ to validate user input and to enable more interesting debuggercisesion.

<details>
<summary>expand/collapse</summary>
<br>

### Before Class

The topics for this Sunday will be `while` loops, `for` loops, and a little bit of String manipulation. Below are a few resources to get you started but don't stop here. Take a look through the resources in [study.hackyourfuture.be](https://study.hackyourfuture.be/javascript/) to find the links that help you the most. Got a suggestion for this list? send a PR!

- Loops
  - [javascript.info](https://javascript.info/while-for)
  - [Mosh](https://www.youtube.com/watch?v=s9wW2PpJsmQ) (for)
- Strings
  - [javascript.info](https://javascript.info/string) (through "changing the case")
  - [launchcode.org](https://education.launchcode.org/intro-to-professional-web-dev/chapters/strings/index.html)
- [./isolate](./isolate?hyf) (examples only)
  - Comparisons
  - While Loops
  - Break & Continue
  - Increment & Decrement
  - For Loops

### During Class

#### Before Break

- Isolate
  - `while` Loops
  - `break` & `continue`
- Interact
  - Input/Output Loops

#### After Break

- Isolate
  - `for` loops
- Interact
  - `for`/`of` strings
  - Iterating user input

### After Class

> Group Project, 2 weeks

This is the beginning of a two-week project. Each group will plan and build their own JS Study Guide using this [starter repository](https://github.com/HackYourFutureBelgium/js-study-guide). The project will be written using only HTML & CSS. You will need to write some JavaScript for this project, but all the code you write will be examples and exercises like in this _Debugging_ repository. You are not expected to use JavaScript for DOM Manipulation, or any other type of debuggercisesivity.

To help you build an debuggercisesive study guide, the repository comes with a custom HTML element `<code-along src='./path/to/file.js'></code-along>`. Using this component you will be able to embed debuggercisesive code snippets much like the `study-lenses` exercises. If you're looking for a good way to organize your topics, consider having these 4 sections for each:

1. **Essence**: present in 2-3 sentences what you will cover and why you need to know it.
2. **Examples**: present a couple examples of this concept with simple code snippets
3. **Explanation**: explain how the code examples work, and the rules behind them
4. **Exercises**: provide a few exercises to practice applying the concept

It's time for some UX & UI! Take your time in the first week to plan and design your study guide for the best study experience possible. Your study guide can include anything you think will be helpful:

- Explanations
- Diagrams
- Links
- Code Snippets
- [Embedded Videos](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
- ... Anything goes!

#### Checklist

```markdown
- [ ] [repo](https://github.com/_/_) (with a complete README)
- [ ] [live demo](https://_.github.io/_)
- [ ] [backlog](https://github.com/_/_/tree/master/planning/backlog.md)
- [ ] [Figma planning document](_)
- [ ] [development strategy](https://github.com/_/_/tree/master/planning/development-strategy.md)
- [ ] [project board](https://github.com/_/_/projects/_)
- [ ] [one branch per step](https://github.com/_/_/branches)
- [ ] [one closed PR per step](https://github.com/_/_/pulls)
```

</details>
<br>

[TOP](#debugging)

---

## Week 3

Create modular and reusable code with functions. Write well-named functions and call them as many times as you like from your programs.

<details open>
<summary>expand/collapse</summary>
<br>

### Before Class

The examples and exercises in this repository all use `() => {}` functions, while many resources out in the wild cover `function` functions. Both types of functions are similar enough that for now you can think of them as being the same for now. This repository focuses on arrow functions because:

- the syntax is cleaner and less distracting to read
- there are fewer quirks in how arrow functions work, so they're a little cleaner to learn
- function expressions are easier to study in the debugger than function declarations (though this can also be done with `function` functions, more on that later)

We will spend a few minutes in class covering both types of functions, but will mostly use `() => {}`.

Prep work:

- [Functions in 90 Seconds](https://www.youtube.com/watch?v=UY182o4J5_Y)
- [javascript.info](https://javascript.info/function-basics)
- Coding Train:
  - [Function Basics](https://www.youtube.com/watch?v=wRHAitGzBrg)
  - [Parameters & Arguments](https://www.youtube.com/watch?v=zkc417YapfE)
  - [Functions & Return](https://www.youtube.com/watch?v=qRnUBiTJ66Y)
- Examples
  - [./isolate](./isolate): `the-basics` & `best-practice`
  - [./debuggercises](./debuggercises): `abstracting-behavior`

### During Class

#### Before Break

- `isolate/`
  - Function: The Basics
  - Functions: Best Practice
  - The `function` key word

#### After Break

- `debuggercises/`: Abstracting Behavior

### After Class

Keep working on your JS Study Guide! By the end of this week your group should have a working site covering at least 3 challenging topis in JavaScript.

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
