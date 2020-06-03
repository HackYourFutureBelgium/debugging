// const is short for "constant".  a variable that never changes


// const variables cannot be declared without assigning a value
// this will throw a creation-phase error
//  Missing initializer in const declaration
const constantVariable1;
console.log(constantVariable1);

// const variables also cannot be assigned
// this will throw an execution-phase error
//  Assignment to constant variable
const constantVariable2 = 'constant value';
constantVariable2 = 'new value';
console.log(constantVariable2);

// all of these things are possible with let
let letVariable1 = 'value 1';
console.log(letVariable1);

letVariable1 = 'value 2';
console.log(letVariable1);

let letVariable2;
console.log(letVariable2);

/*
  the exercises in the following slides will use let to reassign values
  this is to help you understand how variables work in memory.

  when writing your own code, it is best to always use const.
  it will take some practice to write code like this, but is worth it.
  programs with only const are easier to understand and debug
*/
