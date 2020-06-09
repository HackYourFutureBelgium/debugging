'use strict';

// casting to number is the most complicated coercion
//  but it's understandable!  you'll just need to learn a few rules

const toCast1 = undefined;
const number1 = Number(toCast1);
console.log(1, typeof toCast1, toCast1, '-->', typeof number1, number1);

const toCast2 = null;
const number2 = Number(toCast2);
console.log(2, typeof toCast2, toCast2, '-->', typeof number2, number2);

const toCast3 = true;
const number3 = Number(toCast3);
console.log(3, typeof toCast3, toCast3, '-->', typeof number3, number3);

const toCast4 = false;
const number4 = Number(toCast4);
console.log(4, typeof toCast4, toCast4, '-->', typeof number4, number4);

const toCast5 = '';
const number5 = Number(toCast5);
console.log(5, typeof toCast5, toCast5, '-->', typeof number5, number5);

const toCast6 = '   ';
const number6 = Number(toCast6);
console.log(6, typeof toCast6, toCast6, '-->', typeof number6, number6);

const toCast7 = '12.3';
const number7 = Number(toCast7);
console.log(7, typeof toCast7, toCast7, '-->', typeof number7, number7);

const toCast8 = '-0.0';
const number8 = Number(toCast8);
console.log(8, typeof toCast8, toCast8, '-->', typeof number8, number8);

const toCast9 = 'four';
const number9 = Number(toCast9);
console.log(9, typeof toCast9, toCast9, '-->', typeof number9, number9);
