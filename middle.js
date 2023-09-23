//Define the assertArraysEqual function
const assertArraysEqual = function(arr1, arr2) {

   //Define the eqArrays function
    const eqArrays = function(array1, array2) {

        if (!Array.isArray(array1) || !Array.isArray(array2)) {
            return false;
          }
        
          if (array1.length !== array2.length) {
            return false;
          }
        
          for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) {
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
      
  const midpoint = function(arr) {
    // Check if the input is an array
    if (!Array.isArray(arr)) {
      return 'Input is not an array.';
    }
  
    const length = arr.length;
  
    // Handle the case of an empty array
    if (length === 0) {
      return null;
    }
  
    // Calculate the index of the middle element (or middle two elements for even length)
    const middleIndex = Math.floor(length / 2);
  
    // Return the middle element (or elements)
    if (length % 2 === 0) {
      // For even-length arrays, return an array containing the two middle elements
      return [arr[middleIndex - 1], arr[middleIndex]];
    } else {
      // For odd-length arrays, return the single middle element
      return arr[middleIndex];
    }
  };
  
  // Examples
  const array1 = [1, 2, 3, 4, 5];
  console.log(midpoint(array1)); // Should print 3
  
  const array2 = [1, 2, 3, 4];
  assertArraysEqual(midpoint(array2), [2,3]); // Should print [2, 3]
  
 