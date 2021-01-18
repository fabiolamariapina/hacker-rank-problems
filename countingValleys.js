// How to count valley
// a sequence of consecutive steps below sea level
// at least two consecutive steps down
//  leave valley at least two consecutive steps up

// Psuedocode
// 1. add conditional to make sure user is inputting the correct type
// steps: number, path: string
// 2. nested loop to check for two consecutive letters

function countingValleys(steps, path) {
  // Write your code here
  if (typeof steps != "number" || typeof path != "string") {
    console.log("Please enter the correct type");
  } else {
    let valley = 0;
    for (let i = 0; i < path.length; i++) {
    //   console.log(path.charAt(i)); // -> confirmed that loop is working
    }
  }
}
// Test Case #1
countingValleys(8, "UDDDUDUU"); // expected output: 1
