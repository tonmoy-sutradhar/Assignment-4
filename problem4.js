// Problem 04 : Calculate Admission Final Score
const person1 = {
  name: "Tonmoy Sutradhar",
  testScore: 45,
  schoolGrade: 20,
  isFFamily: true,
};
const person2 = {
  name: "Rajib",
  testScore: 45,
  schoolGrade: 25,
  isFFamily: true,
};
const person3 = {
  name: "Rajib",
  testScore: 45,
  schoolGrade: 25,
  isFFamily: false,
};
const person4 = {
  name: "Rajib",
  testScore: 15,
  schoolGrade: 25,
  isFFamily: true,
};
let person5 = "hello";

function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  }

  let finalScore = obj.testScore + obj.schoolGrade;
  // return finalScore;
  if (obj.isFFamily) {
    finalScore = finalScore + finalScore * 0.2;
    // console.log(finalScore);
  }

  if (finalScore >= 80) {
    return true;
  } else {
    return false;
  }
}
console.log(calculateFinalScore(person1));
console.log(calculateFinalScore(person2));
console.log(calculateFinalScore(person3));
console.log(calculateFinalScore(person4));
console.log(calculateFinalScore(person5));
