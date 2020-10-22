'use strict';

/* `let` and Block Scope

  all of the rules you learned in the last example apply to `let` variables
  plus these new rules:

  3. `let variables declared outside of a block ...
    a. can be modified inside the block if they are not replaced
    b. cannot be modified inside the block if they are replaced

*/


// rule 3.a: modify outer `let` variables from inside the block

let food = 'broccoli';
console.assert(food === 'broccoli', 'outside the block: food should be "broccoli" 1');
{
  food = 'spinach';
  console.assert(food === 'spinach', 'inside the block: food should be "spinach"');
}
console.assert(food === 'broccoli', 'outside the block: food should be "broccoli" 2')


// rule 3.b: can not modify replaced outer variables from inside the block
//  this applies for replacing with `let` or `const`
let cloud = 'fluffy';
let dirt = 'tasty';
console.log(cloud, dirt);
{
  let cloud = 'rainy';
  const dirt = 'muddy';
  console.log(cloud, dirt);
}
console.log(cloud, dirt);
