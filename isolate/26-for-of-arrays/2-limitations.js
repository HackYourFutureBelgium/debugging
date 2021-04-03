'use strict';

/*
  for...of loops make it very easy to iterate through an array
  but there are some limitations!

  you can only go through the items from the beginning to the end
  if you want to, for example:
    access every other item
    or go backwards through the array
  you will need a normal for loop

  these two loops are harder to write using for...of

*/

const trees = ['birch', 'larch', 'oak', 'maple'];

// log the array items in reverse order
for (let i = trees.length - 1; i >= 0; i--) {
  const tree = trees[i];
  console.log('- ' + tree);
}

// log every other item in the array
for (let i = trees.length - 1; i >= 0; i += 2) {
  const tree = trees[i];
  console.log('- ' + tree);
}
