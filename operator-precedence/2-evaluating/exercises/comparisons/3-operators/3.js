// #todo

'use strict';

{
  const a = 5;
  const b = 4;
  const c = 3;
  const d = 3;

  _ > _ > _ >= _;

  console.assert(_ === a > b > c >= d, 'Expression 1');
}

{
  const a = 5;
  const b = 4;
  const c = 3;
  const d = 4;

  _ > _ > _ >= _;

  console.assert(_ === a > b > c >= d, 'Expression 2');
}

{
  const a = 3;
  const b = 2;
  const c = 1;
  const d = 0;

  _ > _ > _ >= _;

  console.assert(_ === a > b > c >= d, 'Expression 3');
}

{
  const a = 3;
  const b = 2;
  const c = 1;
  const d = 1;

  _ > _ > _ >= _;

  console.assert(_ === a > b > c >= d, 'Expression 4');
}

{
  const a = 1;
  const b = 2;
  const c = 3;
  const d = 4;

  _ > _ > _ >= _;

  console.assert(_ === a > b > c >= d, 'Expression 5');
}
