const util = require('util'); // Import the util module

// Define the eqArrays function to compare two arrays for equality
const eqArrays = (array1, array2) => {
  // Check if the arrays have different lengths, if so, they are not equal
  if (array1.length !== array2.length) {
    return false;
  }
  
  // Iterate through each element in the arrays
  for (let i = 0; i < array1.length; i++) {
    // If any elements are different, the arrays are not equal
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  
  // If the loop completes without finding differences, the arrays are equal
  return true;
};
  
// Define the eqObjects function to compare two objects for equality, including nested arrays
const eqObjects = (obj1, obj2) => {
  // Get the keys of the first object
  const keys1 = Object.keys(obj1);
  // Get the keys of the second object
  const keys2 = Object.keys(obj2);
  
  // Check if the objects have a different number of keys, if so, they are not equal
  if (keys1.length !== keys2.length) {
    return false;
  }
  
  // Iterate through each key in the first object
  for (const key of keys1) {
    // Check if the value associated with the key is an array in both objects
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      // If they are arrays, compare them using the eqArrays function
      if (!eqArrays(obj1[key], obj2[key])) {
        return false; // If the arrays are not equal, the objects are not equal
      }
    } else if (obj1[key] !== obj2[key]) {
      // If the values are not arrays and they are not equal, the objects are not equal
      return false;
    }
  }
  return true;
};


// Define assertObjectsEqual function to compare two objects for equality, including nested arrays
const assertObjectsEqual = (obj1, obj2) => {
  if (eqObjects(obj1, obj2)) {
    console.log(`✅✅✅ Assertion Passed: 🎉🎉🎉`);
    console.log(("Object 1:"), (util.inspect(obj1, { depth: null })), "===", ("Object 2:"),util.inspect(obj2, { depth: null })); // Display object 1 and 2 details
  } else {
    console.log(`❌❌❌ Assertion Failed: 🤷🤷🤷`);
    console.log(("Object 1:"), (util.inspect(obj1, { depth: null })), "!===", ("Object 2:"),util.inspect(obj2, { depth: null })); // Display object 1 and 2 details
  }
};

// Test cases
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);