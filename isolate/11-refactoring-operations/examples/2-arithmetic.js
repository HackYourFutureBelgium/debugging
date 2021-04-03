'use strict';

const a = 2;
const b = 3;

// 0: original expression
const result = (a * (b + b)) / a;

{
  // 1. parenthesis, addition
  const step1 = b + b;
  const result = (a * step1) / a;
  console.log(result);
}

{
  // 2. parenthesis, multiplication
  const step1 = b + b;
  const step2 = a * step1;
  const result = step2 / a;
  console.log(result);
}

{
  // 3. division
  const step1 = b + b;
  const step2 = a * step1;
  const step3 = step2 / a;
  const result = step3;
  console.log(result);
}
