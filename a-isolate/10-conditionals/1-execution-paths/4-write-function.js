const mystery = (a, b) => {
  let result = '';
  if (_) {
    result = 'path 1';
  } else if (_) {
    result = 'path 2';
  } else if (_) {
    result = 'path 3';
  } else {
    result = 'path 4';
  }
  return result;
};

// path 1
const _01_expect = 'path 1';
const _01_actual = mystery(1, 'turtle');
console.assert(_01_actual === _01_expect, 'Test 01');

const _02_expect = 'path 1';
const _02_actual = mystery('turtle', 'turtle');
console.assert(_02_actual === _02_expect, 'Test 02');

const _03_expect = 'path 1';
const _03_actual = mystery(42, true);
console.assert(_03_actual === _03_expect, 'Test 03');

// path 2
const _04_expect = 'path 2';
const _04_actual = mystery(0, '');
console.assert(_04_actual === _04_expect, 'Test 04');

const _05_expect = 'path 2';
const _05_actual = mystery(null, NaN);
console.assert(_05_actual === _05_expect, 'Test 05');

const _06_expect = 'path 2';
const _06_actual = mystery(false, false);
console.assert(_06_actual === _06_expect, 'Test 06');

// path 3
const _07_expect = 'path 3';
const _07_actual = mystery(0, 12);
console.assert(_07_actual === _07_expect, 'Test 07');

const _08_expect = 'path 3';
const _08_actual = mystery(false, true);
console.assert(_08_actual === _08_expect, 'Test 08');

const _09_expect = 'path 3';
const _09_actual = mystery('x', '');
console.assert(_09_actual === _09_expect, 'Test 09');

// path 4
const _10_expect = 'path 4';
const _10_actual = mystery('', true);
console.assert(_10_actual === _10_expect, 'Test 10');

const _11_expect = 'path 4';
const _11_actual = mystery(0, '12');
console.assert(_11_actual === _11_expect, 'Test 11');

const _12_expect = 'path 4';
const _12_actual = mystery(100, null);
console.assert(_12_actual === _12_expect, 'Test 12');
