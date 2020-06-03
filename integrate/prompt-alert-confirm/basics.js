const input1 = prompt('gimme a first string');
const input2 = prompt('gimme a second string');

const expected = prompt('what value do you expect?');

const actual = input2 + input1;

const didPass = expected === actual;

console.assert(didPass, `"${input2}" + "${input1}" --> "${actual}"`);
alert(didPass);
