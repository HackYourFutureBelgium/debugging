'use strict';
console.log('-- begin --');

// are there any unreachable paths?

const value1 = true;
const value2 = true;
let path = '';

if (value1 && !value2) {
  path = 'if';
} else if (!value1 || !value2) {
  path = 'else if 1';
} else if (value2 && !value1) {
  path = 'else if 2';
} else {
  path = 'else';
}

console.assert(path === _);


console.log('-- end --');