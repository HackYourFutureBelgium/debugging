'use strict';

const exampleSolution = (a, b) => {
  // // 0: original expression
  // return typeof a === 'boolean' ? 1 + a || 1 + b : !a && !b;

  // // 1: expand ternary operator
  // if (typeof a === 'boolean') {
  //   return 1 + a || 1 + b
  // } else {
  //   return !a && !b;
  // }

  // // 2: expand nested logical operators
  //   if (typeof a === 'boolean') {
  //     const left = 1 + a;
  //     if (left) {
  //       return left;
  //     } else {
  //       return 1 + b;
  //     }
  //   } else {
  //     const left = !a;
  //     if (left) {
  //       return !b;
  //     } else {
  //       return left;
  //     }
  //   }

  // 3: expand remaining expressions and rename left variables
  const step1 = typeof a;
  const step2 = step1 === 'boolean';
  if (step2) {
    const step3 = 1 + a;
    if (step3) {
      return step3;
    } else {
      const step4 = 1 + b;
      return step4;
    }
  } else {
    const step3 = !a;
    if (step3) {
      const step4 = !b;
      return step4;
    } else {
      return step3;
    }
  }
};


