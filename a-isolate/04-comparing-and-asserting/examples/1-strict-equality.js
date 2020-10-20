'use strict';

// ===, this operator will always evaluate to a boolean
//  true: if the type & value are the same
//  false: if either the type or value are different

// if two values are the same, === evaluates to true:
console.log('-- true comparisons --');

const isTrue1 = true === true;
console.log(typeof isTrue1, isTrue1);

const isTrue2 = null === null;
console.log(typeof isTrue2, isTrue2);

const isTrue3 = '4' === '4';
console.log(typeof isTrue3, isTrue3);


// if two values are the same, === evalutes to true:
console.log('-- false comparisons --');

// if they are not, it evaluates to false
const isFalse1 = true === false;
console.log(typeof isFalse1, isFalse1);

const isFalse2 = '4' === 4;
console.log(typeof isFalse2, isFalse2);

const isFalse3 = 4 === 4.1;
console.log(typeof isFalse3, isFalse3);



// NaN is a strange and special value in JavaScript
//  it does not equal itself!
console.log('-- NaN is weird --');

const huh = NaN === NaN;
console.log(typeof huh, huh);

