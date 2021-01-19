'use strict';

/*
  browser:

  name:
  message:

  callstack:

  the mistake:
  the fix(es):
*/

const addedTowNumbers = 3 + 4;

const addTowNumbers = (x = 0, y = 0) => {
  return x + y;
};
const seven = addedTowNumbers(3, 4);

console.assert(seven === addedTowNumbers);
