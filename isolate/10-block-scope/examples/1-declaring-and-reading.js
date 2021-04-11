'use strict';

/*

  3 rules about declaring and reading variables in block scope

  these rules work the same for `let` and `const`

*/

{
  // 1. variables declared outside of a block are available inside the block

  const tree = 'oak';
  console.log('1 a. ', tree); // oak
  {
    console.log('1 b. ', tree); // oak
  }
  console.log('1 c. ', tree); // oak
}

{
  // 2. variables declared inside a block are not available outside the block

  // tree; // ReferenceError
  {
    const tree = 'maple';
    console.log('2. ', tree); // maple
  }
  // tree; // ReferenceError
}

{
  // 3. an inner variable with the same name as an outer variable will "replace" the outer variable
  //  this is called "shadowing", and it makes your code harder to understand. don't do it

  const tree = 'oak';
  console.log('3 a. ', tree); // oak
  {
    const tree = 'maple';
    console.log('3 b. ', tree); // maple
  }
  console.log('3 c. ', tree); // oak
}
