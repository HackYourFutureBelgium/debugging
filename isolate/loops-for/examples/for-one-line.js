// 1: declare and assign result
let result = 0;


// 2: declare and assign i
// 3, 6, 9, 12, 15: check the condition
// 5, 8, 11, 14: increment i
for (let i = 0; i < 4; i++) {
  // 4, 7, 10, 13: run the body
  result += i;
}

// step: 16
console.assert(result === 6, 'Test 1');


/* anatomy of a for loop: https://javascript.info/while-for#the-for-loop

  for (begin; condition; step) {
    // ... loop body ...
  }

*/
