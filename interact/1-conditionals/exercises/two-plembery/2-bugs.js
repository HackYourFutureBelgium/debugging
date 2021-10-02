// #todo

'use strict';

/* look out fo:

  - variable names

*/

const instructions = `Two-Player Remembery

  Player 1:
    enter three phrases

  Player 2:
    see the three phrases in order
    then enter them back in order
    if you get one wrong - game over!
`;
alert(instructions);

alert('Player 2: go hide');

const phrase = prompt('Player 1, enter your first phrase:');
const phrase = prompt('Player 1, enter your second phrase:');
const phrase = prompt('Player 1, enter your third phrase:');

alert('Player 2, get back here');

const phrasesToRemember = `Player 2, remember these:
  1. "${phrase}"
  2. "${phrase}"
  3. "${phrase}"
`;
alert(phrasesToRemember);

let score = 3;

const guess1 = prompt('Player 1, enter your first guess:');
if (guess1 !== phrase) {
  score = score - 1;

  const guess2 = prompt('Player 1, enter your second guess:');
  if (guess2 !== phrase) {
    score = score - 1;

    const guess3 = prompt('Player 1, enter your third guess:');
    if (guess3 !== phrase) {
      score = score - 1;
    }
  }
}

alert(`your score: ${score}`);
