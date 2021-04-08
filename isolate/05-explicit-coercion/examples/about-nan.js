'use strict';

// NaN is a strange thing in JavaScript
//  if you are not careful about types in your programs ...
//  ... NaN will come to get you!

console.log('--- NaN does not equal NaN! ');
// this can make it tricky to check for NaN in your code

const isTrue = NaN !== NaN;
console.assert(isTrue, 'NaN is not equal to NaN');

const isFalse = NaN === NaN;
console.assert(isFalse, 'NaN is equal to NaN');

/* There are two common ways to test NaN values. First one is isNaN(),
 * and the second is Number.isNaN().
 * isNaN() method first converts any value provided to a number and then compares it with NaN.
 * Unlike the global isNaN(), second method Number.isNaN() doesn't forcefully convert
 * the parameter to a number. Only values of the type number, that are also NaN, result in true.
 */
console.log('--- Number.isNaN(x) returns true if a value is NaN ');
// this is the best practice for checking if a value is NaN

const numIsNan1 = Number.isNaN(NaN);
console.log(typeof numIsNan1, numIsNan1);

const numIsNan2 = Number.isNaN('asdf');
console.log(typeof numIsNan2, numIsNan2);

const numIsNan3 = Number.isNaN(undefined);
console.log(typeof numIsNan3, numIsNan3);

const numIsNan4 = Number.isNaN('4');
console.log(typeof numIsNan4, numIsNan4);

console.log(
  '--- isNaN(x) returns true if a the converted number value equals to NaN '
);
// isNaN() method first converts any value provided to a number
// and then checks if it is NaN.

const isNan1 = isNaN(NaN);
console.log(typeof isNan1, isNan1);

const isNan2 = isNaN('asdf');
console.log(typeof isNan2, isNan2);

const isNan3 = isNaN(undefined);
console.log(typeof isNan3, isNan3);

const isNan4 = isNaN('4');
console.log(typeof isNan4, isNan4);

console.log('--- isNaN is the same as Number() then Number.isNaN');

const numA = Number(NaN);
const isNanA = isNaN(numA);
console.log(typeof isNanA, isNanA);

const numB = Number('asdf');
const isNanB = isNaN(numB);
console.log(typeof isNanB, isNanB);

const numC = Number(undefined);
const isNanC = isNaN(numC);
console.log(typeof isNanC, isNanC);

const numD = Number('4');
const isNanD = isNaN(numD);
console.log(typeof isNanD, isNanD);
