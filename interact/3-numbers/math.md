# Math

The `Math` object in JavaScript has some useful methods you will see in a couple
Welcome to JS examples and exercises. You don't need to master these, but should
know what they are doing when you come across them in the code.

<details>
<summary>🐣  .round</summary>

```js
console.log('-- Math.round --');

// rounds a decimal number to the nearest integer
console.log(Math.round(0.2)); // 0
console.log(Math.round(0.5)); // 1
console.log(Math.round(0.8)); // 1
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2
console.log(Math.round(1.8)); // 2
```

</details>
<details>
<summary>🐣 .random</summary>

```js
console.log('-- Math.random --');

// generates a random decimal number between 0 and 1
console.log(Math.random()); // ?
console.log(Math.random()); // ?
console.log(Math.random()); // ?
console.log(Math.random()); // ?
console.log(Math.random()); // ?
```

</details>
<details>
<summary>🐥  all together</summary>

```js
console.log('-- Math.random & Math.round --');

console.log('random from 0 -> 5');
// this is useful for creating random numbers in your programs
//  the example below shows how to create a random number between 0 and 5
let randomDecimal = Math.random();
let decimalTimesFive = randomDecimal * 5;
let randomNumber = Math.round(decimalTimesFive);
console.log(randomNumber); // ?

// or in one line
let randomNumberFromZeroToFive = Math.round(Math.random() * 5);
console.log(randomNumberFromZeroToFive); // ?

console.log('random from 1 -> 5');
let randomNumberFromOneToFive = Math.round(Math.random() * 4) + 1;
console.log(randomNumberFromOneToFive); // ?
```

</details>
