// Define the assertArraysEqual function
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
      console.log("✅✅✅  Assertion Passed: ", arr1, "===", arr2, "😊😊😊");
    } else {
      console.error("❌❌❌  Assertion Failed: ", arr1, "===", arr2, " 😞😞😞");
    }
};

// Define the letterPositions function
const letterPositions = function(sentence) {
    const results = {};
  
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i].toLowerCase(); // Convert to lowercase 
      if (/[a-z]/.test(char)) { // Check if the character is an alphabet letter
        if (!results[char]) {
          results[char] = [];
        }
        results[char].push(i);
      }
    }
  
    return results;
};

// Use the assertArraysEqual function with letterPositions("hello").e and [1]
assertArraysEqual(letterPositions("hello").e, [1]);
