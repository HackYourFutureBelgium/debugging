'use strict';

/* User Paths

  the previous examples were boring, the user just did what you said (or not)

  but what if the user had more than one option?

  and what if they could choose their own path through your program?

  then you just might have a game

  try predicting how this game works just by reading the code
    how many prompts are there?
    how many choices does each user have?
    how many paths are there total?
    how would you draw a diagram of this game?

  (this example is very long, you aren't expected to write something like this just yet)

*/


// show the use all of their options in this game
const initialMessage = 'Welcome!\n\n'
  + '"play": begin the game\n'
  + '"-h": read the instructions\n'
  + '"": exit the game`';
const userInput = prompt(initialMessage);


if (userInput === '-h') {
  // did they ask for help? show them the instructions!
  const instructions = 'This is a two player game.\n\n'
    + 'Player 1: enters a secret number, and then a clue.\n'
    + 'Player 2: is shown the clue and must guess the number.\n\n'
    + 'you can end the game with cancel or an empty input';
  alert(instructions);

} else if (userInput === 'play') {
  // did they ask to play the game? start the game!

  // declare a variable to store the winner of this game
  let winner = 'no one';

  alert('Player 2: look away! hide your eyes!');

  // --- begin player 1's turn ---
  // get the user's secret number as a string and coerce it to number
  const secretNumberInput = prompt('Player 1: enter a secret number');
  const secretNumber = Number(secretNumberInput);


  if (secretNumberInput === null || secretNumberInput === '') {
    // if they did not enter anything, leave the game early.
    //  no one wins when the game ends early
    alert('good bye');

  } else if (Number.isNaN(secretNumber)) {
    // if the user did not enter a number, let them know and end the game early
    const notANumberMessage = '"' + secretNumberInput + '" is not a number\n\n'
      + 'good bye.';
    alert(notANumberMessage);

  } else {
    // if the first player entered a number, ask them to enter a clue
    const clue = prompt('Player 1: enter a clue to help guess your number');

    if (clue === '' || clue === null) {
      // leave early if there is no clue
      alert('good bye');

    } else {
      // let the first player review their number and their clue before moving on
      const secretAndClueMessage = 'Player 2: you entered ...\n\n'
        + '- number: ' + secretNumber + '\n'
        + '- clue: "' + clue + '"';
      alert(secretAndClueMessage);

      alert('now go get Player 2');

      // --- begin player 2's turn ---
      // present player 2 with the clue and let them guess the number
      const clueMessage = 'Player 2, Here is your clue:\n\n'
        + '- "' + clue + '"\n\n'
        + 'what do you think the secret number is?';
      const guessInput = prompt(clueMessage);
      // coerce their input to a number
      const guessNumber = Number(guessInput);

      if (guessInput === null || guessInput === '') {
        // no input? no game, no winner.  done
        alert('good bye');

      } else if (Number.isNaN(guessNumber)) {
        // input was not a number? end the game
        const notANumberMessage = '"' + guessInput + '" is not a number\n\n'
          + 'good bye.';
        alert(notANumberMessage);

      } else if (guessNumber === secretNumber) {
        // player 2's guess was correct, they win!
        winner = 'Player 2';
        alert('Congrats, you were right!\n\n');

      } else {
        // player 2's guess was wrong, they lose :()
        winner = 'Player 1';

        // ask player 2 if they want to know the secret message
        const peekMessage = 'Nope, not correct.\n\n'
          + 'do you want to know the secret?';
        const revealTheSecret = confirm(peekMessage);

        if (revealTheSecret) {
          // show the secret if they confirmed
          const revealMessage = 'The secret was:\n\n'
            + '- ' + secretNumber + '\n\n'
            + 'thanks for playing, see ya';
          alert(revealMessage);

        } else {
          // end the game without showing the secret number
          alert('better luck next time');
        }
      }
    }
  }

  // log the winner to the console when the game is finished
  console.log('game over. the winner is: ', winner);


} else if (userInput !== null && userInput !== '') {
  // or did they input an unknown command?
  //  let them know it is not correct
  const unknownCommandMessage = 'unknown command: "' + userInput + '"\n\n'
    + 'try again.';
  alert(unknownCommandMessage);
}
