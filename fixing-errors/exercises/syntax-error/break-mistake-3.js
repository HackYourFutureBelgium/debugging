'use strict';

/*
  environment:

  name:
  message:

  callstack:

  life cycle:

  the mistake:

  the fix(es):
*/

let iterations = 0;

while (true) {
  iterations += 1;

  if (iterations > 8) {
    return;
  }
}

console.assert(iterations === 9);
