'use strict';

/*
  &&, || execute from left to right.
  expanding logical expressions is like writing nested conditional statements
*/

const exampleSolution = (a, b) => {

  // // 0: original expression
  // return typeof a === 'string' || typeof b === 'string' && a !== b;

  // // 1: refactor first logical operator to a conditional
  // const leftSide = typeof a === 'string'
  // if (leftSide) {
  //   return leftSide;
  // } else {
  //   return typeof b === 'string' && a !== b;
  // }

  // // 2: refactor second logical operator to a conditional
  // const leftSide = typeof a === 'string'
  // if (leftSide) {
  //   return leftSide;
  // } else {
  //   const leftSide = typeof b === 'string';
  //   if (leftSide) {
  //     return a !== b;
  //   } else {
  //     return leftSide;
  //   }
  // }

  // 3: expand expressions & rename variables (moving from top to bottom)
  const step1 = typeof a;
  const step2 = step1 === 'string'
  if (step2) {
    return step2;
  } else {
    const step3 = typeof b;
    const step4 = step3 === 'string';
    if (step4) {
      const step5 = a !== b;
      return step5;
    } else {
      return step4;
    }
  }

};




