# Interact

Practice using the debugger to study, fix, and write interactive programs. There are 5 sets of exercises in this chapter, each building on top of the last.

> PS. These exercises won't work in JS Tutor. JS Tutor does not support `prompt`, `alert` or `confirm`.

---

## 0. `prompt`, `alert`, `confirm`

A few very short exercises to practice stepping through `prompt`, `alert` and `confirm` in the debugger.

---

## 1. Conditionals

Study, debug and write programs that use conditionals to process user input.

A important skill you develop in these exercises is **reverse-engineering**. Reverse-engineering is studying the behavior of a program _without_ seeing it's source code, then writing code that behaves the same:

1. understand the _behavior_ of the target program. drawing a flowchart on paper can be very helpful
2. plan out your file:
   - describe the program behavior in a block comment at the top of your empty file
   - write a comment describing each of your main goals
   - find some starter code for each goal from similar programs
3. implement one chunk at a time, from the beginning to the end!

Each exercise will be one program with 5 files. Files 1, 2 and 3 will contain different implementations of the same program so you won't be able to solve them just by checking the others:

- **`0-complete.re.js`**: A fully working program with the behavior you need to reverse-engineer. The `.re.` extension in the file name is for `study-lenses`, it does not change how the browser will interpret your code. When you click on a link to open a `.re.js` file the code will be _obfuscated_ so that it still works but is impossible to read. You can remove the `?obf&min` lenses to study the source code, but don't copy the solution!
- **`1-blanks.js`**: A _nearly_ working program with some `_`s for you to fill in, everything that is not a `_` is correct. A single `_` means a piece of a line is missing, a longer `___` means more than a line is missing.
- **`2-bugs.js`**: A _nearly_ working program with a few bugs. These bugs might be a spelling mistake, a bad condition, the wrong type of variable declaration, or many other little mistakes!
- **`3-chunks.js`**: Part of a working program. There will several lines of code missing that you need to fill in, without changing anything else in the file! There will be a comment describing the goal of the missing code. See if you can write code that is different from the previous exercises, without looking!
- **`4-empty.js`**: Nothing! An empty file :) Write a program with the same behavior, but different code. Hint: try to build your solution by remixing parts of the previous exercises, copy-pasting snippets of code and modifying them so they work together.

---

## 2. Input/Output Loops

These exercises have the same format as the **1. Conditional** exercises, only now the programs have a `while` loop to validate user input.

---

## 3. Numbers

Like the exercises in **2. Input/Output Loops**, but with type coercion and the `"number"` type.

Numbers and types in JavaScript may feel like black magic at first, but have no fear! There are rules that you can learn to understand Numbers and type casting, complicated rules but still just rules that you can memorize.

As a JS developer you will always need to be careful when working with numbers and type coercion. In your applications you will want to avoid type coercion as much as possible, and to do that you will need to understand it. Even after doing your best to avoid type bugs you will still have them! The more you practice now while programs are simple the more prepared you'll be when you start building larger applications.

---

## 4. Using Functions

This is it, your next big step as a developer! Learn to _refactor_ the logic of your program into a function that you can call several times. Learning to _abstract_ your logic into functions will help you write code with less repetition, this will make your code easier to read and to maintain. Along the way you will get practice using JSDoc comments to describe your functions' behavior.

Exercises in this folder will have a different structure, there are three different levels of exercises focusing on a different aspect of using functions:

1. **Call Functions**: You will be given a working function and a mostly working program. To complete the program you will need to call the function, passing in the correct arguments and assigning the return value to the correct variable.
2. **Write Functions**: You will be given an empty function (or two) and a program that calls the functions correctly. To complete the program you will need to write the logic inside the function. Be aware of your arguments and return values!
3. **Refactor Logic**: You will be given a fully working program and ... no functions! Just some comments telling you which code needs to be refactored. Your task is to write a function with the same behavior as the commented code, the to replace the commented code with a call to your new function. You're now a true programmer!

### Organizing your Code

Other developers should be able to know WHAT your code does without needing to read every line. Functions and JSDocs are a great way to do this. When you write your programs using well-named functions and a clear JSDoc comment, other people can understand your main program without needing to read the code inside your functions!

Another way to help people read your code is to write different code in different parts of the file. In these exercises that will mean declaring all of your functions _before_ the code that will use them. something like this:

```js
/*
  what does this program do? (big picture)
*/

/* -- function definitions: all the functions you will use in your program -- */
// logic functions should never have user interactions!

/**
 * JSDoc comment describing this function
 */
const doSomething = param => {
  console.log('canceled:', param);
};

/**
 * JSDoc comment describing this function
 */
const doAnotherThing = param => {
  console.log('entered:', param);
};

/* -- main program: an interactive program that uses your functions -- */

const input = prompt('yes or no?');

if (input === null) {
  doSomething(input);
} else {
  doAnotherThing(input);
}
```

### Reading Organized Code

1. Use the program without looking at the code, get the big picture of what it does and how it works
2. Read the part of the program where the functions are used. piece together the logic of the program, without all the details. If the functions have good names this should be easy!
3. Study the functions' behavior, collapse all the functions and read their documentation. how does each function behave? what are the arguments? and the return value? compare the documentation to how the functions are used in the main program
4. Study the functions' implementation. Open the function bodies to read through their code and step through them in the debugger.
