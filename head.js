// Create a function head which returns only the first item in the array.
const head = function(arr) {
  if (arr && arr.length > 0) {
    return arr[0]; // Return only the first item - in position 0
  } else {
    return undefined; // Return undefined for empty array
  }
};

// Define function assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected} 😊😊😊`);
  } else {
    console.error(`❌❌❌  Assertion Failed: ${actual} !== ${expected} 😞😞😞`);
  }
};
    
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");
assertEqual(head(["John Doe"]), "John Doe");