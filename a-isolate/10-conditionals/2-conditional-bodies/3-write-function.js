/* pro tip: incremental development!
  try passing all tests for path 1, then for path 2, then for path 3
  don't move on to the next 3 tests until you've finished the path you're working on
*/

const mystery = (a, b) => {
  let result = '';
  if (typeof a === typeof b) {
    result = _;
  } else if (Boolean(a) === Boolean(b)) {
    result = _;
  } else {
    result = _;
  }
  return result;
};

// path 1
const _1_expect = '12';
const _1_actual = mystery('12', 'bye');
console.assert(Object.is(_1_actual, _1_expect), 'Test 1');

const _2_expect = false;
const _2_actual = mystery(false, true);
console.assert(Object.is(_2_actual, _2_expect), 'Test 2');

const _3_expect = 100;
const _3_actual = mystery(100, 200);
console.assert(Object.is(_3_actual, _3_expect), 'Test 3');

// path 2
const _4_expect = null;
const _4_actual = mystery(NaN, null);
console.assert(Object.is(_4_actual, _4_expect), 'Test 4');

const _5_expect = 12;
const _5_actual = mystery(true, 12);
console.assert(Object.is(_5_actual, _5_expect), 'Test 5');

const _6_expect = 'bye';
const _6_actual = mystery(-2, 'bye');
console.assert(Object.is(_6_actual, _6_expect), 'Test 6');

// path 3
const _7_expect = 1;
const _7_actual = mystery(null, 1);
console.assert(Object.is(_7_actual, _7_expect), 'Test 7');

const _8_expect = true;
const _8_actual = mystery('', true);
console.assert(Object.is(_8_actual, _8_expect), 'Test 8');

const _9_expect = 'asdf';
const _9_actual = mystery('asdf', 0);
console.assert(Object.is(_9_actual, _9_expect), 'Test 9');
