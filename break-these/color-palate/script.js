'use strict';

/* Break This
​
  this whole program works, you get to break it!
​
  most of the code works, and you are not expected to understand it all
  you should focus on the `setColorHandler` function
​
  read through this file then start experimenting with `setColorHandler`
    you'll find some ideas for experiments in a comment by the function
​
*/

// --- logic: functions that use JS data, but do not change the UI

const colorToStyle = colorCode => {
  return 'background-color: ' + colorCode + ';';
};

console.log('-- testing colorToStyle --');
console.assert(colorToStyle('red') === 'background-color: red;', 'Test 1');
console.assert(colorToStyle('white') === 'background-color: white;', 'Test 2');
console.assert(
  colorToStyle('#ffcc00') === 'background-color: #ffcc00;',
  'Test 3'
);
console.assert(
  colorToStyle('#eeeeee') === 'background-color: #eeeeee;',
  'Test 4'
);

// --- handler: a function connected to the UI that is called when a user does something

const setColorHandler = event => {
  debugger;
  /* ============ BEGIN: Break This ============ */
​
  /* ideas
  ​
    can you refactor the if-else-if-else conditional to if's with early returns? >>"REFACTOR? EARLY RETURNS?"
    rewrite this function using only ternaries >>"TERNARIES?"
    rewrite this function using only conditionals >>"WHAT DO YOU MEAN EXACTLY? EXAMPLE?"
    ...
  >> or collect the if's into  if-else(but for this you would need to rewrite the program with if's)
  >> change the winning message and say who lost the game (it is not really breaking, tho)
  >> ~ line 136 'once: true' can be broken - click once? twice? take it away? what happens if you click twice?
  >> ~ line 122 and 123 - reverse swapTurns() and setBoardHoverClass() -  what happens when hover and when click? (order of events, maybe something else like that?)
  ​
  */

  // read & process user input
  const form = event.target.form;
  const newColor = form.selection.value;

  // generate new style (use logic function)
  const newStyle = colorToStyle(newColor);

  // display results to user
  document.body.style = newStyle;

  // log action for developers
  console.log('\n-- user action --');
  console.log('newColor:', '(' + typeof newColor + ')', newColor);
  console.log('newStyle:', '(' + typeof newStyle + ')', newStyle);


​
  /* ============ END: Break This ============ */
};

// --- event listener: connect your handler to the UI, defining the user interaction
document.getElementById('set-color').addEventListener('click', setColorHandler);
