'use strict';

// write a function that behaves the same as ||
//  ... without using ||
function or(left, right) {

}

const or1 = or(0, 0);
const isTrue1 = or1 === 0;
console.assert(isTrue1, 'Test 1');

const or2 = or(1, 0);
const isTrue2 = or2 === 1;
console.assert(isTrue2, 'Test 2');

const or3 = or(0, 1);
const isTrue3 = or3 === 1;
console.assert(isTrue3, 'Test 3');

const or4 = or(1, 1);
const isTrue4 = or4 === 1;
console.assert(isTrue4, 'Test 4');

const or5 = or('', 'asdf');
const isTrue5 = or5 === 'asdf';
console.assert(isTrue5, 'Test 5');

const or6 = or('asdf', '');
const isTrue6 = or6 === 'asdf';
console.assert(isTrue6, 'Test 6');

const or7 = or(true, false);
const isTrue7 = or7 === true;
console.assert(isTrue7, 'Test 7');

const or8 = or(NaN, undefined);
const isTrue8 = or8 === undefined;
console.assert(isTrue8, 'Test 8');

const or9 = or(Infinity, 'asdf');
const isTrue9 = or9 === Infinity;
console.assert(isTrue9, 'Test 9');
