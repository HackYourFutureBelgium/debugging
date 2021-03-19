# Interact

Learn how to complete, debug and write interactive JS script with `prompt`, `alert` and `confirm`.

## 0. `prompt`, `alert`, `confirm`

A few simple exercises to practice stepping through user interactions in your browser's debugger.

## 1, 2 and 3

To solve these exercises you will need to practice your _reverse-engineering_ skills. Each exercise will be one program with 5 files, the first 4 files will contain different implementations of the same program so you won't be able to solve them just by checking the others:

- **`0-complete.re.js`**: A fully working program with the behavior you need to reverse-engineer. The `.re.` extension in the file name is for `study-lenses`, it does not change how the browser will interpret your code. When you click on a link to open a `.re.js` file the code will be _obfuscated_ so that it's impossible to read. You can remove the `?obf&min` lenses to study the source code, but don't copy the solution!
- **`1-blanks.js`**: A _nearly_ working program with some `_`s for you to fill in, everything that is not a `_` is correct. A single `_` means a piece of a line is missing, a longer `___` means more than a line is missing.
- **`2-bugs.js`**: A _nearly_ working program with a few bugs. These bugs might be a spelling mistake, a bad condition, the wrong type of variable declaration, or many other little mistakes!
- **`3-chunks.js`**: Part of a working program. There will several lines of code missing that you need to fill in, without changing anything else in the file! There will be a comment describing what is the goal of the missing chunks. See if you can solve the chunk differently than the previous exercises, without looking!
- **`4-empty.js`**: Nothing! An empty file :) Build the same program in a new way. Hint: try to build your solution by remixing parts of the previous exercises, copy-pasting snippets of code and modifying them so they work together.

## 4. Abstracting Behavior

1. Use Functions
2. Write Functions
3. Refactor Logic

don't worry, you'll have plenty of bugs to fix without us giving you any ;)

```js
/*

  Put it all together! There's more to programming than writing code that works
  your code should be readable & reusable.

  other developers should be able to know WHAT your code does
  without caring HOW it does it, this is why good practices are important
  - writing well-named functions makes your programs readable
  - documenting your functions helps others know how to use them
  - general-purpose functions with arguments can be reused in many programs

  You can also help others understand your code by
  - organizing your files
  - using comments to describe your file's structure

  Let's see this all in practice, things to notice in this file:

  - function declarations
    all the functions are declared at the top of the file
    functions are separated and commented based on their role in the program
    each function has a JSDoc comment to help you understand their behavior
  - using the functions
    the main program is a readable series of function calls
    control flow is used to decide the program's overall behavior

  This example is larger than what you're expected to write at this point
    but it's not more than you can understand!
    work your way from the big picture down to the details
  here's some suggested steps for reading and understanding this code
  1. use the program without looking at the code
    get the big picture of what it does and how it works
  2. read the part of the program where the functions are used
    piece together the logic of the program, without all the details
  3. collapse all the functions and read their documentation
    how does each function behave? arguments? return value?
    compare the documentation to how the functions are used at the bottom
  4. open the function bodies and understand how they work
    step through them in the debugger
    try different inputs to see how they behave

*/
```

---

## Reverse-Engineering

- understand the _behavior_ of the target program. draw out user flow (program flowchart)
- plan your chunks
- implement one chunk at a time, from the beginning to the end
