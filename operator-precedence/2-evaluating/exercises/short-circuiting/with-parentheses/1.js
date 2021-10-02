// #todo

'use strict';

{
  const a = 1;
  const b = 0;
  const c = 1;

  _ || (_ && _);

  console.assert(_ === (a || (b && c)), 'Expression 1');
}

{
  const a = ' ';
  const b = '';
  const c = ' ';

  _ || (_ && _);

  console.assert(_ === (a || (b && c)), 'Expression 2');
}

{
  const a = 0;
  const b = '';
  const c = 'hello';

  _ || (_ && _);

  console.assert(_ === (a || (b && c)), 'Expression 3');
}

{
  const a = false;
  const b = true;
  const c = 'true';

  _ || (_ && _);

  console.assert(_ === (a || (b && c)), 'Expression 4');
}

{
  const a = 0;
  const b = true;
  const c = 0.5;

  _ || (_ && _);

  console.assert(_ === (a || (b && c)), 'Expression 5');
}

{
  const a = null;
  const b = 'JavaScript!';
  const c = false;

  _ || (_ && _);

  console.assert(_ === (a || (b && c)), 'Expression 6');
}
