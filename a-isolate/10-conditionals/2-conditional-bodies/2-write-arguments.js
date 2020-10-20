const mystery = (a) => {
  let result = '';
  if (typeof a === 'boolean') {
    result = !a;
  } else if (a) {
    result = String(a);
  } else {
    result = a;
  }
  return result;
};


const _1_expect = 0;
const _1_actual = mystery(_);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = false;
const _2_actual = mystery(_);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = '12';
const _3_actual = mystery(_);
console.assert(_3_actual === _3_expect, 'Test 3');

// there is more than one way to get '12'
const _4_expect = '12';
const _4_actual = mystery(_);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 'asdf';
const _5_actual = mystery(_);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = true;
const _6_actual = mystery(_);
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = '';
const _7_actual = mystery('18');
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = true;
const _8_actual = mystery();
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = undefined;
const _9_actual = mystery(_);
console.assert(_9_actual === _9_expect, 'Test 9');
