'use strict';

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


/* note about this repository

  JavaScript does not have a built-in protection against infinite loops
  this is why if you ever run one in your browser it freezes and you have to close the tab

  however, this repository has some protections against infinite loops
  - when studying in the browser using localhost:3000, the loop exercises have an extra button
    "loopGuard: X" - click this button to see a simple way to avoid infinite loops
    the LiveStudy app uses regular expressions to inject guards into your loops
    if the loop exceeds the allowed iterations it will throw an error: "Loop exceeded X iterations"
    this is a custom error, it's not part of JavaScript so googling it won't help to understand it
  - when `npm run review` is executed, the script will use the same technique to try preventing infinite loops
    the only difference is that it will inject it all on one line like this:
      let loop1 = 0; while (true) { if (loopGuard < ++loop1) { throw new Error('Loop exceeded X iterations); }
    when you read the callstacks in your review files, the line numbers should be correct
    but the character numbers will be too high.  now you know why :)

*/
