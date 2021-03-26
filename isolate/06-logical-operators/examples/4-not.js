'use strict';

/* !
  the not operator does evaluate to true or false
  - if the value is truthy, it returns false
  - if the value is falsy, it returns true
*/

const not1 = !0;
console.log(typeof not1, not1);

const not2 = !false;
console.log(typeof not2, not2);

const not3 = !undefined;
console.log(typeof not3, not3);

const not4 = !null;
console.log(typeof not4, not4);

const not5 = !'';
console.log(typeof not5, not5);

const not6 = !NaN;
console.log(typeof not6, not6);

const not7 = !'fdsa';
console.log(typeof not7, not7);

const not8 = !'true';
console.log(typeof not8, not8);

const not9 = !1;
console.log(typeof not9, not9);
