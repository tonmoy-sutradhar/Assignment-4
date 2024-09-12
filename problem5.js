//Problem 05: Predict Average Waiting Time

function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes)) {
    return "Invalid Input";
  }
  if (typeof serialNumber !== "number") {
    return "Invalid Input";
  }

  let total = 0;
  for (let i = 0; i < waitingTimes.length; i++) {
    total += waitingTimes[i];
  }
  let avg = Math.round(total / waitingTimes.length);

  let beforeViva = serialNumber - 1;
  let afterViva = beforeViva - waitingTimes.length;
  let vivaTime = avg * afterViva;
  return vivaTime;
}
console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7, 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
