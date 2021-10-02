// #todo

'use strict';

{
  const a = 1;
  const b = 1;

  _ / -_;

  console.assert(_ === a / -b, 'Expression 1');
}

{
  const a = 2;
  const b = 1;

  _ / -_;

  console.assert(_ === a / -b, 'Expression 2');
}

{
  const a = 1;
  const b = 2;

  _ / -_;

  console.assert(_ === a / -b, 'Expression 3');
}

{
  const a = 4;
  const b = 2;

  _ / -_;

  console.assert(_ === a / -b, 'Expression 4');
}

{
  const a = 1.5;
  const b = 2.5;

  _ / -_;

  console.assert(_ === a / -b, 'Expression 5');
}
