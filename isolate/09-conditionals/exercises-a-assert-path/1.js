'use strict';

// are there any unreachable paths?

const value1 = true;
const value2 = false;
let path = '';

if (value1 && !value2) {
  path = 'if';

} else if (!value1 || !value2) {
  path = 'else if';
}

console.assert(path === _);
