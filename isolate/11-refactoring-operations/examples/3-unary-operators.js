'use strict';

// unary operators (!, +, -, ++, --) are higher precedence than operators with 2 arguments (+, &&, *, )
//  PS. none of these exercises will have ++ or --
//  those operators modify variables in memory and make things sooo much more complex

const a = 2;
const b = 3;

// 0: original expression
const result = (a * -(b + b)) / -a;
console.log(result);

{
  // 1. parenthesis, addition
  const step1 = b + b;
  const result = (a * -step1) / -a;
  console.log(result);
}

{
  // 2. unary minus (make the number negative)
  const step1 = b + b;
  const step2 = -step1;
  const result = (a * step2) / -a;
  console.log(result);
}

{
  // 3. parenthesis, multiplication
  const step1 = b + b;
  const step2 = -step1;
  const step3 = a * step2;
  const result = step3 / -a;
  console.log(result);
}

{
  // 4. unary minus (make the number negative)
  const step1 = b + b;
  const step2 = -step1;
  const step3 = a * step2;
  const step4 = -a;
  const result = step3 / step4;
  console.log(result);
}

{
  // 5. division
  const step1 = b + b;
  const step2 = -step1;
  const step3 = a * step2;
  const step4 = -a;
  const step5 = step3 / step4;
  const result = step5;
  console.log(result);
}
