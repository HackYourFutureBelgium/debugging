'use strict';

// write a function that behaves the same as ? :
//  ... without using ? :
function ternary(condition, first, second) {

}

const ternary1 = ternary(1, 'A', 'B');
const isTrue1 = ternary1 === 'A';
console.assert(isTrue1, 'Test 1');

const ternary2 = ternary('non-empty strings', 1, 2);
const isTrue2 = ternary2 === 1;
console.assert(isTrue2, 'Test 2');

const ternary3 = ternary(true, 'x', 'y');
const isTrue3 = ternary3 === 'x';
console.assert(isTrue3, 'Test 3');

const ternary4 = ternary(undefined, 'hi!', 'bye.');
const isTrue4 = ternary4 === 'bye.';
console.assert(isTrue4, 'Test 4');

const ternary5 = ternary(null, false, true);
const isTrue5 = ternary5 === true;
console.assert(isTrue5, 'Test 5');

const ternary6 = ternary(false, 1, 1);
const isTrue6 = ternary6 === 1;
console.assert(isTrue6, 'Test 6');

const ternary7 = ternary(0, Infinity, -Infinity);
const isTrue7 = ternary7 === -Infinity;
console.assert(isTrue7, 'Test 7');

const ternary8 = ternary('', '', null);
const isTrue8 = ternary8 === null;
console.assert(isTrue8, 'Test 8');

const ternary9 = ternary(NaN, 'A', 'B');
const isTrue9 = ternary9 === 'B';
console.assert(isTrue9, 'Test 9');
