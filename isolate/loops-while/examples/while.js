// 1: declare and assign a
let a = 0;
// 2: declare and assign b
const b = 8;

// 3, 5, 7, 9, 11: check the condition
while (a !== b) {
  // 4, 6, 8, 10: increment a
  a += b / 4;
}

// 12: assert a
console.assert(a === 8, 'Test 1');
