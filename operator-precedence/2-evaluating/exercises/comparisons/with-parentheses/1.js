// #todo

'use strict';

{
  const a = '4';
  const b = '4';
  const c = '4';
  const d = '4';

  (_ == _) === (_ === _);

  console.assert(_ === ((a == b) === (c === d)), 'Expression 1');
}

{
  const a = 4;
  const b = '4';
  const c = '4';
  const d = '4';

  (_ == _) === (_ === _);

  console.assert(_ === ((a == b) === (c === d)), 'Expression 2');
}

{
  const a = true;
  const b = 1;
  const c = 1;
  const d = true;

  (_ == _) === (_ === _);

  console.assert(_ === ((a == b) === (c === d)), 'Expression 3');
}

{
  const a = true;
  const b = 'true';
  const c = false;
  const d = 'false';

  (_ == _) === (_ === _);

  console.assert(_ === ((a == b) === (c === d)), 'Expression 4');
}

{
  const a = '1';
  const b = 'one';
  const c = '1';
  const d = 'one';

  (_ == _) === (_ === _);

  console.assert(_ === ((a == b) === (c === d)), 'Expression 5');
}
