'use strict';

/*

  the Temporal Dead Zone is a fancy way to say something pretty simple:
    the lines of code between the beginning of a block and a variable's declaration

  understanding TDZ doesn't change how you write your code
  but it will help understand what you see in the debugger and JS Tutor

  what it means is that block scoped variables exist from the beginning of the block
  but they are not initialized until the line where they are declared

  trying to use a variable in the TDZ (before it's declared) will cause an error
  even though you can see the variable as `undefined` in memory

*/

{
  console.log('you can already see `color` in memory');
  // but using it will throw an error
  // console.log(color); // ReferenceError

  let color = 'red';
  console.log(color);
}
