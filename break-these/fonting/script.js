'use strict';

// ===== logic: functions that use JS data, but do not change the UI

const generateClasses = (emphasis, size, color) => {
  debugger;

  /* -------------- BEGIN: break the logic --------------
  ​
    ...ideas

  */

  let classes = '';

  if (emphasis === 'bold' || emphasis === 'italic') {
    classes += emphasis;
  }
  if (size === 'small' || size === 'large') {
    classes += ' ' + size;
  }
  if (
    color === 'green' ||
    color === 'blue' ||
    color === 'red' ||
    color === 'white'
  ) {
    classes += ' ' + color;
  }

  return classes;

  /* -------------- END: break the logic -------------- */
};

console.log('-- test the logic --');
console.assert(
  generateClasses('bold', 'small', 'green') === 'bold small green',
  'Test 1'
);
console.assert(
  generateClasses('italic', 'large', 'blue') === 'italic large blue',
  'Test 2'
);
console.assert(
  generateClasses('bold', 'large', 'red') === 'bold large red',
  'Test 3'
);
console.assert(
  generateClasses('italic', 'small', 'white') === 'italic small white',
  'Test 4'
);
console.assert(generateClasses('Italic', 'Small', 'Green') === '', 'Test 5');
console.assert(generateClasses('', '', '') === '', 'Test 6');
console.assert(
  generateClasses('italic', 'tiny', 'green') === 'italic green',
  'Test 7'
);

// ===== handler: a function connected to the UI that is called when a user does something

const generateClassesHandler = event => {
  debugger;

  /* -------------- BEGIN: break the handler --------------
  ​
    ...ideas

  */

  // read & process user input
  const form = event.target.form;
  const newEmphasis = form.emphasis.value;
  const newSize = form.size.value;
  const newColor = form.color.value;

  // use the logic function to generate new classes for the editor
  const newClasses = generateClasses(newEmphasis, newSize, newColor);

  // update the user interface
  document.getElementById('editor').className = newClasses;

  /* -------------- END: break the handler -------------- */
};

// ===== event listener: connect your handler to the UI, defining the user interaction

document
  .getElementById('user-input')
  .addEventListener('change', generateClassesHandler);
