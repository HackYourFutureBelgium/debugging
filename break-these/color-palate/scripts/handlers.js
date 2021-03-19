function setColorHandler(event) {
  // read & process user input
  const form = event.target.form;
  const newColor = form.selection.value;

  // execute core logic
  const newStyle = colorToStyle(newColor);

  // display results to user
  document.body.style = newStyle;

  // log action for developers
  console.log('\n-- user action --');
  console.log('newColor:', '(' + typeof newColor + ')', newColor);
  console.log('newStyle:', '(' + typeof newStyle + ')', newStyle);
}
