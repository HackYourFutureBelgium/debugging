'use strict';

/*
  the `for...of` loop is a simple syntax for iterating a string one character at a time
  you just declare a variable in the loop head and it works!

  the new variable will be block scoped inside the loop
*/

const color = 'red';

// for...of with `const`

for (const character of color) {
  console.log(character);
  // character = 'hello!'; // will throw an error
}

// for...of with `let`

for (let character of color) {
  console.log(character);
  character = 'hello!'; // no error
  console.log(character);
}
