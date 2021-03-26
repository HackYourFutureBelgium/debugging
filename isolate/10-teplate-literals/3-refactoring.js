'use strict';

/* refactoring template strings

  switching between normal strings and template strings isn't so hard
  VSCode can even do it for you automatically!

  this file has a little program written both ways for you to compare
  things to notice:
    how many +'s are used in the second example?
    adding \n newlines in the concat example makes things awkward
    the indentation you see in the source of the template is the indentation you see in the value

*/

const myName = 'roboto';
const myHomeTown = 'brussels';
const myDog = 'Pete';

const introTemplate = `i am ${myName}.`;
const storyTemplate = `${introTemplate}
I grew up in ${myHomeTown},
and had a dog named ${myDog}`;
console.log(storyTemplate);

const introConcat = 'i am ' + myName;
const storyConcat =
  introConcat +
  '\nI grew up in ' +
  myHomeTown +
  ',\nand had a dog named ' +
  myDog;
console.log(storyConcat);
