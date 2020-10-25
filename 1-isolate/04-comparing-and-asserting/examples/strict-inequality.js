'use strict';

// !==, this operator will always evaluate to a boolean
//  false: if the type & value are the same
//  true: if either the type or value are different

// if two values are the same, !== evaluates to true:
console.log('-- false comparisons --');

const isFalse1 = true !== true;
console.log(typeof isFalse1, isFalse1);

const isFalse2 = null !== null;
console.log(typeof isFalse2, isFalse2);

const isFalse3 = '4' !== '4';
console.log(typeof isFalse3, isFalse3);

const isFalse4 = 'Case Sensitive' !== 'cASE sENSITIVE';
console.log(typeof isFalse4, isFalse4);



// if two values are the same, !== evaluates to true:
console.log('-- true comparisons --');

// if they are not, it evaluates to false
const isTrue1 = true !== false;
console.log(typeof isTrue1, isTrue1);

const isTrue2 = '4' !== 4;
console.log(typeof isTrue2, isTrue2);

const isTrue3 = 4 !== 4.1;
console.log(typeof isTrue3, isTrue3);



// NaN is a strange and special value in JavaScript
//  it does not equal itself!
console.log('-- NaN is weird --');

const huh = NaN !== NaN;
console.log(typeof huh, huh);

