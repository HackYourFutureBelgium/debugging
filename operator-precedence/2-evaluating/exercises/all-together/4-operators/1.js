// #todo

'use strict';

{
  const a = null;
  const b = null;
  const c = 4;
  const d = '4';

  !_ ? typeof _ : _ + _;

  console.assert(_ === (!a ? typeof b : c + d), 'Expression 1');
}

{
  const a = 'null';
  const b = 'null';
  const c = 4;
  const d = '4';

  !_ ? typeof _ : _ + _;

  console.assert(_ === (!a ? typeof b : c + d), 'Expression 2');
}

{
  const a = 'null';
  const b = null;
  const c = 4;
  const d = 4;

  !_ ? typeof _ : _ + _;

  console.assert(_ === (!a ? typeof b : c + d), 'Expression 3');
}

{
  const a = 44;
  const b = false;
  const c = '4';
  const d = '4';

  !_ ? typeof _ : _ + _;

  console.assert(_ === (!a ? typeof b : c + d), 'Expression 4');
}

{
  const a = 1;
  const b = 'typeof';
  const c = true;
  const d = null;

  !_ ? typeof _ : _ + _;

  console.assert(_ === (!a ? typeof b : c + d), 'Expression 5');
}
