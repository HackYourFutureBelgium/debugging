'use strict';

/* string to lower case

  converting your strings to all lower case letters
  is the simplest way to have the best search results

  then you only need to search for

*/


// store a couple strings in a variable for demonstration
const abcd = 'abcd';
const ABCD = 'ABCD';

console.log('--- to lower case ---');
console.log('abcd to lower case:', abcd.toLowerCase());
console.log('ABCD to lower case:', ABCD.toLowerCase());


console.log('--- case insensitive regex ---');
// now you search strings with upper or lower case letters
//  just add an i at the end of your regex
console.log('index of "b" in lower-case abcd:', abcd.toLowerCase().search("b"));
console.log('index of "b" in lower-case ABCD:', ABCD.toLowerCase().search("b"));
console.log('index of "cd" in lower-case abcd:', abcd.toLowerCase().search("cd"));
console.log('index of "cd" in lower-case ABCD:', ABCD.toLowerCase().search("cd"));



