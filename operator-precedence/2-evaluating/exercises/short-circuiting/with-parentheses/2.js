// #todo

'use strict';

{
  const a = false;
  const b = true;
  const c = 1;

  (_ || _) && _;

  console.assert(_ === ((a || b) && c), 'Expression 1');
}

{
  const a = true;
  const b = false;
  const c = 'one';

  (_ || _) && _;

  console.assert(_ === ((a || b) && c), 'Expression 2');
}

{
  const a = false;
  const b = 0;
  const c = '?';

  (_ || _) && _;

  console.assert(_ === ((a || b) && c), 'Expression 3');
}

{
  const a = 1;
  const b = 2;
  const c = 3;

  (_ || _) && _;

  console.assert(_ === ((a || b) && c), 'Expression 4');
}

{
  const a = '';
  const b = '...';
  const c = '!';

  (_ || _) && _;

  console.assert(_ === ((a || b) && c), 'Expression 5');
}

{
  const a = '';
  const b = 0;
  const c = false;

  (_ || _) && _;

  console.assert(_ === ((a || b) && c), 'Expression 6');
}
