'use strict';

// this file shows the final line of code, with all tests passing

// declare & assign variables
let a = 'y';
let b = 'x';
let temp;

// swap the values stored by a and b ...

// 1: store a's value for later
temp = a;
// 2: assign b's value to a
a = b;
// 3: assign the saved value to b
b = temp;

// assert expected values

const testingA = a === 'x';
console.assert(testingA, 'a should store "x"');

const testingB = b === 'y';
console.assert(testingB, 'b should store "y"');

const testingTemp = temp === 'y';
console.assert(testingTemp, 'temp should store "y"');
