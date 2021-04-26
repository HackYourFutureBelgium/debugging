'use strict';
console.log('-- begin --');

let x = 0;

let y = ++x;
console.assert(x === _, 'Test 1 x');
console.assert(y === _, 'Test 1 y');

x = y--;
console.assert(x === _, 'Test 2 x');
console.assert(y === _, 'Test 2 y');

let z = x++;
console.assert(x === _, 'Test 3 x');
console.assert(y === _, 'Test 3 y');
console.assert(z === _, 'Test 3 z');

y = --x;
console.assert(x === _, 'Test 4 x');
console.assert(y === _, 'Test 4 y');
console.assert(z === _, 'Test 4 z');


console.log('-- end --');