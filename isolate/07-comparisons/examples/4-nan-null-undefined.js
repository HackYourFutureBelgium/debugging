'use strict';

/* Comparing `NaN`, `null` & `undefined`

  `null` & `undefined` will be cast to numbers, then the numbers are compared
    Number(null) --> 0
    Number(undefined) --> NaN

  `NaN` compared with anything always returns false

*/


// null

// equivalent to writing: 0 <= 1
const _null_implicit = null <= 1;
const _null_explicit = Number(null) <= 1;
console.log('_null_implicit:', typeof _null_implicit, _null_implicit);
console.log('_null_explicit:', typeof _null_explicit, _null_explicit);


// undefined

// equivalent to writing: NaN > -3
const _undefined_implicit = undefined <= -3;
const _undefined_explicit = Number(undefined) <= -3;
console.log('_undefined_implicit:', typeof _undefined_implicit, _undefined_implicit);
console.log('_undefined_explicit:', typeof _undefined_explicit, _undefined_explicit);


// NaN is already type 'number', so there is no implicit coercion
// just lots of falses
console.log(NaN > 1000);
console.log(NaN < 1000);
console.log(NaN >= Infinity);
console.log(NaN <= Infinity);
console.log(NaN > NaN);
console.log(NaN < NaN);
console.log(NaN >= 'hello');
console.log(NaN <= 'good bye');
console.log(NaN < false);
console.log(NaN < true);
