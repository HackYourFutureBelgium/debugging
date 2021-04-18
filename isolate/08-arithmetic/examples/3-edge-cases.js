'use strict';

/* Arithmetic Edge Cases

  there are a few special cases to be aware of with JS arithmetic

  knowing these edge cases is more important for debugging your code
  you will rarely (or never) need to do these things on purpose

  but sometimes you'll see a NaN or Infinity show up in your program
  that's usually because you tried operating on bad values

  keep an eye out for these cases!

*/



/* NaN
  using NaN in an operation will make the result NaN
  careful, this is also true of values that coerce to NaN!
*/

const NaN_1 = NaN - 12;
const NaN_2 = 'e' * 1;
const NaN_3 = undefined / 18;


/* 0 / 0
  0 / 0 === NaN
  careful, this is also true of values that coerce to 0!
*/

const zeroDividedByZero_1 = 0 / 0;
const zeroDividedByZero_2 = false / null;
const zeroDividedByZero_3 = 0 / '0';
const zeroDividedByZero_4 = '0.0' / 0.0;


/* x / 0
  anything (except 0 or NaN) divided by 0 will give Infinity
  careful, this is also true of values that coerce to 0!
*/

const divideByZero_1 = 3 / 0;
const divideByZero_2 = -12 / false;
const divideByZero_3 = 100 / null;
const divideByZero_4 = 18 / '0';
// exceptions
const divideByZero_5 = NaN / 0;
const divideByZero_6 = 0 / 0;


/* 0 / x
  zero divided by anything (except NaN) is 0
  careful, this is also true of values that coerce to 0!
*/

const zeroDivided_1 = 0 / 12;
const zeroDivided_2 = 0 / true;
const zeroDivided_3 = 0 / '-12';
const zeroDivided_4 = 0 / Infinity;
// exception
const zeroDivided_5 = 0 / NaN;


/* Dividing by Infinity
  anything (except Infinity or NaN) divided by Infinity will give 0
  careful, this is also true of values that coerce to Infinity!
*/

const divideByInfinity_1 = 100 / Infinity;
const divideByInfinity_2 = 12.44 / -Infinity;
const divideByInfinity_3 = -12 / '-Infinity';
// exceptions
const divideByInfinity_4 = Infinity / Infinity;
const divideByInfinity_5 = NaN / Infinity;


/* And there's certainly more
  send a PR if you know of another good edge case!
*/
