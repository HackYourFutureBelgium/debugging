'use strict';

/* truthiness is simple to test
  Does a value cast to true or to false?
*/

function classify(x) {
  const castToBoolean = Boolean(x);
  const isTrue = castToBoolean === true;
  return isTrue ? 'truthy' : 'falsy';
}

console.log('--- there are fewer falsy values than truthy values');
// all falsy values: https://developer.mozilla.org/en-US/docs/Glossary/Falsy

const value1 = false;
const truthiness1 = classify(value1);
console.log(truthiness1, typeof value1, value1);

const value2 = '';
const truthiness2 = classify(value2);
console.log(truthiness2, typeof value2, value2);

const value3 = NaN;
const truthiness3 = classify(value3);
console.log(truthiness3, typeof value3, value3);

const value4 = 0;
const truthiness4 = classify(value4);
console.log(truthiness4, typeof value4, value4);

const value5 = null;
const truthiness5 = classify(value5);
console.log(truthiness5, typeof value5, value5);

const value6 = undefined;
const truthiness6 = classify(value6);
console.log(truthiness6, typeof value6, value6);

console.log('--- any other value is truthy');

const value7 = ' ';
const truthiness7 = classify(value7);
console.log(truthiness7, typeof value7, value7);

const value8 = 'any other string';
const truthiness8 = classify(value8);
console.log(truthiness8, typeof value8, value8);

const value9 = -1; // any other number
const truthiness9 = classify(value9);
console.log(truthiness9, typeof value9, value9);


