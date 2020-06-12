'use strict';

/* write a function to pass the test cases
  it can be solved using only
   Number
   ===
*/
function mystery(x, y) {
  // write some code!
}

// all of the test cases are correct

const returned1 = mystery('', '');
const isTrue1 = returned1 === true;
console.assert(isTrue1, 'Test 1');

const returned2 = mystery(false, null);
const isTrue2 = returned2 === true;
console.assert(isTrue2, 'Test 2');

const returned3 = mystery('asdf', 'asdf');
const isTrue3 = returned3 === false;
console.assert(isTrue3, 'Test 3');

const returned4 = mystery('1.0', '1');
const isTrue4 = returned4 === true;
console.assert(isTrue4, 'Test 4');

const returned5 = mystery(false, true);
const isTrue5 = returned5 === false;
console.assert(isTrue5, 'Test 5');

const returned6 = mystery('1.5', '1');
const isTrue6 = returned6 === false;
console.assert(isTrue6, 'Test 6');

const returned7 = mystery('1e3', '1000');
const isTrue7 = returned7 === true;
console.assert(isTrue7, 'Test 7');

const returned8 = mystery(false, '');
const isTrue8 = returned8 === true;
console.assert(isTrue8, 'Test 8');

const returned9 = mystery(undefined, undefined);
const isTrue9 = returned9 === false;
console.assert(isTrue9, 'Test 9');

