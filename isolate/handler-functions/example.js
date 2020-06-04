function handleUserInput() {
  // read user input
  const input = prompt('type something');

  // execute program logic
  const repeatedInput = `${input} ${input} ${input}`;

  // communicate the result to the user
  alert(repeatedInput);

  // log the action for developers
  console.log('-- handled input --');
  console.log('input: ', typeof input, input);
  console.log('repeatedInput: ', typeof repeatedInput, repeatedInput);
}

handleUserInput();

// handleUserInput();
