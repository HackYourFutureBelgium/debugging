let _a = null;
while (_a === null) {
  _a = prompt('enter some text, the program will check if it is only vowels');
}

const _b = 'aeiou';

let _c = true;
for (const _d of _a) {
  const _e = _b.includes(_d.toLowerCase());
  if (!_e) {
    _c = false;
    break;
  }
}

alert(_c);
