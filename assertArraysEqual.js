// INITIAL CODE
//Define the eqArrays function

// const eqArrays = function(array1, array2) {

//   if (array1.length !== array2.length) {
//     return false;
//   }
  
//   // Iterate through each array to do a comparison side by side
//   for (let x = 0; x < array1.length; x++) {
//     if (array1[x] !== array2[x]) {
//       return false;
//     }
    
//   }
  
//   // Print true if all elements are a match
//   return true;
// };
  
// // Define the assertEqual function
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅  Assertion Passed: Array1 === Array2 😊😊😊`);
//   } else {
//     console.error(`❌❌❌  Assertion Failed: Array1 !== Array2. Try again! 😞😞😞`);
//   }
// };
    

// // Call assertEqual with the result of eqArrays
// assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true);

//Define the assertArraysEqual function
const assertArraysEqual = function(arr1, arr2) {
    
  //Define the eqArrays function
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
     
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅  Assertion Passed: array1 === Array2 😊😊😊`);
  } else {
    console.error(`❌❌❌  Assertion Failed: Array1 !== Array2. Try again! 😞😞😞`);
  }
};
   
   
// Call assertEqual with the result of eqArrays
assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]);
 