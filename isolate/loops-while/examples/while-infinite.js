// it is possible to write loops that will never end
//  using 'evaluate code' stops your loops after 1000 iterations
//  and throws a custom error (so googling it won't help)
// using '.. with max iterations = X' will run your code for the debugger
//  with guards against your loops exceeding X iterations

let a = 0;
while (1 < a) {
  console.log('A.', a++);
}

let b = 0;
while (0 < b) {
  console.log('B.', b++);
}

let c = 0;
while (-1 < c) {
  console.log('C.', c++);
}
