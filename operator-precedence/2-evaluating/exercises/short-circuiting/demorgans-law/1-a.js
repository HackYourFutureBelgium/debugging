// #todo

'use strict';

{
  const a = true;
  const b = true;

  !_ && !_;

  console.assert(_ === (!a && !b), 'Expression 1');
}

{
  const a = true;
  const b = false;

  !_ && !_;

  console.assert(_ === (!a && !b), 'Expression 2');
}

{
  const a = false;
  const b = true;

  !_ && !_;

  console.assert(_ === (!a && !b), 'Expression 3');
}

{
  const a = false;
  const b = false;

  !_ && !_;

  console.assert(_ === (!a && !b), 'Expression 4');
}
