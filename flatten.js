// Define the assertArrayEqual function

// Define the eqArray function
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
  
const flatten = function(arr) {
  if (!Array.isArray(arr)) {
    return "No array found";
  }
  
  // Use the flat method to flatten the array
  const output = arr.flat();
  console.log(output);
  return output;
};
  
// Examples
const arr = [1, 2, [3, 4], 5, [6]];
//const flattenedArray = flatten(arr);
  
//Actual output
console.log(eqArrays(flatten(arr), [1, 2, 3, 4, 5, 6])); //expected output [1, 2, 3, 4, 5, 6]

 
