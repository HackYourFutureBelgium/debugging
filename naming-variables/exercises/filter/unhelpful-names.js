let _a = null;
while (_a === null) {
  _a = prompt('enter some text, the program will remove all vowels');
}

let _b = '';
for (const _c of _a) {
  const _d = 'aeiou'.includes(_c.toLowerCase());
  if (!_d) {
    _b = _b + _c;
  }
}

alert(_b);
