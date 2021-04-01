'use strict';

/*

  2 rules about assigning variables new values in block scope

  these rules only apply to `let`

  reassigning `const` will still throw an error
    no matter where it was declared
    no matter where it is assigned

*/

{
  // 1: reassigning an outer `let` variable inside a block also modified it outside

  let food = 'broccoli';
  console.log('1 a.', food); // broccoli
  {
    food = 'spinach';
    console.log('1 b.', food); // spinach
  }
  console.log('1 c.', food); // spinach
}

{
  // 2: reassigning a shadowed `let` variable does not modify the outer variable

  let food = 'cheese';
  console.log('2 a.', food); // cheese
  {
    let food = 'eggs';
    console.log('2 b.', food); // eggs

    food = 'milk';
    console.log('2 c.', food); // milk
  }
  console.log('2 d.', food); // cheese
}
