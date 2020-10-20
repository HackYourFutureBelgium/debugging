# Debugging

> If debugging is the process of removing software bugs, then programming must be the process of putting them in.
> - [Donald Knuth](https://en.wikipedia.org/wiki/Donald_Knuth)

## Contents

- [Getting Started](#getting-started)
- [Study Tips](#study-tips)
- [About Programming](#about-programming)
- [Learning Objectives](#learning-objectives)
- [Suggested Study](#suggested-study)
- Break-Down
  - [Week 1](#week-1)
  - [Week 2](#week-2)
  - [Week 3](#week-3)
- [Class Recordings](#class-recordings)
- [study.hackyourfuture.be](https://study.hackyourfuture.be)
- [home.hackyourfuture.be](https://home.hackyourfuture.be/)

---

## Getting Started

> You will need [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [Node.js](https://nodejs.org/en/download/) on your computer to study this material
>
> Using a browser with good DevTools will make your life easier: [Chromium](http://www.chromium.org/getting-involved/download-chromium), [FireFox](https://www.mozilla.org/en-US/firefox/new/), [Edge](https://www.microsoft.com/edge), [Chrome](https://www.google.com/chrome/)

0. Install the `study-lenses` package globally (if you don't have it already)
    - `$ npm install -g study-lenses`
1. Clone this repository
    - `$ git clone git@github.com:HackYourFutureBelgium/debugging.git`
2. `cd` into the repository
    - `$ cd debugging`
3. Open the repository using `study`
    - `$ study`
4. The material will open in your default browser, you're good to go!

> If you have a windows computer and get this error:
>
> - `... /study.ps1 cannot be loaded because running scripts ...`
>
> follow the instructions in [this StackOverflow answer](https://stackoverflow.com/a/63424744), that should take care of it ; )

[TOP](#debugging)

---

## Study Tips

- Don't rush, understand!  Programming is hard.
  - The examples and exercises will still be there to study later.
  - It's better to fail tests slowly and learn from your mistakes than to pass tests quickly and not understand why.
- Don't skip the examples!  Understanding and experimenting with working code is a very effective way to learn programming.
- Write lots of good comments, learn more about this in [./studying-javascript](./studying-javascript)
- Practice [Pair Programming](https://study.hackyourfuture.be/collaborating/pair-programming): two people, one computer.
- Take a look through the [Learning From Code](https://study.hackyourfuture.be/learning/learning-from-code) guide for more study tips

[TOP](#debugging)

---

## About Programming

Software Development is a many layered skill. One way to break it down is to think of these layers:

<details>
<summary>expand/collapse</summary>
<br>

1. **Source Code**: _The basic literacy of programming_
    - Learning the key words (_vocabulary_) and syntax (_grammar_) for your programming language
    - Being able to read your code out loud, or write the code that someone else is describing
    - Fixing syntax errors that occur when you try to run your code
    - Writing code that does not have syntax errors, and spotting syntax errors when you do
    - > _The **Debugging** Module will focus on these skills_
2. **Machine Instructions**: _The basic mechanics of programming_
    - Understanding the life-cycle of your program
    - Understand how the computer will interpret your source code to create a running program
    - Understand what about your code matters to the computer, and what matters to people
    - Predicting which lines of code will be executed in which order
    - Predicting how each line of code will change what is stored in program memory
    - Reading error messages & callstacks to fix fix semantic errors that occur when you run your code
    - > _The **Debugging** Module will focus on these skills_
3. **Problem Solving & Algorithms**: _Breaking down large problems to be solved in small steps_
    - Understanding a coding challenge and being able to break it down in different ways
    - Determining which solution strategies are correct for which types of problems
    - Understanding how test cases are used to describe your solution strategy
    - Identifying the best language feature to use with your strategy
    - Reading test cases to understand how code is _supposed to_ behave
    - Using Test Cases to structure your solution design process (Test Driven Development)
    - Identifying and isolating mistakes in your code by reading failing test cases
    - Demonstrating your code does what you think it does by passing test cases
    - > _The **Problem Solving** Module will focus on these skills_
4. **Software Design**: _Organizing smaller pieces of code into full software solutions_
    - All in good time ;)
    - > _Every module starting with **Separation of Concerns** will focus on these skills_

</details>
<br>

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
  - Bugs are when you don't understand what your code is doing, not when your code doesn't understand what you want it to do!  The computer is always right :)
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

1. _Source code_: The `.js` text file you write.  These are just instructions saved as text in your computer, not a live process (a process is an active instance of a program)!
2. _Creation Phase_: When the JavaScript interpreter first reads your instructions from the program.  At this point it will load the program into memory (thus making a process) and check for some types of errors.
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

### compute-it.toxicode

- [the game](http://compute-it.toxicode.fr/) (_**highly** recommended_)
- [about the game](http://compute-it.toxicode.fr/about.html)

### What is JavaScript?

- [Andrew Mosh](https://www.youtube.com/watch?v=upDLs1sn7g4)
- [Code School](https://www.youtube.com/watch?v=nItSSTwBvSU)
- [MDN: First Steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- [javascript.info](https://javascript.info/intro)
- [Danielle Thé](https://www.youtube.com/watch?v=gT0Lh1eYk78)

### Debugging Tools

- [Errors & Debugging](https://education.launchcode.org/intro-to-professional-web-dev/chapters/errors-and-debugging/index.html)
- [Developer Console](https://javascript.info/devtools)
- [Debugging in Chrome](https://javascript.info/debugging-chrome)
  - [breakpoints](https://developers.google.com/web/tools/chrome-devtools/javascript/reference)
- [Debugging in FireFox](https://developer.mozilla.org/en-US/docs/Tools/Debugger)
- [pythontutor.com](http://pythontutor.com/) -> [JS Tutor](http://pythontutor.com/javascript.html)

### Examples and Exercises

There are 5 directories of examples & exercises in this repo. Each directory has a bunch of chapters that should be studied in order (ie. `/a-isolate/01-variables` before `/a-isolate/02-value-swaps`).  However you can study the main directories at the same time, for example `/b-interact/01-prompt-alert-confirm` builds on top of only the first few chapters in `/a-isolate`. Anyway, this is just our suggestion.  Experiment and find what works for you:

- **[./a-isolate](./a-isolate)**: Practice the foundations of JavaScript in isolation. Learn to step through and predict your program's execution using the _debugger_ and _JS Tutor_. These examples and exercises have no user input and have no HTML/CSS.
- **[./b-interact](./b-interact)**: Learn to work with _primitive types_ and _control flow_ by writing interactive scripts. Code in this folder uses `prompt`, `alert`, and `confirm` for handling user interactions, but still have no user interface (HTML/CSS).
- **[./c-integrate](./c-integrate)**: Learn how to write your JavaScript in an HTML file using `<script>` tags.  Add `on_something_` attributes to your DOM elements so users can trigger your scripts by taking different actions.
- **[./d-separate](./d-separate)**: Bring it all together! Learn to write full projects using HTML, CSS & JS stored in separate files.  You will learn to organize your code into a folder structure and to load your scripts using the `<script src="./folder/file.js">` syntax
- **[./errors](./errors)**: JavaScript errors - get over the initial fear by throwing your own errors. Then learn how to pause on errors in the debugger, to read callstack messages, and to handle errors with `try`/`catch`.

### More Examples and Exercises

- [debuggercises](https://github.com/hackyourfuturebelgium/debuggercises)
- [using-user-input](https://github.com/HackYourFutureBelgium/using-user-input)

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

You __*must*__ have these softwares installed for class on Sunday

- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Node.js](https://nodejs.org/en/download/)
- the `study` CLI tool: `$ npm install -g study-lenses`

#### Coding Prep

You don't need to understand this material perfectly, it's just important you aren't seeing it for the first time in class on Sunday.

- Read through [./studying-javascript](./studying-javascript?hyf)
- Spend ~30 minutes playing [compute-it.toxicode](http://compute-it.toxicode.fr/)
- [./a-isolate](./a-isolate?hyf) (examples only)
  - 1: Variables
  - 3: Primitive Types
  - 4: Comparing and Asserting
  - 5: Explicit Coercion
  - 7: Block Scope
- [./b-interact](./b-interact?hyf) (examples only)
  - 1: Prompt, Alert, Confirm
  - 2: Validating User Input

### During Class

Write scripts that check and coerce the type of user input.

#### Before Break

- [./a-isolate](./a-isolate?hyf)
  - 4: Comparing and Asserting
  - 6: Logical Operators
  - 8: Conditionals

#### After Break

- [./a-isolate](./a-isolate/?hyf): `05-explicit-coercion`
- [./b-interact](./b-interact/?hyf): `02-validate-user-input`

### After Class

> coming soon

</details>
<br>

[TOP](#debugging)

---

## Week 2

Use _iteration_ to validate user input and to enable more interesting interaction.

<details>
<summary>expand/collapse</summary>
<br>

### Before Class


### During Class


#### Before Break

#### After Break

### After Class


</details>
<br>

[TOP](#debugging)

---

## Week 3

Create modular and reusable code with functions. Write well-named functions and call them as many times as you like from your programs.

<details>
<summary>expand/collapse</summary>
<br>

### Before Class

### During Class

#### Before Break

#### After Break

### After Class


</details>
<br>

[TOP](#debugging)

---

## Class Recordings

- **Students**: Here you can find recordings of this module from past classes.  Enjoy!
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

## [Class-11-12](https://github.com/hackyourfuturebelgium/class-11-12)
