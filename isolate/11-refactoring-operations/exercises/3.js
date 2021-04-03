'use strict';

// cast to the same number
//  remember: Object.is returns true when it compares NaN and NaN
//  for this exercise, two values are the same number if they both become NaN

const a = 'four';
const b = undefined;

const result = Object.is(Number(a), Number(b));
console.log(result);

{
  // 1. _
}
