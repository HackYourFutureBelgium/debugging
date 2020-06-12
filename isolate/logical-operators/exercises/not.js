'use strict';

// write a function that behaves the same as !
//  ... but doesn't use !
function not(value) {

}

const not1 = not(0);
const isTrue1 = not1 === true;
console.assert(isTrue1, 'Test 1');

const not2 = not(false);
const isTrue2 = not2 === true;
console.assert(isTrue2, 'Test 2');

const not3 = not(undefined);
const isTrue3 = not3 === true;
console.assert(isTrue3, 'Test 3');

const not4 = not(null);
const isTrue4 = not4 === true;
console.assert(isTrue4, 'Test 4');

const not5 = not('');
const isTrue5 = not5 === true;
console.assert(isTrue5, 'Test 5');

const not6 = not(NaN);
const isTrue6 = not6 === true;
console.assert(isTrue6, 'Test 6');

const not7 = not('fdsa');
const isTrue7 = not7 === false;
console.assert(isTrue7, 'Test 7');

const not8 = not('true');
const isTrue8 = not8 === false;
console.assert(isTrue8, 'Test 8');

const not9 = not(1);
const isTrue9 = not9 === false;
console.assert(isTrue9, 'Test 9');
