// it is possible to write loops that will never end
//  using 'evaluate code' stops your loops after 1000 iterations
//  and throws a custom error (so googling it won't help)
// using '.. with max iterations = X' will run your code for the debugger
//  with guards against your loops exceeding X iterations


for (let i = 0; 1 < i; i++) {
  console.log('A.', i);
}

for (let i = 0; 0 < i; i++) {
  console.log('B', i);
}

for (let i = 0; -1 < i; i++) {
  console.log('C', i);
}
