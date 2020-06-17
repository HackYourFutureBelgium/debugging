'use strict';

function mystery(x) {
  if (typeof x === 'boolean') { throw new TypeError('x cannot be a boolean'); }

  const booleaned = Boolean(x);
  const numbered = Number(booleaned);
  return numbered;
}

// write the expected return value

const returned1 = mystery(undefined);
const isTrue1 = returned1 === _;
console.assert(isTrue1, 'Test 1');

const returned2 = mystery(null);
const isTrue2 = returned2 === _;
console.assert(isTrue2, 'Test 2');

const returned3 = mystery('false');
const isTrue3 = returned3 === _;
console.assert(isTrue3, 'Test 3');

const returned4 = mystery('');
const isTrue4 = returned4 === _;
console.assert(isTrue4, 'Test 4');

const returned5 = mystery(0);
const isTrue5 = returned5 === _;
console.assert(isTrue5, 'Test 5');

const returned6 = mystery('  ');
const isTrue6 = returned6 === _;
console.assert(isTrue6, 'Test 6');

const returned7 = mystery(-1);
const isTrue7 = returned7 === _;
console.assert(isTrue7, 'Test 7');

const returned8 = mystery('true');
const isTrue8 = returned8 === _;
console.assert(isTrue8, 'Test 8');

const returned9 = mystery(1);
const isTrue9 = returned9 === _;
console.assert(isTrue9, 'Test 9');

