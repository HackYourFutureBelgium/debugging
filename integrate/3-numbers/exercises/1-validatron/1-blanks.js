// #todo

'use strict';

/* Fill in the Blanks

  there are three types of blanks you will need to fill:

  1. interactions: prompt, alert, or confirm?
  2. type casting: coercing user input
  3. comparisons, they each have a hint

*/

// get user input as a String
const userString = _('enter a number:');
// coerce it to a Number
const userNumber = _(userString);

// is the number NaN or not?
// see: isolate/05-explicit-coercion/examples/4-about-nan.js
const inputIsANumber = !_._(userNumber);

// does the user think their String becomes a Number?
const confirmMessage =
  'did you really enter a number?\n\n' + 'yes -> "ok"\n' + 'no  -> "cancel"';
const userThinksItsANumber = _(confirmMessage);

// compare userThinksItsANumber and inputIsANumber
// does the user think the same thing as JavaScript?
// see: isolate/04-comparing-and-assertion/examples/1-strict-equality.js
const userIsCorrect = _;

// which variable "knows" if the user was correct?
if (_) {
  _('correct!');
} else {
  _('nope :(');
}
