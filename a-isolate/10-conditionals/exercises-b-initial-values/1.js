'use strict';

// there may be more than one correct answer
// or maybe the asserted path is unreachable!

const value1 = _;
const value2 = _;
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

console.assert(path === 'else if 2');
