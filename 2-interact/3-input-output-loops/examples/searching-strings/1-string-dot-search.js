'use strict';

/* 'string dot search'.search('dot')

  the .search method can be used to search for a something in a string
  you can use this to validate user input in your scripts

  .search is also a good method for exploring regular expressions
  regular expressions are not required at HYF
  but they're pretty darn useful and worth your time to learn

*/

// store a couple strings in a variable for demonstration
const abcd = 'abcd';
const ABCD = 'ABCD';

console.log('--- string indexes ---');
// you can access individual letters in a string by their index
// the first letter is at index 0
console.log("the 0'th letter of abcd:", abcd[0]);
console.log("the 1'rd letter of abcd:", abcd[1]);

console.log("the 2'th letter of ABCD:", ABCD[2]);
console.log("the 3'th letter of ABCD:", ABCD[3]);

// accessing an index that does not exist returns undefined
console.log("the 4'th letter of abcd:", abcd[4]);
console.log("the -1'th letter of ABCD:", ABCD[-1]);


console.log('--- matching searches ---');
// if a string contains the search value
//  the index of that value is returned
console.log('index of "a" in abcd:', abcd.search('a'));
console.log('index of "bc" in abcd:', abcd.search('bc'));

console.log('index of "AB" in ABCD:', ABCD.search('AB'));
console.log('index of "CD" in ABCD:', ABCD.search('CD'));
console.log('index of "D" in ABCD:', ABCD.search('D'));

console.log('--- not-matching searches ---');
// -1 will be returned if a search does not match the string
console.log('index of "z" in abcd:', abcd.search('z'));
// paritial matches don't count
console.log('index of "cde" in abcd:', abcd.search('cde'));
// capitalization does count
console.log('index of "ABC" in abcd:', abcd.search('ABC'));

