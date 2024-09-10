// Problem-03: Checking Digits Inside a Name

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  for (let i = 0; i <= name.length; i++) {
    if (name[i] >= 0 && name[i] <= 9) {
      return true;
    }
  }
  return false;
}
console.log(checkDigitsInName("Raj123"));
// console.log(checkDigitsInName("!@#"));
// console.log(checkDigitsInName(["Raj"]));
// console.log(checkDigitsInName("sumon11"));
console.log(checkDigitsInName(["Raj"]));
