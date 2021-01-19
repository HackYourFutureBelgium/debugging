'use strict';

/* truthiness is whether a value coerces to `true` or `false
  truthiness is simple to test, just cast the value with Boolean
  and log the result, did the value cast to true or to false?
*/

console.log('--- there are fewer falsy values than truthy values');
// all falsy values: https://developer.mozilla.org/en-US/docs/Glossary/Falsy

const value1 = false;
const truthiness1 = Boolean(value1);
console.log(typeof value1, value1, '->', truthiness1);

const value2 = '';
const truthiness2 = Boolean(value2);
console.log(typeof value2, value2, '->', truthiness2);

const value3 = NaN;
const truthiness3 = Boolean(value3);
console.log(typeof value3, value3, '->', truthiness3);

const value4 = 0;
const truthiness4 = Boolean(value4);
console.log(typeof value4, value4, '->', truthiness4);

const value5 = null;
const truthiness5 = Boolean(value5);
console.log(typeof value5, value5, '->', truthiness5);

const value6 = undefined;
const truthiness6 = Boolean(value6);
console.log(typeof value6, value6, '->', truthiness6);

console.log('--- any other value is truthy');

const value7 = ' ';
const truthiness7 = Boolean(value7);
console.log(typeof value7, value7, '->', truthiness7);

const value8 = 'any other string';
const truthiness8 = Boolean(value8);
console.log(typeof value8, value8, '->', truthiness8);

const value9 = -1; // any other number
const truthiness9 = Boolean(value9);
console.log(typeof value9, value9, '->', truthiness9);


