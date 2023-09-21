
//Define the eqArray function

const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }
  
  // Iterate through each array to do a comparison side by side
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      return false;
    }
  }
  
  // Print true if all elements are a match
  return true;
};
  
// Define the assertEqual function
const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected} 😊😊😊`);
  } else {
    console.error(`❌❌❌  Assertion Failed: ${actual} !== ${expected} 😞😞😞`);
  }
};
  
// Call assertEqual with the result of eqArrays
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  