'use strict';
console.log('-- begin --');

/* +

  The plus operator is special in JavaScript

  it's behavior can be tricky to understand
  and can lead to surprise bugs in your code

  to keep things simple for now, focus just on primitive types

  understanding how + works with primitive values is not so bad:

  if either value is a string
    cast both values to a string
    concatenate the two strings

  else
    convert both values to numbers
    add the numbers together

*/

// try different values to see what happens
let a = _;
let b = _;

const realPlus = a + b;

let fakePlus;

if (typeof a === 'string' || typeof b === 'string') {
  const aStr = String(a);
  const bStr = String(b);
  fakePlus = aStr + bStr;
} else {
  const aNum = Number(a);
  const bNum = Number(b);
  fakePlus = aNum + bNum;
}

console.assert(
  realPlus === fakePlus,
  'fakePlus and realPlus will always be the same'
);


console.log('-- end --');