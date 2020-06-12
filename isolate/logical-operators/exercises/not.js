'use strict';

// write a function that behaves the same as !
//  ... but doesn't use !
function not(value) {

}

const not1 = !0;
const isTrue1 = not1 === _;
console.assert(isTrue1, 'Test 1');

const not2 = !false;
const isTrue2 = not2 === _;
console.assert(isTrue2, 'Test 2');

const not3 = !undefined;
const isTrue3 = not3 === _;
console.assert(isTrue3, 'Test 3');

const not4 = !null;
const isTrue4 = not4 === _;
console.assert(isTrue4, 'Test 4');

const not5 = !'';
const isTrue5 = not5 === _;
console.assert(isTrue5, 'Test 5');

const not6 = !NaN;
const isTrue6 = not6 === _;
console.assert(isTrue6, 'Test 6');

const not7 = !'fdsa';
const isTrue7 = not7 === _;
console.assert(isTrue7, 'Test 7');

const not8 = !'true';
const isTrue8 = not8 === _;
console.assert(isTrue8, 'Test 8');

const not9 = !1;
const isTrue9 = not9 === _;
console.assert(isTrue9, 'Test 9');
