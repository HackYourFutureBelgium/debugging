'use strict';


/* Function Statements and Hoisting

  function statements get their name from whatever you type after 'function'

  Study this example in JS Tutor, hoisting will be much more clear
  notice how the function exists in memory before step 1 has executed?

  some helpful links
  - Vishal: https://www.youtube.com/watch?v=ZmTNfVYlcOE
  - Dani: https://www.youtube.com/watch?v=ppMlvGMT2qE
  - Beau: https://www.youtube.com/watch?v=C1PZh_ea-7I
  - All Things JS: https://www.youtube.com/watch?v=a9nJeJV32oE
  - Erik: https://www.youtube.com/watch?v=HOIu3owCcZs

*/


// the function can be before where it is declared
//  this is because of hoisting
functionStatement();
console.log(functionStatement.name);


function functionStatement() {
  console.log('hello');
}


functionStatement();
console.log(functionStatement.name);

// function statements create a new variable, without using let or const (or var)
//  trying to declare a new variable with the same name will cause an error
const functionStatement;

