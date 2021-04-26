'use strict';
console.log('-- begin --');

// are there any unreachable paths?

const value1 = 100;
const value2 = -100;
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