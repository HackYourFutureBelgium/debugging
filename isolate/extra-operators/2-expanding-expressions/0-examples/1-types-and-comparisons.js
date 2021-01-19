'use strict';

const exampleSolution = (a) => {
  // // 0: original expression
  // return Number(Boolean(a) === true);

  // // 1: refactor 1st operation
  // const step1 = Boolean(a);
  // return Number(step1 === true);

  // // 2: refactor 2st operation
  // const step1 = Boolean(a);
  // const step2 = step1 === true;
  // return Number(step2);

  // 3: refactor 3rd operation
  const step1 = Boolean(a);
  const step2 = step1 === true;
  const step3 = Number(step2);
  return step3;
};

