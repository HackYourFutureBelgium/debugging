const colorToStyleTests = [
  { name: 'Test 1', args: ['red'], expected: 'background-color: red;' },
  { name: 'Test 2', args: ['#ffcc00'], expected: 'background-color: #ffcc00;' },
  { name: 'Test 3', args: ['#eeeeee'], expected: 'background-color: #eeeeee;' },
  { name: 'Test 4', args: ['white'], expected: 'background-color: white;' },
];

function colorToStyle(colorCode) {
  return 'background-color: ' + colorCode + ';';
}

testing(colorToStyle, colorToStyleTests);
