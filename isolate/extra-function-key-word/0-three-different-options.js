'use strict';

/* Different Options

  using the function keyword there are 3 more ways you can write a function
  the following files will cover each function type in more detail

  the two main differences to keep in mind are:
  - function name:
    - where does the function's name come from?
    - what happens to the name the function is assigned to a new variable?
    - what happens if a new variable is declared with the same name?
  - hoisting:
    - function statements are available before the line where they are declared

  here are some nice videos to help you find your way
  - Statements vs. Expressions: https://www.youtube.com/watch?v=WVyCrI1cHi8
  - Dev Material: https://www.youtube.com/watch?v=qz7Nq1tV7Io
  - Harry Wolf: https://www.youtube.com/watch?v=VAYIPSNXHhw
  - Codeacademy: https://www.youtube.com/watch?v=oB5rH_9bqAI

*/


// this is what you have seen so far
const arrowFunction = () => {

};

// the following examples are new

// like the arrow functions you've learned, just with different syntax
const functionExpression = function () {

};


// functionStatement is available like a global variable
// the variable name is like a let variable
// this will also be hoisted, more on that later
// (also called a function declaration)
function functionStatement() {

}

// internalName is only defined inside the function body
// otherwise this will behave like a function expression
const namedFunctionExpression = function internalName() {

};
