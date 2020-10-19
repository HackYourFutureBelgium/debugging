'use strict';


// almost the same as ===
//  it's different in these ways:

const strictEqualityZeros = -0 === +0;
const objectIsZeros = Object.is(-0, +0);
console.log('strictEqualityZeros:', typeof strictEqualityZeros, '\n', strictEqualityZeros);
console.log('objectIsZeros:', typeof objectIsZeros, '\n', objectIsZeros);

const strictEqualityNaN = NaN === NaN;
const objectIsNaN = Object.is(NaN, NaN);
console.log('strictEqualityNaN:', typeof strictEqualityNaN, '\n', strictEqualityNaN);
console.log('objectIsNaN:', typeof objectIsNaN, '\n', objectIsNaN);


// https://stackoverflow.com/questions/30543190/object-is-vs
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is

