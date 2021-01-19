"use strict";

/* Named Function Expressions

  put it all together and you get named function expressions

*/

// this function gets it's name from after the function keyword
// the variable does not change the name at all!
let namedFunctionExpression = function internalName() {
  console.log(internalName);
};

// internalName is defined inside of the function
//  it will refer to the function itself
// but internalName not availabe in the global scope
namedFunctionExpression();
try {
  console.log(internalName);
} catch (err) {
  console.log(err.name + ": " + err.message);
}

// the function's name will come from after the function key word
// both variables store the same function
// so the name is the same
console.log(namedFunctionExpression.name);
const namedFunctionExpression2 = namedFunctionExpression;
console.log(namedFunctionExpression2.name);


// the internal function name is not a global variable
// you can declare a new variable with the same name
// nothing will break
const internalName = "hello :)";
console.log(internalName);
console.log(namedFunctionExpression.name);
namedFunctionExpression();
