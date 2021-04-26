'use strict';
console.log('-- begin --');

// there may be more than one correct answer
//  try finding as many as you can
//  what do all the solutions have in common?
// or maybe the asserted path is unreachable!

const value1 = 100;
const value2 = '100';
let path = '';

if (value1 === value2) {
  path = 'if';
} else if (typeof value1 === typeof value2) {
  path = 'else if 1';
} else if (Number(value1) === Number(value2)) {
  path = 'else if 2';
}

console.assert(path === _);


console.log('-- end --');