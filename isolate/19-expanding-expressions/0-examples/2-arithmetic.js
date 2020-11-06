'use strict';

const exampleSolution = (a, b) => {
  // // 0: original expression
  // return a * (b + b) / a;

  // // 1: refactor 1st operation
  // const step1 = b + b;
  // return a * (step1) / a;

  // // 2: refactor 2st operation
  // const step1 = b + b;
  // const step2 = a * step1;
  // return step2 / a;

  // 3: refactor 3rd operation
  const step1 = b + b;
  const step2 = a * step1;
  const step3 = step2 / a;
  return step3;
};
