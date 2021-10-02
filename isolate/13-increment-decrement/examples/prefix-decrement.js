'use strict';
console.log('-- begin --');

console.log('prefix decrement: --x');

/* two things happen when you use --x (in this order!)
  a. reassign x to it's current value minus 1
  b. return the value stored by x
*/

let x = -2;
// let x = -1;
// let x = 0;
// let x = 1;
// let x = 2;
console.log('initial x:', typeof x, x, '\n');

const _1_return = --x;
const _1_newX = x;
console.log('1. return:', typeof _1_return, _1_return);
console.log('1. new x:', typeof _1_newX, _1_newX, '\n');

const _2_return = --x;
const _2_newX = x;
console.log('2. return:', typeof _2_return, _2_return);
console.log('2. new x:', typeof _2_newX, _2_newX, '\n');

const _3_return = --x;
const _3_newX = x;
console.log('3. return:', typeof _3_return, _3_return);
console.log('3. new x:', typeof _3_newX, _3_newX, '\n');

const _4_return = --x;
const _4_newX = x;
console.log('4. return:', typeof _4_return, _4_return);
console.log('4. new x:', typeof _4_newX, _4_newX, '\n');

console.log('-- end --');
