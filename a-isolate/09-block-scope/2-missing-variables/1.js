'use strict';

const a = 3;
let b = 3;
{
  const a = 5;
  b = a;
}
console.assert(_ === 5, 'Test 1');
