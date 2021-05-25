let _a = null;
while (_a === null) {
  _a = prompt(
    'enter some text, the program will check if it contains any vowels'
  );
}

const _b = 'aeiou';

let _c = false;
for (const _d of _a) {
  const _e = _d.toLowerCase();
  if (_b.includes(_e)) {
    _c = true;
    break;
  }
}

alert(_c);
