

// //code to compute my age based on current year and a selection of several birth years
// const myAge = function(x,y) {
//   return x - y;
// };
// let thisYear =  2023;
// //let birthYear = 2000

// //create error message to be displayed
// const errorMsg = "Wrong year. Try again!!";

// //create a loop for range of years to be considered e.g., 1998-2005 and print results
// for (let birthYear = 1998; birthYear <= 2005; birthYear++) {
//   console.log(`The year selected is: ${birthYear}`);
//   console.assert(myAge(thisYear,birthYear) === 23,"%o", { birthYear, errorMsg });
// }

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.error(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
  
// Example usage:
assertEqual(1, 1); // This will pass and print "Assertion Passed: 1 === 1"
assertEqual("Lighthouse Labs", "Bootcamp"); // This will fail and print "Assertion Failed: 1 !== 2"
