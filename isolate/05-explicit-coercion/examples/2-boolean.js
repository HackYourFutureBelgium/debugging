'use strict';

// casting to boolean is key to mastering JavaScript
//  it's the heart of TRUTHINESS, a key JS concept
// most values are truthy, meaning they coerce to true
// there are only a few falsy values: https://developer.mozilla.org/en-US/docs/Glossary/Falsy

const _1_toCast = undefined;
const _1_boolean = Boolean(_1_toCast);
console.log(
  1,
  typeof _1_toCast,
  _1_toCast,
  '->',
  typeof _1_boolean,
  _1_boolean
);

const _2_toCast = null;
const _2_boolean = Boolean(_2_toCast);
console.log(
  2,
  typeof _2_toCast,
  _2_toCast,
  '->',
  typeof _2_boolean,
  _2_boolean
);

const _3_toCast = '';
const _3_boolean = Boolean(_3_toCast);
console.log(
  3,
  typeof _3_toCast,
  _3_toCast,
  '->',
  typeof _3_boolean,
  _3_boolean
);

const _4_toCast = '  ';
const _4_boolean = Boolean(_4_toCast);
console.log(
  4,
  typeof _4_toCast,
  _4_toCast,
  '->',
  typeof _4_boolean,
  _4_boolean
);

const _5_toCast = 'any other string';
const _5_boolean = Boolean(_5_toCast);
console.log(
  5,
  typeof _5_toCast,
  _5_toCast,
  '->',
  typeof _5_boolean,
  _5_boolean
);

const _6_toCast = 0;
const _6_boolean = Boolean(_6_toCast);
console.log(
  6,
  typeof _6_toCast,
  _6_toCast,
  '->',
  typeof _6_boolean,
  _6_boolean
);

const _7_toCast = -1;
const _7_boolean = Boolean(_7_toCast);
console.log(
  7,
  typeof _7_toCast,
  _7_toCast,
  '->',
  typeof _7_boolean,
  _7_boolean
);

const _8_toCast = 0.5;
const _8_boolean = Boolean(_8_toCast);
console.log(
  8,
  typeof _8_toCast,
  _8_toCast,
  '->',
  typeof _8_boolean,
  _8_boolean
);

const _9_toCast = -Infinity;
const _9_boolean = Boolean(_9_toCast);
console.log(
  9,
  typeof _9_toCast,
  _9_toCast,
  '->',
  typeof _9_boolean,
  _9_boolean
);
