function totalSales (data, total) {
  // SAFETY CHECKS
  if (typeof data != "object") { throw "Invalid data"; }
  if (isNaN(data[0].amount)) { throw "Invalid amount"; }

  // TERMINATION
  if (data.length == 1) { return data[0].amount; }

  // RECURSION
  else {
    if (total == undefined) { total = 0; }
    return data[0].amount + totalSales(data.splice(1), total);
  }
}

// Total sales = 324
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
var total = totalSales(sales);
console.log(total);