// #todo

'use strict';

{
  const a = 1;
  const b = 1;
  const c = 1;

  _ / -(_ + _);

  console.assert(_ === a / -(b + c), 'Expression 1');
}

{
  const a = 2;
  const b = 1;
  const c = 1;

  _ / -(_ + _);

  console.assert(_ === a / -(b + c), 'Expression 2');
}

{
  const a = 8;
  const b = 4;
  const c = 4;

  _ / -(_ + _);

  console.assert(_ === a / -(b + c), 'Expression 3');
}

{
  const a = 10;
  const b = 2;
  const c = 3;

  _ / -(_ + _);

  console.assert(_ === a / -(b + c), 'Expression 4');
}

{
  const a = 0;
  const b = 1;
  const c = 2;

  _ / -(_ + _);

  console.assert(_ === a / -(b + c), 'Expression 5');
}
