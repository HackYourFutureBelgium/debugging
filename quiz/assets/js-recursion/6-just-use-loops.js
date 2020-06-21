// Data
var sales = [
  {
    name : "John Doe",
    amount : 123
  },
  {
    name : "Jane Doe",
    amount : 45
  },
  {
    name : "Jack Doe",
    amount : 67
  },
  {
    name : "Joy Doe",
    amount : 89
  }
];

// Loop
var total = 0;
for (let i of sales) { total += i.amount; }
console.log(total);