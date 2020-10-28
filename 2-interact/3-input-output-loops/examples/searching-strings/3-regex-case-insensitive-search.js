'use strict';

/* case insensitive regular expression

  there is one little bit of regular expressions that will come in handy
  mastering regular expressions is a long journey
  using them little by little can be easy

  you can use regular expressions in .search
    instead of using "...", use /.../

  Regular Expressions aren't a required part of HYF
  but if you're interested, try using them as often as you can!
  head over here if you'd like to learn more: https://regexr.com/
*/


// store a couple strings in a variable for demonstration
const abcd = 'abcd';
const ABCD = 'ABCD';


console.log('--- basic regular expression ---');
// you can do th same searches as before with regex instead of strings
//  just replace the " with /, that easy!
console.log('index of /a/ in abcd:', abcd.search(/a/));
console.log('index of /bc/ in abcd:', abcd.search(/bc/));

console.log('index of /AB/ in ABCD:', ABCD.search(/AB/));
console.log('index of /CD/ in ABCD:', ABCD.search(/CD/));
console.log('index of /D/ in ABCD:', ABCD.search(/D/));


console.log('--- case insensitive regex ---');
// now you search strings with upper or lower case letters
//  just add an i at the end of your regex
console.log('index of /B/i in abcd:', abcd.search(/B/i));
console.log('index of /Cd/i in abcd:', abcd.search(/Cd/i));
console.log('index of /b/i in ABCD:', ABCD.search(/b/i));
console.log('index of /cD/i in ABCD:', ABCD.search(/cD/i));



