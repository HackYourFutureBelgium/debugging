'use strict';

// casting to boolean is key to mastering JavaScript
//  it's the heart of TRUTHINESS, a key JS concept

const toCast1 = undefined;
const boolean1 = Boolean(toCast1);
console.log(1, typeof toCast1, toCast1, '-->', typeof boolean1, boolean1);

const toCast2 = null;
const boolean2 = Boolean(toCast2);
console.log(2, typeof toCast2, toCast2, '-->', typeof boolean2, boolean2);

const toCast3 = '';
const boolean3 = Boolean(toCast3);
console.log(3, typeof toCast3, toCast3, '-->', typeof boolean3, boolean3);

const toCast4 = '  ';
const boolean4 = Boolean(toCast4);
console.log(4, typeof toCast4, toCast4, '-->', typeof boolean4, boolean4);

const toCast5 = 'any other string';
const boolean5 = Boolean(toCast5);
console.log(5, typeof toCast5, toCast5, '-->', typeof boolean5, boolean5);

const toCast6 = 0;
const boolean6 = Boolean(toCast6);
console.log(6, typeof toCast6, toCast6, '-->', typeof boolean6, boolean6);

const toCast7 = -1;
const boolean7 = Boolean(toCast7);
console.log(7, typeof toCast7, toCast7, '-->', typeof boolean7, boolean7);

const toCast8 = 0.5;
const boolean8 = Boolean(toCast8);
console.log(8, typeof toCast8, toCast8, '-->', typeof boolean8, boolean8);

const toCast9 = -Infinity;
const boolean9 = Boolean(toCast9);
console.log(9, typeof toCast9, toCast9, '-->', typeof boolean9, boolean9);
