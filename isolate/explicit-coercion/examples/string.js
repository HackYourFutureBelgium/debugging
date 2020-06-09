'use strict';

// casting to string is the simplest coercion
//  it's (almost ;) as simple as putting quotes around the previous value

const toCast1 = undefined;
const string1 = String(toCast1);
console.log(1, typeof toCast1, toCast1, '-->', typeof string1, string1);

const toCast2 = null;
const string2 = String(toCast2);
console.log(2, typeof toCast2, toCast2, '-->', typeof string2, string2);

const toCast3 = true;
const string3 = String(toCast3);
console.log(3, typeof toCast3, toCast3, '-->', typeof string3, string3);

const toCast4 = false;
const string4 = String(toCast4);
console.log(4, typeof toCast4, toCast4, '-->', typeof string4, string4);

const toCast5 = 3;
const string5 = String(toCast5);
console.log(5, typeof toCast5, toCast5, '-->', typeof string5, string5);

const toCast6 = 1.0;
const string6 = String(toCast6);
console.log(6, typeof toCast6, toCast6, '-->', typeof string6, string6);

const toCast7 = -2;
const string7 = String(toCast7);
console.log(7, typeof toCast7, toCast7, '-->', typeof string7, string7);

const toCast8 = 12.3;
const string8 = String(toCast8);
console.log(8, typeof toCast8, toCast8, '-->', typeof string8, string8);

const toCast9 = NaN;
const string9 = String(toCast9);
console.log(9, typeof toCast9, toCast9, '-->', typeof string9, string9);
