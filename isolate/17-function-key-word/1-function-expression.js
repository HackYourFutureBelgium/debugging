'use strict';

/* Function Expressions

  function expressions are what you have been using without knowing it
    declaring a variable and assigning it to a function

  to use the function keyword in a function expression
  just replace the arrow function with a function function!

  a function expression's name comes from the variable it's first assigned to


  - Statements vs. Expressions: https://www.youtube.com/watch?v=WVyCrI1cHi8

*/


// this function has been given the name functionExpression
let functionExpression = function () {

};
console.log(functionExpression.name);

// both variables store the same function
// so the name is the same
const functionExpression2 = functionExpression;
console.log(functionExpression2.name);

// even after the first variable has been changed
functionExpression = null;
console.log(functionExpression2.name);
