// Problem-01 : Tax Calculator
function calculateTax(income, expenses) {
  // if (income < 0 && income < expenses && expenses < 0) {
  //   return "Invalid input,,,";
  // }
  if (income < 0) {
    return "Invalid Input";
  }
  if (income < expenses) {
    return "invalid input";
  }
  if (expenses < 0) {
    return "iNvalid input";
  }
  costDifferences = income - expenses;
  tax = costDifferences * 0.2;
  return tax;
}
console.log(calculateTax(10000, 3000));
console.log(calculateTax(34000, 1753));
console.log(calculateTax(5000, 1500));
console.log(calculateTax(7000, 7000));
console.log(calculateTax(-5000, 2000));
console.log(calculateTax(6000, -1500));
console.log(calculateTax(6000, 60000));
