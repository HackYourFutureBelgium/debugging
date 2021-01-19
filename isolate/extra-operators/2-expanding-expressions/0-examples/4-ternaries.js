'use strict';


const exampleSolution = (a, b) => {
  // // 0: original expression
  // return a === b + 1 ? a * 2 * -1 : a + 2 * b;

  // // 1: refactor to if statement
  // if (a === b + 1) {
  //   return a * 2 * -1;
  // } else {
  //   return a + 2 * b;
  // }


  // 2: expand the expressions, starting with the condition
  /* notice: there are two step 4's !!!
    this is because the ternary operator only executes one of the two expressions provided
    it's called "short circuiting" ( remember that from way back in "Logical Operators"? ;)
    this refactor pattern accurately replicates the behavior of short-circuiting
  */
  const step1 = b + 1;
  const step2 = a === step1;
  if (step2) {
    const step4 = a * 2;
    const step5 = step4 * -1;
    return step5;
  } else {
    const step4 = 2 * b;
    const step5 = a + step4
    return step5;
  }
};



// done!
