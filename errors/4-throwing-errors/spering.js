console.log('-- first --');
try {
  throw new Error('toadstools!');
  console.log('no error :( you should never see this!');
} catch (err) {
  console.assert(err.name === 'Error', 'name should be a "Error"');
  console.assert(err.message === 'toadstools!', 'message should be a "toadstools!"');
  console.error(err);
}

console.log('-- first --');
try {
  throw new Error('toadstools!');
  console.log('no error :( you should never see this!');
} catch (err) {
  console.assert(err.name === 'Error', 'name should be a "Error"');
  console.assert(err.message === 'toadstools!', 'message should be a "toadstools!"');
  console.error(err);
}
