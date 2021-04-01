'use strict';

/* back-ticks

  at their simplest, template strings are just a string with ` instead of ' or "

  they are nice to use because you can create a string that goes across many lines

*/

const oneLineNormal = 'the car goes "vroom"';
console.log(oneLineNormal);

const oneLineTemplate = `the car goes "vroom"`;
console.log(oneLineTemplate);

const manyLineNormal =
  'roses are red\n' +
  'violets are blue\n' +
  'lilies are white\n' +
  'lilacs are purple';
console.log(manyLineNormal);

const manyLineTemplate = `roses are red
violets are blue
lilies are white
lilacs are purple`;
console.log(manyLineTemplate);

// -- notice! white space matters in a back-tick string

const indentedText = `
second line
  third line
   fourth line
 fifth line`;
console.log(indentedText);
