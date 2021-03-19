'use strict';

const word = 'pitsicola';
const targetLetter = _;

let index = 0;
while (true) {

  const nextLetter = word[index];
  console.log(index + ': ' + nextLetter);
  if (nextLetter === targetLetter) {
    _;
  }

  index += 1;

}

console.assert(index === 5, 'this letter is at index 5');
