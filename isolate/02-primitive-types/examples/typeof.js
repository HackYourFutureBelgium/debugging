'use strict';

// there are 5 main primitive types in JavaScript
// the typeof operator will tell you what type a value is

// types are one of the most foundational concepts in programming
//  it's a good practice to log the type and the value
//  this will help you catch your mistakes
//  and help you build a better understanding of JS

const stringValue = '';
console.log(typeof stringValue, stringValue);

const numberValue = 0;
console.log(typeof numberValue, numberValue);

const booleanValue = false;
console.log(typeof booleanValue, booleanValue);

const undefinedValue = undefined;
console.log(typeof undefinedValue, undefinedValue);

const nullValue = null;
console.log(typeof nullValue, nullValue);

// typeof will always evaluate to a string
//  this means the typeof any type is "string"

const typeofTypeofNumber = typeof typeof 1;
console.log(typeof typeofTypeofNumber, typeofTypeofNumber);

const typeofTypeofBoolean = typeof typeof true;
console.log(typeof typeofTypeofBoolean, typeofTypeofBoolean);

const typeofTypeofString = typeof typeof 'hi';
console.log(typeof typeofTypeofString, typeofTypeofString);

const typeofTypeofUndefined = typeof typeof undefined;
console.log(typeof typeofTypeofUndefined, typeofTypeofUndefined);

const typeofTypeofNull = typeof typeof null;
console.log(typeof typeofTypeofNull, typeofTypeofNull);
