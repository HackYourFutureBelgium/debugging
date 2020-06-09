'use strict';

// PS. study this in JS Tutor!

// RETURN VALUES allow you to send values from functions to global scope
function findTheType(param) {
  return typeof param;
  console.log('nothing after a return statement is executed!');
}

// to save return values for later, assign them to a variable
const returned1 = findTheType(4.0);
const isTrue1 = returned1 === 'number';
console.assert(isTrue1, 'Assertion 1');

const returned2 = findTheType('4.0');
const isTrue2 = returned2 === 'string';
console.assert(isTrue2, 'Assertion 2');

const arg3 = null;
const returned3 = findTheType(arg3);
const isTrue3 = returned3 === 'object';
console.assert(isTrue3, 'Assertion 3');

const arg4 = undefined;
const returned4 = findTheType(arg4);
const isTrue4 = returned4 === 'undefined';
console.assert(isTrue4, 'Assertion 4');

const returned5 = findTheType();
const isTrue5 = returned5 === 'undefined';
console.assert(isTrue5, 'Assertion 5');
