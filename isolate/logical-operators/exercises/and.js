'use strict';

// write a function that behaves the same as &&
//  ... without using &&
function and(left, right) {

}

const and1 = and(0, 0);
const isTrue1 = and1 === 0;
console.assert(isTrue1, 'Test 1');

const and2 = and(1, 0);
const isTrue2 = and2 === 0;
console.assert(isTrue2, 'Test 2');

const and3 = and(0, 1);
const isTrue3 = and3 === 0;
console.assert(isTrue3, 'Test 3');

const and4 = and(1, 1);
const isTrue4 = and4 === 1;
console.assert(isTrue4, 'Test 4');

const and5 = and('', 'asdf');
const isTrue5 = and5 === '';
console.assert(isTrue5, 'Test 5');

const and6 = and('asdf', '');
const isTrue6 = and6 === '';
console.assert(isTrue6, 'Test 6');

const and7 = and(true, false);
const isTrue7 = and7 === false;
console.assert(isTrue7, 'Test 7');

const and8 = and(NaN, undefined);
const isTrue8 = Number.isNaN(and8);
console.assert(isTrue8, 'Test 8');

const and9 = and(Infinity, 'asdf');
const isTrue9 = and9 === 'asdf';
console.assert(isTrue9, 'Test 9');
