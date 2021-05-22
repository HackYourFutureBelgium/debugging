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
3. implement one goal at a time, from the beginning to the end!

Each exercise will be one program with 5 files. Files 1, 2 and 3 will contain different implementations of the same program so you won't be able to solve them just by checking the others:

- **`0-complete.re.js`**: A fully working program with the behavior you need to reverse-engineer. The `.re.` extension in the file name is for `study-lenses`, it does not change how the browser will interpret your code. When you click on a link to open a `.re.js` file the code will be _obfuscated_ so that it still works but is impossible to read. You can remove the `?obf&min` lenses to study the source code, but don't copy the solution!
- **`1-blanks.js`**: A _nearly_ working program with some `_`s for you to fill in, everything that is not a `_` is correct. A single `_` means a piece of a line is missing, a longer `___` means more than a line is missing.
- **`2-bugs.js`**: A _nearly_ working program with a few bugs. These bugs might be a spelling mistake, a bad condition, the wrong type of variable declaration, or many other little mistakes!
- **`3-goals.js`**: Part of a working program. There will lines of code missing that you need to fill in, without changing anything else in the file! There will be a comment describing the goal of the missing code. See if you can write code that is different from the previous exercises, without looking!
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

## 4. Arrays

Programs that store many user inputs in an array, then iterate over the data to produce a new array.
