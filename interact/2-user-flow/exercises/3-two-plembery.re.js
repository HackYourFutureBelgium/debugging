'use strict';

/* Two-Player Remembery

  fill in the blanks to complete the logic

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

// gather all user phrases
const phrase1 = prompt('Player 1, enter your first phrase:');
console.log('phrase1:', typeof phrase1, phrase1);

const phrase2 = prompt('Player 1, enter your second phrase:');
console.log('phrase2:', typeof phrase2, phrase2);

const phrase3 = prompt('Player 1, enter your third phrase:');
console.log('phrase3:', typeof phrase3, phrase3);


alert('Player 2, get back here');


const phrasesToRemember = `Player 2, remember these:
  1. "${phrase1}"
  2. "${phrase2}"
  3. "${phrase3}"
`;
alert(phrasesToRemember);


let score = 0;

const guess1 = prompt('Player 1, enter your first guess:');
console.log('guess1:', typeof guess1, guess1);

if (guess1 === phrase1) {

  score = score + 1;

  const guess2 = prompt('Player 1, enter your second guess:');
  console.log('guess2:', typeof guess2, guess2);

  if (guess2 === phrase2) {

    score = score + 1;

    const guess3 = prompt('Player 1, enter your third guess:');
    console.log('guess3:', typeof guess3, guess3);

    if (guess3 === phrase3) {
      score = score + 1;

      alert(`your score: ${score}`);

    } else {
      alert(`your score: ${score}`);
    }

  } else {
    alert(`your score: ${score}`);
  }

} else {
  alert(`your score: ${score}`);
}
