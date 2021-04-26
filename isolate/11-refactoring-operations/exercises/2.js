'use strict';
console.log('-- begin --');

// same truthiness

const a = undefined;
const b = 0;

const result = Boolean(a) !== Boolean(b);
console.log(result);

{
  // 1. _
}


console.log('-- end --');