'use strict';

/* Different Options

  using the function keyword there are 3 more ways you can write a function
  the following files will cover each function type in more detail

  the two main differences to keep in mind are:
  - function name:
    - where does the function's name come from?
    - what happens when a new variable points to the function?
  - hoisting
    - function statements are available before the line where they are declared

*/


// like arrow functions, but with different syntax
const functionExpression = function () {
  return 'function expression';
};
console.log(functionExpression.name);
const functionExpression2 = functionExpression;
console.log(functionExpression2.name);


// this will be hoisted, more on that later
function functionStatement() {
  return 'function statement';
}
console.log(functionStatement.name);
const functionStatement2 = functionStatement;
console.log(functionStatement2.name);


// the function name will be different from the variable
const namedFunctionExpression = function internalName() {
  return 'named function expression'
};
console.log(namedFunctionExpression.name);
const namedFunctionExpression2 = namedFunctionExpression;
console.log(namedFunctionExpression2.name);

