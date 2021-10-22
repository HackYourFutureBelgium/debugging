// #todo

'use strict';

/* Input/Output Loops

  this Guessing Game uses multiple I/O loops for a more complete user experience

  try predicting how this game works just by reading the code
    how many prompts are there?
    how many choices does each user have?
    what is the interaction inside each loop?
    how many paths are there total?
    how would you draw a diagram of this game?

  (this example is very long, you aren't expected to write something like this just yet)

*/

// delcare & alert instructions
const instructions = `A Guessing Game

1. Player 1 enters a phrase and a clue
2. Player 2 reads the clue and guesses the phrase`;
alert(instructions);

// -- goal 1: player 1 enters the phrase and clue --

/* declare & assign phrase & clue
  these variables are used to collect the main program data
*/
let phrase = '';
let clue = '';

/* declare & assign userConfirmedInput
  this variable is used as a boolean flag to leave the i/o loop
*/
let userConfirmedInput = false;
while (!userConfirmedInput) {
  /* prompt user for phrase and clue values
    this is when player 1 inputs the phrase & clue for player 2 to guess
  */
  phrase = prompt('Player 1: enter a secret phrase');
  clue = prompt('Player 1: enter a clue for your phrase');

  /* continue in the loop if either input is null
    the phrase or clue should not accidentally become "null"
  */
  if (phrase === null || clue === null) {
    alert('canceling is not possible!  try again');
    continue;
  }

  /* confirm the new phrase and clue values
    give player 2 a chance to make changes to the phrase or clue
  */
  const confirmMessage =
    'Player 1, is this correct?\n\n' +
    '- phrase: "' +
    phrase +
    '"\n' +
    '- clue: "' +
    clue +
    '"\n';
  userConfirmedInput = confirm(confirmMessage);
}

// -- goal 2: player 2 guesses the phrase --

/* delcare and assign phraseGuess
  used to store player 2's guess and compare with the actual phrase
*/
let phraseGuess = '';

/* declare and assign guessCount
  used to count how many guesses player 2 uses to get the correct answer
*/
let guessCount = 0;
/* declare and assign guessHistory
  used to keep track of all of player 2's guesses
*/
let guessHistory = '';
/* declare and assign didForfeit
  used to keep track of whether or not player 2 asked for the answer
*/
let didForfeit = false;
/* loop while phraseGuess is not strictly equal to phrase
  the point of the game is to guess the secret phrase, so check for that!
*/
while (phraseGuess !== phrase) {
  /* add 1 to the number of times player 2 has tried to guess the phrase */
  guessCount = guessCount + 1;

  /* prompt user 2 to enter their guess
    display helpful info for player two including instructions and past guesses
  */
  const enterGuessMessage =
    'Player 2: guess the secret phrase\n\n' +
    'clue: "' +
    clue +
    '"\n\n' +
    'you have already guessed: \n' +
    guessHistory +
    '\n' +
    'or enter "done" to forfeit the game';
  const userInput = prompt(enterGuessMessage);

  /* if the user canceled, skip the rest of the loop and start over */
  if (userInput === null) {
    alert('canceling is not an option');
    continue;
  }

  /* check if the user entered 'done' */
  if (userInput.toLowerCase() === 'done') {
    /* reassign didForfeit
      this will be used later to determine if the user quit the game
    */
    didForfeit = true;
    /* break from the i/o loop
      the user has asked to quit the game, so leave the loop
    */
    break;
  }

  /* reassign phrasesGuess
    this value will be used to check if the while loop should continue
  */
  phraseGuess = userInput;
  /* reassign guessHistory
    append the newest guess to the history of guesses
  */
  guessHistory = guessHistory + '- "' + phraseGuess + '"\n';
}

// -- goal 3: evaluate the game and alert the results --

if (didForfeit) {
  /* did the player forfeit the game? tell them the correct answer */
  const forfeitMessage = 'forfeit! the phrase was:\n\n' + '- "' + phrase + '"';
  alert(forfeitMessage);
} else if (phraseGuess === phrase) {
  /* did the player guess correctly? let them know! */
  const successMessage =
    'Success in ' +
    guessCount +
    ' tries! \n\n' +
    'you guessed "' +
    phrase +
    '" ';
  alert(successMessage);
} else {
  /* unreachable! the only ways to exit the loop are:

    1. setting didForfeit to true
    2. correctly guessing the phrase

    both of those conditions are covered by if & else if
  */
}
