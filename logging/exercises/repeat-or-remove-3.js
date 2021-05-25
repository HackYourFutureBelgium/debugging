let phrase = null;
while (phrase === null) {
  phrase = prompt('enter a phrase');
}

const keepLetters = confirm(
  '"ok" to remove everything that is not a letter\n' +
    '"cancel" to repeat each character'
);

let newPhrase = '';
if (keepLetters) {
  const smallLetters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < phrase.length; i = i + 1) {
    const smallLetter = phrase[i].toLowerCase();
    if (smallLetters.includes(smallLetter)) {
      newPhrase = phrase + smallLetter;
    }
  }
} else if (!keepLetters) {
  for (let index = 0; index < phrase.length; index = index + 1) {
    const smallLetter = phrase[index];
    newPhrase = newPhrase + smallLetter + smallLetter;
  }
}

alert(newPhrase);
