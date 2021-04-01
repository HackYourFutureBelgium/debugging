'use strict';

const a = undefined;

// 0: original expression
const result = Number(Boolean(a) === true);
console.log(result);

{
  // 1. cast to Boolean
  const step1 = Boolean(a);
  const result = Number(step1 === true);
  console.log(result);
}

{
  // 2. comparison
  const step1 = Boolean(a);
  const step2 = step1 === true;
  const result = Number(step2);
  console.log(result);
}

{
  // 3. cast to Number
  const step1 = Boolean(a);
  const step2 = step1 === true;
  const step3 = Number(step2);
  const result = step3;
  console.log(result);
}
