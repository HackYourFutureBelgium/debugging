const mystery = (a, b) => {
  let result = '';
  if (typeof a === 'number') {
    if (typeof b === 'number') {
      result = 'path 1';
    } else {
      result = 'path 2';
    }
  } else {
    if (typeof a === typeof b) {
      result = 'path 3';
    } else {
      result = 'path 4';
    }
  }
  return result;
};

// path 1
const _1_expect = 'path 1';
const _1_actual = mystery(0, null);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'path 1';
const _2_actual = mystery(false, 'hello');
console.assert(_2_actual === _2_expect, 'Test 2');

// path 2
const _3_expect = 'path 2';
const _3_actual = mystery(true, undefined);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'path 2';
const _4_actual = mystery(1, -1);
console.assert(_4_actual === _4_expect, 'Test 4');

// path 3
const _5_expect = 'path 3';
const _5_actual = mystery('', '');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'path 3';
const _6_actual = mystery('_6_expect', '_6_actual');
console.assert(_6_actual === _6_expect, 'Test 6');

// path 4
const _7_expect = 'path 4';
const _7_actual = mystery(0, 12);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 'path 4';
const _8_actual = mystery(null, undefined);
console.assert(_8_actual === _8_expect, 'Test 8');
