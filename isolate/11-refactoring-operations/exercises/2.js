'use strict';

// same truthiness

const a = undefined;
const b = 0;

const result = Boolean(a) !== Boolean(b);
console.log(result);

{
  // 1. _
}
