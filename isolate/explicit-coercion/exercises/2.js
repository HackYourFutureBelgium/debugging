'use strict';

function mystery(x) {
  if (typeof x === 'string') { throw new TypeError('x cannot be a string'); }

  const stringed = String(x);
  const numbered = Number(stringed);
  return numbered;
}

// find an argument to get the expected return value

const returned1 = mystery(_);
const isTrue1 = returned1 === -1;
console.assert(isTrue1, 'Test 1');

const returned2 = mystery(_);
const isTrue2 = returned2 === 0;
console.assert(isTrue2, 'Test 2');

const returned3 = mystery(_);
const isTrue3 = returned3 === 1;
console.assert(isTrue3, 'Test 3');

const returned4 = mystery(_);
const isTrue4 = returned4 === 0.5;
console.assert(isTrue4, 'Test 4');

const returned5 = mystery(_);
const isTrue5 = returned5 === 1000;
console.assert(isTrue5, 'Test 5');

const returned6 = mystery(_);
const isTrue6 = Number.isNaN(returned6);
console.assert(isTrue6, 'Test 6');

const returned7 = mystery(_);
const isTrue7 = Number.isNaN(returned7);
console.assert(isTrue7, 'Test 7');

const returned8 = mystery(_);
const isTrue8 = Number.isNaN(returned8);
console.assert(isTrue8, 'Test 8');

const returned9 = mystery(_);
const isTrue9 = Number.isNaN(returned9);
console.assert(isTrue9, 'Test 9');

