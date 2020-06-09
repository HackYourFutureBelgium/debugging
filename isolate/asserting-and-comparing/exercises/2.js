'use strict';

// replace the _ to pass the asserts

const comparison1 = 4 === '4';
const isTrue1 = comparison1 === _;
console.assert(isTrue1, 'Assertion 1');

const comparison2 = Infinity === 'Infinity';
const isTrue2 = comparison2 === _;
console.assert(isTrue2, 'Assertion 2');

const comparison3 = "x" === `x`;
const isTrue3 = comparison3 === _;
console.assert(isTrue3, 'Assertion 3');

const comparison4 = 'null' === _;
const isTrue4 = comparison4 === true;
console.assert(isTrue4, 'Assertion 4');

const comparison5 = 'null' === null;
const isTrue5 = comparison5 === _;
console.assert(isTrue5, 'Assertion 5');

const comparison6 = 0.0 === 0;
const isTrue6 = comparison6 === _;
console.assert(isTrue6, 'Assertion 6');

const comparison7 = null === undefined;
const isTrue7 = comparison7 === _;
console.assert(isTrue7, 'Assertion 7');

