// #todo

'use strict';

{
  const a = true;
  const b = true;
  const c = false;
  const d = false;

  _ || (_ && _) || _;

  console.assert(_ === (a || (b && c) || d), 'Expression 1');
}

{
  const a = 'false';
  const b = false;
  const c = 0;
  const d = 1;

  _ || (_ && _) || _;

  console.assert(_ === (a || (b && c) || d), 'Expression 2');
}

{
  const a = false;
  const b = true;
  const c = 'false';
  const d = 'true';

  _ || (_ && _) || _;

  console.assert(_ === (a || (b && c) || d), 'Expression 3');
}

{
  const a = 12;
  const b = 13;
  const c = false;
  const d = ':)';

  _ || (_ && _) || _;

  console.assert(_ === (a || (b && c) || d), 'Expression 4');
}

{
  const a = 'Java';
  const b = 'Script';
  const c = '!';
  const d = '?';

  _ || (_ && _) || _;

  console.assert(_ === (a || (b && c) || d), 'Expression 5');
}

{
  const a = 0;
  const b = '';
  const c = false;
  const d = null;

  _ || (_ && _) || _;

  console.assert(_ === (a || (b && c) || d), 'Expression 6');
}
