# Errors & Program Life-Cycle

This repo introduces the background setting for all JS language features. Taking the time to become familiar with the life-cycle of JS program execution will make it much simpler to learn the tricker concepts everyone's talking about; scope, errors, hoisting, strict mode, you name it.

The first principle: __Creation Phase__ & __Execution Phase__
* _Creation phase_ is what happens before the program runs. JS will compile your code, throw any intial errors, and prepare the runtime environment to execute your code.  You can easily see what happened in the creation phase with PythonTutor, it's anything that you see before you click the __forward__ button for the first time.
* _Execution Phase_ is everything that happens after the creation phase.  This is when JS executes your program one statement at a time, carrying out your instructions.

The second principle: __JavaScript Syntax__
* You can think of this like spelling & vocabulary. If you open parenthesis, you must close them or the JS engine will not understand.  If you use a symbol that JS doesn't support it will throw an error. If you do anything not explicitly allowed in the JS specifications, JS will not be able to run your program.
* Learning JS syntax means building your understanding of what is and isn't allowed, then recognizing & fixing mistakes you make.
* If your code makes it past the _creation phase_, your syntax is correct.

The third principle: __JavaScript Semantics__
* Just because your code has correct syntax doesn't mean it will work, it is still possible for you to use correct javascript in incorrect ways.  The rules that define correct and incorrect usage are JS semantics.
* Some examples of JS semantics are: reserved words, constant variables, and using undeclared variables.
* Even if it passes the creation phase, your code may still have semantic errors.

The fourth principle: __Errors__

| _Error Classifications_ |                                                                                                      syntax error                                                                                                      |                                                                                                         semantic error                                                                                                          |
| :---------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   __creation phase__    |                                          Bad spelling, the compiler can't understand (or "parse") what you've written. Your program will not continue to the execution phase.                                          |                                    The compiler was able to parse your code, but you tried doing something the compiler will not allow. An error is thrown before entering execution phase.                                     |
|   __execution phase__   | These are less common, generally by the time your program is running all syntax errors have been corrected. But in some cases it is possible to have run-time syntax errors in JS, worry about that when you get them. | "runtime errors". You made no syntax errors, and no semantic errors the compiler can catch.  Instead you wrote a command JS doesn't allow and won't notice untill it tries to execute that line. (these are the hardest to fix) |







> logic errors (or "bugs") are when your code does not do what you expected, this is unrelated to language errors (writing JavaScript).  Bugs and errors are often taught together, but are actually [completely different things](https://www.youtube.com/watch?v=tV0tQisuxPo). Fixing language errors requires only a solid understanding of the JS notional machine, while debugging also requires an understanding of program dynamics, tracing execution, debugging strategies & testing.  Debugging will be covered in depth later on.






---


### Index
* [Learning Objectives](#learning-objectives)
* [Resources](#resources)

---
---

## Learning Objectives


_Creation Phase vs Execution Phase_: Learning to understand the difference between your source code (simply a text file) and the dynamic runtime of your program is a strange but critical skill to learn.  This knowledge will be invaluable for identifying and fixing different types of errors.  To understand a running program you need to be comfortable with the life-cycle of a JS program:
1. Source Code
2. Creation Phase
3. Execution Phase (runtime)




__JavaScript:__
* Creation & Execution Phases
    * Creation (the first thing PythonTutor shows you)
    * Execution (everything after you click "forward" for the first time)
* Reserved words
    * words that have special meaning for the JS engine
    * some throw errors if you try using them as variables, others don't
    * either way, avoid using them
* Comments
    * Single line
    * Block
* Errors
    * Syntax
    * Semantic
* Warnings
    * These are not the same as errors, your code will still work but maybe with bad practices or with certain risks.
    * Don't worry about these for now.

__Programming Skillzz:__
* Thinking like the program life-cycle:
    * _Source Code_: The static text file you see in your editor, it does not change even as the program executes.
    * _Creation Phase_: When JavaScript builds a live program from your source
    * _Execution Phase_: JS is executing your program one line at a time, changing values in memory as it goes.
* Spotting & recognizing errors
* Error messages
    * Reading & understanding them
    * Finding and fixing the errors
    * "unexpected token" and "end of input" are especially tricky. The compiler often doesn't catch them until many lines after you made the mistake, so the error message will point to a line later on in the code.
* Commenting code
    * To avoid errors
    * To take notes



[TOP](#errors-&-programming-life-cycle)

---

## Resources


__Study Tools__:
* [PythonTutor for JavaScript](http://pythontutor.com/javascript.html#)


__Links__:
* [creation phase & execution phase](https://www.youtube.com/watch?v=YID-HIdy1bk)
* [syntax vs semantics](https://www.youtube.com/watch?v=vP-mn62EF0o)
* [reserved words](http://www.javascripter.net/faq/reserved.htm)
* Comments: [practical JS](https://shawnr.gitbooks.io/practical-introduction-to-javascript/content/basic-syntax/comments.html), [Free Code Camp](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comment-your-javascript-code)
* Basic Syntax: [practical JS](https://shawnr.gitbooks.io/practical-introduction-to-javascript/content/basic-syntax/), [singe & double quotes](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/debugging/catch-mixed-usage-of-single-and-double-quotes/), [closing what opens](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/debugging/catch-unclosed-parentheses-brackets-braces-and-quotes/)
* pytut snippets:
    * [creation phase: syntax errors](https://goo.gl/1Psxu7)
    * [creation phase: semantic errors](https://goo.gl/68af7H)
    * [execution phase: semantic errors](https://goo.gl/WzbmNE)
    * [reserved words](https://goo.gl/UiYnjK)
* [JS error reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)
* [more exercises](https://github.com/janke-learning/errors)







[TOP](#errors-&-programming-life-cycle)

